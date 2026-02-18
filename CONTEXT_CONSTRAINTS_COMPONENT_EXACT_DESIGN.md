# Context & Constraints Component - Exact Design Specifications

**Component**: Context & Constraints section in question brief

**Purpose**: Displays key constraints and context information for a design problem in an organized card grid

**Location**: Left panel (Design Brief) in workspace page, appears after the main description paragraph

---

## Complete Component Preview

```
┌─────────────────────────────────────────────────────────┐
│  CONTEXT & CONSTRAINTS                                  │
│                                                         │
│  ┌───────────────────┐  ┌───────────────────┐         │
│  │ Timeline          │  │ Iteration         │         │
│  │ Validation must   │  │ Multiple design   │         │
│  │ be completed      │  │ iterations may be │         │
│  │ within 6 days     │  │ required          │         │
│  └───────────────────┘  └───────────────────┘         │
│                                                         │
│  ┌───────────────────┐  ┌───────────────────┐         │
│  │ Out of scope      │  │ Priority          │         │
│  │ Strength, wear    │  │ Low cost + fast   │         │
│  │ life, and surface │  │ turnaround over   │         │
│  │ finish            │  │ material fidelity │         │
│  └───────────────────┘  └───────────────────┘         │
└─────────────────────────────────────────────────────────┘
```

---

## Outer Container

```jsx
<div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-4">
  {/* Header label */}
  {/* Card grid */}
</div>
```

### Complete CSS

```css
border-radius: 1rem; /* 16px */
border: 1px solid #e4e4e7; /* zinc-200 */
background-color: rgba(250, 250, 250, 0.5); /* zinc-50 at 50% opacity */
padding: 1rem; /* 16px all sides */
```

**Container specifications**:
- Border radius: 16px (fully rounded corners)
- Border: 1px solid `#e4e4e7` (zinc-200)
- Background: Semi-transparent light gray `rgba(250, 250, 250, 0.5)`
  - Base color: `#fafafa` (zinc-50)
  - Opacity: 50%
  - RGB: `rgba(250, 250, 250, 0.5)`
- Padding: 16px on all sides

**Visual effect**: Light gray background with slight transparency creates subtle depth

---

## Header Label

```jsx
<div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
  Context & constraints
</div>
```

### Complete CSS

```css
font-size: 0.75rem; /* 12px */
font-weight: 600; /* Semibold */
text-transform: uppercase;
letter-spacing: 0.025em; /* 0.3px at 12px */
color: #71717a; /* zinc-500 */
line-height: 1rem; /* 16px */
```

**Label specifications**:
- Font size: 12px
- Font weight: 600 (semibold)
- Transform: UPPERCASE
- Letter spacing: 0.3px (wide spacing)
- Color: `#71717a` (zinc-500 - medium gray)
- Line height: 16px

**Exact text**: "CONTEXT & CONSTRAINTS" (all caps)

---

## Card Grid Container

```jsx
<div className="mt-3 grid gap-3 sm:grid-cols-2">
  {/* Constraint cards */}
</div>
```

### Complete CSS

```css
margin-top: 0.75rem; /* 12px from header label */
display: grid;
gap: 0.75rem; /* 12px between cards */
grid-template-columns: repeat(1, minmax(0, 1fr)); /* Mobile: 1 column */

/* Tablet/Desktop (≥640px) */
@media (min-width: 640px) {
  grid-template-columns: repeat(2, minmax(0, 1fr)); /* 2 equal columns */
}
```

**Grid specifications**:
- Margin top: 12px from label
- Gap: 12px between cards (horizontal and vertical)
- Mobile (< 640px): Single column (cards stack vertically)
- Desktop (≥ 640px): 2 equal columns (50/50 split)

**Visual layout**:
- Mobile: All cards stacked in one column
- Desktop: Cards arranged in 2-column grid with equal widths

---

## Individual Constraint Card

```jsx
<div className="rounded-xl border border-zinc-200 bg-white p-3">
  <div className="text-xs font-medium text-zinc-700">Timeline</div>
  <div className="mt-1 text-sm text-zinc-600">Validation must be completed within 6 days</div>
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
- Background: `#ffffff` (pure white - contrasts with outer container)
- Padding: 12px on all sides
- No shadow (flat design)

---

### Card Key (Label)

```jsx
<div className="text-xs font-medium text-zinc-700">Timeline</div>
```

```css
font-size: 0.75rem; /* 12px */
font-weight: 500; /* Medium */
color: #3f3f46; /* zinc-700 */
line-height: 1rem; /* 16px */
```

**Key specifications**:
- Font size: 12px
- Font weight: 500 (medium - slightly bolder than normal)
- Color: `#3f3f46` (zinc-700 - dark gray)
- Line height: 16px
- Margin bottom: 0 (value has margin top)

**Example keys**: "Timeline", "Iteration", "Out of scope", "Priority", "Size", "Sealing", "Preload", "Context", "Goal"

---

### Card Value (Description)

```jsx
<div className="mt-1 text-sm text-zinc-600">
  Validation must be completed within 6 days
</div>
```

```css
margin-top: 0.25rem; /* 4px from key */
font-size: 0.875rem; /* 14px */
color: #52525b; /* zinc-600 */
line-height: 1.25rem; /* 20px */
font-weight: 400; /* Normal */
```

**Value specifications**:
- Margin top: 4px from key
- Font size: 14px (2px larger than key)
- Font weight: 400 (normal)
- Color: `#52525b` (zinc-600 - medium-dark gray, slightly lighter than key)
- Line height: 20px (provides good spacing for multi-line text)

**Multi-line behavior**: Text wraps naturally when exceeding card width, maintaining 20px line height

---

## Example Constraint Cards (Complete Set)

### Example 1: Robotic Gripper Question

```
Card 1:
  Key: "Timeline"
  Value: "Validation must be completed within 6 days"

Card 2:
  Key: "Iteration"
  Value: "Multiple design iterations may be required"

Card 3:
  Key: "Out of scope"
  Value: "Strength, wear life, and surface finish"

Card 4:
  Key: "Priority"
  Value: "Low cost + fast turnaround over material fidelity"
```

### Example 2: Voice Question (Thermal-Accuracy)

```
Card 1:
  Key: "Size"
  Value: "Joint size cannot increase"

Card 2:
  Key: "Sealing"
  Value: "Sealing cannot be compromised"

Card 3:
  Key: "Preload"
  Value: "Bearing preload is already near allowable limits"
```

### Example 3: DFM Question

```
Card 1:
  Key: "Context"
  Value: "Mating features (e.g. shaft/hole, bolt/bore)"

Card 2:
  Key: "Goal"
  Value: "Balance manufacturability with required function"

Card 3:
  Key: "Priority"
  Value: "Apply Design for Manufacturability (DFM) principles"
```

---

## Complete Color Reference

```css
/* Container */
--container-border: #e4e4e7;           /* zinc-200 - Border */
--container-bg: rgba(250,250,250,0.5); /* zinc-50 at 50% - Background */

/* Header Label */
--label-text: #71717a;                 /* zinc-500 - Gray text */

/* Constraint Cards */
--card-border: #e4e4e7;                /* zinc-200 - Border */
--card-bg: #ffffff;                    /* Pure white - Background */
--card-key-text: #3f3f46;              /* zinc-700 - Dark gray */
--card-value-text: #52525b;            /* zinc-600 - Medium gray */
```

**Exact color values**:
- Container border: `#e4e4e7` = rgb(228, 228, 231)
- Container background: `rgba(250, 250, 250, 0.5)` = zinc-50 at 50%
- Label text: `#71717a` = rgb(113, 113, 122)
- Card border: `#e4e4e7` = rgb(228, 228, 231)
- Card background: `#ffffff` = rgb(255, 255, 255)
- Card key: `#3f3f46` = rgb(63, 63, 70)
- Card value: `#52525b` = rgb(82, 82, 91)

---

## Typography Scale

```css
/* Header Label */
Font size: 12px (0.75rem)
Font weight: 600 (semibold)
Line height: 16px (1rem)
Letter spacing: 0.3px (0.025em)
Transform: uppercase
Color: #71717a

/* Card Key (Label) */
Font size: 12px (0.75rem)
Font weight: 500 (medium)
Line height: 16px (1rem)
Color: #3f3f46

/* Card Value (Description) */
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

/* Header to grid */
Margin: 12px

/* Grid gap */
Between cards: 12px (both horizontal and vertical)

/* Card (inner) */
Padding: 12px all sides
Border radius: 12px
Border width: 1px

/* Key to value */
Margin: 4px
```

**Complete spacing hierarchy**:
```
Container (16px padding)
  ├── Label
  ├── (12px gap)
  └── Grid (12px gap between cards)
      ├── Card (12px padding)
      │   ├── Key
      │   ├── (4px gap)
      │   └── Value
      └── Card (12px padding)
          ├── Key
          ├── (4px gap)
          └── Value
```

---

## Responsive Behavior

### Mobile (< 640px)
```
┌─────────────────────┐
│ CONTEXT & CONSTRAINTS│
│                     │
│ ┌─────────────────┐ │
│ │ Timeline        │ │
│ │ Value here...   │ │
│ └─────────────────┘ │
│                     │
│ ┌─────────────────┐ │
│ │ Iteration       │ │
│ │ Value here...   │ │
│ └─────────────────┘ │
│                     │
│ ┌─────────────────┐ │
│ │ Out of scope    │ │
│ │ Value here...   │ │
│ └─────────────────┘ │
│                     │
│ ┌─────────────────┐ │
│ │ Priority        │ │
│ │ Value here...   │ │
│ └─────────────────┘ │
└─────────────────────┘
```
**Cards stack vertically in one column**

### Desktop (≥ 640px)
```
┌─────────────────────────────────────────┐
│ CONTEXT & CONSTRAINTS                   │
│                                         │
│ ┌─────────────┐  ┌─────────────┐       │
│ │ Timeline    │  │ Iteration   │       │
│ │ Value...    │  │ Value...    │       │
│ └─────────────┘  └─────────────┘       │
│                                         │
│ ┌─────────────┐  ┌─────────────┐       │
│ │ Out of scope│  │ Priority    │       │
│ │ Value...    │  │ Value...    │       │
│ └─────────────┘  └─────────────┘       │
└─────────────────────────────────────────┘
```
**Cards arranged in 2 equal columns**

**Breakpoint**: `640px` (Tailwind `sm:`)

---

## Border & Border Radius Reference

```css
/* Outer container */
border-radius: 16px;  /* rounded-2xl */
border: 1px solid;

/* Constraint cards */
border-radius: 12px;  /* rounded-xl */
border: 1px solid;
```

**Visual hierarchy**:
- Outer container: Larger radius (16px) for softer look
- Inner cards: Smaller radius (12px) for subtle contrast

---

## State Variations

**This component has no interactive states** - it's display-only

- No hover effects
- No click interactions
- No disabled states
- Static display of information

---

## Content Guidelines

### Key (Label) Best Practices:
- **Short & concise**: 1-3 words maximum
- **Capitalize first letter**: "Timeline" not "timeline"
- **No punctuation**: No colons or periods
- **Descriptive**: Clear category name

**Good examples**: "Timeline", "Priority", "Goal", "Context", "Size"  
**Bad examples**: "Timeline:", "the timeline", "TIMELINE", "What is the timeline?"

### Value (Description) Best Practices:
- **Complete sentences or phrases**: Can be 5-20 words
- **Specific & actionable**: Clear constraint or requirement
- **Natural sentence case**: First letter capitalized, rest lowercase (except proper nouns)
- **End without punctuation**: No periods (unless multiple sentences)

**Good examples**:
- "Validation must be completed within 6 days"
- "Multiple design iterations may be required"
- "Low cost + fast turnaround over material fidelity"

**Bad examples**:
- "6 days" (too short, lacks context)
- "The validation phase of the project must be completed within a six-day timeline" (too verbose)

---

## Accessibility Considerations

```html
<!-- Semantic HTML structure -->
<div role="region" aria-label="Context and Constraints">
  <div>Context & constraints</div>
  <div>
    <div>
      <div>Timeline</div>
      <div>Validation must be completed within 6 days</div>
    </div>
    <!-- More cards -->
  </div>
</div>
```

**Accessibility features**:
- Semantic heading structure (can use `<h3>` or `<h4>` for label)
- Clear visual hierarchy with size/color contrast
- Sufficient color contrast ratios:
  - Label (zinc-500 on zinc-50): 4.5:1 ✓
  - Key (zinc-700 on white): 10.4:1 ✓
  - Value (zinc-600 on white): 7.1:1 ✓

---

## Implementation Checklist

- [ ] Outer container: 16px padding, 16px radius, zinc-50/50 background
- [ ] Container border: 1px solid zinc-200
- [ ] Header label: 12px semibold, UPPERCASE, wide tracking, zinc-500
- [ ] Grid: 12px gap, 1 column mobile, 2 columns desktop (≥640px)
- [ ] Cards: Pure white background, 12px padding, 12px radius
- [ ] Card border: 1px solid zinc-200
- [ ] Card key: 12px medium weight, zinc-700
- [ ] Card value: 14px normal weight, zinc-600, 4px margin top
- [ ] Value line height: 20px (allows multi-line wrapping)
- [ ] Responsive breakpoint: 640px for 2-column layout
- [ ] No shadows, no hover states, no interactions

---

## Complete Copy-Paste Component (React/Tailwind)

```jsx
<div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-4">
  {/* Header */}
  <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
    Context & constraints
  </div>
  
  {/* Card Grid */}
  <div className="mt-3 grid gap-3 sm:grid-cols-2">
    
    {/* Card 1 */}
    <div className="rounded-xl border border-zinc-200 bg-white p-3">
      <div className="text-xs font-medium text-zinc-700">Timeline</div>
      <div className="mt-1 text-sm text-zinc-600">
        Validation must be completed within 6 days
      </div>
    </div>
    
    {/* Card 2 */}
    <div className="rounded-xl border border-zinc-200 bg-white p-3">
      <div className="text-xs font-medium text-zinc-700">Iteration</div>
      <div className="mt-1 text-sm text-zinc-600">
        Multiple design iterations may be required
      </div>
    </div>
    
    {/* Card 3 */}
    <div className="rounded-xl border border-zinc-200 bg-white p-3">
      <div className="text-xs font-medium text-zinc-700">Out of scope</div>
      <div className="mt-1 text-sm text-zinc-600">
        Strength, wear life, and surface finish
      </div>
    </div>
    
    {/* Card 4 */}
    <div className="rounded-xl border border-zinc-200 bg-white p-3">
      <div className="text-xs font-medium text-zinc-700">Priority</div>
      <div className="mt-1 text-sm text-zinc-600">
        Low cost + fast turnaround over material fidelity
      </div>
    </div>
    
  </div>
</div>
```

---

## Dynamic Data Structure

```typescript
interface Constraint {
  k: string;  // Key (label)
  v: string;  // Value (description)
}

const constraints: Constraint[] = [
  { k: "Timeline", v: "Validation must be completed within 6 days" },
  { k: "Iteration", v: "Multiple design iterations may be required" },
  { k: "Out of scope", v: "Strength, wear life, and surface finish" },
  { k: "Priority", v: "Low cost + fast turnaround over material fidelity" },
];

// Render
{constraints.map((c) => (
  <div key={c.k} className="rounded-xl border border-zinc-200 bg-white p-3">
    <div className="text-xs font-medium text-zinc-700">{c.k}</div>
    <div className="mt-1 text-sm text-zinc-600">{c.v}</div>
  </div>
))}
```

---

## Visual Design Principles

1. **Hierarchy**: Label → Cards → Key → Value
2. **Contrast**: Light container background vs. white cards creates depth
3. **Spacing**: Consistent 12px rhythm (gap, padding, radius)
4. **Typography**: Clear size difference (12px key, 14px value)
5. **Color**: Subtle gray scale progression for visual hierarchy
6. **Layout**: Responsive grid adapts to screen size
7. **Simplicity**: No shadows or decorative elements, clean and functional

---

## Actual Implementation Code from Mockup

### Complete JSX Code (from workspace/page.tsx)

```jsx
{/* Lines 535-545 from src/app/(dashboard)/tests/[testId]/preview/workspace/page.tsx */}

<div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-4">
  <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Context & constraints</div>
  <div className="mt-3 grid gap-3 sm:grid-cols-2">
    {scenario.constraints.map((c) => (
      <div key={c.k} className="rounded-xl border border-zinc-200 bg-white p-3">
        <div className="text-xs font-medium text-zinc-700">{c.k}</div>
        <div className="mt-1 text-sm text-zinc-600">{c.v}</div>
      </div>
    ))}
  </div>
</div>
```

### Data Structure from Mockup

```typescript
// Type definition (line 8)
type McqConstraint = { k: string; v: string };

// Used in scenario type
interface Scenario {
  // ... other fields
  constraints: McqConstraint[];  // ← Array of constraint objects
  // ... other fields
}
```

### Real Data Examples from Mockup

**Scenario 1: Robotic Gripper (lines 74-79)**
```typescript
constraints: [
  { k: "Timeline", v: "Validation must be completed within 6 days" },
  { k: "Iteration", v: "Multiple design iterations may be required" },
  { k: "Out of scope", v: "Strength, wear life, and surface finish" },
  { k: "Priority", v: "Low cost + fast turnaround over material fidelity" },
]
```

**Scenario 2: DFM Question (lines 106-110)**
```typescript
constraints: [
  { k: "Context", v: "Mating features (e.g. shaft/hole, bolt/bore)" },
  { k: "Goal", v: "Balance manufacturability with required function" },
  { k: "Priority", v: "Apply Design for Manufacturability (DFM) principles" },
]
```

**Scenario 3: Voice Question (lines 149-153)**
```typescript
constraints: [
  { k: "Size", v: "Joint size cannot increase" },
  { k: "Sealing", v: "Sealing cannot be compromised" },
  { k: "Preload", v: "Bearing preload is already near allowable limits" },
]
```

---

## Rendering Logic

The component uses `.map()` to iterate over the constraints array:

```jsx
{scenario.constraints.map((c) => (
  <div key={c.k} className="rounded-xl border border-zinc-200 bg-white p-3">
    <div className="text-xs font-medium text-zinc-700">{c.k}</div>
    <div className="mt-1 text-sm text-zinc-600">{c.v}</div>
  </div>
))}
```

**How it works**:
- Each constraint object has `k` (key) and `v` (value) properties
- `key={c.k}` ensures React can track each card
- Number of cards displayed = length of constraints array (3-4 typically)
- Cards automatically flow into grid (1 column mobile, 2 columns desktop)

---

## Props Interface for Component

```typescript
interface ContextConstraintsProps {
  constraints: Array<{
    k: string;  // Key (label) - e.g., "Timeline", "Goal"
    v: string;  // Value (description) - e.g., "Must complete within 6 days"
  }>;
}

// Usage
<ContextConstraints constraints={scenario.constraints} />
```

---

**This document now contains BOTH the design specifications AND the exact implementation code from the mockup!**
