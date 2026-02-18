# CAD/Onshape Workspace - Exact Design Specifications

**Page URL**: `http://localhost:3001/tests/mechanical-design-engineer/preview/workspace?scenario=2`

**Question Type**: CAD/Onshape Integration Question

**Purpose**: Candidate completes a CAD modeling task using Onshape with instructions in a side panel

---

## Page Overview

This is a **full-screen layout** that displays an Onshape CAD viewer with a custom assessment panel overlaid on the right side.

**Key Difference**: Unlike MCQ and Voice questions, this page does NOT use the standard two-column workspace layout. Instead, it shows:
- Full-screen Onshape CAD interface (background)
- Right-side overlay panel with instructions (the "Colare Panel")

---

## Page Structure

### Full-Screen Container

```jsx
<div className="relative h-screen overflow-hidden bg-[#e8e8e8]">
  {/* Onshape backdrop */}
  <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
       style={{ backgroundImage: "url(/onshape-backdrop.png)" }} />
  
  {/* Colare Panel (right side) */}
  <div className="absolute right-0 top-20 bottom-12 flex w-[380px] flex-col overflow-hidden rounded-tl-lg border-l border-t border-zinc-300 bg-white shadow-[-8px_0_24px_rgba(0,0,0,0.12)]">
    {/* Panel content */}
  </div>
</div>
```

### Complete CSS

```css
/* Page container */
position: relative;
height: 100vh; /* Full viewport height */
overflow: hidden;
background-color: #e8e8e8; /* Light gray fallback */

/* Onshape backdrop */
.backdrop {
  position: absolute;
  inset: 0; /* Fills entire screen */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('/onshape-backdrop.png');
}
```

**Background image**: `/onshape-backdrop.png` (screenshot of Onshape interface)

---

## Colare Assessment Panel (Right Overlay)

### Panel Container

```jsx
<div className="absolute right-0 top-20 bottom-12 flex w-[380px] flex-col overflow-hidden rounded-tl-lg border-l border-t border-zinc-300 bg-white shadow-[-8px_0_24px_rgba(0,0,0,0.12)]">
  <div className="colare-panel h-full">
    {/* Content */}
  </div>
</div>
```

### Complete CSS

```css
/* Outer container */
position: absolute;
right: 0;
top: 5rem; /* 80px from top - leaves space for Onshape toolbar */
bottom: 3rem; /* 48px from bottom */
display: flex;
width: 380px; /* Fixed width */
flex-direction: column;
overflow: hidden;
border-top-left-radius: 0.5rem; /* 8px - only top-left corner rounded */
border-left: 1px solid #d4d4d8; /* zinc-300 */
border-top: 1px solid #d4d4d8; /* zinc-300 */
background-color: #ffffff;
box-shadow: -8px 0 24px rgba(0, 0, 0, 0.12); /* Left-side shadow */

/* Inner panel */
.colare-panel {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background: #ffffff; /* var(--cp-bg) */
  color: #15151d; /* var(--cp-text) */
  font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  border-left: 1px solid #e7e7ef; /* var(--cp-border) */
}
```

**Panel positioning**:
- Fixed to right edge
- Inset from top: 80px (leaves room for Onshape toolbar)
- Inset from bottom: 48px
- Width: 380px (fixed)
- Only top-left corner rounded
- Shadow projects to the left (over CAD viewer)

---

## Panel Header

```jsx
<div className="cp-header">
  <div className="cp-brand">
    <div className="cp-titleblock">
      <div className="cp-title">Air Nozzle Design</div>
    </div>
  </div>
  <div className="cp-meta">
    <div className="cp-pill">
      <span className="cp-pill-label">Time</span>
      <span className="cp-pill-value">45:00</span>
    </div>
    <div className="cp-pill cp-pill-muted">
      <span className="cp-pill-label">Question</span>
      <span className="cp-pill-value">3 of 4</span>
    </div>
  </div>
</div>
```

### Complete CSS

```css
/* Header container */
.cp-header {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 14px 14px 12px; /* 14px top/sides, 12px bottom */
  border-bottom: 1px solid #e7e7ef; /* var(--cp-border) */
  background: linear-gradient(180deg, #f1f2ff, #ffffff);
  /* var(--cp-soft2) to white */
}
```

**Exact measurements**:
- Top padding: 14px
- Side padding: 14px
- Bottom padding: 12px
- Border: 1px solid `#e7e7ef`
- Background: Vertical gradient from `#f1f2ff` to white

---

### Title Block

```css
/* Brand container */
.cp-brand {
  display: flex;
  gap: 10px;
  align-items: center;
}

/* Title block with left border */
.cp-titleblock {
  display: flex;
  flex-direction: column;
  padding-left: 12px;
  border-left: 3px solid #5b5bd6; /* var(--cp-primary) */
}

/* Title text */
.cp-title {
  font-size: 20px;
  font-weight: 700; /* Bold */
  letter-spacing: -0.02em; /* Tight */
  color: #15151d; /* var(--cp-text) */
  line-height: 1.2; /* 24px */
}
```

**Title specifications**:
- Font: 20px, bold (700)
- Color: `#15151d`
- Letter spacing: -0.4px at 20px
- Left border: 3px solid `#5b5bd6` (purple accent)
- Left padding: 12px from border

**Title text**: "Air Nozzle Design" (project-specific)

---

### Meta Pills Container

```css
.cp-meta {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
}
```

---

### Pill Badges

```css
/* Base pill */
.cp-pill {
  display: inline-flex;
  gap: 8px;
  align-items: center;
  padding: 7px 10px; /* Vertical: 7px, Horizontal: 10px */
  background: #ffffff;
  border: 1px solid #e7e7ef; /* var(--cp-border) */
  border-radius: 999px; /* Perfect pill */
  font-size: 12px;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.02);
}

/* Pill label (e.g., "Time", "Question") */
.cp-pill-label {
  color: #6b6b7a; /* var(--cp-muted) */
  font-weight: 400; /* Normal */
}

/* Pill value (e.g., "45:00", "3 of 4") */
.cp-pill-value {
  font-weight: 700; /* Bold */
  color: #15151d; /* var(--cp-text) */
}

/* Muted pill variant */
.cp-pill-muted {
  color: #6b6b7a; /* var(--cp-muted) */
  background: rgba(255, 255, 255, 0.75);
}
```

**Pill specifications**:
- Height: ~28px (7px + 7px padding + text)
- Padding: 7px vertical, 10px horizontal
- Border: 1px solid `#e7e7ef`
- Border radius: Fully rounded (pill)
- Gap between label/value: 8px
- Font size: 12px

**Example pills**:
1. Time pill: "Time" → "45:00" (MM:SS format with tabular nums)
2. Question pill: "Question" → "3 of 4"

---

## Panel Body (Scrollable Content)

### Body Container

```css
.cp-body {
  padding: 14px;
  overflow: auto; /* Scrollable if content exceeds height */
  flex: 1 1 auto; /* Fills remaining vertical space */
}

/* Custom scrollbar */
.cp-body::-webkit-scrollbar {
  width: 10px;
}

.cp-body::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.12);
  border-radius: 999px;
  border: 3px solid transparent;
  background-clip: content-box;
}
```

**Scrollbar specifications**:
- Width: 10px
- Thumb: Semi-transparent black (12%)
- Rounded with padding inside
- Appears only when content overflows

---

### Section Cards

```css
/* Base section card */
.cp-section {
  padding: 12px;
  border: 1px solid #e7e7ef; /* var(--cp-border) */
  border-radius: 12px; /* var(--cp-radius2) */
  background: #ffffff;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.02);
  margin-bottom: 10px; /* Spacing between sections */
}

/* Last section has no margin */
.cp-section:last-child {
  margin-bottom: 0;
}

/* Muted section (alternate background) */
.cp-section-muted {
  background: #f6f6fb; /* var(--cp-soft) - light purple-gray */
}
```

**Section specifications**:
- Padding: 12px all sides
- Border: 1px solid `#e7e7ef`
- Border radius: 12px
- Margin bottom: 10px (between sections)
- Optional muted background: `#f6f6fb`

---

### Section Headers

```css
/* Section row (header with optional button) */
.cp-section-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 6px;
}

/* Heading 3 */
.cp-h3 {
  font-size: 13px;
  margin: 0;
  font-weight: 700; /* Bold */
  color: #15151d; /* var(--cp-text) */
}
```

**Section header specifications**:
- Font: 13px, bold
- Color: `#15151d`
- Margin bottom: 6px

**Example headings**: "Objective", "Requirements", "Material + Assumptions", "Reference", "Tips"

---

### Section Content (Paragraphs)

```css
/* Paragraph */
.cp-p {
  font-size: 12.5px;
  line-height: 1.35; /* 16.875px */
  color: #15151d; /* var(--cp-text) */
  margin: 6px 0 0;
}

/* Muted paragraph */
.cp-p-muted {
  color: #6b6b7a; /* var(--cp-muted) */
}

/* Top margin utility */
.cp-mt {
  margin-top: 8px;
}
```

**Paragraph specifications**:
- Font: 12.5px
- Line height: 1.35 (16.875px)
- Default color: `#15151d` (dark)
- Muted color: `#6b6b7a` (gray)

---

### Bullet Lists

```css
/* Bulleted list */
.cp-bullets {
  margin: 8px 0 0;
  padding-left: 18px;
  color: #15151d; /* var(--cp-text) */
  font-size: 12.5px;
  line-height: 1.35;
  list-style-type: disc; /* Default bullet */
}

/* List items */
.cp-bullets li {
  margin: 6px 0;
}

/* Nested list */
.cp-bullets-nested {
  margin: 4px 0 4px 8px;
  padding-left: 14px;
}
```

**List specifications**:
- Margin top: 8px from header
- Padding left: 18px (bullet indent)
- List item margin: 6px vertical
- Nested list: Additional 8px left margin, 14px padding

**Example content** (Requirements section):
```
• Use the drawing as the primary source of truth for all dimensions and angles.
• Build the nozzle as a manufacturable part (turned body with hex feature).
• Match the following critical features:
  • Main body diameter: Ø0.625 in
  • Outlet diameters: Ø0.188 in and Ø0.292 in
  • Tapered section lengths and angles (75° and 93.6°)
  • Hex profile across flats: 0.361 in
• Ensure sketch geometry is fully constrained and parametric.
```

---

### Key-Value Table

```css
/* Key-value container */
.cp-kv {
  margin-top: 8px;
  background: #f6f6fb; /* var(--cp-soft) */
  border: 1px solid #e7e7ef; /* var(--cp-border) */
  border-radius: 12px;
  padding: 8px 10px;
}

/* Key-value row */
.cp-kv-row {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 6px 0;
  font-size: 12px;
  color: #15151d; /* var(--cp-text) */
}

/* Divider between rows */
.cp-kv-row + .cp-kv-row {
  border-top: 1px dashed rgba(0, 0, 0, 0.08);
}

/* Value (right side) */
.cp-kv-val {
  font-weight: 700; /* Bold */
  color: #2d2d3a; /* Slightly darker for emphasis */
  font-variant-numeric: tabular-nums; /* Fixed-width numbers */
}
```

**Key-value table specifications**:
- Background: Light purple-gray `#f6f6fb`
- Border: 1px solid `#e7e7ef`, 12px radius
- Padding: 8px vertical, 10px horizontal
- Row padding: 6px vertical
- Dashed divider between rows
- Values: Bold, tabular numbers

**Example content** (Material + Assumptions):
```
Material: Stainless Steel AISI 316 (per note on drawing)
Units: Inches
```

---

### Reference Drawing Section

```css
/* Reference container */
.cp-ref {
  margin-top: 8px;
  display: flex;
  gap: 10px;
  align-items: center;
}

/* Thumbnail */
.cp-ref-thumb {
  width: 96px;
  height: 72px;
  border-radius: 12px;
  border: 1px solid #e7e7ef; /* var(--cp-border) */
  background: linear-gradient(180deg, #fafafe, #f3f3fb);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex: 0 0 auto; /* Don't shrink */
}

/* Image inside thumbnail */
.cp-ref-thumb img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}

/* Metadata */
.cp-ref-meta {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

/* Title */
.cp-ref-title {
  font-size: 12.5px;
  font-weight: 700; /* Bold */
  color: #15151d; /* var(--cp-text) */
}

/* Subtitle */
.cp-ref-sub {
  font-size: 12px;
  color: #6b6b7a; /* var(--cp-muted) */
  line-height: 1.25;
}
```

**Reference drawing specifications**:
- Thumbnail: 96×72px
- Border: 1px solid `#e7e7ef`, 12px radius
- Background: Vertical gradient (very light purple)
- Image: Contains, fills thumbnail
- Title: 12.5px bold
- Subtitle: 12px gray

**Example content**:
```
Title: "Air Nozzle — Rev A"
Subtitle: "Please refer to the tab "Rev A" beside the tab "Colare Workspace" for the full image."
```

---

### Link Button

```css
.cp-link {
  border: 0;
  background: transparent;
  color: #4b4bd0; /* var(--cp-primary2) - darker purple */
  font-size: 12px;
  cursor: pointer;
  padding: 4px 6px;
  border-radius: 8px;
  font-weight: 500; /* Medium */
}

.cp-link:hover {
  background: rgba(91, 91, 214, 0.10); /* Light purple background */
}
```

**Link button specifications**:
- Font: 12px, medium weight
- Color: `#4b4bd0` (dark purple)
- Padding: 4px vertical, 6px horizontal
- Border radius: 8px
- Hover: Light purple background (10% opacity)

**Text**: "Open" (for reference drawing)

---

## Panel Footer

```jsx
<div className="cp-footer">
  <button type="button" className="cp-btn cp-btn-primary" onClick={goNext}>
    ✓ Submit CAD Design
  </button>
</div>
```

### Complete CSS

```css
/* Footer container */
.cp-footer {
  padding: 12px 14px;
  border-top: 1px solid #e7e7ef; /* var(--cp-border) */
  background: #ffffff;
  display: flex;
  gap: 10px;
}

/* Base button */
.cp-btn {
  border-radius: 14px;
  padding: 10px 12px;
  font-size: 13px;
  font-weight: 700; /* Bold */
  cursor: pointer;
  border: 1px solid #e7e7ef; /* var(--cp-border) */
  background: #ffffff;
  flex: 1 1 auto; /* Full width */
  transition: all 150ms;
}

/* Primary button */
.cp-btn-primary {
  background: #5b5bd6; /* var(--cp-primary) - purple */
  border-color: rgba(0, 0, 0, 0.06);
  color: #ffffff;
  box-shadow: 0 10px 22px rgba(91, 91, 214, 0.28); /* Purple shadow */
}

.cp-btn-primary:hover {
  background: #4b4bd0; /* var(--cp-primary2) - darker purple */
}
```

**Button specifications**:
- Width: Full width (flex: 1)
- Height: ~43px (10px + 10px padding + text)
- Border radius: 14px
- Font: 13px bold
- Background: Purple `#5b5bd6`
- Shadow: Purple-tinted below
- Hover: Darker purple `#4b4bd0`

**Button text**: "✓ Submit CAD Design" (includes checkmark icon)

---

## Complete Color Reference

```css
/* Panel Colors (Onshape-specific palette) */
--cp-bg: #ffffff;          /* Panel background */
--cp-border: #e7e7ef;      /* Border color */
--cp-text: #15151d;        /* Main text */
--cp-muted: #6b6b7a;       /* Secondary text */
--cp-soft: #f6f6fb;        /* Light backgrounds */
--cp-soft2: #f1f2ff;       /* Header gradient start */
--cp-primary: #5b5bd6;     /* Primary purple */
--cp-primary2: #4b4bd0;    /* Hover purple */

/* Other Colors */
--zinc-300: #d4d4d8;       /* Panel outer border */
--emphasis: #2d2d3a;       /* Key-value table values */
--shadow: rgba(0,0,0,0.12) /* Panel shadow */
```

**Exact RGB values**:
- `#ffffff` = rgb(255, 255, 255)
- `#e7e7ef` = rgb(231, 231, 239)
- `#15151d` = rgb(21, 21, 29)
- `#6b6b7a` = rgb(107, 107, 122)
- `#f6f6fb` = rgb(246, 246, 251)
- `#f1f2ff` = rgb(241, 242, 255)
- `#5b5bd6` = rgb(91, 91, 214)
- `#4b4bd0` = rgb(75, 75, 208)
- `#d4d4d8` = rgb(212, 212, 216)

---

## Typography Reference

```css
/* Panel title (header) */
20px, bold (700), tight spacing (-0.02em), #15151d

/* Section headings (H3) */
13px, bold (700), #15151d

/* Body text (paragraphs) */
12.5px, normal (400), line-height 1.35, #15151d

/* Muted text */
12.5px or 12px, normal (400), #6b6b7a

/* Pill labels */
12px, normal (400), #6b6b7a

/* Pill values */
12px, bold (700), #15151d

/* Button text */
13px, bold (700), #ffffff

/* Key-value keys */
12px, normal (400), #15151d

/* Key-value values */
12px, bold (700), tabular-nums, #2d2d3a

/* Link buttons */
12px, medium (500), #4b4bd0
```

---

## Spacing Reference

```css
/* Panel positioning */
Top inset: 80px (5rem)
Bottom inset: 48px (3rem)
Width: 380px
Shadow: -8px 0 24px

/* Header */
Padding: 14px 14px 12px (top/sides/bottom)
Title left border: 3px
Title left padding: 12px
Meta gap: 8px

/* Pills */
Padding: 7px 10px (vertical/horizontal)
Gap: 8px (between label and value)

/* Body */
Padding: 14px all sides
Section margin: 10px bottom

/* Sections */
Padding: 12px all sides
Border radius: 12px
H3 margin bottom: 6px

/* Lists */
Margin top: 8px
Padding left: 18px
Item margin: 6px vertical
Nested padding: 14px

/* Key-value table */
Padding: 8px 10px (vertical/horizontal)
Row padding: 6px vertical
Gap: 12px between columns

/* Reference thumbnail */
Size: 96×72px
Border radius: 12px
Gap: 10px to metadata

/* Footer */
Padding: 12px 14px (vertical/horizontal)
Button padding: 10px 12px (vertical/horizontal)
Button border radius: 14px
```

---

## Scrollbar Specifications

```css
/* Width */
10px

/* Thumb */
background: rgba(0, 0, 0, 0.12);
border-radius: 999px;
border: 3px solid transparent;
background-clip: content-box;

/* Visual effect */
Appears as 4px wide thumb (10px - 6px border) with rounded ends
```

---

## Shadow Specifications

```css
/* Panel shadow (left side) */
box-shadow: -8px 0 24px rgba(0, 0, 0, 0.12);
/* Projects 8px to the left, 24px blur, 12% black */

/* Section card shadow */
box-shadow: 0 1px 0 rgba(0, 0, 0, 0.02);
/* Subtle 1px bottom shadow, 2% black */

/* Pill shadow */
box-shadow: 0 1px 0 rgba(0, 0, 0, 0.02);
/* Same as section card */

/* Button shadow */
box-shadow: 0 10px 22px rgba(91, 91, 214, 0.28);
/* Large purple shadow below button */
```

---

## Panel Content Structure

### Complete Content Hierarchy

```
Panel Header
├── Title: "Air Nozzle Design"
└── Meta Pills
    ├── Time: "45:00"
    └── Question: "3 of 4"

Panel Body (Scrollable)
├── Section 1: Objective
│   └── Paragraph describing the task
│
├── Section 2: Requirements
│   └── Bulleted list with nested sub-bullets
│
├── Section 3: Material + Assumptions
│   ├── Key-value table
│   │   ├── Material: "Stainless Steel AISI 316"
│   │   └── Units: "Inches"
│   └── Muted paragraph (assumptions note)
│
├── Section 4: Reference
│   ├── "Open" link button
│   └── Reference drawing
│       ├── Thumbnail (96×72px)
│       ├── Title: "Air Nozzle — Rev A"
│       └── Subtitle: Instructions
│
└── Section 5: Tips (Muted background)
    └── Bulleted list (2 items)

Panel Footer
└── Primary button: "✓ Submit CAD Design"
```

---

## Example Section Content

### Section 1: Objective
```
Heading: "Objective"
Content: "Model the pneumatic nozzle component shown in the attached engineering drawing. Create a CAD part that matches the specified geometry, dimensions, and design intent."
```

### Section 2: Requirements
```
Heading: "Requirements"
Content:
• Use the drawing as the primary source of truth for all dimensions and angles.
• Build the nozzle as a manufacturable part (turned body with hex feature).
• Match the following critical features:
  • Main body diameter: Ø0.625 in
  • Outlet diameters: Ø0.188 in and Ø0.292 in
  • Tapered section lengths and angles (75° and 93.6°)
  • Hex profile across flats: 0.361 in
• Ensure sketch geometry is fully constrained and parametric.
```

### Section 3: Material + Assumptions
```
Heading: "Material + Assumptions"
Key-Value Table:
  Material → Stainless Steel AISI 316 (per note on drawing)
  Units → Inches
Muted text: "If any minor detail is missing or ambiguous, make a reasonable engineering assumption and document it."
```

### Section 5: Tips
```
Heading: "Tips"
Content (muted section):
• Stay in the provided Part Studio and modify only required features.
• Prefer parametric constraints; avoid sketching freehand without dimensions.
```

---

## Responsive Behavior

**Note**: This layout is **NOT responsive**. The panel has a fixed width of 380px and is designed for desktop Onshape usage only.

If viewed on mobile/tablet, the panel would need to be redesigned (possibly as a bottom sheet or hidden by default).

---

## Implementation Checklist

- [ ] Full-screen container with Onshape backdrop image
- [ ] Right-aligned panel: 380px width, inset from top (80px) and bottom (48px)
- [ ] Panel shadow: -8px 0 24px (projects left)
- [ ] Only top-left corner rounded (8px radius)
- [ ] Header: Gradient background `#f1f2ff` to white
- [ ] Title: 20px bold with 3px purple left border
- [ ] Pills: Rounded, 12px text, label + bold value
- [ ] Scrollable body: 14px padding, custom 10px scrollbar
- [ ] Section cards: 12px padding, 12px radius, 10px margin bottom
- [ ] Muted sections: `#f6f6fb` background
- [ ] H3 headings: 13px bold
- [ ] Body text: 12.5px, line-height 1.35
- [ ] Bullet lists: 18px left padding, 6px vertical margin
- [ ] Nested bullets: Additional 14px padding
- [ ] Key-value table: `#f6f6fb` background, dashed dividers, bold values
- [ ] Reference thumbnail: 96×72px with gradient background
- [ ] Link button: 12px purple text, hover background
- [ ] Footer button: Full width, 14px radius, purple background with shadow
- [ ] All colors: Exact hex values as specified
- [ ] All spacing: Exact pixel values as specified

---

**This document contains EVERY detail needed to recreate the CAD/Onshape assessment panel pixel-perfectly.**
