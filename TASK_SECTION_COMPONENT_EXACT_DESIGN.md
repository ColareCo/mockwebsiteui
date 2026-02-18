# Task Section Component - Exact Design Specifications

**Component**: Task section with meta cards (Expected response time + What we evaluate)

**Purpose**: Displays the main task description and evaluation criteria

**Location**: Left panel (Design Brief) in workspace page, appears after Context & Constraints and Drawing sections

---

## Complete Component Preview

```
┌─────────────────────────────────────────────────────────┐
│  Task                                                   │
│  Choose the fabrication approach you would use first to │
│  validate geometry and motion within the constraints.   │
│  Then provide a short rationale.                        │
│  ─────────────────────────────────────────────────────  │
│  ┌─────────────────────┐  ┌─────────────────────┐     │
│  │ Expected response   │  │ What we evaluate    │     │
│  │ time                │  │                     │     │
│  │ ~2–4 minutes        │  │ Tradeoffs, iteration│     │
│  │                     │  │ plan, clarity       │     │
│  └─────────────────────┘  └─────────────────────┘     │
└─────────────────────────────────────────────────────────┘
```

---

## Outer Container

```jsx
<div className="rounded-2xl border border-zinc-200 p-4">
  {/* Task heading */}
  {/* Task description */}
  {/* Divider */}
  {/* Meta cards grid */}
</div>
```

### Complete CSS

```css
border-radius: 1rem; /* 16px */
border: 1px solid #e4e4e7; /* zinc-200 */
padding: 1rem; /* 16px all sides */
background-color: transparent; /* No background - inherits from page */
```

**Container specifications**:
- Border radius: 16px (large, rounded corners)
- Border: 1px solid `#e4e4e7` (zinc-200)
- Padding: 16px on all sides
- Background: Transparent (no fill)
- Margin: Inherits from parent spacing (typically 20px from previous section)

---

## Task Heading

```jsx
<div className="text-sm font-semibold text-zinc-900">Task</div>
```

### Complete CSS

```css
font-size: 0.875rem; /* 14px */
font-weight: 600; /* Semibold */
color: #18181b; /* zinc-900 */
line-height: 1.25rem; /* 20px */
```

**Heading specifications**:
- Font size: 14px
- Font weight: 600 (semibold)
- Color: `#18181b` (zinc-900 - darkest gray)
- Line height: 20px
- Margin bottom: 0 (description has margin top)

**Exact text**: "Task"

---

## Task Description

```jsx
<p className="mt-1 text-sm text-zinc-600">
  Choose the fabrication approach you would use first to validate geometry and motion within the constraints. Then provide a short rationale.
</p>
```

### Complete CSS

```css
margin-top: 0.25rem; /* 4px from heading */
font-size: 0.875rem; /* 14px */
color: #52525b; /* zinc-600 */
line-height: 1.25rem; /* 20px */
font-weight: 400; /* Normal */
```

**Description specifications**:
- Margin top: 4px from heading
- Font size: 14px (same size as heading but normal weight)
- Font weight: 400 (normal - lighter than heading)
- Color: `#52525b` (zinc-600 - medium gray, lighter than heading)
- Line height: 20px (allows multi-line wrapping)

**Text wraps naturally** when exceeding container width

**Example task descriptions**:
```
"Choose the fabrication approach you would use first to validate geometry and motion within the constraints. Then provide a short rationale."

"Select the tolerance strategy you would generally prefer for mating features, and explain your reasoning."

"Record a verbal response explaining your approach, prioritization, and accepted trade-offs."
```

---

## Divider Line

```jsx
<div className="my-4 border-t border-zinc-200" />
```

### Complete CSS

```css
margin-top: 1rem; /* 16px from description */
margin-bottom: 1rem; /* 16px before meta cards */
border-top: 1px solid #e4e4e7; /* zinc-200 */
height: 0; /* Just a line */
```

**Divider specifications**:
- Type: Horizontal line (border-top only)
- Thickness: 1px
- Color: `#e4e4e7` (zinc-200 - matches outer border)
- Margin: 16px top and bottom
- Creates visual separation between task description and meta cards

---

## Meta Cards Grid

```jsx
<div className="grid gap-3 sm:grid-cols-2">
  {/* Meta card 1 */}
  {/* Meta card 2 */}
</div>
```

### Complete CSS

```css
display: grid;
gap: 0.75rem; /* 12px between cards */
grid-template-columns: repeat(1, minmax(0, 1fr)); /* Mobile: 1 column */

/* Tablet/Desktop (≥640px) */
@media (min-width: 640px) {
  grid-template-columns: repeat(2, minmax(0, 1fr)); /* 2 equal columns */
}
```

**Grid specifications**:
- Gap: 12px (both horizontal and vertical)
- Mobile (< 640px): Single column (cards stack)
- Desktop (≥ 640px): 2 equal columns (50/50 split)
- Margin: 16px from divider

---

## Individual Meta Card

```jsx
<div className="rounded-xl border border-zinc-200 bg-white p-3">
  <div className="text-xs font-medium text-zinc-700">Expected response time</div>
  <div className="mt-1 text-sm text-zinc-600">~2–4 minutes</div>
</div>
```

### Complete CSS

```css
/* Card container */
border-radius: 0.75rem; /* 12px */
border: 1px solid #e4e4e7; /* zinc-200 */
background-color: #ffffff; /* Pure white */
padding: 0.75rem; /* 12px all sides */
```

**Card container specifications**:
- Border radius: 12px (rounded corners)
- Border: 1px solid `#e4e4e7` (zinc-200)
- Background: `#ffffff` (pure white)
- Padding: 12px on all sides
- No shadow (flat design)
- Height: Auto (content-driven)

---

### Meta Card Label

```jsx
<div className="text-xs font-medium text-zinc-700">Expected response time</div>
```

```css
font-size: 0.75rem; /* 12px */
font-weight: 500; /* Medium */
color: #3f3f46; /* zinc-700 */
line-height: 1rem; /* 16px */
```

**Label specifications**:
- Font size: 12px
- Font weight: 500 (medium)
- Color: `#3f3f46` (zinc-700 - dark gray)
- Line height: 16px

**Example labels**:
- "Expected response time"
- "What we evaluate"

---

### Meta Card Value

```jsx
<div className="mt-1 text-sm text-zinc-600">~2–4 minutes</div>
```

```css
margin-top: 0.25rem; /* 4px from label */
font-size: 0.875rem; /* 14px */
color: #52525b; /* zinc-600 */
line-height: 1.25rem; /* 20px */
font-weight: 400; /* Normal */
```

**Value specifications**:
- Margin top: 4px from label
- Font size: 14px (2px larger than label)
- Font weight: 400 (normal)
- Color: `#52525b` (zinc-600 - medium gray, lighter than label)
- Line height: 20px (allows multi-line text)

**Example values**:
- "~2–4 minutes"
- "~3–5 minutes"
- "Tradeoffs, iteration plan, clarity"
- "Trade-off reasoning, design prioritization, clarity"
- "DFM understanding, tradeoff reasoning"

---

## Complete Color Reference

```css
/* Container */
--container-border: #e4e4e7;     /* zinc-200 */
--container-bg: transparent;      /* No background */

/* Task Heading */
--heading-text: #18181b;         /* zinc-900 */

/* Task Description */
--description-text: #52525b;     /* zinc-600 */

/* Divider */
--divider-color: #e4e4e7;        /* zinc-200 */

/* Meta Cards */
--card-border: #e4e4e7;          /* zinc-200 */
--card-bg: #ffffff;              /* Pure white */
--card-label-text: #3f3f46;      /* zinc-700 */
--card-value-text: #52525b;      /* zinc-600 */
```

**Exact hex values**:
- `#e4e4e7` = rgb(228, 228, 231) - zinc-200
- `#18181b` = rgb(24, 24, 27) - zinc-900
- `#52525b` = rgb(82, 82, 91) - zinc-600
- `#ffffff` = rgb(255, 255, 255) - white
- `#3f3f46` = rgb(63, 63, 70) - zinc-700

---

## Typography Scale

```css
/* Task Heading */
Font size: 14px (0.875rem)
Font weight: 600 (semibold)
Line height: 20px (1.25rem)
Color: #18181b

/* Task Description */
Font size: 14px (0.875rem)
Font weight: 400 (normal)
Line height: 20px (1.25rem)
Color: #52525b

/* Meta Card Label */
Font size: 12px (0.75rem)
Font weight: 500 (medium)
Line height: 16px (1rem)
Color: #3f3f46

/* Meta Card Value */
Font size: 14px (0.875rem)
Font weight: 400 (normal)
Line height: 20px (1.25rem)
Color: #52525b
```

---

## Spacing Breakdown

```css
/* Outer container */
Padding: 16px all sides
Border radius: 16px
Border width: 1px

/* Heading to description */
Margin: 4px

/* Description to divider */
Margin: 16px

/* Divider height */
1px line

/* Divider to meta cards */
Margin: 16px

/* Meta cards grid */
Gap: 12px (between cards)

/* Meta card (inner) */
Padding: 12px all sides
Border radius: 12px
Border width: 1px

/* Label to value */
Margin: 4px
```

**Visual spacing hierarchy**:
```
Container (16px padding)
  ├── Heading "Task"
  ├── (4px gap)
  ├── Description text
  ├── (16px gap)
  ├── Divider line (1px)
  ├── (16px gap)
  └── Meta Cards Grid (12px gap)
      ├── Card 1 (12px padding)
      │   ├── Label
      │   ├── (4px gap)
      │   └── Value
      └── Card 2 (12px padding)
          ├── Label
          ├── (4px gap)
          └── Value
```

---

## Border & Border Radius Reference

```css
/* Outer container */
border-radius: 16px;  /* rounded-2xl */
border: 1px solid;

/* Meta cards */
border-radius: 12px;  /* rounded-xl */
border: 1px solid;

/* Divider */
border-top: 1px solid;
```

---

## Responsive Behavior

### Mobile (< 640px)
```
┌─────────────────────┐
│ Task                │
│ Description text... │
│ ───────────────────  │
│ ┌─────────────────┐ │
│ │ Expected response│ │
│ │ time             │ │
│ │ ~2–4 minutes     │ │
│ └─────────────────┘ │
│                     │
│ ┌─────────────────┐ │
│ │ What we evaluate│ │
│ │ Tradeoffs,      │ │
│ │ iteration plan, │ │
│ │ clarity         │ │
│ └─────────────────┘ │
└─────────────────────┘
```
**Meta cards stack vertically**

### Desktop (≥ 640px)
```
┌──────────────────────────────────────────┐
│ Task                                     │
│ Description text...                      │
│ ────────────────────────────────────────  │
│ ┌────────────────┐  ┌────────────────┐  │
│ │ Expected       │  │ What we        │  │
│ │ response time  │  │ evaluate       │  │
│ │ ~2–4 minutes   │  │ Tradeoffs,     │  │
│ │                │  │ iteration plan,│  │
│ │                │  │ clarity        │  │
│ └────────────────┘  └────────────────┘  │
└──────────────────────────────────────────┘
```
**Meta cards side by side in equal width columns**

**Breakpoint**: `640px` (Tailwind `sm:`)

---

## Complete Component Structure

```jsx
<div className="rounded-2xl border border-zinc-200 p-4">
  
  {/* Task Heading */}
  <div className="text-sm font-semibold text-zinc-900">Task</div>
  
  {/* Task Description */}
  <p className="mt-1 text-sm text-zinc-600">
    Choose the fabrication approach you would use first to validate geometry and motion within the constraints. Then provide a short rationale.
  </p>
  
  {/* Divider */}
  <div className="my-4 border-t border-zinc-200" />
  
  {/* Meta Cards Grid */}
  <div className="grid gap-3 sm:grid-cols-2">
    
    {/* Card 1: Expected Response Time */}
    <div className="rounded-xl border border-zinc-200 bg-white p-3">
      <div className="text-xs font-medium text-zinc-700">Expected response time</div>
      <div className="mt-1 text-sm text-zinc-600">~2–4 minutes</div>
    </div>
    
    {/* Card 2: What We Evaluate */}
    <div className="rounded-xl border border-zinc-200 bg-white p-3">
      <div className="text-xs font-medium text-zinc-700">What we evaluate</div>
      <div className="mt-1 text-sm text-zinc-600">Tradeoffs, iteration plan, clarity</div>
    </div>
    
  </div>
</div>
```

---

## Section 1: Task Heading

### Complete CSS

```css
font-size: 0.875rem; /* 14px */
font-weight: 600; /* Semibold */
color: #18181b; /* zinc-900 */
line-height: 1.25rem; /* 20px */
margin-bottom: 0; /* Description has margin-top */
```

**Exact specifications**:
- Font: 14px, semibold (600)
- Color: `#18181b` (darkest text color)
- Line height: 20px
- Always exactly "Task" (no variation)

---

## Section 2: Task Description

### Complete CSS

```css
margin-top: 0.25rem; /* 4px from heading */
font-size: 0.875rem; /* 14px */
color: #52525b; /* zinc-600 */
line-height: 1.25rem; /* 20px */
font-weight: 400; /* Normal */
```

**Description specifications**:
- Margin top: 4px (tight spacing from heading)
- Font: 14px, normal weight (same size as heading but lighter)
- Color: `#52525b` (zinc-600 - medium gray)
- Line height: 20px (comfortable for reading)
- Text wraps: Naturally wraps to multiple lines if needed

**Example descriptions**:
```
"Choose the fabrication approach you would use first to validate geometry and motion within the constraints. Then provide a short rationale."

"Select the tolerance strategy you would generally prefer for mating features, and explain your reasoning."

"Record a verbal response explaining your approach, prioritization, and accepted trade-offs."

"Model the pneumatic nozzle component shown in the attached engineering drawing. Create a CAD part that matches the specified geometry, dimensions, and design intent."
```

---

## Section 3: Divider

### Complete CSS

```css
margin-top: 1rem; /* 16px from description */
margin-bottom: 1rem; /* 16px before meta cards */
border-top: 1px solid #e4e4e7; /* zinc-200 */
border-bottom: 0;
border-left: 0;
border-right: 0;
height: 0;
width: 100%;
```

**Divider specifications**:
- Type: Top border only (horizontal line)
- Thickness: 1px
- Color: `#e4e4e7` (zinc-200)
- Margin: 16px top and bottom (equal spacing)
- Width: Full width (stretches across container)

**Visual purpose**: Creates clear separation between task description and evaluation criteria

---

## Section 4: Meta Cards Grid

### Grid Container

```css
display: grid;
gap: 0.75rem; /* 12px between cards */
grid-template-columns: repeat(1, minmax(0, 1fr)); /* Mobile: 1 column */

/* Tablet/Desktop (≥640px) */
@media (min-width: 640px) {
  grid-template-columns: repeat(2, minmax(0, 1fr)); /* 2 equal columns */
}
```

**Grid specifications**:
- Gap: 12px (horizontal and vertical)
- Mobile: Stacked single column
- Desktop: Side-by-side equal columns
- Breakpoint: 640px

---

### Meta Card 1: Expected Response Time

```jsx
<div className="rounded-xl border border-zinc-200 bg-white p-3">
  <div className="text-xs font-medium text-zinc-700">Expected response time</div>
  <div className="mt-1 text-sm text-zinc-600">~2–4 minutes</div>
</div>
```

#### Card Container CSS

```css
border-radius: 0.75rem; /* 12px */
border: 1px solid #e4e4e7; /* zinc-200 */
background-color: #ffffff; /* Pure white */
padding: 0.75rem; /* 12px all sides */
```

#### Card Label CSS

```css
font-size: 0.75rem; /* 12px */
font-weight: 500; /* Medium */
color: #3f3f46; /* zinc-700 */
line-height: 1rem; /* 16px */
```

**Label text**: "Expected response time"

#### Card Value CSS

```css
margin-top: 0.25rem; /* 4px from label */
font-size: 0.875rem; /* 14px */
color: #52525b; /* zinc-600 */
line-height: 1.25rem; /* 20px */
font-weight: 400; /* Normal */
```

**Example values**:
- "~2–4 minutes"
- "~2–3 minutes"
- "~3–5 minutes"

**Format**: Always starts with `~` (approximately), uses en-dash `–` between numbers

---

### Meta Card 2: What We Evaluate

```jsx
<div className="rounded-xl border border-zinc-200 bg-white p-3">
  <div className="text-xs font-medium text-zinc-700">What we evaluate</div>
  <div className="mt-1 text-sm text-zinc-600">Tradeoffs, iteration plan, clarity</div>
</div>
```

**Identical CSS to Card 1** (same structure, same styling)

**Label text**: "What we evaluate"

**Example values**:
- "Tradeoffs, iteration plan, clarity"
- "DFM understanding, tradeoff reasoning"
- "Trade-off reasoning, design prioritization, clarity"

**Format**: Comma-separated list of evaluation criteria, typically 2-4 items

---

## Complete Spacing Reference

```css
/* Outer container */
Padding: 16px all sides
Border radius: 16px
Border: 1px

/* Internal spacing */
Heading to description: 4px
Description to divider: 16px
Divider thickness: 1px
Divider to cards: 16px

/* Card grid */
Gap between cards: 12px

/* Individual cards */
Padding: 12px all sides
Border radius: 12px
Border: 1px

/* Card internals */
Label to value: 4px
```

---

## Complete Color Reference

```css
/* Outer Container */
border: #e4e4e7 (zinc-200)
background: transparent

/* Task Heading */
color: #18181b (zinc-900)

/* Task Description */
color: #52525b (zinc-600)

/* Divider */
color: #e4e4e7 (zinc-200)

/* Meta Cards */
border: #e4e4e7 (zinc-200)
background: #ffffff (white)
label: #3f3f46 (zinc-700)
value: #52525b (zinc-600)
```

**All colors in RGB**:
- `#e4e4e7` = rgb(228, 228, 231)
- `#18181b` = rgb(24, 24, 27)
- `#52525b` = rgb(82, 82, 91)
- `#ffffff` = rgb(255, 255, 255)
- `#3f3f46` = rgb(63, 63, 70)

---

## Typography Reference

```css
/* Task heading */
14px, semibold (600), line-height 20px

/* Task description */
14px, normal (400), line-height 20px

/* Meta card labels */
12px, medium (500), line-height 16px

/* Meta card values */
14px, normal (400), line-height 20px
```

**Font weight progression**:
- Heading: 600 (boldest)
- Card labels: 500 (medium)
- Description & values: 400 (lightest)

**Color progression** (darkest to lightest):
- Heading: zinc-900 (`#18181b`) - darkest
- Card labels: zinc-700 (`#3f3f46`) - dark
- Description & values: zinc-600 (`#52525b`) - medium

---

## State Variations

**This component has no interactive states** - it's display-only

- No hover effects
- No click interactions
- No active/selected states
- Static information display

**Note**: The "Zoom / annotate" button in the Drawing section above this component DOES have hover states, but that's a separate component.

---

## Content Guidelines

### Task Description Best Practices:
- **Clear action**: Start with imperative verb ("Choose", "Select", "Record", "Model")
- **Specific**: Define exactly what the candidate should do
- **Context**: Briefly mention constraints or requirements if critical
- **Length**: 1-3 sentences, 10-30 words
- **Tone**: Professional, direct, actionable

**Good examples**:
✓ "Choose the fabrication approach you would use first to validate geometry and motion within the constraints. Then provide a short rationale."
✓ "Select the tolerance strategy you would generally prefer for mating features, and explain your reasoning."

**Bad examples**:
✗ "Pick something." (too vague)
✗ "You need to think about which fabrication method would be most appropriate for validating the geometry and the range of motion of the gripper component while also considering all of the various constraints that have been outlined above in the constraints section." (too long, too wordy)

### Meta Card Value Guidelines:

**Expected response time**:
- Format: `~X–Y minutes`
- Always use tilde (~) for "approximately"
- Use en-dash (–) not hyphen (-)
- Examples: "~2–4 minutes", "~3–5 minutes"

**What we evaluate**:
- Format: Comma-separated list
- 2-4 evaluation criteria
- Keep each item short (1-3 words)
- Examples: "Tradeoffs, iteration plan, clarity", "DFM understanding, tradeoff reasoning"

---

## Implementation Checklist

- [ ] Outer container: 16px padding, 16px radius, transparent background
- [ ] Container border: 1px solid zinc-200
- [ ] Task heading: 14px semibold, zinc-900
- [ ] Task description: 14px normal, zinc-600, 4px margin top
- [ ] Divider: 1px horizontal line, zinc-200, 16px margin top/bottom
- [ ] Meta cards grid: 12px gap, 1 column mobile, 2 columns desktop (≥640px)
- [ ] Meta cards: White background, 12px padding, 12px radius
- [ ] Meta card border: 1px solid zinc-200
- [ ] Card labels: 12px medium, zinc-700
- [ ] Card values: 14px normal, zinc-600, 4px margin top
- [ ] No shadows
- [ ] No hover states
- [ ] Text wraps naturally in multi-line values

---

## Complete Copy-Paste Component (React/Tailwind)

```jsx
<div className="rounded-2xl border border-zinc-200 p-4">
  
  {/* Heading */}
  <div className="text-sm font-semibold text-zinc-900">Task</div>
  
  {/* Description */}
  <p className="mt-1 text-sm text-zinc-600">
    {taskDescription}
  </p>
  
  {/* Divider */}
  <div className="my-4 border-t border-zinc-200" />
  
  {/* Meta Cards */}
  <div className="grid gap-3 sm:grid-cols-2">
    
    {/* Expected Response Time */}
    <div className="rounded-xl border border-zinc-200 bg-white p-3">
      <div className="text-xs font-medium text-zinc-700">Expected response time</div>
      <div className="mt-1 text-sm text-zinc-600">{expectedTime}</div>
    </div>
    
    {/* What We Evaluate */}
    <div className="rounded-xl border border-zinc-200 bg-white p-3">
      <div className="text-xs font-medium text-zinc-700">What we evaluate</div>
      <div className="mt-1 text-sm text-zinc-600">{evaluationCriteria}</div>
    </div>
    
  </div>
</div>
```

---

## TypeScript Data Structure

```typescript
interface TaskMeta {
  description: string;      // Main task instruction
  expectedTime: string;     // e.g., "~2–4 minutes"
  evaluationCriteria: string; // e.g., "Tradeoffs, iteration plan, clarity"
}

// Example data
const taskMeta: TaskMeta = {
  description: "Choose the fabrication approach you would use first to validate geometry and motion within the constraints. Then provide a short rationale.",
  expectedTime: "~2–4 minutes",
  evaluationCriteria: "Tradeoffs, iteration plan, clarity"
};
```

---

## Real Content Examples

### Example 1: Robotic Gripper Question
```jsx
description: "Choose the fabrication approach you would use first to validate geometry and motion within the constraints. Then provide a short rationale."
expectedTime: "~2–4 minutes"
evaluationCriteria: "Tradeoffs, iteration plan, clarity"
```

### Example 2: DFM Question
```jsx
description: "Select the tolerance strategy you would generally prefer for mating features, and explain your reasoning."
expectedTime: "~2–3 minutes"
evaluationCriteria: "DFM understanding, tradeoff reasoning"
```

### Example 3: Voice Question
```jsx
description: "Record a verbal response explaining your approach, prioritization, and accepted trade-offs."
expectedTime: "~3–5 minutes"
evaluationCriteria: "Trade-off reasoning, design prioritization, clarity"
```

---

## Visual Design Principles

1. **Clear hierarchy**: Heading → Description → Meta cards
2. **Visual separation**: Divider line creates distinct sections
3. **Card contrast**: White cards on transparent container
4. **Typography scale**: 14px (heading/description) → 12px (meta labels) → 14px (meta values)
5. **Color contrast**: Dark heading → Medium description → Medium-dark labels → Medium values
6. **Responsive layout**: Stacks on mobile, side-by-side on desktop
7. **Consistent spacing**: 16px outer, 12px inner, 4px micro-spacing
8. **Clean design**: No shadows, no decorations, functional focus

---

## Exact Measurements Summary

| Element | Measurement |
|---------|-------------|
| Container padding | 16px |
| Container border radius | 16px |
| Container border | 1px solid |
| Heading font | 14px, weight 600 |
| Description font | 14px, weight 400 |
| Heading to description | 4px |
| Description to divider | 16px |
| Divider thickness | 1px |
| Divider to cards | 16px |
| Card grid gap | 12px |
| Card padding | 12px |
| Card border radius | 12px |
| Card border | 1px solid |
| Card label font | 12px, weight 500 |
| Card value font | 14px, weight 400 |
| Label to value | 4px |

---

## Actual Implementation Code from Mockup

### Complete JSX Code (from workspace/page.tsx)

```jsx
{/* Lines 578-592 from src/app/(dashboard)/tests/[testId]/preview/workspace/page.tsx */}

<div className="rounded-2xl border border-zinc-200 p-4">
  <div className="text-sm font-semibold text-zinc-900">Task</div>
  <p className="mt-1 text-sm text-zinc-600">{scenario.taskText}</p>
  <div className="my-4 border-t border-zinc-200" />
  <div className="grid gap-3 sm:grid-cols-2">
    <div className="rounded-xl border border-zinc-200 bg-white p-3">
      <div className="text-xs font-medium text-zinc-700">Expected response time</div>
      <div className="mt-1 text-sm text-zinc-600">{scenario.taskTimeMeta}</div>
    </div>
    <div className="rounded-xl border border-zinc-200 bg-white p-3">
      <div className="text-xs font-medium text-zinc-700">What we evaluate</div>
      <div className="mt-1 text-sm text-zinc-600">{scenario.taskEvalMeta}</div>
    </div>
  </div>
</div>
```

### Data Structure from Mockup

```typescript
// Type definitions (lines 7-29)
type McqConstraint = { k: string; v: string };

type McqScenario = {
  type: "mcq";
  id: string;
  title: string;
  skill: string;
  subtitle: string;
  description: string;
  constraints: McqConstraint[];
  imageUrl?: string;
  taskText: string;           // ← Used in Task section
  taskTimeMeta: string;       // ← Expected response time
  taskEvalMeta: string;       // ← What we evaluate
  optionPrompt: string;
  optionHint: string;
  options: McqOption[];
  rationalePlaceholder: string;
  rationaleHint: string;
  notePrompts: string[];
  badges?: string[];
};
```

### Real Data Examples from Mockup

**Scenario 1: Robotic Gripper (lines 66-97)**
```typescript
{
  taskText: "Choose the fabrication approach you would use first to validate geometry and motion within the constraints. Then provide a short rationale.",
  taskTimeMeta: "~2–4 minutes",
  taskEvalMeta: "Tradeoffs, iteration plan, clarity",
}
```

**Scenario 2: DFM Question (lines 98-126)**
```typescript
{
  taskText: "Select the tolerance strategy you would generally prefer for mating features, and explain your reasoning.",
  taskTimeMeta: "~2–3 minutes",
  taskEvalMeta: "DFM understanding, tradeoff reasoning",
}
```

**Voice Question (lines 141-158)**
```typescript
{
  taskText: "Record a verbal response explaining your approach, prioritization, and accepted trade-offs.",
  taskTimeMeta: "~3–5 minutes",
  taskEvalMeta: "Trade-off reasoning, design prioritization, clarity",
}
```

---

## Rendering Logic

The component is rendered identically for all question types (MCQ, Voice, Onshape):

```jsx
{/* Always shown in the Design Brief panel */}
<div className="rounded-2xl border border-zinc-200 p-4">
  <div className="text-sm font-semibold text-zinc-900">Task</div>
  <p className="mt-1 text-sm text-zinc-600">{scenario.taskText}</p>
  <div className="my-4 border-t border-zinc-200" />
  <div className="grid gap-3 sm:grid-cols-2">
    <div className="rounded-xl border border-zinc-200 bg-white p-3">
      <div className="text-xs font-medium text-zinc-700">Expected response time</div>
      <div className="mt-1 text-sm text-zinc-600">{scenario.taskTimeMeta}</div>
    </div>
    <div className="rounded-xl border border-zinc-200 bg-white p-3">
      <div className="text-xs font-medium text-zinc-700">What we evaluate</div>
      <div className="mt-1 text-sm text-zinc-600">{scenario.taskEvalMeta}</div>
    </div>
  </div>
</div>
```

**No conditional logic** - same structure for all question types, only data changes.

---

**This document now contains BOTH the design specifications AND the exact implementation code from the mockup!**

