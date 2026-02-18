# Workspace Page - Exact Visual Specifications

**Page URL**: `http://localhost:3001/tests/mechanical-design-engineer/preview/workspace`

**Purpose**: Test-taking interface where candidates answer questions with a two-column layout (question brief + answer workspace)

---

## Page Background

```css
background: #faf8ff; /* Soft purple-tinted white */
min-height: 100vh;
```

**RGB**: `rgb(250, 248, 255)`

---

## 1. Sticky Top Navigation Bar

### Container (Outer)
```css
position: sticky;
top: 0;
z-index: 40;
border-bottom: 1px solid rgba(228, 228, 231, 0.6); /* zinc-200 at 60% */
background-color: rgba(255, 255, 255, 0.9); /* white at 90% - frosted glass */
backdrop-filter: blur(24px); /* Strong blur effect */
```

**Exact blur value**: `24px`

### Inner Container
```css
max-width: 1400px;
margin: 0 auto;
display: flex;
align-items: center;
gap: 1rem; /* 16px */
padding: 0.75rem 1rem; /* 12px top/bottom, 16px left/right */
```

**Max-width**: `1400px` (slightly narrower than landing page's 1600px)

---

### Left Section: Question Title + Timer

**Container**:
```css
display: flex;
min-width: 0;
flex: 1 1 0%;
align-items: center;
justify-content: space-between;
gap: 1rem; /* 16px */
```

**Question Title (H1)**:
```jsx
<h1 className="truncate text-xl font-semibold text-zinc-900">
  Robotic Gripper Validation
</h1>
```

```css
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
font-size: 1.25rem; /* 20px */
font-weight: 600;
color: #18181b; /* zinc-900 */
line-height: 1.75rem; /* 28px */
```

**Timer Badge**:
```jsx
<div className="inline-flex shrink-0 items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-sm">
  <Icon name="clock" className="h-3.5 w-3.5 text-zinc-500" />
  5:55
</div>
```

```css
display: inline-flex;
flex-shrink: 0;
align-items: center;
gap: 0.5rem; /* 8px */
border-radius: 9999px; /* Perfect pill */
border: 1px solid #e4e4e7; /* zinc-200 */
background-color: #ffffff;
padding: 0.375rem 0.75rem; /* 6px top/bottom, 12px left/right */
font-size: 0.75rem; /* 12px */
font-weight: 500;
color: #3f3f46; /* zinc-700 */
box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

/* Clock icon */
.icon {
  height: 0.875rem; /* 14px */
  width: 0.875rem; /* 14px */
  color: #71717a; /* zinc-500 */
}
```

**Timer text**: `5:55` (MM:SS format)

---

### Middle Section: Progress Bar (Desktop Only)

**Container** (hidden on mobile, shown on desktop ≥768px):
```css
display: none; /* Mobile */

/* Desktop (≥768px) */
@media (min-width: 768px) {
  display: flex;
  flex-direction: column;
  gap: 0.25rem; /* 4px */
  min-width: 260px;
  margin-left: auto;
}
```

**Progress Label Row**:
```jsx
<div className="flex items-center justify-between text-xs text-zinc-500">
  <span>Progress</span>
  <span>1/4</span>
</div>
```

```css
display: flex;
align-items: center;
justify-content: space-between;
font-size: 0.75rem; /* 12px */
color: #71717a; /* zinc-500 */
```

**Progress Bar Track**:
```css
height: 0.375rem; /* 6px */
width: 100%;
overflow: hidden;
border-radius: 9999px; /* Fully rounded */
background-color: #e4e4e7; /* zinc-200 */
```

**Progress Bar Fill** (animated):
```jsx
<div 
  className="h-full rounded-full bg-corePurple transition-all" 
  style={{ width: `${progress}%` }} 
/>
```

```css
height: 100%; /* 6px */
border-radius: 9999px;
background-color: #4d3ef0; /* corePurple */
transition: width 300ms;
/* Width is dynamic: 25% (1 of 4), 50% (2 of 4), 75% (3 of 4), 100% (4 of 4) */
```

**Current state shown**: 25% width (Question 1 of 4)

---

### Right Section: Navigation Buttons

**Container**:
```css
display: flex;
align-items: center;
gap: 0.5rem; /* 8px */
margin-left: auto; /* Mobile - pushes to right */

/* Desktop (≥768px) */
@media (min-width: 768px) {
  margin-left: 1rem; /* 16px - after progress bar */
}
```

**Previous Button**:
```jsx
<button 
  type="button"
  onClick={goPrev}
  className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50"
>
  <Icon name="chevronLeft" className="h-4 w-4" /> Previous
</button>
```

```css
display: inline-flex;
align-items: center;
gap: 0.5rem; /* 8px */
border-radius: 0.75rem; /* 12px */
border: 1px solid #e4e4e7; /* zinc-200 */
background-color: #ffffff;
padding: 0.5rem 0.75rem; /* 8px top/bottom, 12px left/right */
font-size: 0.875rem; /* 14px */
font-weight: 500;
color: #3f3f46; /* zinc-700 */
transition: background-color 150ms;

&:hover {
  background-color: #fafafa; /* zinc-50 */
}

/* Chevron icon */
.icon {
  height: 1rem; /* 16px */
  width: 1rem; /* 16px */
  stroke-width: 2;
}
```

**Button text**: "Previous"

**Next Button** (primary style):
```jsx
<button 
  type="button"
  onClick={goNext}
  className="inline-flex items-center gap-2 rounded-xl bg-corePurple px-3 py-2 text-sm font-medium text-white transition hover:brightness-105"
>
  Next <Icon name="chevronRight" className="h-4 w-4" />
</button>
```

```css
display: inline-flex;
align-items: center;
gap: 0.5rem; /* 8px */
border-radius: 0.75rem; /* 12px */
background-color: #4d3ef0; /* corePurple - solid, not gradient */
padding: 0.5rem 0.75rem; /* 8px top/bottom, 12px left/right */
font-size: 0.875rem; /* 14px */
font-weight: 500;
color: #ffffff;
transition: filter 150ms;

&:hover {
  filter: brightness(1.05); /* 5% brighter */
}

/* Chevron icon */
.icon {
  height: 1rem; /* 16px */
  width: 1rem; /* 16px */
  stroke-width: 2;
}
```

**Button text**: "Next" (or "Submit assignment" on last question)

**Submit Button Variant** (last question only):
```jsx
<button className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700">
  Submit assignment
</button>
```

```css
background-color: #059669; /* emerald-600 */
padding: 0.5rem 1rem; /* 8px top/bottom, 16px left/right */

&:hover {
  background-color: #047857; /* emerald-700 */
}
```

---

## 2. Main Content Grid

### Outer Container
```css
max-width: 1400px;
margin: 0 auto;
display: grid;
grid-template-columns: repeat(1, minmax(0, 1fr)); /* Mobile: 1 column */
gap: 1rem; /* 16px */
padding: 1rem; /* 16px all sides */

/* Desktop (≥1024px) */
@media (min-width: 1024px) {
  grid-template-columns: minmax(0, 1fr) 360px; /* Left flexible, right fixed 360px */
}
```

**Grid breakdown**:
- Mobile: Full width stacked columns
- Desktop: Left column (fluid) + Right column (fixed 360px width)
- Gap: 16px between columns

---

## 3. Left Panel: Design Brief (Question Panel)

### Outer Container
```css
height: calc(100vh - 88px); /* Full viewport minus top nav height */
overflow: hidden;
border-radius: 1rem; /* 16px */
border: 1px solid rgba(228, 228, 231, 0.8); /* zinc-200 at 80% */
background-color: #ffffff;
box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-sm */
```

**Height calculation**: `100vh - 88px` (top nav is approximately 88px tall including borders)

---

### Panel Header
```jsx
<div className="border-b border-zinc-100 px-4 py-3">
  <div>
    <div className="text-sm font-semibold text-zinc-900">Design brief</div>
    <div className="text-xs text-zinc-500">Read the context, then decide your approach</div>
  </div>
</div>
```

```css
border-bottom: 1px solid #f4f4f5; /* zinc-100 */
padding: 0.75rem 1rem; /* 12px top/bottom, 16px left/right */

/* Title */
.title {
  font-size: 0.875rem; /* 14px */
  font-weight: 600;
  color: #18181b; /* zinc-900 */
}

/* Subtitle */
.subtitle {
  font-size: 0.75rem; /* 12px */
  color: #71717a; /* zinc-500 */
}
```

**Header text**:
- Title: "Design brief"
- Subtitle: "Read the context, then decide your approach"

---

### Scrollable Content Area
```css
height: calc(100vh - 160px); /* Viewport minus nav and header */
overflow-y: auto;
padding: 1rem; /* 16px all sides */
```

**Inner spacing container**:
```css
display: flex;
flex-direction: column;
gap: 1.25rem; /* 20px between sections */
```

---

### Section 1: Description Paragraph
```jsx
<p className="whitespace-pre-line text-sm text-zinc-600">
  You are designing a new robotic gripper for a pick-and-place application. The immediate goal is to validate geometry, range of motion, and basic compliance before committing to a production design.
</p>
```

```css
white-space: pre-line; /* Preserves line breaks */
font-size: 0.875rem; /* 14px */
color: #52525b; /* zinc-600 */
line-height: 1.5; /* 21px */
```

**Text content**: (full description shown above)

---

### Section 2: Context & Constraints Box

**Outer Container**:
```css
border-radius: 1rem; /* 16px */
border: 1px solid #e4e4e7; /* zinc-200 */
background-color: rgba(250, 250, 250, 0.5); /* zinc-50 at 50% */
padding: 1rem; /* 16px */
```

**Header Label**:
```jsx
<div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
  Context & constraints
</div>
```

```css
font-size: 0.75rem; /* 12px */
font-weight: 600;
text-transform: uppercase;
letter-spacing: 0.025em; /* 0.3px at 12px */
color: #71717a; /* zinc-500 */
```

**Constraints Grid**:
```css
margin-top: 0.75rem; /* 12px from header */
display: grid;
gap: 0.75rem; /* 12px between cards */
grid-template-columns: repeat(1, minmax(0, 1fr)); /* Mobile: 1 column */

/* Tablet/Desktop (≥640px) */
@media (min-width: 640px) {
  grid-template-columns: repeat(2, minmax(0, 1fr)); /* 2 columns */
}
```

**Individual Constraint Card**:
```jsx
<div className="rounded-xl border border-zinc-200 bg-white p-3">
  <div className="text-xs font-medium text-zinc-700">Timeline</div>
  <div className="mt-1 text-sm text-zinc-600">Validation must be completed within 6 days</div>
</div>
```

```css
border-radius: 0.75rem; /* 12px */
border: 1px solid #e4e4e7; /* zinc-200 */
background-color: #ffffff;
padding: 0.75rem; /* 12px */

/* Key (label) */
.key {
  font-size: 0.75rem; /* 12px */
  font-weight: 500;
  color: #3f3f46; /* zinc-700 */
}

/* Value (description) */
.value {
  margin-top: 0.25rem; /* 4px */
  font-size: 0.875rem; /* 14px */
  color: #52525b; /* zinc-600 */
  line-height: 1.5; /* 21px */
}
```

**Example constraints**:
1. Timeline → "Validation must be completed within 6 days"
2. Iteration → "Multiple design iterations may be required"
3. Out of scope → "Strength, wear life, and surface finish"
4. Priority → "Low cost + fast turnaround over material fidelity"

---

### Section 3: Drawing/Reference Image

**Header Row**:
```jsx
<div className="flex items-center justify-between">
  <div className="text-sm font-semibold text-zinc-900">Drawing</div>
  <button type="button" className="rounded-xl border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-600 transition hover:bg-zinc-50">
    <span className="inline-flex items-center gap-2">
      <Icon name="maximize" className="h-4 w-4" /> Zoom / annotate
    </span>
  </button>
</div>
```

**Header CSS**:
```css
display: flex;
align-items: center;
justify-content: space-between;

/* Title */
.title {
  font-size: 0.875rem; /* 14px */
  font-weight: 600;
  color: #18181b; /* zinc-900 */
}

/* Button */
.button {
  border-radius: 0.75rem; /* 12px */
  border: 1px solid #e4e4e7; /* zinc-200 */
  padding: 0.375rem 0.75rem; /* 6px top/bottom, 12px left/right */
  font-size: 0.75rem; /* 12px */
  font-weight: 500;
  color: #52525b; /* zinc-600 */
  transition: background-color 150ms;
}

.button:hover {
  background-color: #fafafa; /* zinc-50 */
}

/* Icon in button */
.icon {
  height: 1rem; /* 16px */
  width: 1rem; /* 16px */
}
```

**Image Container**:
```jsx
<div className="rounded-2xl border border-zinc-200 p-3">
  <div className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50">
    <Image
      src="/gripper-drawing.png"
      alt="Reference"
      width={600}
      height={250}
      className="w-full object-contain"
    />
  </div>
  <div className="mt-3 flex flex-wrap gap-2 text-xs text-zinc-500">
    <span>Tip:</span>
    <span>Use zoom to inspect details. Annotations (optional) can support your rationale.</span>
  </div>
</div>
```

**Image Container CSS**:
```css
/* Outer wrapper */
border-radius: 1rem; /* 16px */
border: 1px solid #e4e4e7; /* zinc-200 */
padding: 0.75rem; /* 12px */

/* Image box */
.image-box {
  overflow: hidden;
  border-radius: 0.75rem; /* 12px */
  border: 1px solid #e4e4e7; /* zinc-200 */
  background-color: #fafafa; /* zinc-50 */
}

/* Image */
.image {
  width: 100%;
  object-fit: contain;
}

/* Tip text */
.tip {
  margin-top: 0.75rem; /* 12px */
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem; /* 8px */
  font-size: 0.75rem; /* 12px */
  color: #71717a; /* zinc-500 */
}
```

**Image source**: `/gripper-drawing.png`

---

### Section 4: Task Box

**Container**:
```css
border-radius: 1rem; /* 16px */
border: 1px solid #e4e4e7; /* zinc-200 */
padding: 1rem; /* 16px */
```

**Task Header**:
```css
font-size: 0.875rem; /* 14px */
font-weight: 600;
color: #18181b; /* zinc-900 */
```

**Task Description**:
```css
margin-top: 0.25rem; /* 4px */
font-size: 0.875rem; /* 14px */
color: #52525b; /* zinc-600 */
line-height: 1.5; /* 21px */
```

**Divider**:
```css
margin-top: 1rem; /* 16px */
margin-bottom: 1rem; /* 16px */
border-top: 1px solid #e4e4e7; /* zinc-200 */
```

**Meta Cards Grid**:
```css
display: grid;
gap: 0.75rem; /* 12px */
grid-template-columns: repeat(1, minmax(0, 1fr)); /* Mobile */

/* Tablet/Desktop (≥640px) */
@media (min-width: 640px) {
  grid-template-columns: repeat(2, minmax(0, 1fr)); /* 2 columns */
}
```

**Individual Meta Card**:
```css
border-radius: 0.75rem; /* 12px */
border: 1px solid #e4e4e7; /* zinc-200 */
background-color: #ffffff;
padding: 0.75rem; /* 12px */

/* Label */
.label {
  font-size: 0.75rem; /* 12px */
  font-weight: 500;
  color: #3f3f46; /* zinc-700 */
}

/* Value */
.value {
  margin-top: 0.25rem; /* 4px */
  font-size: 0.875rem; /* 14px */
  color: #52525b; /* zinc-600 */
}
```

**Example meta cards**:
1. "Expected response time" → "~2–4 minutes"
2. "What we evaluate" → "Tradeoffs, iteration plan, clarity"

---

## 4. Right Panel: Your Workspace (Answer Panel)

### Outer Container
```css
height: calc(100vh - 88px); /* Same as left panel */
overflow: hidden;
border-radius: 1rem; /* 16px */
border: 1px solid rgba(228, 228, 231, 0.8); /* zinc-200 at 80% */
background-color: #ffffff;
box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
```

**Fixed width on desktop**: `360px`

---

### Panel Header
```jsx
<div className="border-b border-zinc-100 px-4 py-3">
  <div className="flex items-start justify-between">
    <div>
      <div className="text-sm font-semibold text-zinc-900">Your workspace</div>
      <div className="text-xs text-zinc-500">Decision + rationale + notes</div>
    </div>
    <span className="rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-500">
      Autosaved
    </span>
  </div>
</div>
```

```css
border-bottom: 1px solid #f4f4f5; /* zinc-100 */
padding: 0.75rem 1rem; /* 12px top/bottom, 16px left/right */

/* Container */
.header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

/* Title */
.title {
  font-size: 0.875rem; /* 14px */
  font-weight: 600;
  color: #18181b; /* zinc-900 */
}

/* Subtitle */
.subtitle {
  font-size: 0.75rem; /* 12px */
  color: #71717a; /* zinc-500 */
}

/* Autosaved badge */
.badge {
  border-radius: 9999px; /* Perfect pill */
  border: 1px solid #e4e4e7; /* zinc-200 */
  padding: 0.125rem 0.5rem; /* 2px top/bottom, 8px left/right */
  font-size: 0.75rem; /* 12px */
  color: #71717a; /* zinc-500 */
}
```

---

### Tab Switcher (Response / Notes)

**Container**:
```jsx
<div className="mb-3 flex gap-1 rounded-xl border border-zinc-200 p-1">
  <button>Response</button>
  <button>Notes</button>
</div>
```

```css
margin-bottom: 0.75rem; /* 12px */
display: flex;
gap: 0.25rem; /* 4px */
border-radius: 0.75rem; /* 12px */
border: 1px solid #e4e4e7; /* zinc-200 */
padding: 0.25rem; /* 4px */
```

**Tab Button (Inactive)**:
```css
flex: 1 1 0%; /* Equal width */
border-radius: 0.5rem; /* 8px */
padding: 0.5rem 0.75rem; /* 8px top/bottom, 12px left/right */
font-size: 0.875rem; /* 14px */
font-weight: 500;
color: #52525b; /* zinc-600 */
transition: all 150ms;

&:hover {
  color: #18181b; /* zinc-900 */
}
```

**Tab Button (Active)**:
```css
background-color: #ffffff;
color: #18181b; /* zinc-900 */
box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-sm */
```

**Tabs**: "Response" (active) | "Notes" (inactive)

---

### Content Area (Response Tab)

**Scrollable Container**:
```css
display: flex;
flex-direction: column;
gap: 1rem; /* 16px between sections */
overflow-y: auto;
padding-right: 0.5rem; /* 8px - for scrollbar */
max-height: calc(100vh - 240px);
```

---

#### Response Section 1: Pick Your Approach

**Container**:
```css
border-radius: 1rem; /* 16px */
border: 1px solid #e4e4e7; /* zinc-200 */
padding: 1rem; /* 16px */
```

**Section Title**:
```css
font-size: 0.875rem; /* 14px */
font-weight: 600;
color: #18181b; /* zinc-900 */
```
**Text**: "Pick your approach"

**Section Hint**:
```css
margin-top: 0.25rem; /* 4px */
font-size: 0.75rem; /* 12px */
color: #71717a; /* zinc-500 */
```
**Text**: "Choose the method you would use first for rapid validation."

**Options Container**:
```css
margin-top: 1rem; /* 16px from hint */
display: flex;
flex-direction: column;
gap: 0.75rem; /* 12px between options */
```

---

#### Single Option Card (Radio Button)

**Option Card (Unselected)**:
```jsx
<label className="flex cursor-pointer items-start gap-3 rounded-2xl border p-3 transition border-zinc-200 hover:bg-zinc-50">
  <input type="radio" ... />
  <div>
    <div className="text-sm font-medium text-zinc-800">CNC-machined aluminum</div>
    <div className="mt-0.5 text-xs text-zinc-500">High fidelity • Higher cost • Longer lead</div>
  </div>
</label>
```

```css
display: flex;
cursor: pointer;
align-items: flex-start;
gap: 0.75rem; /* 12px */
border-radius: 1rem; /* 16px */
border: 1px solid #e4e4e7; /* zinc-200 */
padding: 0.75rem; /* 12px */
transition: all 150ms;

&:hover {
  background-color: #fafafa; /* zinc-50 */
}
```

**Option Card (Selected)**:
```css
border-color: #4d3ef0; /* corePurple */
background-color: rgba(232, 230, 252, 0.3); /* softLavender at 30% */
```

**Radio Input**:
```css
margin-top: 0.25rem; /* 4px - align with text */
height: 1rem; /* 16px */
width: 1rem; /* 16px */
border: 1px solid #d4d4d8; /* zinc-300 */
accent-color: #4d3ef0; /* corePurple - checked state */

&:focus {
  box-shadow: 0 0 0 3px rgba(77, 62, 240, 0.2); /* Purple ring */
}
```

**Option Label** (main text):
```css
font-size: 0.875rem; /* 14px */
font-weight: 500;
color: #27272a; /* zinc-800 */
line-height: 1.5; /* 21px */
```

**Option Meta** (subtext):
```css
margin-top: 0.125rem; /* 2px */
font-size: 0.75rem; /* 12px */
color: #71717a; /* zinc-500 */
line-height: 1.25; /* 15px */
```

**Example options**:
1. ✓ "3D-printed prototype" (SELECTED) → "Fastest iteration • Low cost"
2. "CNC-machined aluminum" → "High fidelity • Higher cost • Longer lead"
3. "Sheet-metal steel fabrication" → "Moderate fidelity • Medium speed"
4. "Laser-cut acrylic sheets" → "Fast • Low cost • Limited stiffness"

---

#### Response Section 2: Rationale

**Container**:
```css
border-radius: 1rem; /* 16px */
border: 1px solid #e4e4e7; /* zinc-200 */
padding: 1rem; /* 16px */
```

**Header Row**:
```jsx
<div className="flex items-center justify-between">
  <div>
    <div className="text-sm font-semibold text-zinc-900">Rationale</div>
    <div className="text-xs text-zinc-500">2–5 sentences. Explain tradeoffs + iteration plan.</div>
  </div>
  <span className="text-xs text-zinc-400">~100–250 words</span>
</div>
```

```css
display: flex;
align-items: center;
justify-content: space-between;

/* Title */
.title {
  font-size: 0.875rem; /* 14px */
  font-weight: 600;
  color: #18181b; /* zinc-900 */
}

/* Hint */
.hint {
  font-size: 0.75rem; /* 12px */
  color: #71717a; /* zinc-500 */
}

/* Word count */
.count {
  font-size: 0.75rem; /* 12px */
  color: #a1a1aa; /* zinc-400 */
}
```

**Textarea**:
```jsx
<textarea
  value={currentAnswers.rationale}
  onChange={(e) => setRationale(e.target.value)}
  className="mt-3 min-h-[160px] w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-corePurple focus:ring-2 focus:ring-corePurple/20"
  placeholder="Explain why this is the best first step given the constraints…"
/>
```

```css
margin-top: 0.75rem; /* 12px */
min-height: 160px;
width: 100%;
border-radius: 1rem; /* 16px */
border: 1px solid #e4e4e7; /* zinc-200 */
padding: 0.75rem 1rem; /* 12px top/bottom, 16px left/right */
font-size: 0.875rem; /* 14px */
outline: none; /* Remove default outline */
resize: vertical;
line-height: 1.5; /* 21px */

/* Placeholder */
&::placeholder {
  color: #a1a1aa; /* zinc-400 */
}

/* Focus state */
&:focus {
  border-color: #4d3ef0; /* corePurple */
  box-shadow: 0 0 0 2px rgba(77, 62, 240, 0.2); /* Purple ring */
}
```

**Placeholder text**: "Explain why this is the best first step given the constraints…"

**Pre-filled value** (for this scenario):
```
I'd start with 3D printing to validate geometry + range-of-motion within the 6-day window, then iterate quickly based on fit and motion results. Material fidelity isn't required at this stage, so speed and cost dominate.
```

---

### Notes Tab Content

**When "Notes" tab is active:**

**Scratchpad Section**:
```jsx
<div className="rounded-2xl border border-zinc-200 p-4">
  <div className="flex items-center gap-2">
    <Icon name="stickyNote" className="h-4 w-4 text-zinc-600" />
    <div className="text-sm font-semibold text-zinc-900">Scratchpad</div>
  </div>
  <div className="mt-1 text-xs text-zinc-500">
    Optional. Notes are not graded unless you include them in your rationale.
  </div>
  <textarea
    value={currentAnswers.notes}
    className="mt-3 min-h-[260px] w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-corePurple focus:ring-2 focus:ring-corePurple/20"
    placeholder="Work your thoughts out here…"
  />
</div>
```

**Textarea height**: `min-h-[260px]` (larger than rationale)

**Helpful Prompts Section**:
```jsx
<div className="rounded-2xl border border-zinc-200 p-4">
  <div className="text-sm font-semibold text-zinc-900">Helpful prompts</div>
  <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-zinc-500">
    <li>What would you test first?</li>
    <li>What would you learn in the first iteration?</li>
    <li>If iteration 1 fails, what changes next?</li>
  </ul>
</div>
```

```css
/* List */
margin-top: 0.5rem; /* 8px */
list-style-type: disc;
padding-left: 1.25rem; /* 20px */
font-size: 0.75rem; /* 12px */
color: #71717a; /* zinc-500 */
line-height: 1.5; /* 18px */

/* List items */
li + li {
  margin-top: 0.25rem; /* 4px between items */
}
```

---

## 5. Color Reference (All Colors Used)

```css
/* Brand Colors */
--corePurple: #4d3ef0;
--violet: #594ce9;
--softLavender: #e8e6fc;

/* Background */
--pageBg: #faf8ff; /* Page background */

/* Zinc Grays (used in this page) */
--zinc-50:  #fafafa;  /* Backgrounds, image boxes */
--zinc-100: #f4f4f5;  /* Borders, dividers */
--zinc-200: #e4e4e7;  /* Primary borders */
--zinc-300: #d4d4d8;  /* Radio borders */
--zinc-400: #a1a1aa;  /* Placeholders, word counts */
--zinc-500: #71717a;  /* Secondary text, hints */
--zinc-600: #52525b;  /* Body text */
--zinc-700: #3f3f46;  /* Emphasized text, labels */
--zinc-800: #27272a;  /* Strong text, option labels */
--zinc-900: #18181b;  /* Headings, titles */

/* Success */
--emerald-600: #059669; /* Submit button */
--emerald-700: #047857; /* Submit button hover */

/* White */
--white: #ffffff;
```

---

## 6. Spacing Scale Reference

```css
0.125rem = 2px   (badge padding, mt-0.5)
0.25rem  = 4px   (gap-1, p-1, spacing-tight)
0.375rem = 6px   (py-1.5, progress bar height)
0.5rem   = 8px   (gap-2, px-2, py-2)
0.75rem  = 12px  (gap-3, px-3, py-3, p-3)
1rem     = 16px  (gap-4, px-4, py-4, p-4)
1.25rem  = 20px  (gap-5, main content spacing)
1.5rem   = 24px  (gap-6, section margins)
```

---

## 7. Typography Scale

```css
/* Font Sizes */
0.75rem  = 12px  (text-xs)   - Hints, meta, small labels
0.875rem = 14px  (text-sm)   - Body text, section text
1rem     = 16px  (text-base) - Default
1.25rem  = 20px  (text-xl)   - Question title

/* Font Weights */
400 = normal
500 = medium  (labels, links)
600 = semibold (headings, section titles)

/* Line Heights */
1.25 = tight    (option meta)
1.5  = normal   (body text)
1.75 = relaxed  (headings)
```

---

## 8. Border Radius Scale

```css
0.5rem  = 8px   (rounded-lg)   - Tab buttons
0.75rem = 12px  (rounded-xl)   - Buttons, inputs, cards
1rem    = 16px  (rounded-2xl)  - Main containers, panels
9999px  = pill  (rounded-full) - Badges, timer, pills
```

---

## 9. Shadow Scale

```css
/* Light shadow (cards) */
shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

/* No shadows on main panels in this design */
/* Only subtle shadow-sm used */
```

---

## 10. Interactive States

### Buttons
- **Default**: Border, background, text color as specified
- **Hover**: 
  - White buttons → `bg-zinc-50`
  - Purple buttons → `brightness(1.05)`
  - Emerald buttons → `bg-emerald-700`
- **Transition**: `150ms` all properties

### Text Inputs / Textareas
- **Default**: `border-zinc-200`
- **Focus**: 
  - Border: `border-corePurple`
  - Ring: `box-shadow: 0 0 0 2px rgba(77, 62, 240, 0.2)`
- **Transition**: `150ms` border

### Radio Buttons
- **Unchecked**: Gray border
- **Checked**: Purple fill via `accent-color: #4d3ef0`
- **Focus**: Purple ring

### Option Cards (Labels)
- **Default**: `border-zinc-200`, white background
- **Hover**: `bg-zinc-50`
- **Selected**: `border-corePurple`, `bg-softLavender/30`

---

## 11. Responsive Breakpoints

```css
/* Mobile-first (default) */
< 640px:  Single column layout, progress bar hidden

/* Small (sm:) - ≥640px */
≥ 640px:  Constraint cards 2 columns, meta cards 2 columns

/* Medium (md:) - ≥768px */
≥ 768px:  Progress bar shown

/* Large (lg:) - ≥1024px */
≥ 1024px: Main grid becomes 2-column (fluid left + 360px right)
```

---

## 12. Exact Measurements Summary

| Element | Measurement |
|---------|-------------|
| Page background | `#faf8ff` |
| Top nav height | ~88px (including borders) |
| Max content width | 1400px |
| Left panel width | Fluid (1fr) |
| Right panel width | 360px fixed (desktop) |
| Column gap | 16px |
| Panel border radius | 16px |
| Timer badge height | ~30px |
| Progress bar height | 6px |
| Button height | ~36px (py-2) |
| Tab switcher height | ~40px |
| Radio button size | 16×16px |
| Option card padding | 12px |
| Textarea min-height (rationale) | 160px |
| Textarea min-height (notes) | 260px |

---

## 13. Z-Index Stacking

```css
Top navigation: z-40
Modal overlays (if any): z-50
Default content: z-auto
```

---

## 14. Fonts

```css
/* Sans-serif (body text) */
font-family: 'DM Sans', ui-sans-serif, system-ui, sans-serif;

/* All text uses the same font family in this page */
/* No special heading font (Fustat) used here */
```

---

## Implementation Checklist

- [ ] Page background: `#faf8ff`
- [ ] Top nav: Sticky, frosted glass effect (white/90 + blur 24px)
- [ ] Question title: 20px, semibold, zinc-900
- [ ] Timer badge: Pill shape, 12px text, clock icon 14px
- [ ] Progress bar: 6px height, corePurple fill, 260px width
- [ ] Navigation buttons: 12px radius, proper hover states
- [ ] Two-column grid: Fluid left + 360px right (desktop)
- [ ] Panel height: `calc(100vh - 88px)`
- [ ] Constraint cards: 2-column grid on desktop
- [ ] Radio options: 16px radios, corePurple accent
- [ ] Selected option: Purple border + lavender background
- [ ] Textareas: 16px radius, purple focus ring
- [ ] Tab switcher: Active tab has white bg + shadow
- [ ] All spacing: Exact rem values as specified
- [ ] All colors: Exact hex values as specified
- [ ] Hover states: Correct transitions (150ms)

---

**This document contains EVERY visual detail needed to recreate the workspace page pixel-perfectly.**
