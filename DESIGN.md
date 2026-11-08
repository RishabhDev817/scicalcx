---
version: 1.0.0
name: SciCalcX-HyperPrecision
description: |
  A precision computational design system synthesizing the best of Wolfram (computational authority, mathematical hierarchy, warm orange and teal accents, formula readability), Raycast (tactile hardware keycaps, hairline 1px borders, spring-loaded active button feedback, keyboard shortcut tokens), and TradingView (high-density graphing canvas, coordinate grids, multi-series curves, clinical tabular matrices, and balanced light/dark palettes). Built for scientific, calculus, graphing, and compiler workflows.

colors:
  # Canvas & Base Surfaces (Raycast + TradingView Dark Canvas)
  canvas: "#07080a"
  surface-base: "#0d0e12"
  surface-elevated: "#13161c"
  surface-card: "#11141a"
  surface-hover: "#1a1e27"
  surface-active: "#090a0d"
  surface-math: "#0e1424"               # Wolfram computational navy-slate panel
  surface-math-border: "#1e2b48"

  # Borders & Dividers
  border: "#1e222a"                     # Raycast/TradingView subtle hairline
  border-hover: "#2d3340"
  border-strong: "#3e4658"
  border-highlight: "rgba(255, 255, 255, 0.08)"

  # Text & Ink
  ink: "#f4f5f8"                        # High contrast readable white
  ink-secondary: "#cbd0dc"
  ink-muted: "#8890a0"
  ink-dim: "#5c6474"
  ink-formula: "#b0ccec"                # Wolfram soft icy blue formula notation

  # Computational & Functional Accents
  compute-orange: "#ff6c00"             # Wolfram computational evaluation / primary action
  compute-orange-hover: "#ff851a"
  compute-orange-soft: "rgba(255, 108, 0, 0.12)"
  
  action-blue: "#5b9cf6"                # TradingView precision chart blue
  action-blue-hover: "#3d88f4"
  action-blue-soft: "rgba(91, 156, 246, 0.12)"
  
  math-teal: "#2a7eb9"                  # Wolfram scientific modifier (SHIFT, HYP, DEG/RAD)
  math-teal-soft: "rgba(42, 126, 185, 0.14)"
  
  status-green: "#59d499"               # Raycast / TradingView positive state & memory indicator
  status-green-soft: "rgba(89, 212, 153, 0.12)"
  
  alert-red: "#f23645"                  # TradingView / Raycast clear, delete, syntax error
  alert-red-soft: "rgba(242, 54, 69, 0.12)"

  # Multi-Series Graphing Curve Palette (TradingView + Wolfram)
  chart-curve-1: "#5b9cf6"              # Primary function curve f(x)
  chart-curve-2: "#ff6c00"              # Secondary function g(x)
  chart-curve-3: "#59d499"              # Tertiary function h(x)
  chart-curve-4: "#a78bfa"              # Derivative / Tangent line f'(x)
  chart-grid-minor: "#141720"
  chart-grid-major: "#242938"

  # Tactile Hardware Keycaps (Raycast)
  keycap-gradient-start: "#171920"
  keycap-gradient-end: "#0f1116"
  keycap-hover-start: "#20242e"
  keycap-hover-end: "#15181f"
  keycap-bevel: "inset 0 1px 0 0 rgba(255, 255, 255, 0.08)"
  keycap-shadow: "0 1px 2px 0 rgba(0, 0, 0, 0.45)"

typography:
  display-xl:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 40px
    fontWeight: 700
    lineHeight: 48px
    letterSpacing: -1.2px
  display-lg:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 28px
    fontWeight: 600
    lineHeight: 36px
    letterSpacing: -0.7px
  display-md:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 22px
    fontWeight: 600
    lineHeight: 28px
    letterSpacing: -0.4px
  body-md:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 15px
    fontWeight: 400
    lineHeight: 24px
  body-sm:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 13px
    fontWeight: 400
    lineHeight: 20px
  code-display:
    fontFamily: "JetBrains Mono", ui-monospace, monospace
    fontSize: 28px
    fontWeight: 600
    lineHeight: 34px
  code-cell:
    fontFamily: "JetBrains Mono", ui-monospace, monospace
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px

rules:
  keypad:
    - "Buttons must exhibit tactile hardware depth: top hairline bevel highlight, subtle downward gradient, active push transform."
    - "Evaluation and primary execution keys must use Wolfram compute orange (#ff6c00) for distinct visual affordance."
    - "Memory, angle modes, and modifier badges use dedicated indicator tokens (#59d499 green, #2a7eb9 teal)."
  math:
    - "Formulas and step-by-step calculus derivations must be housed in Wolfram slate-navy panels (#0e1424)."
    - "All KaTeX mathematical expressions must have high contrast against surfaces with soft cyan/ice-blue subscripts (#b0ccec)."
  graphing:
    - "Coordinate plane gridlines must be crisp hairlines (#141720 minor, #242938 major) against dark canvas."
    - "Multi-curve traces must adhere to the high-visibility TradingView sequence: Blue (#5b9cf6) -> Orange (#ff6c00) -> Green (#59d499) -> Purple (#a78bfa)."
  matrices:
    - "Matrix input grids must use high-density TradingView tabular borders with active cell focus ring."
---
