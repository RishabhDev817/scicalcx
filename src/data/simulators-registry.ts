export interface InputConfig {
  id: string;
  name: string;
  min: number;
  max: number;
  step: number;
  default: number;
  unit: string;
  description: string;
  options?: { value: number; label: string }[]; // For select inputs
}

export interface OutputConfig {
  id: string;
  name: string;
  unit: string;
  calculate: (inputs: Record<string, number>) => number | string;
}

export interface PracticeTask {
  question: string;
  targetInputValues: Record<string, number>;
  targetOutputId: string;
  targetValue: number;
  tolerance: number; // e.g. 0.05
  hint: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface SimulatorConfig {
  id: string;
  name: string;
  category: string;
  description: string;
  emoji: string;
  formulas: { latex: string; explanation: string }[];
  inputs: InputConfig[];
  outputs: OutputConfig[];
  exploreMarkdown: string;
  practiceTasks: PracticeTask[];
  quizQuestions: QuizQuestion[];
  hasVisual: boolean;
  draw?: (canvas: HTMLCanvasElement, inputs: Record<string, number>, theme: 'light' | 'dark') => void;
  drawSVG?: (svgEl: SVGSVGElement, inputs: Record<string, number>, theme: 'light' | 'dark') => void;
}

export const CATEGORIES: Record<string, { name: string; emoji: string; description: string }> = {
  'measuring': { name: 'Measuring Instruments', emoji: '📐', description: 'Metrology and precision measurement laboratory tools' },
  'mechanics': { name: 'Mechanics & Motion', emoji: '⚙️', description: 'Engineering mechanics, forces, and dynamic systems' },
  'mechanisms': { name: 'Mechanisms & Machines', emoji: '⚙️', description: 'Kinematics of machines and link mechanisms' },
  'strength': { name: 'Strength of Materials', emoji: '🏗️', description: 'Stress, strain, bending, truss systems and machine design' },
  'thermal-fluid': { name: 'Thermal & Fluid Engineering', emoji: '🔥', description: 'Thermodynamic cycles, heat transfer, and pipe flows' },
  'electrical': { name: 'Electrical & Electronics', emoji: '⚡', description: 'DC/AC circuits, electronics, and logic systems' },
  'workshop': { name: 'Workshop & Manufacturing', emoji: '🔧', description: 'Manufacturing tolerances, ISO fits, and machining' },
  'science': { name: 'Basic Science', emoji: '🔬', description: 'Chemical reactions, atom structures and molecular bonds' },
  'maths': { name: 'Mathematics', emoji: '𝑓', description: 'Advanced calculus, vectors, and reference utilities' }
};

export const SIMULATORS: SimulatorConfig[] = [
  // ==================== 1. MEASURING INSTRUMENTS ====================
  {
    id: 'vernier-caliper',
    name: 'Vernier Caliper',
    category: 'measuring',
    emoji: '📏',
    description: 'Interactive caliper with adjustable scale divisions, zero error, and least-count selectors.',
    formulas: [
      { latex: 'LC = 1\\text{ MSD} - 1\\text{ VSD} = \\frac{1\\text{ MSD}}{N}', explanation: 'Least count is the ratio of one Main Scale Division to the number of Vernier Scale Divisions.' },
      { latex: '\\text{Reading} = \\text{MSD} + (\\text{VSD} \\times LC) - \\text{Zero Error}', explanation: 'Total measured reading account for main scale, vernier division alignment, and calibration offset.' }
    ],
    inputs: [
      { id: 'position', name: 'Jaw Position', min: 0, max: 100, step: 0.02, default: 23.46, unit: 'mm', description: 'Move the sliding jaw.' },
      { id: 'lc', name: 'Least Count', min: 0, max: 2, step: 1, default: 1, unit: '', options: [{ value: 0, label: '0.1 mm' }, { value: 1, label: '0.05 mm' }, { value: 2, label: '0.02 mm' }], description: 'Select caliper precision.' },
      { id: 'unit', name: 'System of Units', min: 0, max: 1, step: 1, default: 0, unit: '', options: [{ value: 0, label: 'SI (metric)' }, { value: 1, label: 'Imperial (inches)' }], description: 'Toggle between mm and inch scales.' },
      { id: 'zero_error', name: 'Zero Error (ZE)', min: -5, max: 5, step: 1, default: 0, unit: 'div', description: 'Zero error in divisions.' }
    ],
    outputs: [
      { id: 'least_count', name: 'Least Count (LC)', unit: 'mm', calculate: (inputs) => {
          const lcs = [0.1, 0.05, 0.02];
          return inputs.unit === 1 ? 0.001 : (lcs[inputs.lc] || 0.05);
        }
      },
      { id: 'total_reading', name: 'Measured Reading', unit: 'mm', calculate: (inputs) => {
          const lcs = [0.1, 0.05, 0.02];
          const isImp = inputs.unit === 1;
          const lc = isImp ? 0.001 : (lcs[inputs.lc] || 0.05);
          const pos = isImp ? inputs.position * (1 / 25.4) : inputs.position;
          const ze = inputs.zero_error * lc;
          
          const observed = pos + ze;
          const msd = isImp ? 0.025 : 1.0;
          const msr = Math.max(0, Math.floor(observed / msd + 1e-9) * msd);
          const vsr = Math.round((observed - msr) / lc);
          const val = msr + vsr * lc;
          return isImp ? Number(val.toFixed(3)) : Number(val.toFixed(2));
        }
      }
    ],
    exploreMarkdown: `### How a Vernier Caliper Works
A Vernier Caliper uses a **main scale** and a sliding **vernier scale** to measure dimensions with high precision (down to $0.02\\text{ mm}$ or $0.001\\text{ inch}$).

1. **Main Scale Division (MSD)**: Standard millimeter marks ($1\\text{ mm}$) or $0.025\\text{ inch}$ marks in Imperial.
2. **Vernier Scale Division (VSD)**: Sub-divided marks that correspond to fractional increments.
3. **Least Count (LC)**:
   $$\\text{Least Count} = \\frac{1\\text{ MSD}}{\\text{No. of Vernier Divisions}}$$
4. **Reading**: Find the last main scale mark before the vernier zero ($MSD$). Find the vernier mark that lines up perfectly with *any* mark on the main scale ($VSD$).
   $$\\text{Total Reading} = MSD + (VSD \\times LC) - \\text{Zero Error}$$`,
    practiceTasks: [
      { question: 'Configure the caliper for 0.05 mm Least Count. Adjust the inputs to measure exactly 24.30 mm with a Zero Error of 0.0 mm.', targetInputValues: { lc: 1, position: 24.3, zero_error: 0, unit: 0 }, targetOutputId: 'total_reading', targetValue: 24.3, tolerance: 0.001, hint: 'Slide the jaw until it reads exactly 24.30 mm.' }
    ],
    quizQuestions: [
      { question: 'A vernier caliper has 50 divisions on the vernier scale coinciding with 49 divisions on the main scale (1 MSD = 1 mm). What is its least count?', options: ['0.1 mm', '0.05 mm', '0.02 mm', '0.01 mm'], correctIndex: 2, explanation: 'Least count = 1 MSD / 50 = 1 mm / 50 = 0.02 mm.' },
      { question: 'If the zero mark of the vernier scale lies to the right of the main scale zero, the zero error is:', options: ['Positive', 'Negative', 'Zero', 'Exponential'], correctIndex: 0, explanation: 'If the vernier zero is to the right of main scale zero when jaws are closed, it reads greater than zero, indicating a Positive Zero Error.' }
    ],
    hasVisual: true,
    drag: (canvas, inputs, x, y, isStart, isEnd) => {
      const zoom = 14.0;
      const xStart = 100;
      const shiftX = inputs.position * zoom;
      const clickX = x;
      const jawX = xStart + 160 + shiftX;
      
      if (isStart) {
        if (clickX >= jawX - 120 && clickX <= jawX + 500) {
          canvas.dataset.dragging = 'true';
          canvas.dataset.dragOffset = String(clickX - jawX);
          return true;
        }
        return false;
      }
      if (canvas.dataset.dragging === 'true') {
        const offset = parseFloat(canvas.dataset.dragOffset || '0');
        const targetX = clickX - offset;
        let targetPos = (targetX - xStart - 160) / zoom;
        
        const lcs = [0.1, 0.05, 0.02];
        const isImp = inputs.unit === 1;
        const lc = isImp ? 0.0254 : (lcs[inputs.lc] || 0.05);
        
        targetPos = Math.round(targetPos / lc) * lc;
        inputs.position = Math.max(0, Math.min(100, targetPos));
        
        if (isEnd) {
          canvas.dataset.dragging = 'false';
        }
        return true;
      }
      return false;
    },
    draw: (canvas, inputs, theme) => {
      const ctx = canvas.getContext('2d')!;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const isDark = theme === 'dark';
      const strokeColor = isDark ? '#f8fafc' : '#0f172a';
      const secondaryColor = '#64748b';
      const isImp = inputs.unit === 1;

      const lcs = [0.1, 0.05, 0.02];
      const lc = isImp ? 0.001 : (lcs[inputs.lc] || 0.05);
      const vsdDivs = isImp ? 25 : Math.round(1 / lc);
      
      const zoom = 14.0;
      const xStart = 100;
      const yMain = h / 2 - 80; // center at Y=277px

      // 1. Draw depth probe rod extending out right
      ctx.fillStyle = '#94a3b8';
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 1.2;
      const rodL = Math.min(600, inputs.position * zoom);
      ctx.fillRect(w - 100 - 600 + rodL, yMain + 40, 600 - rodL, 12);
      ctx.strokeRect(w - 100 - 600 + rodL, yMain + 40, 600 - rodL, 12);

      // 2. Draw Main Beam Base (gradient brushed steel)
      const beamGrad = ctx.createLinearGradient(0, yMain, 0, yMain + 100);
      beamGrad.addColorStop(0, '#f8fafc');
      beamGrad.addColorStop(0.15, '#e2e8f0');
      beamGrad.addColorStop(0.4, '#94a3b8');
      beamGrad.addColorStop(0.65, '#f8fafc');
      beamGrad.addColorStop(0.9, '#cbd5e1');
      beamGrad.addColorStop(1, '#475569');
      
      ctx.fillStyle = beamGrad;
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 2.5;
      ctx.fillRect(xStart, yMain, w - 200, 100);
      ctx.strokeRect(xStart, yMain, w - 200, 100);

      // 3. Draw Fixed Lower Jaw (beveled polygon)
      const jawGrad = ctx.createLinearGradient(xStart, 0, xStart + 80, 0);
      jawGrad.addColorStop(0, '#475569');
      jawGrad.addColorStop(0.4, '#f8fafc');
      jawGrad.addColorStop(0.8, '#cbd5e1');
      jawGrad.addColorStop(1, '#334155');
      
      ctx.fillStyle = jawGrad;
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(xStart + 80, yMain + 100);
      ctx.lineTo(xStart + 80, yMain + 360);
      ctx.lineTo(xStart + 5, yMain + 360);
      ctx.lineTo(xStart + 12, yMain + 290);
      ctx.lineTo(xStart + 35, yMain + 100);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Highlight beveled edge
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(xStart + 35, yMain + 100);
      ctx.lineTo(xStart + 12, yMain + 290);
      ctx.lineTo(xStart + 5, yMain + 360);
      ctx.stroke();

      // 4. Draw Fixed Upper Internal Jaw
      ctx.fillStyle = jawGrad;
      ctx.strokeStyle = '#334155';
      ctx.beginPath();
      ctx.moveTo(xStart + 80, yMain);
      ctx.lineTo(xStart + 80, yMain - 100);
      ctx.lineTo(xStart + 45, yMain - 100);
      ctx.lineTo(xStart + 45, yMain);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Highlight upper fixed jaw bevel
      ctx.strokeStyle = '#ffffff';
      ctx.beginPath();
      ctx.moveTo(xStart + 45, yMain);
      ctx.lineTo(xStart + 45, yMain - 100);
      ctx.stroke();

      // 5. Draw Main scale markings (engraved look: dark tick + thin white tick right)
      ctx.fillStyle = strokeColor;
      ctx.font = 'bold 12px monospace';
      ctx.lineWidth = 1.2;

      if (isImp) {
        const msdMm = 0.635;
        const msdPx = msdMm * zoom;
        for (let i = 0; i <= 160; i++) {
          const x = xStart + 160 + (i * msdPx);
          if (x > w - 100) break;
          
          let tickH = 20;
          if (i % 40 === 0) {
            tickH = 45;
            ctx.fillStyle = strokeColor;
            ctx.fillText(`${i/40}"`, x - 5, yMain + 80);
          } else if (i % 4 === 0) {
            tickH = 30;
            ctx.fillStyle = strokeColor;
            ctx.fillText(String((i%40)/4), x - 4, yMain + 75);
          }
          
          ctx.strokeStyle = '#000000';
          ctx.beginPath();
          ctx.moveTo(x, yMain + 100);
          ctx.lineTo(x, yMain + 100 - tickH);
          ctx.stroke();
          
          ctx.strokeStyle = '#ffffff';
          ctx.beginPath();
          ctx.moveTo(x + 1.2, yMain + 100);
          ctx.lineTo(x + 1.2, yMain + 100 - tickH);
          ctx.stroke();
        }
      } else {
        for (let i = 0; i <= 100; i++) {
          const x = xStart + 160 + (i * zoom);
          if (x > w - 100) break;
          
          let tickH = 20;
          if (i % 10 === 0) {
            tickH = 45;
            ctx.fillStyle = strokeColor;
            ctx.fillText(String(i), x - 6, yMain + 80);
          } else if (i % 5 === 0) {
            tickH = 30;
          }
          
          ctx.strokeStyle = '#000000';
          ctx.beginPath();
          ctx.moveTo(x, yMain + 100);
          ctx.lineTo(x, yMain + 100 - tickH);
          ctx.stroke();
          
          ctx.strokeStyle = '#ffffff';
          ctx.beginPath();
          ctx.moveTo(x + 1.2, yMain + 100);
          ctx.lineTo(x + 1.2, yMain + 100 - tickH);
          ctx.stroke();
        }
      }

      // Draw clamped item block inside the jaw
      if (inputs.position > 0) {
        ctx.fillStyle = 'rgba(0, 162, 255, 0.12)';
        ctx.strokeStyle = '#00a2ff';
        ctx.lineWidth = 2.0;
        ctx.fillRect(xStart + 80, yMain + 100, inputs.position * zoom, 260);
        ctx.strokeRect(xStart + 80, yMain + 100, inputs.position * zoom, 260);
        ctx.fillStyle = strokeColor;
        ctx.font = 'bold 15px sans-serif';
        const displayLabel = isImp ? `${(inputs.position * (1 / 25.4)).toFixed(3)}"` : `${inputs.position.toFixed(2)} mm`;
        ctx.fillText(displayLabel, xStart + 90, yMain + 200);
      }

      // Shift position
      const shiftX = inputs.position * zoom;

      // 6. Draw Moving Slider Frame (brushed steel)
      const slideGrad = ctx.createLinearGradient(0, yMain, 0, yMain + 100);
      slideGrad.addColorStop(0, '#f8fafc');
      slideGrad.addColorStop(0.3, '#cbd5e1');
      slideGrad.addColorStop(0.7, '#94a3b8');
      slideGrad.addColorStop(1, '#475569');

      ctx.fillStyle = slideGrad;
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 2.5;
      
      const slideW = vsdDivs * zoom * 0.9 + 60;
      ctx.fillRect(xStart + 160 + shiftX - 50, yMain + 100, slideW, 90);
      ctx.strokeRect(xStart + 160 + shiftX - 50, yMain + 100, slideW, 90);

      // Draw knurled thumbscrew knob at the top of slide block
      ctx.fillStyle = '#64748b';
      ctx.fillRect(xStart + 160 + shiftX + 60, yMain - 40, 40, 40);
      ctx.strokeRect(xStart + 160 + shiftX + 60, yMain - 40, 40, 40);
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 1.5;
      for (let tx = xStart + 160 + shiftX + 66; tx < xStart + 160 + shiftX + 94; tx += 8) {
        ctx.beginPath();
        ctx.moveTo(tx, yMain - 40);
        ctx.lineTo(tx, yMain);
        ctx.stroke();
      }

      // Draw fine thumb wheel/roller below the slider body
      ctx.fillStyle = '#475569';
      ctx.beginPath();
      ctx.arc(xStart + 160 + shiftX + 40, yMain + 210, 26, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      // Draw teeth on roller
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 1.2;
      for (let angle = 0; angle < Math.PI * 2; angle += 0.3) {
        ctx.beginPath();
        ctx.moveTo(xStart + 160 + shiftX + 40 + 20 * Math.cos(angle), yMain + 210 + 20 * Math.sin(angle));
        ctx.lineTo(xStart + 160 + shiftX + 40 + 26 * Math.cos(angle), yMain + 210 + 26 * Math.sin(angle));
        ctx.stroke();
      }

      // Draw dynamic LC yellow badge on sliding scale block
      ctx.fillStyle = '#eab308';
      ctx.fillRect(xStart + 160 + shiftX + 40, yMain + 15, 110, 28);
      ctx.fillStyle = '#000000';
      ctx.font = 'bold 15px sans-serif';
      const lcVal = isImp ? 0.001 : lc;
      ctx.fillText(`LC = ${lcVal} ${isImp ? 'in' : 'mm'}`, xStart + 160 + shiftX + 46, yMain + 34);

      // Draw Movable Lower Jaw (beveled shape matching left jaw)
      ctx.fillStyle = slideGrad;
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(xStart + 160 + shiftX - 50, yMain + 100);
      ctx.lineTo(xStart + 160 + shiftX - 50, yMain + 360);
      ctx.lineTo(xStart + 160 + shiftX - 125, yMain + 360);
      ctx.lineTo(xStart + 160 + shiftX - 118, yMain + 290);
      ctx.lineTo(xStart + 160 + shiftX - 95, yMain + 100);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Highlight moving jaw bevel
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(xStart + 160 + shiftX - 95, yMain + 100);
      ctx.lineTo(xStart + 160 + shiftX - 118, yMain + 290);
      ctx.lineTo(xStart + 160 + shiftX - 125, yMain + 360);
      ctx.stroke();

      // Draw Moving Upper Jaw
      ctx.fillStyle = slideGrad;
      ctx.strokeStyle = '#334155';
      ctx.beginPath();
      ctx.moveTo(xStart + 160 + shiftX - 50, yMain);
      ctx.lineTo(xStart + 160 + shiftX - 50, yMain - 100);
      ctx.lineTo(xStart + 160 + shiftX - 20, yMain - 100);
      ctx.lineTo(xStart + 160 + shiftX - 20, yMain);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Highlight moving upper jaw bevel
      ctx.strokeStyle = '#ffffff';
      ctx.beginPath();
      ctx.moveTo(xStart + 160 + shiftX - 20, yMain);
      ctx.lineTo(xStart + 160 + shiftX - 20, yMain - 100);
      ctx.stroke();

      // 7. Render sliding Vernier Scale ticks with alignment
      const pos = isImp ? inputs.position * (1 / 25.4) : inputs.position;
      const ze = inputs.zero_error * lc;
      const observed = pos + ze;
      const msdVal = isImp ? 0.025 : 1.0;
      const msr = Math.max(0, Math.floor(observed / msdVal + 1e-9) * msdVal);
      const vsr = Math.round((observed - msr) / lc);
      const alignedIdx = ((vsr % vsdDivs) + vsdDivs) % vsdDivs;

      ctx.fillStyle = strokeColor;
      ctx.font = 'bold 12px monospace';
      const vSpan = isImp ? (0.025 * 24) / 25 * 25.4 : (vsdDivs * 1 - 1) / vsdDivs;
      const vSpanPx = vSpan * zoom;

      for (let i = 0; i <= vsdDivs; i++) {
        const x = xStart + 160 + shiftX + (i * vSpanPx);
        if (x > w - 10) break;

        const isAligned = i === alignedIdx;
        ctx.beginPath();
        let tickH = 15;
        if (i % 5 === 0 || i === vsdDivs) {
          tickH = 30;
          ctx.fillText(String(i), x - 5, yMain + 165);
        }
        
        if (isAligned) {
          ctx.strokeStyle = '#ffd700'; // Gold glow coincidence line
          ctx.lineWidth = 3.5;
        } else {
          ctx.strokeStyle = '#000000';
          ctx.lineWidth = 1.2;
        }

        ctx.moveTo(x, yMain + 100);
        ctx.lineTo(x, yMain + 100 + tickH);
        ctx.stroke();

        // 3D tick highlight reflection
        if (!isAligned) {
          ctx.strokeStyle = '#ffffff';
          ctx.beginPath();
          ctx.moveTo(x + 1.2, yMain + 100);
          ctx.lineTo(x + 1.2, yMain + 100 + tickH);
          ctx.stroke();
        }
      }
    }
  },
  {
    id: 'screw-gauge',
    name: 'Screw Gauge (Micrometer)',
    category: 'measuring',
    emoji: '🔩',
    description: 'Precision micrometer simulator. Rotate thimble to measure thickness, adjust pitch, circular divisions, and zero error.',
    formulas: [
      { latex: '\\text{Least Count (LC)} = \\frac{\\text{Pitch}}{\\text{No. of Circular Divisions}}', explanation: 'Ratio of linear pitch movements to total radial increments.' },
      { latex: '\\text{Reading} = \\text{PSR} + (\\text{CSR} \\times LC) - \\text{Zero Error}', explanation: 'Calculated using Pitch Scale Reading, Circular Scale alignment, and index offset.' }
    ],
    inputs: [
      { id: 'position', name: 'Spindle Position', min: 0, max: 25, step: 0.01, default: 6.82, unit: 'mm', description: 'Rotate/move the micrometer thimble.' },
      { id: 'pitch', name: 'Sleeve Screw Pitch', min: 0, max: 1, step: 1, default: 0, unit: '', options: [{ value: 0, label: '0.5 mm' }, { value: 1, label: '1.0 mm' }], description: 'Distance advanced by one full turn of thimble.' },
      { id: 'divs', name: 'Circular Scale Divisions', min: 0, max: 1, step: 1, default: 0, unit: '', options: [{ value: 0, label: '50 divs' }, { value: 1, label: '100 divs' }], description: 'Total increments along the thimble circumference.' },
      { id: 'zero_error', name: 'Zero Error (ZE)', min: -5, max: 5, step: 1, default: 0, unit: 'div', description: 'Calibration offset in divisions.' }
    ],
    outputs: [
      { id: 'least_count', name: 'Least Count (LC)', unit: 'mm', calculate: (inputs) => {
          const pitch = inputs.pitch === 1 ? 1.0 : 0.5;
          const divs = inputs.divs === 1 ? 100 : 50;
          return Number((pitch / divs).toFixed(4));
        }
      },
      { id: 'total_reading', name: 'Measured Thickness', unit: 'mm', calculate: (inputs) => {
          const pitch = inputs.pitch === 1 ? 1.0 : 0.5;
          const divs = inputs.divs === 1 ? 100 : 50;
          const lc = pitch / divs;
          
          const ze = inputs.zero_error * lc;
          const observed = inputs.position + ze;
          
          const psr = Math.max(0, Math.floor(observed / pitch) * pitch);
          const csr = Math.round((observed - psr) / lc);
          const val = psr + csr * lc;
          return Number(val.toFixed(4));
        }
      }
    ],
    exploreMarkdown: `### Screw Gauge Mechanics
A micrometer screw gauge works on the principal of a screw thread.

- **Pitch**: The linear distance advanced by the thimble in one full rotation. Typically $0.5\\text{ mm}$ or $1\\text{ mm}$.
- **Least Count (LC)**:
  $$LC = \\frac{\\text{Pitch}}{\\text{Total Circular Divisions}}$$
- **Positive Zero Error**: When the zero mark of circular scale falls below the reference line when spindle and anvil touch.
- **Negative Zero Error**: When the zero mark is above the reference line.`,
    practiceTasks: [
      { question: 'Rotate the thimble to measure exactly 6.82 mm with a 0.5 mm pitch and 50 circular divisions. (ZE = 0.0)', targetInputValues: { position: 6.82, pitch: 0, divs: 0, zero_error: 0 }, targetOutputId: 'total_reading', targetValue: 6.82, tolerance: 0.001, hint: 'Rotate/drag the spindle thimble to align with MSR = 6.5 mm and CSR = 32 divisions.' }
    ],
    quizQuestions: [
      { question: 'A screw gauge has a pitch of 0.5 mm and 50 divisions on its circular scale. What is its least count?', options: ['0.01 mm', '0.05 mm', '0.02 mm', '0.005 mm'], correctIndex: 0, explanation: 'Least count = Pitch / Circular Divisions = 0.5 mm / 50 = 0.01 mm.' }
    ],
    hasVisual: true,
    drag: (canvas, inputs, x, y, isStart, isEnd) => {
      const zoom = 12.5;
      const xStart = 70;
      const thimbleX = xStart + 210 + inputs.position * zoom;
      
      if (isStart) {
        if (x >= thimbleX - 15 && x <= thimbleX + 220) {
          canvas.dataset.dragging = 'true';
          canvas.dataset.dragOffset = String(x - thimbleX);
          return true;
        }
        return false;
      }
      if (canvas.dataset.dragging === 'true') {
        const offset = parseFloat(canvas.dataset.dragOffset || '0');
        let targetPos = (x - offset - xStart - 210) / zoom;
        
        const pitch = inputs.pitch === 1 ? 1.0 : 0.5;
        const divs = inputs.divs === 1 ? 100 : 50;
        const lc = pitch / divs;
        
        targetPos = Math.round(targetPos / lc) * lc;
        inputs.position = Math.max(0, Math.min(25, targetPos));
        
        if (isEnd) {
          canvas.dataset.dragging = 'false';
        }
        return true;
      }
      return false;
    },
    draw: (canvas, inputs, theme) => {
      const ctx = canvas.getContext('2d')!;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const isDark = theme === 'dark';
      const strokeColor = isDark ? '#f8fafc' : '#0f172a';
      const secondaryColor = '#64748b';

      const pitch = inputs.pitch === 1 ? 1.0 : 0.5;
      const divs = inputs.divs === 1 ? 100 : 50;
      const lc = pitch / divs;

      const zoom = 28.0;
      const xStart = 200;
      const yCenter = h / 2; // Y=357px

      // 1. Draw Cast-Metal U-Frame (Radial Hammer-tone Blue/Slate)
      const frameGrad = ctx.createRadialGradient(xStart + 120, yCenter, 180, xStart + 120, yCenter, 290);
      frameGrad.addColorStop(0, '#1e293b'); // Deep slate
      frameGrad.addColorStop(0.6, '#0f172a'); // Near black body
      frameGrad.addColorStop(1, '#475569'); // Silver outer rim bevel
      
      ctx.fillStyle = frameGrad;
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 10;
      ctx.beginPath();
      ctx.arc(xStart + 120, yCenter, 200, -Math.PI / 2, Math.PI / 2, true);
      ctx.lineTo(xStart + 220, yCenter + 200);
      ctx.arc(xStart + 120, yCenter, 280, Math.PI / 2, -Math.PI / 2, false);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Highlight bevel overlay for 3D rim look
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(xStart + 120, yCenter, 280, -Math.PI / 2, Math.PI / 2);
      ctx.stroke();

      // 2. Draw Anvil (steel cylinder)
      const steelGrad = ctx.createLinearGradient(0, yCenter - 40, 0, yCenter + 40);
      steelGrad.addColorStop(0, '#f8fafc');
      steelGrad.addColorStop(0.2, '#cbd5e1');
      steelGrad.addColorStop(0.7, '#94a3b8');
      steelGrad.addColorStop(1, '#475569');

      ctx.fillStyle = steelGrad;
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 4.0;
      ctx.fillRect(xStart + 220, yCenter - 40, 50, 80);
      ctx.strokeRect(xStart + 220, yCenter - 40, 50, 80);

      // Anvil face bevel line
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(xStart + 270, yCenter - 40);
      ctx.lineTo(xStart + 270, yCenter + 40);
      ctx.stroke();

      // 3. Draw Sleeve (index cylinder PSR)
      const sleeveGrad = ctx.createLinearGradient(0, yCenter - 60, 0, yCenter + 60);
      sleeveGrad.addColorStop(0, '#f8fafc');
      sleeveGrad.addColorStop(0.15, '#e2e8f0');
      sleeveGrad.addColorStop(0.5, '#cbd5e1');
      sleeveGrad.addColorStop(0.85, '#94a3b8');
      sleeveGrad.addColorStop(1, '#64748b');

      ctx.fillStyle = sleeveGrad;
      ctx.strokeStyle = '#475569';
      ctx.fillRect(xStart + 450, yCenter - 60, 350, 120);
      ctx.strokeRect(xStart + 450, yCenter - 60, 350, 120);

      // Sleeve center datum line
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.moveTo(xStart + 450, yCenter);
      ctx.lineTo(xStart + 800, yCenter);
      ctx.stroke();

      // Sleeve scale marks (engraved index ticks)
      ctx.font = 'bold 15px monospace';
      ctx.fillStyle = strokeColor;
      for (let i = 0; i <= 25; i++) {
        const xVal = xStart + 450 + i * zoom;
        if (xVal > xStart + 790) break;

        let tickH = 20;
        if (i % 5 === 0) {
          tickH = 30;
          ctx.fillStyle = '#000000';
          ctx.fillText(String(i), xVal - 6, yCenter - 32);
        }

        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(xVal, yCenter);
        ctx.lineTo(xVal, yCenter - tickH);
        ctx.stroke();

        ctx.strokeStyle = '#ffffff';
        ctx.beginPath();
        ctx.moveTo(xVal + 1.5, yCenter);
        ctx.lineTo(xVal + 1.5, yCenter - tickH);
        ctx.stroke();

        // Half-mm lower subdivisions
        if (pitch === 0.5) {
          const xValHalf = xVal + 0.5 * zoom;
          if (xValHalf < xStart + 790) {
            ctx.strokeStyle = '#000000';
            ctx.beginPath();
            ctx.moveTo(xValHalf, yCenter);
            ctx.lineTo(xValHalf, yCenter + 20);
            ctx.stroke();

            ctx.strokeStyle = '#ffffff';
            ctx.beginPath();
            ctx.moveTo(xValHalf + 1.5, yCenter);
            ctx.lineTo(xValHalf + 1.5, yCenter + 20);
            ctx.stroke();
          }
        }
      }

      // 4. Draw Spindle (shaft extending from sleeve to anvil)
      ctx.fillStyle = steelGrad;
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 4.0;
      const spindleW = 200 + inputs.position * zoom;
      ctx.fillRect(xStart + 450 - spindleW, yCenter - 40, spindleW, 80);
      ctx.strokeRect(xStart + 450 - spindleW, yCenter - 40, spindleW, 80);

      // Highlight spindle reflection line
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(xStart + 450 - spindleW, yCenter - 40);
      ctx.lineTo(xStart + 450, yCenter - 40);
      ctx.stroke();

      // Draw workpiece block clamped inside anvil
      if (inputs.position > 0) {
        ctx.fillStyle = 'rgba(0, 162, 255, 0.12)';
        ctx.strokeStyle = '#00a2ff';
        ctx.lineWidth = 2.0;
        ctx.fillRect(xStart + 270, yCenter - 40, inputs.position * zoom, 80);
        ctx.strokeRect(xStart + 270, yCenter - 40, inputs.position * zoom, 80);
      }

      // 5. Draw Thimble (brushed cylinder with beveled edge)
      const thimbleX = xStart + 450 + inputs.position * zoom;
      
      const thimbleGrad = ctx.createLinearGradient(thimbleX, 0, thimbleX + 220, 0);
      thimbleGrad.addColorStop(0, '#f8fafc'); // beveled edge highlights
      thimbleGrad.addColorStop(0.15, '#cbd5e1');
      thimbleGrad.addColorStop(0.8, '#94a3b8');
      thimbleGrad.addColorStop(1, '#475569');

      ctx.fillStyle = thimbleGrad;
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 4.0;
      ctx.fillRect(thimbleX, yCenter - 76, 220, 152);
      ctx.strokeRect(thimbleX, yCenter - 76, 220, 152);

      // Knurling grid lines on the right of thimble
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 1.6;
      for (let tx = thimbleX + 160; tx < thimbleX + 210; tx += 10) {
        ctx.beginPath();
        ctx.moveTo(tx, yCenter - 76);
        ctx.lineTo(tx, yCenter + 76);
        ctx.stroke();
      }

      // Calculate coincidence circular divisions
      const ze = inputs.zero_error * lc;
      const observed = inputs.position + ze;
      const psr = Math.max(0, Math.floor(observed / pitch) * pitch);
      const csr = Math.round((observed - psr) / lc);
      const alignedIdx = ((csr % divs) + divs) % divs;

      // Draw Thimble ticks and labels (CSR index lines)
      ctx.font = 'bold 15px monospace';
      ctx.textAlign = 'left';

      for (let offsetIndex = -5; offsetIndex <= 5; offsetIndex++) {
        const idx = (alignedIdx + offsetIndex + divs) % divs;
        const tickY = yCenter - offsetIndex * 14;
        
        const isAligned = offsetIndex === 0;
        ctx.beginPath();
        if (isAligned) {
          ctx.strokeStyle = '#ffd700'; // Gold aligned tick mark
          ctx.lineWidth = 4.0;
        } else {
          ctx.strokeStyle = '#000000';
          ctx.lineWidth = 2;
        }
        ctx.moveTo(thimbleX, tickY);
        ctx.lineTo(thimbleX + 30, tickY);
        ctx.stroke();

        // 3D Tick reflection highlight
        if (!isAligned) {
          ctx.strokeStyle = '#ffffff';
          ctx.beginPath();
          ctx.moveTo(thimbleX, tickY + 1.5);
          ctx.lineTo(thimbleX + 30, tickY + 1.5);
          ctx.stroke();
        }

        if (idx % 5 === 0) {
          ctx.fillStyle = isAligned ? '#ffd700' : strokeColor;
          ctx.fillText(String(idx), thimbleX + 36, tickY + 5);
        }
      }
    }
  },

  // ==================== 2. MECHANICS & MOTION ====================
  {
    id: 'simple-pendulum',
    name: 'Simple Pendulum',
    category: 'mechanics',
    emoji: '⎋',
    description: 'Animate a simple pendulum with adjustable length, gravity, and mass, and view kinetic/potential energy plots.',
    formulas: [
      { latex: 'T = 2\\pi \\sqrt{\\frac{L}{g}}', explanation: 'Simple harmonic approximation for the swing cycle duration, valid for small angles.' },
      { latex: 'E_{\\text{total}} = E_k + E_p = \\frac{1}{2}mv^2 + mgh', explanation: 'Conservation of mechanical energy between velocity kinetic states and height potential states.' }
    ],
    inputs: [
      { id: 'length', name: 'String Length (L)', min: 0.2, max: 3.0, step: 0.1, default: 1.5, unit: 'm', description: 'Distance from pivot to center of bob mass.' },
      { id: 'gravity', name: 'Gravity Acceleration (g)', min: 1.0, max: 25.0, step: 0.1, default: 9.81, unit: 'm/s²', description: 'Local gravity (Earth = 9.81, Moon = 1.62, Jupiter = 24.79).' },
      { id: 'mass', name: 'Bob Mass (m)', min: 0.1, max: 5.0, step: 0.1, default: 1.0, unit: 'kg', description: 'Mass of swinging ball weight.' },
      { id: 'angle', name: 'Initial Release Angle (θ)', min: 5, max: 60, step: 5, default: 30, unit: 'deg', description: 'Amplitude offset from vertical rest line.' }
    ],
    outputs: [
      { id: 'period', name: 'Period (T)', unit: 's', calculate: (inputs) => Number((2 * Math.PI * Math.sqrt(inputs.length / inputs.gravity)).toFixed(3)) },
      { id: 'frequency', name: 'Frequency (f)', unit: 'Hz', calculate: (inputs) => Number((1 / (2 * Math.PI * Math.sqrt(inputs.length / inputs.gravity))).toFixed(3)) },
      { id: 'max_velocity', name: 'Peak Velocity (v_max)', unit: 'm/s', calculate: (inputs) => {
          // h = L * (1 - cos(theta))
          const rad = (inputs.angle * Math.PI) / 180;
          const h = inputs.length * (1 - Math.cos(rad));
          const v = Math.sqrt(2 * inputs.gravity * h);
          return Number(v.toFixed(3));
        }
      }
    ],
    exploreMarkdown: `### Physics of the Simple Pendulum
A simple pendulum consists of a mass $m$ suspended from a frictionless pivot by a light, inextensible cord of length $L$.

When released from an initial angle $\\theta_0$, gravity pulls it back toward equilibrium.

- **Small Angle Approximation**: For $\\theta \\le 15^\\circ$, $\\sin \\theta \\approx \\theta$ (in radians). Under this constraint, motion is simple harmonic with a period:
  $$T = 2\\pi \\sqrt{\\frac{L}{g}}$$
- **Energy Transformation**: At the maximum displacement height $h = L(1 - \\cos \\theta_0)$, velocity is zero and potential energy is at maximum:
  $$PE_{\\text{max}} = mgh$$
  At the bottom of the swing ($h=0$), kinetic energy is at maximum:
  $$KE_{\\text{max}} = \\frac{1}{2}m v_{\\text{max}}^2 = mgh \\implies v_{\\text{max}} = \\sqrt{2gh}$$`,
    practiceTasks: [
      { question: 'Select a string length of 1.0 m, local gravity of 9.81 m/s², and release angle of 30°. Find the experimental oscillation period.', targetInputValues: { length: 1.0, gravity: 9.81, mass: 1.0, angle: 30 }, targetOutputId: 'period', targetValue: 2.006, tolerance: 0.01, hint: 'T = 2 * pi * sqrt(1.0 / 9.81) which should evaluate close to 2.01 seconds.' }
    ],
    quizQuestions: [
      { question: 'How does doubling the mass of the bob affect the time period of a simple pendulum?', options: ['Doubles the period', 'Halves the period', 'Increases by factor of 1.41', 'Does not change it'], correctIndex: 3, explanation: 'The period equation T = 2*pi*sqrt(L/g) is independent of the bob mass.' },
      { question: 'If a pendulum is transported from Earth to the Moon (gravity = 1.62 m/s²), the period will:', options: ['Increase', 'Decrease', 'Remain identical', 'Become zero'], correctIndex: 0, explanation: 'Since g is in the denominator, decreasing g increases the period T, making it swing slower.' }
    ],
    hasVisual: true,
    drag: (canvas, inputs, x, y, isStart, isEnd) => {
      const w = canvas.width;
      const cy = 40;
      const cx = w / 2;
      const pixelLength = inputs.length * 80;
      
      const theta0 = (inputs.angle * Math.PI) / 180;
      const bx = cx + pixelLength * Math.sin(theta0);
      const by = cy + pixelLength * Math.cos(theta0);
      
      const dist = Math.sqrt((x - bx) ** 2 + (y - by) ** 2);
      if (isStart) {
        if (dist < 40) {
          canvas.dataset.dragging = 'true';
          return true;
        }
        return false;
      }
      if (canvas.dataset.dragging === 'true') {
        const dx = x - cx;
        const dy = y - cy;
        let angleRad = Math.atan2(dx, dy);
        let angleDeg = Math.round((angleRad * 180) / Math.PI);
        angleDeg = Math.max(5, Math.min(60, Math.abs(angleDeg)));
        inputs.angle = angleDeg;
        if (isEnd) {
          canvas.dataset.dragging = 'false';
        }
        return true;
      }
      return false;
    },
    draw: (canvas, inputs, theme) => {
      const ctx = canvas.getContext('2d')!;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const isDark = theme === 'dark';
      const strokeColor = isDark ? '#ffffff' : '#171717';
      const secondaryColor = isDark ? '#666666' : '#888888';
      const accentColor = '#0070f3';

      // Dynamic animation state using system time
      const length = inputs.length;
      const g = inputs.gravity;
      const theta0 = (inputs.angle * Math.PI) / 180;
      
      const omega = Math.sqrt(g / length);
      const time = (Date.now() / 1000) * 1.5; // Scaled speed
      const theta = theta0 * Math.cos(omega * time);

      // Canvas coordinates for pivot
      const cx = w / 2;
      const cy = 40;
      const pixelLength = length * 80; // Scale factor

      const bx = cx + pixelLength * Math.sin(theta);
      const by = cy + pixelLength * Math.cos(theta);

      // Draw Support
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(cx - 20, cy);
      ctx.lineTo(cx + 20, cy);
      ctx.stroke();

      // Draw String
      ctx.strokeStyle = secondaryColor;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(bx, by);
      ctx.stroke();

      // Draw Bob
      const radius = 10 + inputs.mass * 4;
      ctx.fillStyle = accentColor;
      ctx.beginPath();
      ctx.arc(bx, by, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Energy Bar Graph (KE and PE)
      const hMax = length * (1 - Math.cos(theta0));
      const hCurr = length * (1 - Math.cos(theta));
      const PE = inputs.mass * g * hCurr;
      const TotalE = inputs.mass * g * hMax;
      const KE = Math.max(0, TotalE - PE);

      const barW = 12;
      const barMaxH = 80;
      const bxGraph = 30;
      const byGraph = h - 30;

      // Draw PE Bar (Green)
      const peH = (PE / TotalE) * barMaxH;
      ctx.fillStyle = '#10b981';
      ctx.fillRect(bxGraph, byGraph - peH, barW, peH);
      
      // Draw KE Bar (Blue)
      const keH = (KE / TotalE) * barMaxH;
      ctx.fillStyle = '#0070f3';
      ctx.fillRect(bxGraph + 20, byGraph - keH, barW, keH);

      // Labels
      ctx.fillStyle = strokeColor;
      ctx.font = '9px font-mono, monospace';
      ctx.fillText('PE', bxGraph, byGraph + 12);
      ctx.fillText('KE', bxGraph + 20, byGraph + 12);
    }
  },
  {
    id: 'fbd-resolver',
    name: 'Free Body Diagram Maker',
    category: 'mechanics',
    emoji: '🎯',
    description: 'Resolve multiple force vectors on a single point mass, calculating resultant angle and components.',
    formulas: [
      { latex: 'F_{Rx} = \\sum F_i \\cos(\\theta_i)', explanation: 'Sum of all horizontal force projection components.' },
      { latex: 'F_{Ry} = \\sum F_i \\sin(\\theta_i)', explanation: 'Sum of all vertical force projection components.' },
      { latex: 'F_R = \\sqrt{F_{Rx}^2 + F_{Ry}^2}', explanation: 'Resultant magnitude using Pythagorean theorem on composite axes.' }
    ],
    inputs: [
      { id: 'f1', name: 'Force 1 Magnitude', min: 0, max: 100, step: 5, default: 50, unit: 'N', description: 'First vector force pull strength.' },
      { id: 'a1', name: 'Force 1 Angle', min: 0, max: 360, step: 5, default: 30, unit: 'deg', description: 'Direction relative to positive X axis.' },
      { id: 'f2', name: 'Force 2 Magnitude', min: 0, max: 100, step: 5, default: 70, unit: 'N', description: 'Second vector force pull strength.' },
      { id: 'a2', name: 'Force 2 Angle', min: 0, max: 360, step: 5, default: 135, unit: 'deg', description: 'Direction relative to positive X axis.' }
    ],
    outputs: [
      { id: 'resultant_mag', name: 'Resultant Force', unit: 'N', calculate: (inputs) => {
          const r1 = (inputs.a1 * Math.PI) / 180;
          const r2 = (inputs.a2 * Math.PI) / 180;
          const rx = inputs.f1 * Math.cos(r1) + inputs.f2 * Math.cos(r2);
          const ry = inputs.f1 * Math.sin(r1) + inputs.f2 * Math.sin(r2);
          return Number(Math.sqrt(rx*rx + ry*ry).toFixed(2));
        }
      },
      { id: 'resultant_ang', name: 'Resultant Angle', unit: 'deg', calculate: (inputs) => {
          const r1 = (inputs.a1 * Math.PI) / 180;
          const r2 = (inputs.a2 * Math.PI) / 180;
          const rx = inputs.f1 * Math.cos(r1) + inputs.f2 * Math.cos(r2);
          const ry = inputs.f1 * Math.sin(r1) + inputs.f2 * Math.sin(r2);
          let deg = (Math.atan2(ry, rx) * 180) / Math.PI;
          if (deg < 0) deg += 360;
          return Number(deg.toFixed(1));
        }
      }
    ],
    exploreMarkdown: `### Force Vector Resolution
In static mechanics, forces are vectors possessing magnitude and direction. To resolve concurrent coplanar forces:

1. Project each force onto the $x$ and $y$ coordinate axes:
   $$F_{ix} = F_i \\cos \\theta_i, \\quad F_{iy} = F_i \\sin \\theta_i$$
2. Sum the respective components to find the resultant vector's coordinates:
   $$F_{Rx} = \\sum F_{ix}, \\quad F_{Ry} = \\sum F_{iy}$$
3. Re-combine these orthogonal components:
   $$F_R = \\sqrt{F_{Rx}^2 + F_{Ry}^2}$$
   $$\\theta_R = \\tan^{-1}\\left(\\frac{F_{Ry}}{F_{Rx}}\\right)$$`,
    practiceTasks: [],
    quizQuestions: [],
    hasVisual: false
  },

  // ==================== 3. MECHANISMS & MACHINES ====================
  {
    id: 'four-bar-linkage',
    name: 'Four-Bar Linkage',
    category: 'mechanisms',
    emoji: '⚙️',
    description: 'Animate a 4-bar planar mechanism, check Grashof conditions, and trace coupler curves in real time.',
    formulas: [
      { latex: 's + l \\le p + q', explanation: 'Grashof criteria check. Sum of shortest and longest link vs other two link lengths.' },
      { latex: '\\gamma = \\arccos\\left(\\frac{r_2^2 + r_3^2 - d^2}{2r_2 r_3}\\right)', explanation: 'Transmission angle equation, representing link performance limits.' }
    ],
    inputs: [
      { id: 'link_s', name: 'Shortest Link (s)', min: 20, max: 100, step: 5, default: 40, unit: 'mm', description: 'Often the input crank.' },
      { id: 'link_l', name: 'Longest Link (l)', min: 80, max: 200, step: 5, default: 120, unit: 'mm', description: 'Often the frame/ground link or coupler.' },
      { id: 'link_p', name: 'Intermediate Link P', min: 50, max: 150, step: 5, default: 90, unit: 'mm', description: 'First remaining side link.' },
      { id: 'link_q', name: 'Intermediate Link Q', min: 60, max: 180, step: 5, default: 100, unit: 'mm', description: 'Second remaining side link.' },
      { id: 'angle', name: 'Crank Input Angle', min: 0, max: 360, step: 5, default: 45, unit: 'deg', description: 'Rotational orientation of driving link.' }
    ],
    outputs: [
      { id: 'grashof_status', name: 'Grashof Class', unit: '', calculate: (inputs) => {
          const s = inputs.link_s;
          const l = inputs.link_l;
          const p = inputs.link_p;
          const q = inputs.link_q;
          if (s + l <= p + q) {
            return 'Grashof (Class I - Continuous Rotation)';
          } else {
            return 'Non-Grashof (Class II - Rocker-Rocker Only)';
          }
        }
      },
      { id: 'transmission_angle', name: 'Min Transmission Angle', unit: 'deg', calculate: (inputs) => {
          // r1=ground, r2=crank, r3=coupler, r4=rocker
          // Simplified formula for demo calculations
          const s = inputs.link_s;
          const l = inputs.link_l;
          const p = inputs.link_p;
          const q = inputs.link_q;
          
          const maxVal = Math.min(90, (s + p) / 2);
          return Number(maxVal.toFixed(1));
        }
      }
    ],
    exploreMarkdown: `### Kinematics of Four-Bar Linkages
A planar four-bar linkage consists of four rigid links pinned in a closed loop. The links are:
1. **Frame (Ground)**: Link 1 (stationary).
2. **Crank (Input)**: Link 2 (driven rotation).
3. **Coupler**: Link 3 (connects input and output).
4. **Rocker/Lever (Output)**: Link 4 (pivots or oscillates).

- **Grashof Theorem**: A link mechanism has at least one link capable of full $360^\\circ$ rotation if:
  $$s + l \\le p + q$$
  Where $s$ = shortest link, $l$ = longest link, and $p, q$ are the other two.
- **Transmission Angle ($\\gamma$)**: The angle between the coupler and the output rocker. To ensure smooth operation and prevent lock-up, the transmission angle should remain between $45^\\circ$ and $135^\\circ$:
  $$45^\\circ \\le \\gamma \\le 135^\\circ$$`,
    practiceTasks: [
      { question: 'Adjust link lengths to set Shortest = 40, Longest = 120, P = 90, Q = 100. Confirm if the system yields a Grashof Class I mechanism.', targetInputValues: { link_s: 40, link_l: 120, link_p: 90, link_q: 100 }, targetOutputId: 'grashof_status', targetValue: 1, tolerance: 1, hint: '40 + 120 = 160. 90 + 100 = 190. Since 160 <= 190, it is Grashof!' }
    ],
    quizQuestions: [
      { question: 'What happens when a linkage is in a "dead center" position?', options: ['Transmission angle is 90°', 'It requires infinite torque to drive', 'Mechanical advantage becomes zero', 'Output rotates backward'], correctIndex: 1, explanation: 'In a dead center position, the driving link cannot transmit motion to the follower link, demanding infinite torque or external inertia to move.' }
    ],
    hasVisual: true,
    drag: (canvas, inputs, x, y, isStart, isEnd) => {
      const w = canvas.width;
      const h = canvas.height;
      const ax = w / 2 - 60;
      const ay = h / 2 + 30;
      const theta = (inputs.angle * Math.PI) / 180;
      const r2 = inputs.link_s * 1.2;
      const bx = ax + r2 * Math.cos(theta);
      const by = ay - r2 * Math.sin(theta);
      
      const dist = Math.sqrt((x - bx) ** 2 + (y - by) ** 2);
      if (isStart) {
        if (dist < 30) {
          canvas.dataset.dragging = 'true';
          return true;
        }
        return false;
      }
      if (canvas.dataset.dragging === 'true') {
        const dx = x - ax;
        const dy = ay - y; // canvas Y goes down
        let rad = Math.atan2(dy, dx);
        if (rad < 0) rad += 2 * Math.PI;
        inputs.angle = Math.round((rad * 180) / Math.PI);
        if (isEnd) {
          canvas.dataset.dragging = 'false';
        }
        return true;
      }
      return false;
    },
    draw: (canvas, inputs, theme) => {
      const ctx = canvas.getContext('2d')!;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const isDark = theme === 'dark';
      const strokeColor = isDark ? '#ffffff' : '#171717';
      const accentColor = '#0070f3';

      // Ground link endpoints (A and D)
      const ax = w / 2 - 60;
      const ay = h / 2 + 30;
      const dx = w / 2 + 60;
      const dy = h / 2 + 30;

      // Crank angle
      const theta = (inputs.angle * Math.PI) / 180;
      const r2 = inputs.link_s * 1.2; // Scale links to fit screen
      const r3 = inputs.link_p * 1.2;
      const r4 = inputs.link_q * 1.2;

      // Crank pin position (B)
      const bx = ax + r2 * Math.cos(theta);
      const by = ay - r2 * Math.sin(theta); // canvas Y goes down

      // Distance from B to D
      const distBD = Math.sqrt((dx - bx) ** 2 + (dy - by) ** 2);
      
      let cx = dx;
      let cy = dy - r4;

      // Compute Coupler-Rocker pin position (C) if linkage is physically assembly-possible
      if (distBD < r3 + r4 && distBD > Math.abs(r3 - r4)) {
        const phi = Math.atan2(dy - by, dx - bx);
        const alpha = Math.acos((r3**2 + distBD**2 - r4**2) / (2 * r3 * distBD));
        cx = bx + r3 * Math.cos(phi - alpha);
        cy = by + r3 * Math.sin(phi - alpha);
      }

      // Draw Ground frame base
      ctx.strokeStyle = '#888888';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(ax - 10, ay);
      ctx.lineTo(ax + 10, ay);
      ctx.moveTo(dx - 10, dy);
      ctx.lineTo(dx + 10, dy);
      ctx.stroke();

      // Pin symbols
      ctx.fillStyle = isDark ? '#1e1e1e' : '#eaeaea';
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 1.5;
      
      // Draw Link 2 (Crank - Blue)
      ctx.strokeStyle = accentColor;
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(ax, ay);
      ctx.lineTo(bx, by);
      ctx.stroke();

      // Draw Link 3 (Coupler - Green)
      ctx.strokeStyle = '#10b981';
      ctx.beginPath();
      ctx.moveTo(bx, by);
      ctx.lineTo(cx, cy);
      ctx.stroke();

      // Draw Link 4 (Rocker - Orange)
      ctx.strokeStyle = '#f5a623';
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(dx, dy);
      ctx.stroke();

      // Pins at joints
      ctx.fillStyle = strokeColor;
      const joints = [[ax, ay], [bx, by], [cx, cy], [dx, dy]];
      joints.forEach(([x, y]) => {
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();
      });

      // Coupler Curve trace (simple circular simulation for demo representation)
      ctx.strokeStyle = 'rgba(0, 162, 255, 0.3)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(ax, ay, r2 + r3 / 2, 0, Math.PI * 2);
      ctx.stroke();
    }
  },

  // ==================== 4. STRENGTH OF MATERIALS ====================
  {
    id: 'beam-bending',
    name: 'Beam Bending (SFD & BMD)',
    category: 'strength',
    emoji: '🌉',
    description: 'Calculate reaction forces, maximum moment limits, and draw Shear Force & Bending Moment Diagrams dynamically.',
    formulas: [
      { latex: '\\sum M_A = 0 \\implies R_B = \\frac{W \\times x}{L}', explanation: 'Moment balance about Support A determines support force at B.' },
      { latex: 'V(x) = R_A - W \\cdot H(x-a)', explanation: 'Local Shear Force distribution accounting for point weights and step functions.' },
      { latex: 'M(x) = R_A x - W(x-a) \\cdot H(x-a)', explanation: 'Bending Moment integrates shear distributions across beam dimensions.' }
    ],
    inputs: [
      { id: 'length', name: 'Beam Length (L)', min: 2, max: 20, step: 1, default: 10, unit: 'm', description: 'Span length of horizontal joist.' },
      { id: 'load', name: 'Point Load (P)', min: 1, max: 100, step: 5, default: 20, unit: 'kN', description: 'Downward concentrated force.' },
      { id: 'pos', name: 'Load Location (x)', min: 0.5, max: 19.5, step: 0.5, default: 4, unit: 'm', description: 'Position of load starting from left support A.' }
    ],
    outputs: [
      { id: 'reaction_a', name: 'Reaction R_A', unit: 'kN', calculate: (inputs) => {
          if (inputs.pos > inputs.length) return 0;
          const rb = (inputs.load * inputs.pos) / inputs.length;
          return Number((inputs.load - rb).toFixed(2));
        }
      },
      { id: 'reaction_b', name: 'Reaction R_B', unit: 'kN', calculate: (inputs) => {
          if (inputs.pos > inputs.length) return 0;
          return Number(((inputs.load * inputs.pos) / inputs.length).toFixed(2));
        }
      },
      { id: 'max_moment', name: 'Max Bending Moment', unit: 'kNm', calculate: (inputs) => {
          if (inputs.pos > inputs.length) return 0;
          const rb = (inputs.load * inputs.pos) / inputs.length;
          const ra = inputs.load - rb;
          const m = ra * inputs.pos;
          return Number(m.toFixed(2));
        }
      }
    ],
    exploreMarkdown: `### Beam Bending Theory
Beams are structural elements designed to withstand transverse loads.

When a beam is loaded, internal forces arise:
1. **Shear Force (V)**: Sum of all perpendicular forces acting to the left (or right) of a vertical section.
2. **Bending Moment (M)**: Sum of moments of all forces acting to the left (or right) of a vertical section.

- **Equilibrium Equations**:
  $$\\sum F_y = 0 \\implies R_A + R_B = P$$
  $$\\sum M_A = 0 \\implies R_B \\times L = P \\times x_p$$
- **Shear Force Diagram (SFD)**: Plots the variation of shear force along the span length.
- **Bending Moment Diagram (BMD)**: Plots bending moment variations. The point of maximum bending moment corresponds to the point where the Shear Force is zero.`,
    practiceTasks: [
      { question: 'Set Beam Length to 10 m, Point Load to 20 kN, and Load Location to 5 m. What is the reaction force at support A (R_A)?', targetInputValues: { length: 10, load: 20, pos: 5 }, targetOutputId: 'reaction_a', targetValue: 10, tolerance: 0.05, hint: 'At center load (5m on 10m beam), reactions are equally split: 20 / 2 = 10 kN.' }
    ],
    quizQuestions: [
      { question: 'In a simply supported beam with a single point load at its center, where does the maximum bending moment occur?', options: ['At the left support', 'At the right support', 'At the center', 'It is constant throughout'], correctIndex: 2, explanation: 'The bending moment is zero at the supports and increases linearly to its peak under the point load.' },
      { question: 'What is the mathematical relationship between Shear Force V and Bending Moment M?', options: ['V is derivative of M', 'M is derivative of V', 'They are unrelated', 'V is square of M'], correctIndex: 0, explanation: 'V(x) = dM(x)/dx. The derivative of bending moment with respect to distance is equal to the shear force.' }
    ],
    hasVisual: true,
    drag: (canvas, inputs, x, y, isStart, isEnd) => {
      const w = canvas.width;
      const xPad = 40;
      const beamW = w - 80;
      const L = inputs.length;
      
      const loadX = xPad + (inputs.pos / L) * beamW;
      const dist = Math.abs(x - loadX);
      
      if (isStart) {
        if (dist < 25 && y >= 10 && y <= 90) {
          canvas.dataset.dragging = 'true';
          return true;
        }
        return false;
      }
      if (canvas.dataset.dragging === 'true') {
        let pct = (x - xPad) / beamW;
        pct = Math.max(0.02, Math.min(0.98, pct));
        inputs.pos = Number((pct * L).toFixed(1));
        if (isEnd) {
          canvas.dataset.dragging = 'false';
        }
        return true;
      }
      return false;
    },
    draw: (canvas, inputs, theme) => {
      const ctx = canvas.getContext('2d')!;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const isDark = theme === 'dark';
      const strokeColor = isDark ? '#ffffff' : '#171717';
      const accentColor = '#0070f3';

      const L = inputs.length;
      const P = inputs.load;
      const a = Math.min(L, inputs.pos);

      const xPad = 40;
      const yBeam = 50;
      const beamW = w - 80;

      // Draw Beam Line
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(xPad, yBeam);
      ctx.lineTo(xPad + beamW, yBeam);
      ctx.stroke();

      // Draw Supports (Triangles)
      ctx.fillStyle = '#888888';
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 1.5;

      // Left Support
      ctx.beginPath();
      ctx.moveTo(xPad, yBeam + 3);
      ctx.lineTo(xPad - 8, yBeam + 18);
      ctx.lineTo(xPad + 8, yBeam + 18);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Right Support
      ctx.beginPath();
      ctx.moveTo(xPad + beamW, yBeam + 3);
      ctx.lineTo(xPad + beamW - 8, yBeam + 18);
      ctx.lineTo(xPad + beamW + 8, yBeam + 18);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Draw Point Load Arrow
      const loadX = xPad + (a / L) * beamW;
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(loadX, yBeam - 30);
      ctx.lineTo(loadX, yBeam - 3);
      ctx.moveTo(loadX - 5, yBeam - 10);
      ctx.lineTo(loadX, yBeam - 3);
      ctx.lineTo(loadX + 5, yBeam - 10);
      ctx.stroke();

      ctx.fillStyle = strokeColor;
      ctx.font = '10px font-mono, monospace';
      ctx.fillText(`${P} kN`, loadX - 12, yBeam - 35);

      // Calculations for Diagrams
      const rb = (P * a) / L;
      const ra = P - rb;

      // Plot SFD
      const sfdY = 120;
      const sfdScale = 1.5; // pixels per kN
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 1;
      
      // Zero Line
      ctx.beginPath();
      ctx.moveTo(xPad, sfdY);
      ctx.lineTo(xPad + beamW, sfdY);
      ctx.stroke();

      ctx.fillStyle = 'rgba(0, 112, 243, 0.15)';
      ctx.strokeStyle = accentColor;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(xPad, sfdY);
      ctx.lineTo(xPad, sfdY - (ra * sfdScale));
      ctx.lineTo(loadX, sfdY - (ra * sfdScale));
      ctx.lineTo(loadX, sfdY + (rb * sfdScale));
      ctx.lineTo(xPad + beamW, sfdY + (rb * sfdScale));
      ctx.lineTo(xPad + beamW, sfdY);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = strokeColor;
      ctx.font = '9px font-mono, monospace';
      ctx.fillText(`+${ra.toFixed(1)} kN`, xPad + 5, sfdY - 15);
      ctx.fillText(`-${rb.toFixed(1)} kN`, xPad + beamW - 45, sfdY + 15);
      ctx.fillText('Shear Force Diagram (SFD)', xPad, sfdY - 40);

      // Plot BMD
      const bmdY = 210;
      const maxM = ra * a;
      const bmdScale = 1.0; // pixels per kNm
      
      // Zero Line
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(xPad, bmdY);
      ctx.lineTo(xPad + beamW, bmdY);
      ctx.stroke();

      ctx.fillStyle = 'rgba(16, 185, 129, 0.15)';
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(xPad, bmdY);
      ctx.lineTo(loadX, bmdY + (maxM * bmdScale));
      ctx.lineTo(xPad + beamW, bmdY);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = strokeColor;
      ctx.fillText(`${maxM.toFixed(1)} kNm`, loadX - 15, bmdY + (maxM * bmdScale) + 12);
      ctx.fillText('Bending Moment Diagram (BMD)', xPad, bmdY - 30);
    }
  },
  {
    id: 'mohrs-circle',
    name: "Mohr's Circle Stress",
    category: 'strength',
    emoji: '🌀',
    description: 'Transform 2D stress tensors visually, calculating principal stresses and max shear stress.',
    formulas: [
      { latex: '\\sigma_{\\text{avg}} = \\frac{\\sigma_x + \\sigma_y}{2}', explanation: 'Center of Mohr\'s circle along horizontal axis.' },
      { latex: 'R = \\sqrt{\\left(\\frac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2}', explanation: 'Radius of circle, representing maximum shear stress.' }
    ],
    inputs: [
      { id: 'sx', name: 'Stress X (σx)', min: -100, max: 100, step: 5, default: 50, unit: 'MPa', description: 'Horizontal axial stress (positive = tensile, negative = comp).' },
      { id: 'sy', name: 'Stress Y (σy)', min: -100, max: 100, step: 5, default: -20, unit: 'MPa', description: 'Vertical axial stress.' },
      { id: 'txy', name: 'Shear Stress (τxy)', min: -100, max: 100, step: 5, default: 30, unit: 'MPa', description: 'Coplanar shear stress.' }
    ],
    outputs: [
      { id: 'sig_1', name: 'Principal Stress σ1', unit: 'MPa', calculate: (inputs) => {
          const avg = (inputs.sx + inputs.sy) / 2;
          const r = Math.sqrt(((inputs.sx - inputs.sy)/2)**2 + inputs.txy**2);
          return Number((avg + r).toFixed(2));
        }
      },
      { id: 'sig_2', name: 'Principal Stress σ2', unit: 'MPa', calculate: (inputs) => {
          const avg = (inputs.sx + inputs.sy) / 2;
          const r = Math.sqrt(((inputs.sx - inputs.sy)/2)**2 + inputs.txy**2);
          return Number((avg - r).toFixed(2));
        }
      },
      { id: 'tau_max', name: 'Max Shear Stress τ_max', unit: 'MPa', calculate: (inputs) => {
          const r = Math.sqrt(((inputs.sx - inputs.sy)/2)**2 + inputs.txy**2);
          return Number(r.toFixed(2));
        }
      }
    ],
    exploreMarkdown: `### Mohr's Circle stress transformation
Mohr's circle is a 2D graphical representation of stress transformation equations.

It helps engineers determine principal stresses (maximum/minimum normal stress) without complex trigonometric matrices:

- **Center**:
  $$\\sigma_{\\text{avg}} = \\frac{\\sigma_x + \\sigma_y}{2}$$
- **Radius**:
  $$R = \\sqrt{\\left(\\frac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2}$$
- **Principal stresses**:
  $$\\sigma_{1,2} = \\sigma_{\\text{avg}} \\pm R$$`,
    practiceTasks: [],
    quizQuestions: [],
    hasVisual: false
  },

  // ==================== 5. THERMAL & FLUID ENGINEERING ====================
  {
    id: 'thermo-cycles',
    name: 'Thermodynamics Cycles',
    category: 'thermal-fluid',
    emoji: '🔥',
    description: 'Interactive P-V and T-S diagram engine for Carnot, Otto, Diesel, and Brayton thermal energy cycles.',
    formulas: [
      { latex: '\\eta_{\\text{Carnot}} = 1 - \\frac{T_C}{T_H}', explanation: 'Maximum theoretical thermal efficiency bound based purely on absolute temperatures.' },
      { latex: '\\eta_{\\text{Otto}} = 1 - \\frac{1}{r^{\\gamma - 1}}', explanation: 'Ideal efficiency for spark-ignition petrol combustion cycles with ratio r.' }
    ],
    inputs: [
      { id: 'cycle_type', name: 'Cycle Type', min: 0, max: 3, step: 1, default: 0, unit: '', description: '0 = Carnot, 1 = Otto, 2 = Diesel, 3 = Brayton', options: [{ value: 0, label: 'Carnot Cycle' }, { value: 1, label: 'Otto (Petrol) Cycle' }, { value: 2, label: 'Diesel Cycle' }, { value: 3, label: 'Brayton (Turbine) Cycle' }] },
      { id: 'temp_low', name: 'Lower Temp (T_C)', min: 250, max: 500, step: 10, default: 300, unit: 'K', description: 'Reservoir heat sink temperature.' },
      { id: 'temp_high', name: 'Higher Temp (T_H)', min: 600, max: 2000, step: 50, default: 1200, unit: 'K', description: 'Combustion source hot temperature.' },
      { id: 'comp_ratio', name: 'Compression Ratio (r)', min: 5, max: 22, step: 0.5, default: 8.5, unit: '', description: 'Volumetric expansion ratio.' }
    ],
    outputs: [
      { id: 'eff_carnot', name: 'Carnot Limit Efficiency', unit: '%', calculate: (inputs) => {
          const tc = inputs.temp_low;
          const th = inputs.temp_high;
          return Number(((1 - tc / th) * 100).toFixed(1));
        }
      },
      { id: 'eff_cycle', name: 'Cycle Efficiency', unit: '%', calculate: (inputs) => {
          const type = Math.round(inputs.cycle_type);
          const r = inputs.comp_ratio;
          const gamma = 1.4; // constant
          
          if (type === 0) { // Carnot
            const tc = inputs.temp_low;
            const th = inputs.temp_high;
            return Number(((1 - tc / th) * 100).toFixed(1));
          } else if (type === 1) { // Otto
            return Number(((1 - 1 / Math.pow(r, gamma - 1)) * 100).toFixed(1));
          } else if (type === 2) { // Diesel
            const rc = 1.5; // cutoff ratio
            const term = (Math.pow(rc, gamma) - 1) / (gamma * (rc - 1));
            const eff = 1 - (1 / Math.pow(r, gamma - 1)) * term;
            return Number((eff * 100).toFixed(1));
          } else { // Brayton
            const rp = Math.pow(r, 0.7); // simulated pressure ratio
            return Number(((1 - 1 / Math.pow(rp, (gamma-1)/gamma)) * 100).toFixed(1));
          }
        }
      }
    ],
    exploreMarkdown: `### Heat Engine Cycles
Thermodynamic cycles describe the transformation of thermal energy into mechanical work:

1. **Carnot Cycle**: The ideal cycle bounding efficiency limits. It consists of two isothermal and two isentropic processes.
2. **Otto Cycle**: Idealized four-stroke cycle matching gasoline engines:
   - $1 \\to 2$: Isentropic compression.
   - $2 \\to 3$: Constant-volume heat addition (spark).
   - $3 \\to 4$: Isentropic expansion.
   - $4 \\to 1$: Constant-volume heat rejection.
   $$\\eta_{\\text{Otto}} = 1 - \\frac{1}{r^{\\gamma - 1}}$$
3. **Diesel Cycle**: Constant-pressure combustion heating model.
4. **Brayton Cycle**: Gas turbine cycle composed of constant pressure heat operations.`,
    practiceTasks: [
      { question: 'Configure a Carnot Cycle with sink Temp T_C = 300 K and source Temp T_H = 1200 K. What is the maximum possible theoretical efficiency?', targetInputValues: { cycle_type: 0, temp_low: 300, temp_high: 1200, comp_ratio: 8.5 }, targetOutputId: 'eff_carnot', targetValue: 75.0, tolerance: 0.1, hint: 'eta = 1 - 300/1200 = 1 - 0.25 = 0.75 or 75.0%.' }
    ],
    quizQuestions: [
      { question: 'Why is the Carnot cycle efficiency impossible to achieve in actual real-world engines?', options: ['Isothermal expansion requires infinite time', 'Requires zero friction', 'Thermal leaks cannot be fully insulated', 'All of the above'], correctIndex: 3, explanation: 'All of the above are valid mechanical constraints preventing perfect Carnot operation.' }
    ],
    hasVisual: true,
    draw: (canvas, inputs, theme) => {
      const ctx = canvas.getContext('2d')!;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const isDark = theme === 'dark';
      const strokeColor = isDark ? '#ffffff' : '#171717';
      const accentColor = '#0070f3';

      const type = Math.round(inputs.cycle_type);
      
      // Draw P-V diagram axes
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 1.5;
      
      const xPad = 50;
      const yPad = 40;
      const plotW = w - 100;
      const plotH = h - 80;

      ctx.beginPath();
      ctx.moveTo(xPad, yPad);
      ctx.lineTo(xPad, yPad + plotH);
      ctx.lineTo(xPad + plotW, yPad + plotH);
      ctx.stroke();

      // Label axes
      ctx.fillStyle = strokeColor;
      ctx.font = '10px font-mono, monospace';
      ctx.fillText('P (Pressure)', xPad - 15, yPad - 10);
      ctx.fillText('V (Volume)', xPad + plotW - 10, yPad + plotH + 18);

      // Simple coordinates representing cycle state loops
      ctx.strokeStyle = accentColor;
      ctx.lineWidth = 2.5;
      ctx.fillStyle = 'rgba(0, 112, 243, 0.1)';

      const scaleX = plotW / 12;
      const scaleY = plotH / 10;
      
      ctx.beginPath();
      if (type === 0) { // Carnot
        ctx.moveTo(xPad + 3*scaleX, yPad + 2*scaleY);
        ctx.bezierCurveTo(xPad + 5*scaleX, yPad + 3*scaleY, xPad + 7*scaleX, yPad + 5*scaleY, xPad + 9*scaleX, yPad + 6*scaleY);
        ctx.bezierCurveTo(xPad + 7*scaleX, yPad + 8*scaleY, xPad + 5*scaleX, yPad + 9*scaleY, xPad + 4*scaleX, yPad + 9*scaleY);
        ctx.bezierCurveTo(xPad + 3*scaleX, yPad + 7*scaleY, xPad + 2.5*scaleX, yPad + 4*scaleY, xPad + 3*scaleX, yPad + 2*scaleY);
      } else if (type === 1) { // Otto
        ctx.moveTo(xPad + 3*scaleX, yPad + 1*scaleY);
        ctx.bezierCurveTo(xPad + 5*scaleX, yPad + 3*scaleY, xPad + 8*scaleX, yPad + 6*scaleY, xPad + 10*scaleX, yPad + 7*scaleY);
        ctx.lineTo(xPad + 10*scaleX, yPad + 9*scaleY);
        ctx.bezierCurveTo(xPad + 8*scaleX, yPad + 8*scaleY, xPad + 5*scaleX, yPad + 5*scaleY, xPad + 3*scaleX, yPad + 4*scaleY);
        ctx.closePath();
      } else { // Diesel & Brayton
        ctx.moveTo(xPad + 3*scaleX, yPad + 2*scaleY);
        ctx.lineTo(xPad + 6*scaleX, yPad + 2*scaleY);
        ctx.bezierCurveTo(xPad + 8*scaleX, yPad + 5*scaleY, xPad + 9.5*scaleX, yPad + 7*scaleY, xPad + 10*scaleX, yPad + 7.5*scaleY);
        ctx.lineTo(xPad + 10*scaleX, yPad + 9*scaleY);
        ctx.bezierCurveTo(xPad + 8*scaleX, yPad + 8*scaleY, xPad + 5*scaleX, yPad + 6*scaleY, xPad + 3*scaleX, yPad + 4*scaleY);
        ctx.closePath();
      }
      ctx.fill();
      ctx.stroke();

      // State markers (1, 2, 3, 4)
      ctx.fillStyle = '#ef4444';
      ctx.font = '10px sans-serif';
      if (type === 1) {
        ctx.fillText('3', xPad + 3*scaleX - 10, yPad + 1*scaleY - 5);
        ctx.fillText('4', xPad + 10*scaleX + 5, yPad + 7*scaleY - 5);
        ctx.fillText('1', xPad + 10*scaleX + 5, yPad + 9*scaleY + 5);
        ctx.fillText('2', xPad + 3*scaleX - 10, yPad + 4*scaleY + 5);
      } else {
        ctx.fillText('3', xPad + 6*scaleX, yPad + 1.5*scaleY);
        ctx.fillText('4', xPad + 10*scaleX, yPad + 7*scaleY);
        ctx.fillText('1', xPad + 10*scaleX, yPad + 9.5*scaleY);
        ctx.fillText('2', xPad + 2.5*scaleX, yPad + 4.5*scaleY);
      }
    }
  },
  {
    id: 'fluid-flow-pipes',
    name: 'Fluid Flow in Pipes',
    category: 'thermal-fluid',
    emoji: '🌊',
    description: 'Calculate pressure drop, friction factors (Darcy), and identify laminar vs turbulent regimes.',
    formulas: [
      { latex: 'Re = \\frac{\\rho v D}{\\mu}', explanation: 'Reynolds number calculation, checking flow inertia vs viscosity ratio.' },
      { latex: 'h_f = f \\frac{L}{D} \\frac{v^2}{2g}', explanation: 'Darcy-Weisbach head loss equation for pipe friction pressure drop.' }
    ],
    inputs: [
      { id: 'velocity', name: 'Flow Velocity', min: 0.1, max: 10, step: 0.1, default: 2, unit: 'm/s', description: 'Speed of fluid inside pipe.' },
      { id: 'diam', name: 'Pipe Diameter', min: 0.01, max: 1.0, step: 0.01, default: 0.1, unit: 'm', description: 'Internal bore diameter.' },
      { id: 'viscosity', name: 'Viscosity (dynamic)', min: 0.0001, max: 0.01, step: 0.0001, default: 0.001, unit: 'Pa·s', description: 'Fluid shear resistance (Water is ~0.001 Pa·s).' }
    ],
    outputs: [
      { id: 'reynolds', name: 'Reynolds Number (Re)', unit: '', calculate: (inputs) => {
          const rho = 1000; // density of water
          const re = (rho * inputs.velocity * inputs.diam) / inputs.viscosity;
          return Number(re.toFixed(0));
        }
      },
      { id: 'regime', name: 'Flow Regime', unit: '', calculate: (inputs) => {
          const rho = 1000;
          const re = (rho * inputs.velocity * inputs.diam) / inputs.viscosity;
          if (re < 2100) return 'Laminar (Re < 2100)';
          if (re > 4000) return 'Turbulent (Re > 4000)';
          return 'Transient (Transition state)';
        }
      }
    ],
    exploreMarkdown: `### Fluid Friction and Flow Regimes
When fluid flows inside a conduit, drag occurs due to wall friction:

- **Reynolds Number ($Re$)**: A dimensionless ratio representing the ratio of inertial forces to viscous forces:
  $$Re = \\frac{\\rho v D}{\\mu}$$
  - $Re < 2100$: **Laminar Flow** (ordered, smooth fluid streams).
  - $Re > 4000$: **Turbulent Flow** (chaotic eddies, mixing).
- **Head Loss ($h_f$)**: The pressure drop in a straight pipe caused by shear stress, calculated via Darcy-Weisbach:
  $$h_f = f \\frac{L}{D} \\frac{v^2}{2g}$$`,
    practiceTasks: [],
    quizQuestions: [],
    hasVisual: false
  },

  // ==================== 6. ELECTRICAL & ELECTRONICS ====================
  {
    id: 'logic-gates',
    name: 'Logic Gates Simulator',
    category: 'electrical',
    emoji: '🔌',
    description: 'Test boolean operations of logic gates, verify outputs, and view live highlighting on truth tables.',
    formulas: [
      { latex: 'Y_{\\text{AND}} = A \\cdot B', explanation: 'Outputs TRUE (1) only if both inputs A and B are active.' },
      { latex: 'Y_{\\text{XOR}} = A \\oplus B = A\\bar{B} + \\bar{A}B', explanation: 'Outputs active state if inputs differ.' }
    ],
    inputs: [
      { id: 'input_a', name: 'Input A', min: 0, max: 1, step: 1, default: 0, unit: '', description: 'Logic level of input channel A.', options: [{ value: 0, label: '0 (LOW)' }, { value: 1, label: '1 (HIGH)' }] },
      { id: 'input_b', name: 'Input B', min: 0, max: 1, step: 1, default: 1, unit: '', description: 'Logic level of input channel B.', options: [{ value: 0, label: '0 (LOW)' }, { value: 1, label: '1 (HIGH)' }] },
      { id: 'gate_type', name: 'Gate Symbol Type', min: 0, max: 6, step: 1, default: 0, unit: '', description: '0 = AND, 1 = OR, 2 = NOT (uses A only), 3 = NAND, 4 = NOR, 5 = XOR, 6 = XNOR', options: [{ value: 0, label: 'AND' }, { value: 1, label: 'OR' }, { value: 2, label: 'NOT' }, { value: 3, label: 'NAND' }, { value: 4, label: 'NOR' }, { value: 5, label: 'XOR' }, { value: 6, label: 'XNOR' }] }
    ],
    outputs: [
      { id: 'logic_output', name: 'Output Y', unit: '', calculate: (inputs) => {
          const a = Math.round(inputs.input_a);
          const b = Math.round(inputs.input_b);
          const type = Math.round(inputs.gate_type);
          switch(type) {
            case 0: return a & b; // AND
            case 1: return a | b; // OR
            case 2: return a === 0 ? 1 : 0; // NOT
            case 3: return (a & b) === 0 ? 1 : 0; // NAND
            case 4: return (a | b) === 0 ? 1 : 0; // NOR
            case 5: return a ^ b; // XOR
            case 6: return a === b ? 1 : 0; // XNOR
            default: return 0;
          }
        }
      }
    ],
    exploreMarkdown: `### Boolean Algebra and Logic Gates
Logic gates are the physical components of digital systems, routing voltage levels matching binary values.

1. **AND**: Output is 1 if both inputs are 1.
2. **OR**: Output is 1 if at least one input is 1.
3. **NOT**: Inverts the single input.
4. **XOR (Exclusive OR)**: Output is 1 if inputs are different.
5. **NAND, NOR, XNOR**: Inverted versions of AND, OR, XOR respectively. Universal gates (NAND and NOR) can construct any arbitrary boolean algebra network.`,
    practiceTasks: [
      { question: 'Select XOR gate and toggle inputs to yield an Output Y of 1.', targetInputValues: { gate_type: 5, input_a: 1, input_b: 0 }, targetOutputId: 'logic_output', targetValue: 1, tolerance: 0.1, hint: 'For XOR, inputs must differ. Set A=1 and B=0.' }
    ],
    quizQuestions: [
      { question: 'Which logic gate is known as a universal gate?', options: ['AND', 'OR', 'XOR', 'NAND'], correctIndex: 3, explanation: 'NAND and NOR are universal gates because any boolean function can be implemented using only combinations of them.' }
    ],
    hasVisual: true,
    drag: (canvas, inputs, x, y, isStart, isEnd) => {
      if (!isStart) return false;
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2 - 10;
      const type = Math.round(inputs.gate_type);
      
      if (type !== 2) {
        const distA = Math.sqrt((x - (cx - 80)) ** 2 + (y - (cy - 20)) ** 2);
        if (distA < 20) {
          inputs.input_a = inputs.input_a === 1 ? 0 : 1;
          return true;
        }
        const distB = Math.sqrt((x - (cx - 80)) ** 2 + (y - (cy + 20)) ** 2);
        if (distB < 20) {
          inputs.input_b = inputs.input_b === 1 ? 0 : 1;
          return true;
        }
      } else {
        const dist = Math.sqrt((x - (cx - 80)) ** 2 + (y - cy) ** 2);
        if (dist < 20) {
          inputs.input_a = inputs.input_a === 1 ? 0 : 1;
          return true;
        }
      }
      return false;
    },
    draw: (canvas, inputs, theme) => {
      const ctx = canvas.getContext('2d')!;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const isDark = theme === 'dark';
      const strokeColor = isDark ? '#ffffff' : '#171717';
      const accentColor = '#0070f3';

      const a = Math.round(inputs.input_a);
      const b = Math.round(inputs.input_b);
      const type = Math.round(inputs.gate_type);

      // Center coords
      const cx = w / 2;
      const cy = h / 2 - 10;

      // Draw input wire lines
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 3;
      
      if (type !== 2) { // Double input
        ctx.beginPath();
        ctx.moveTo(cx - 80, cy - 20);
        ctx.lineTo(cx - 30, cy - 20);
        ctx.moveTo(cx - 80, cy + 20);
        ctx.lineTo(cx - 30, cy + 20);
        ctx.stroke();

        ctx.fillStyle = a === 1 ? '#00a2ff' : '#888888';
        ctx.beginPath(); ctx.arc(cx - 80, cy - 20, 6, 0, Math.PI*2); ctx.fill();
        ctx.fillStyle = b === 1 ? '#00a2ff' : '#888888';
        ctx.beginPath(); ctx.arc(cx - 80, cy + 20, 6, 0, Math.PI*2); ctx.fill();
      } else { // Single input
        ctx.beginPath();
        ctx.moveTo(cx - 80, cy);
        ctx.lineTo(cx - 30, cy);
        ctx.stroke();

        ctx.fillStyle = a === 1 ? '#00a2ff' : '#888888';
        ctx.beginPath(); ctx.arc(cx - 80, cy, 6, 0, Math.PI*2); ctx.fill();
      }

      // Output wire line
      ctx.strokeStyle = strokeColor;
      ctx.beginPath();
      ctx.moveTo(cx + 30, cy);
      ctx.lineTo(cx + 80, cy);
      ctx.stroke();

      // Gate Symbol drawing
      ctx.fillStyle = isDark ? '#1f1f1f' : '#eaeaea';
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 3.5;

      if (type === 0 || type === 3) { // AND / NAND
        ctx.beginPath();
        ctx.moveTo(cx - 30, cy - 35);
        ctx.lineTo(cx, cy - 35);
        ctx.arc(cx, cy, 35, -Math.PI/2, Math.PI/2);
        ctx.lineTo(cx - 30, cy + 35);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      } else if (type === 1 || type === 4) { // OR / NOR
        ctx.beginPath();
        ctx.moveTo(cx - 30, cy - 35);
        ctx.quadraticCurveTo(cx - 10, cy - 35, cx + 25, cy);
        ctx.quadraticCurveTo(cx - 10, cy + 35, cx - 30, cy + 35);
        ctx.quadraticCurveTo(cx - 15, cy, cx - 30, cy - 35);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      } else if (type === 2) { // NOT
        ctx.beginPath();
        ctx.moveTo(cx - 30, cy - 30);
        ctx.lineTo(cx + 15, cy);
        ctx.lineTo(cx - 30, cy + 30);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      } else if (type === 5 || type === 6) { // XOR / XNOR
        ctx.beginPath();
        ctx.moveTo(cx - 24, cy - 35);
        ctx.quadraticCurveTo(cx - 4, cy - 35, cx + 30, cy);
        ctx.quadraticCurveTo(cx - 4, cy + 35, cx - 24, cy + 35);
        ctx.quadraticCurveTo(cx - 9, cy, cx - 24, cy - 35);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        // Additional arc for input side
        ctx.beginPath();
        ctx.arc(cx - 32, cy, 35, -0.9, 0.9);
        ctx.stroke();
      }

      // Draw bubble for inverted gates
      if (type === 2 || type === 3 || type === 4 || type === 6) {
        ctx.fillStyle = isDark ? '#000000' : '#ffffff';
        ctx.beginPath();
        const bx = type === 2 ? cx + 21 : cx + 35;
        ctx.arc(bx, cy, 5, 0, Math.PI*2);
        ctx.fill();
        ctx.stroke();
      }

      // Output state color
      const outConfig: Record<number, number> = {
        0: a & b, 1: a | b, 2: a === 0 ? 1 : 0, 3: (a&b)===0 ? 1 : 0, 4: (a|b)===0 ? 1 : 0, 5: a^b, 6: a===b ? 1 : 0
      };
      const out = outConfig[type] || 0;
      ctx.fillStyle = out === 1 ? '#00a2ff' : '#888888';
      ctx.beginPath();
      ctx.arc(cx + 80, cy, 6, 0, Math.PI*2);
      ctx.fill();

      // Text labels
      ctx.fillStyle = strokeColor;
      ctx.font = '10px font-mono, monospace';
      ctx.fillText(type !== 2 ? 'A' : 'IN', cx - 95, cy - 10);
      if (type !== 2) ctx.fillText('B', cx - 95, cy + 30);
      ctx.fillText('OUT', cx + 90, cy + 4);
    }
  },
  {
    id: 'resistor-color',
    name: 'Resistor Color Code',
    category: 'electrical',
    emoji: '▤',
    description: 'Calculate resistor values and tolerances by selecting color bands.',
    formulas: [
      { latex: 'R = (A \\times 10 + B) \\times 10^C \\pm T\\%', explanation: 'Standard color band formula for 4-band resistors.' }
    ],
    inputs: [
      { id: 'band1', name: 'Band 1 (First Digit)', min: 0, max: 9, step: 1, default: 4, unit: '', description: '0=Black, 1=Brown, 2=Red, 3=Orange, 4=Yellow, 5=Green, 6=Blue, 7=Violet, 8=Gray, 9=White' },
      { id: 'band2', name: 'Band 2 (Second Digit)', min: 0, max: 9, step: 1, default: 7, unit: '', description: 'Same options as Band 1' },
      { id: 'multiplier', name: 'Band 3 (Multiplier)', min: -2, max: 9, step: 1, default: 3, unit: '', description: '-2=Silver, -1=Gold, 0=Black, 1=Brown, 2=Red, 3=Orange, 4=Yellow, 5=Green, 6=Blue, 7=Violet, 8=Gray, 9=White' },
      { id: 'tolerance', name: 'Band 4 (Tolerance)', min: 0, max: 5, step: 1, default: 1, unit: '', description: '0=10% (Silver), 1=5% (Gold), 2=1% (Brown), 3=2% (Red), 4=0.5% (Green), 5=0.25% (Blue)' }
    ],
    outputs: [
      { id: 'resistance', name: 'Resistance Value', unit: 'Ω', calculate: (inputs) => {
          const val = (inputs.band1 * 10 + inputs.band2) * Math.pow(10, inputs.multiplier);
          return val >= 1000000 ? (val / 1000000).toFixed(2) + ' M' : (val >= 1000 ? (val / 1000).toFixed(2) + ' k' : val.toString());
        }
      },
      { id: 'tol_percent', name: 'Tolerance', unit: '%', calculate: (inputs) => {
          const tols = [10, 5, 1, 2, 0.5, 0.25];
          return tols[Math.round(inputs.tolerance)] || 5;
        }
      }
    ],
    exploreMarkdown: `### Resistor Band Encoding
Resistor values are color-coded to allow compact labeling.
- **Digit Bands (1st & 2nd)**: Assign standard integers (Black=0 to White=9).
- **Multiplier**: Multiplying factor exponent power of 10.
- **Tolerance**: Manufacturing variance boundary (Gold=5%, Brown=1%).`,
    practiceTasks: [],
    quizQuestions: [],
    hasVisual: false
  },

  // ==================== 7. WORKSHOP & MANUFACTURING ====================
  {
    id: 'tolerance-fits',
    name: 'Tolerance & Fits (ISO 286)',
    category: 'workshop',
    emoji: '⚙️',
    description: 'ISO 286 Limits and Fits calculator. Set shaft/hole letters/numbers, compute clearance bounds, and view fit types.',
    formulas: [
      { latex: '\\text{Tolerance} = |\\text{Upper Limit} - \\text{Lower Limit}|', explanation: 'Total dimensional margin permitted for shaft or hole.' },
      { latex: '\\text{Clearance}_{\\text{Max}} = H_{\\text{Upper}} - S_{\\text{Lower}}', explanation: 'Maximum slack space between mating surfaces.' }
    ],
    inputs: [
      { id: 'size', name: 'Nominal Size (d)', min: 10, max: 200, step: 1, default: 50, unit: 'mm', description: 'Target alignment joint diameter.' },
      { id: 'hole_class', name: 'Hole Tolerance Code', min: 0, max: 3, step: 1, default: 0, unit: '', description: '0 = H7, 1 = H8, 2 = G7, 3 = F8', options: [{ value: 0, label: 'H7' }, { value: 1, label: 'H8' }, { value: 2, label: 'G7' }, { value: 3, label: 'F8' }] },
      { id: 'shaft_class', name: 'Shaft Tolerance Code', min: 0, max: 3, step: 1, default: 0, unit: '', description: '0 = g6, 1 = h6, 2 = f7, 3 = p6', options: [{ value: 0, label: 'g6' }, { value: 1, label: 'h6' }, { value: 2, label: 'f7' }, { value: 3, label: 'p6' }] }
    ],
    outputs: [
      { id: 'hole_min', name: 'Hole Min Limit', unit: 'mm', calculate: (inputs) => inputs.size },
      { id: 'hole_max', name: 'Hole Max Limit', unit: 'mm', calculate: (inputs) => {
          const dev = [25, 39, 25, 39][Math.round(inputs.hole_class)] || 25;
          return Number((inputs.size + dev / 1000).toFixed(4));
        }
      },
      { id: 'shaft_min', name: 'Shaft Min Limit', unit: 'mm', calculate: (inputs) => {
          // values for nominal size around 50mm
          const dev = [-25, -16, -50, 10][Math.round(inputs.shaft_class)] || -25;
          return Number((inputs.size + dev / 1000).toFixed(4));
        }
      },
      { id: 'shaft_max', name: 'Shaft Max Limit', unit: 'mm', calculate: (inputs) => {
          const offset = [-9, 0, -25, 26][Math.round(inputs.shaft_class)] || -9;
          return Number((inputs.size + offset / 1000).toFixed(4));
        }
      },
      { id: 'fit_description', name: 'Fit Category', unit: '', calculate: (inputs) => {
          const sc = Math.round(inputs.shaft_class);
          const hc = Math.round(inputs.hole_class);
          
          if (sc === 3) return 'Interference Fit (Tight press-fit)';
          if (sc === 1 && hc === 0) return 'Transition Fit (Line-on-line)';
          return 'Clearance Fit (Free running / sliding)';
        }
      }
    ],
    exploreMarkdown: `### ISO 286 Limits and Fits System
In mechanical manufacturing, exact dimensions are impossible to produce repeatedly. ISO 286 provides standard tolerances:

- **Hole Basis System**: The hole size is kept constant (usually H class, where lower limit = nominal size) and shaft class is selected to determine fit.
- **Fit Classes**:
  1. **Clearance Fit**: Shaft is smaller than hole; parts rotate/slide. (e.g. H7/g6).
  2. **Transition Fit**: Overlapping zones; assembly may require a light hammer. (e.g. H7/h6).
  3. **Interference Fit**: Shaft is larger than hole; requires heat expansion or press forces. (e.g. H7/p6).`,
    practiceTasks: [
      { question: 'Configure a Nominal Size of 50 mm, Hole class H7, and Shaft class p6. Confirm if this produces an Interference Fit.', targetInputValues: { size: 50, hole_class: 0, shaft_class: 3 }, targetOutputId: 'fit_description', targetValue: 1, tolerance: 1, hint: 'Shaft p6 is interference class; fits require tight press forces.' }
    ],
    quizQuestions: [
      { question: 'What does the number in a tolerance designation (e.g. "7" in H7) represent?', options: ['Nominal size', 'Standard tolerance grade (IT level)', 'Clearance deviation', 'Shaft offset'], correctIndex: 1, explanation: 'The number refers to the International Tolerance grade (IT), indicating accuracy (smaller = tighter tolerance).' }
    ],
    hasVisual: true,
    draw: (canvas, inputs, theme) => {
      const ctx = canvas.getContext('2d')!;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const isDark = theme === 'dark';
      const strokeColor = isDark ? '#ffffff' : '#171717';
      const accentColor = '#0070f3';

      const sc = Math.round(inputs.shaft_class);

      // Draw relative representation of Hole (Top & Bottom halves)
      ctx.fillStyle = 'rgba(16, 185, 129, 0.15)';
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 2;

      const yHoleTop = 40;
      const yHoleBot = h - 60;
      
      // Draw top hole boundary block
      ctx.fillRect(40, yHoleTop, w - 80, 40);
      ctx.strokeRect(40, yHoleTop, w - 80, 40);
      // Bottom hole boundary block
      ctx.fillRect(40, yHoleBot, w - 80, 40);
      ctx.strokeRect(40, yHoleBot, w - 80, 40);

      // Shaft drawing (fits inside the opening between hole boundaries)
      let shaftOffset = 0;
      if (sc === 0) shaftOffset = -15; // clearance g6
      else if (sc === 1) shaftOffset = 0; // transition h6
      else if (sc === 2) shaftOffset = -25; // clearance f7
      else if (sc === 3) shaftOffset = 15; // interference p6

      const shaftH = (yHoleBot - yHoleTop - 40) + (shaftOffset * 0.5);
      const yShaftTop = yHoleTop + 40 + (20 - shaftOffset * 0.25);

      ctx.fillStyle = 'rgba(0, 112, 243, 0.2)';
      ctx.strokeStyle = accentColor;
      ctx.fillRect(60, yShaftTop, w - 120, shaftH);
      ctx.strokeRect(60, yShaftTop, w - 120, shaftH);

      // Draw annotation labels
      ctx.fillStyle = strokeColor;
      ctx.font = '10px font-mono, monospace';
      ctx.fillText('Hole Block', 50, yHoleTop + 25);
      ctx.fillText('Hole Block', 50, yHoleBot + 25);
      ctx.fillText('Mating Shaft', w / 2 - 35, yShaftTop + shaftH / 2 + 3);

      // Fit dimension lines
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(w - 50, yHoleTop + 40);
      ctx.lineTo(w - 50, yHoleBot);
      ctx.stroke();
    }
  },

  // ==================== 8. BASIC SCIENCE ====================
  {
    id: 'chemical-balancer',
    name: 'Balancing Chemical Equations',
    category: 'science',
    emoji: '⚗️',
    description: 'Configure and balance chemical equations (e.g. combustion, oxidation) with instant element inventory status.',
    formulas: [
      { latex: '\\sum \\text{Atoms}_{\\text{left}} = \\sum \\text{Atoms}_{\\text{right}}', explanation: 'Law of Conservation of Mass constraint requiring identical counts per atom on both sides.' }
    ],
    inputs: [
      { id: 'eq_preset', name: 'Equation Setup', min: 0, max: 2, step: 1, default: 0, unit: '', description: '0 = H2 + O2 -> H2O, 1 = CH4 + O2 -> CO2 + H2O, 2 = Fe + O2 -> Fe2O3', options: [{ value: 0, label: 'Hydrogen Combustion' }, { value: 1, label: 'Methane Combustion' }, { value: 2, label: 'Iron Rusting / Oxidation' }] },
      { id: 'coeff_1', name: 'Coefficient 1 (Reactant 1)', min: 1, max: 6, step: 1, default: 1, unit: '', description: 'First compound count.' },
      { id: 'coeff_2', name: 'Coefficient 2 (Reactant 2)', min: 1, max: 6, step: 1, default: 1, unit: '', description: 'Second compound count.' },
      { id: 'coeff_3', name: 'Coefficient 3 (Product 1)', min: 1, max: 6, step: 1, default: 1, unit: '', description: 'Third compound count.' },
      { id: 'coeff_4', name: 'Coefficient 4 (Product 2)', min: 1, max: 6, step: 1, default: 1, unit: '', description: 'Fourth compound count (if applicable).' }
    ],
    outputs: [
      { id: 'balanced_state', name: 'Is Balanced', unit: '', calculate: (inputs) => {
          const type = Math.round(inputs.eq_preset);
          const c1 = inputs.coeff_1;
          const c2 = inputs.coeff_2;
          const c3 = inputs.coeff_3;
          const c4 = inputs.coeff_4;

          if (type === 0) { // c1 H2 + c2 O2 -> c3 H2O
            const hLeft = c1 * 2;
            const oLeft = c2 * 2;
            const hRight = c3 * 2;
            const oRight = c3 * 1;
            return (hLeft === hRight && oLeft === oRight) ? 'YES' : 'NO';
          } else if (type === 1) { // c1 CH4 + c2 O2 -> c3 CO2 + c4 H2O
            const cLeft = c1 * 1;
            const hLeft = c1 * 4;
            const oLeft = c2 * 2;
            const cRight = c3 * 1;
            const hRight = c4 * 2;
            const oRight = c3 * 2 + c4 * 1;
            return (cLeft === cRight && hLeft === hRight && oLeft === oRight) ? 'YES' : 'NO';
          } else { // c1 Fe + c2 O2 -> c3 Fe2O3
            const feLeft = c1 * 1;
            const oLeft = c2 * 2;
            const feRight = c3 * 2;
            const oRight = c3 * 3;
            return (feLeft === feRight && oLeft === oRight) ? 'YES' : 'NO';
          }
        }
      }
    ],
    exploreMarkdown: `### Conservation of Mass in Chemistry
Chemical reactions reorganize atomic links, but cannot create or destroy mass.

A balanced chemical equation has equal counts of each element on both sides of the arrow:

- **Reactants**: Left side of the equation.
- **Products**: Right side of the equation.
- **Coefficients**: Numbers placed in front of molecules to adjust atomic inventories.
- **Subscripts**: Indicate how many atoms of that element exist in one molecule (never modify subscripts when balancing!).`,
    practiceTasks: [
      { question: 'Balance the Methane Combustion equation (CH4 + 2 O2 -> CO2 + 2 H2O) by setting the coefficients.', targetInputValues: { eq_preset: 1, coeff_1: 1, coeff_2: 2, coeff_3: 1, coeff_4: 2 }, targetOutputId: 'balanced_state', targetValue: 1, tolerance: 1, hint: '1 Methane + 2 Oxygen molecules yield 1 Carbon Dioxide + 2 Water molecules.' }
    ],
    quizQuestions: [
      { question: 'Which coefficients balance the equation: N2 + H2 -> NH3?', options: ['1, 3, 2', '2, 3, 2', '1, 2, 2', '2, 6, 4'], correctIndex: 0, explanation: '1 N2 + 3 H2 -> 2 NH3 gives 2 Nitrogen atoms and 6 Hydrogen atoms on both sides.' }
    ],
    hasVisual: true,
    draw: (canvas, inputs, theme) => {
      const ctx = canvas.getContext('2d')!;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const isDark = theme === 'dark';
      const strokeColor = isDark ? '#ffffff' : '#171717';
      
      const type = Math.round(inputs.eq_preset);
      const c1 = inputs.coeff_1;
      const c2 = inputs.coeff_2;
      const c3 = inputs.coeff_3;
      const c4 = inputs.coeff_4;

      ctx.fillStyle = strokeColor;
      ctx.font = '12px font-mono, monospace';
      
      // Print active equation status
      let eqStr = '';
      if (type === 0) eqStr = `${c1} H₂ + ${c2} O₂  ⟶  ${c3} H₂O`;
      else if (type === 1) eqStr = `${c1} CH₄ + ${c2} O₂  ⟶  ${c3} CO₂ + ${c4} H₂O`;
      else eqStr = `${c1} Fe + ${c2} O₂  ⟶  ${c3} Fe₂O₃`;

      ctx.fillText(eqStr, w / 2 - ctx.measureText(eqStr).width / 2, 50);

      // Draw a balance scale representation
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 3;
      
      const cx = w / 2;
      const cy = h / 2 + 40;

      // Base stand
      ctx.beginPath();
      ctx.moveTo(cx, cy + 40);
      ctx.lineTo(cx, cy - 20);
      ctx.moveTo(cx - 30, cy + 40);
      ctx.lineTo(cx + 30, cy + 40);
      ctx.stroke();

      // Check balance delta
      let leftW = 0;
      let rightW = 0;
      if (type === 0) {
        leftW = c1*2 + c2*32; rightW = c3*18;
      } else if (type === 1) {
        leftW = c1*16 + c2*32; rightW = c3*44 + c4*18;
      } else {
        leftW = c1*56 + c2*32; rightW = c3*160;
      }

      const diff = leftW - rightW;
      const tilt = Math.min(20, Math.max(-20, diff * 0.15)); // tilt in px

      // Cross beam
      ctx.beginPath();
      ctx.moveTo(cx - 100, cy - 20 - tilt);
      ctx.lineTo(cx + 100, cy - 20 + tilt);
      ctx.stroke();

      // Hanging scales
      ctx.lineWidth = 1.5;
      
      // Left Pan
      ctx.beginPath();
      ctx.moveTo(cx - 100, cy - 20 - tilt);
      ctx.lineTo(cx - 130, cy + 15 - tilt);
      ctx.lineTo(cx - 70, cy + 15 - tilt);
      ctx.closePath();
      ctx.moveTo(cx - 130, cy + 15 - tilt);
      ctx.lineTo(cx - 70, cy + 15 - tilt);
      ctx.stroke();

      // Right Pan
      ctx.beginPath();
      ctx.moveTo(cx + 100, cy - 20 + tilt);
      ctx.lineTo(cx + 70, cy + 15 + tilt);
      ctx.lineTo(cx + 130, cy + 15 + tilt);
      ctx.closePath();
      ctx.moveTo(cx + 70, cy + 15 + tilt);
      ctx.lineTo(cx + 130, cy + 15 + tilt);
      ctx.stroke();

      // Label weights
      ctx.font = '9px font-mono, monospace';
      ctx.fillText(`${leftW.toFixed(0)} u`, cx - 110, cy + 30 - tilt);
      ctx.fillText(`${rightW.toFixed(0)} u`, cx + 90, cy + 30 + tilt);
    }
  }
];
