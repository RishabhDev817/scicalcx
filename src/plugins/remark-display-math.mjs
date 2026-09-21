/**
 * Remark plugin to ensure any mathematical expressions delimited with `$$...$$`
 * are rendered as display/block math (creating `math` nodes), rather than inline math.
 * 
 * Micromark / remark-math treats `$$...$$` on a single line as inlineMath unless it has
 * leading and trailing newlines like code fences. This plugin inspects the source text
 * for `$$` delimiters and elevates them to block display math equations.
 */
export default function remarkDisplayMath() {
  return (tree, file) => {
    const text = String(file);
    function processChildren(parent) {
      if (!parent || !Array.isArray(parent.children)) return;
      const newChildren = [];
      for (const child of parent.children) {
        if (child.type === 'paragraph' && Array.isArray(child.children)) {
          let hasDoubleDollar = false;
          for (const c of child.children) {
            if (c.type === 'inlineMath' && c.position) {
              const raw = text.slice(c.position.start.offset, c.position.end.offset);
              if (raw.startsWith('$$') && raw.endsWith('$$')) {
                hasDoubleDollar = true;
                break;
              }
            }
          }

          if (hasDoubleDollar) {
            let currentParaChildren = [];
            for (const c of child.children) {
              if (c.type === 'inlineMath' && c.position) {
                const raw = text.slice(c.position.start.offset, c.position.end.offset);
                if (raw.startsWith('$$') && raw.endsWith('$$')) {
                  if (currentParaChildren.length > 0) {
                    const isWhitespace = currentParaChildren.every(
                      (n) => n.type === 'text' && !n.value.trim()
                    );
                    if (!isWhitespace) {
                      newChildren.push({ type: 'paragraph', children: currentParaChildren });
                    }
                    currentParaChildren = [];
                  }
                  newChildren.push({
                    type: 'math',
                    value: c.value,
                    data: {
                      hName: 'pre',
                      hChildren: [
                        {
                          type: 'element',
                          tagName: 'code',
                          properties: { className: ['language-math', 'math-display'] },
                          children: [{ type: 'text', value: c.value }],
                        },
                      ],
                    },
                  });
                  continue;
                }
              }
              currentParaChildren.push(c);
            }
            if (currentParaChildren.length > 0) {
              const isWhitespace = currentParaChildren.every(
                (n) => n.type === 'text' && !n.value.trim()
              );
              if (!isWhitespace) {
                newChildren.push({ type: 'paragraph', children: currentParaChildren });
              }
            }
          } else {
            newChildren.push(child);
          }
        } else {
          processChildren(child);
          newChildren.push(child);
        }
      }
      parent.children = newChildren;
    }
    processChildren(tree);
  };
}
