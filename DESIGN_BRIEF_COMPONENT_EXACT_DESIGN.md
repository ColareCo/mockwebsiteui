# Design Brief Component - Exact Design Specifications

**Document Version**: 1.0  
**Last Updated**: Feb 12, 2026  
**Purpose**: Pixel-perfect recreation of the Design Brief section in the left question panel

---

## Overview

The Design Brief component is the **main introductory section** at the top of the left panel in the workspace. It provides context about the problem scenario before the user sees constraints, images, and task details.

**Location**: Top of left panel, inside a white rounded card with border.

---

## Visual Structure

```
┌──────────────────────────────────────────────────────┐
│ Design brief                                         │
│ Read the context, then decide your approach         │
├──────────────────────────────────────────────────────┤
│                                                      │
│ [Description paragraph - scenario context text]     │
│                                                      │
└──────────────────────────────────────────────────────┘
```

---

# 1. Container Structure

## 1.1 Outer Card Container

**Purpose**: Wraps the entire Design Brief section with header and scrollable content area.

### Specifications

**Card Container**:
- Height: `calc(100vh - 88px)` (full viewport height minus top navigation)
- Overflow: `hidden` (content scrolls internally)
- Border-radius: `16px` (Tailwind: `rounded-2xl`)
- Border: `1px solid rgba(228, 228, 231, 0.8)` (Tailwind: `border-zinc-200/80`)
- Background: White `#ffffff`
- Box shadow: `0 1px 2px rgba(0, 0, 0, 0.05)` (Tailwind: `shadow-sm`)

### CSS

```css
.design-brief-card {
  height: calc(100vh - 88px);
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid rgba(228, 228, 231, 0.8);
  background: #ffffff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}
```

### JSX

```jsx
<div className="h-[calc(100vh-88px)] overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-sm">
  {/* Header */}
  {/* Content */}
</div>
```

---

## 1.2 Header Section

**Purpose**: Fixed header at the top of the card showing "Design brief" title and subtitle.

### Specifications

**Container**:
- Padding: `12px 16px` (Tailwind: `px-4 py-3`)
- Border-bottom: `1px solid #fafafa` (Tailwind: `border-zinc-100`)

**Title** ("Design brief"):
- Font size: `14px` (Tailwind: `text-sm`)
- Font weight: `600` (semibold)
- Color: `#18181b` (zinc-900)

**Subtitle** ("Read the context, then decide your approach"):
- Font size: `12px` (Tailwind: `text-xs`)
- Color: `#71717a` (zinc-500)
- Margin-top: 0 (directly below title)

### CSS

```css
.design-brief-header {
  padding: 12px 16px;
  border-bottom: 1px solid #fafafa;
}

.design-brief-title {
  font-size: 14px;
  font-weight: 600;
  color: #18181b;
}

.design-brief-subtitle {
  font-size: 12px;
  color: #71717a;
}
```

### JSX

```jsx
<div className="border-b border-zinc-100 px-4 py-3">
  <div>
    <div className="text-sm font-semibold text-zinc-900">Design brief</div>
    <div className="text-xs text-zinc-500">Read the context, then decide your approach</div>
  </div>
</div>
```

---

## 1.3 Scrollable Content Area

**Purpose**: Contains the actual description text and all subsequent sections (constraints, images, task).

### Specifications

**Container**:
- Height: `calc(100vh - 160px)` (viewport minus header and navigation)
- Overflow-y: `auto` (vertical scrolling enabled)
- Padding: `16px` (Tailwind: `p-4`)

**Inner wrapper** (for spacing between sections):
- Display: `flex-col` (vertical stacking)
- Gap: `20px` (Tailwind: `space-y-5`)

### CSS

```css
.design-brief-content {
  height: calc(100vh - 160px);
  overflow-y: auto;
  padding: 16px;
}

.design-brief-sections {
  display: flex;
  flex-direction: column;
  gap: 20px; /* space-y-5 */
}
```

### JSX

```jsx
<div className="h-[calc(100vh-160px)] overflow-y-auto p-4">
  <div className="space-y-5">
    {/* Description paragraph */}
    {/* Context & Constraints */}
    {/* Image (if present) */}
    {/* Task */}
  </div>
</div>
```

---

# 2. Description Paragraph

## 2.1 Purpose

The description provides the **scenario context** - the problem statement or situation the candidate needs to understand before answering.

## 2.2 Visual Design

Plain paragraph text, left-aligned, with comfortable line spacing for readability.

## 2.3 Specifications

**Text Element**:
- Font size: `14px` (Tailwind: `text-sm`)
- Color: `#52525b` (zinc-600)
- Line height: `1.5` (default)
- White-space: `pre-line` (preserves line breaks from data)

### CSS

```css
.design-brief-description {
  font-size: 14px;
  color: #52525b;
  line-height: 1.5;
  white-space: pre-line; /* Preserves line breaks */
}
```

### JSX

```jsx
<p className="whitespace-pre-line text-sm text-zinc-600">
  {scenario.description}
</p>
```

---

# 3. Actual Implementation Code from Mockup

## 3.1 Complete JSX Structure

```jsx
{/* Lines 524-533 from src/app/(dashboard)/tests/[testId]/preview/workspace/page.tsx */}

{/* Center: Document brief */}
<div className="h-[calc(100vh-88px)] overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-sm">
  <div className="border-b border-zinc-100 px-4 py-3">
    <div>
      <div className="text-sm font-semibold text-zinc-900">Design brief</div>
      <div className="text-xs text-zinc-500">Read the context, then decide your approach</div>
    </div>
  </div>
  <div className="h-[calc(100vh-160px)] overflow-y-auto p-4">
    <div className="space-y-5">
      <p className="whitespace-pre-line text-sm text-zinc-600">{scenario.description}</p>
      
      {/* Context & Constraints section follows */}
      {/* Image section follows (if present) */}
      {/* Task section follows */}
    </div>
  </div>
</div>
```

## 3.2 Data Structure from Mockup

```typescript
// Type definitions
interface Scenario {
  type: "mcq" | "voice" | "onshape";
  id: string;
  title: string;
  skill: string;
  subtitle: string;
  description: string;  // ← The description text displayed in Design Brief
  // ... other fields
}
```

## 3.3 Real Data Examples from Mockup

### Example 1: Robotic Gripper (MCQ, line 72-73)

```typescript
description: "You are designing a new robotic gripper for a pick-and-place application. The immediate goal is to validate geometry, range of motion, and basic compliance before committing to a production design."
```

### Example 2: DFM Principle (MCQ, line 104-106)

```typescript
description: "When dimensioning a part for manufacturability, the choice of tolerance strategy directly impacts cost, lead time, and assembly quality. Mating features—such as shaft/hole fits, bolt clearances, or locating pins—require careful consideration of function vs. manufacturability."
```

### Example 3: Voice Question (line 142-144)

```typescript
description: "A customer reports high-frequency vibration in a rotating joint assembly. The bearing is already near its design limit for preload, joint size can't increase, and the seal cannot be compromised. You need to recommend a solution."
```

### Example 4: Onshape CAD (line 177-179)

```typescript
description: "Your customer requires a custom 4-hole mounting bracket that can be directly bolted into their existing assembly. They need high confidence in fit before manufacturing, and you want to minimize revision cycles."
```

---

# 4. Layout Context

## 4.1 Position in Workspace

The Design Brief card is the **left column** in a 2-column grid layout on desktop:

```
┌─────────────────────────────────────────────────────┐
│            Top Navigation Bar (sticky)              │
├──────────────────────────┬──────────────────────────┤
│                          │                          │
│  Design Brief (Left)     │  Answer Panel (Right)    │
│  ┌────────────────────┐  │  ┌────────────────────┐  │
│  │ Design brief       │  │  │ Your answer        │  │
│  │ Read the context...│  │  │                    │  │
│  ├────────────────────┤  │  │                    │  │
│  │                    │  │  │                    │  │
│  │ [Description]      │  │  │ [Radio buttons/    │  │
│  │                    │  │  │  textarea/etc]     │  │
│  │ [Constraints]      │  │  │                    │  │
│  │                    │  │  │                    │  │
│  │ [Image]            │  │  │                    │  │
│  │                    │  │  │                    │  │
│  │ [Task]             │  │  │                    │  │
│  │                    │  │  │                    │  │
│  └────────────────────┘  │  └────────────────────┘  │
│                          │                          │
└──────────────────────────┴──────────────────────────┘
```

### Parent Grid Layout

```jsx
<div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-4 px-4 py-4 lg:grid-cols-[minmax(0,1fr)_360px]">
  {/* Left: Design Brief Card */}
  <div className="h-[calc(100vh-88px)] overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-sm">
    {/* ... */}
  </div>
  
  {/* Right: Answer Panel (fixed width 360px on desktop) */}
  <div className="...">
    {/* ... */}
  </div>
</div>
```

**Grid Specifications**:
- Max width: `1400px` (centered)
- Gap: `16px` (Tailwind: `gap-4`)
- Padding: `16px` (Tailwind: `px-4 py-4`)
- Mobile: Single column (`grid-cols-1`)
- Desktop (lg breakpoint): Two columns (`lg:grid-cols-[minmax(0,1fr)_360px]`)
  - Left column: Flexible width (`minmax(0, 1fr)`)
  - Right column: Fixed `360px`

---

# 5. Complete Section Hierarchy

The Design Brief card contains multiple sections in this order:

```
1. Header (fixed)
   - "Design brief" title
   - Subtitle

2. Scrollable Content
   ├─ Description paragraph
   ├─ Context & Constraints
   ├─ Image (optional, if imageUrl exists)
   └─ Task
```

**Vertical Spacing**: `20px` gap between each section (Tailwind: `space-y-5`)

---

# 6. Props Interface for Component

```typescript
interface DesignBriefProps {
  description: string;  // Main scenario description text
  // Note: Other sections (constraints, image, task) are separate components
}

// Usage
<DesignBrief description={scenario.description} />
```

---

# 7. Responsive Behavior

## 7.1 Desktop (lg breakpoint and up)

- Design Brief card takes up **left column** (flexible width)
- Right column (Answer panel) is fixed at `360px`
- Both panels are visible side-by-side

## 7.2 Mobile (below lg breakpoint)

- Single column layout (`grid-cols-1`)
- Design Brief card stacks above Answer panel
- Both cards maintain full width
- Same height calculation applies

---

# 8. Scrolling Behavior

## 8.1 Header (Fixed)

The "Design brief" header **does not scroll** - it remains fixed at the top of the card.

## 8.2 Content (Scrollable)

The content area scrolls vertically when content exceeds available height:
- Scrollbar appears on the right edge
- Smooth scrolling
- Padding maintained during scroll

### Custom Scrollbar Styling (if needed)

```css
.design-brief-content::-webkit-scrollbar {
  width: 6px;
}

.design-brief-content::-webkit-scrollbar-track {
  background: transparent;
}

.design-brief-content::-webkit-scrollbar-thumb {
  background: #e4e4e7;
  border-radius: 3px;
}

.design-brief-content::-webkit-scrollbar-thumb:hover {
  background: #d4d4d8;
}
```

---

# 9. Color & Typography Reference

## 9.1 Colors

| Element | Color Name | Hex/RGBA |
|---------|------------|----------|
| Card background | white | `#ffffff` |
| Card border | zinc-200/80 | `rgba(228, 228, 231, 0.8)` |
| Header border | zinc-100 | `#fafafa` |
| Title | zinc-900 | `#18181b` |
| Subtitle | zinc-500 | `#71717a` |
| Description text | zinc-600 | `#52525b` |

## 9.2 Typography

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Title | 14px (sm) | 600 (semibold) | 1.25 |
| Subtitle | 12px (xs) | 400 (normal) | 1.5 |
| Description | 14px (sm) | 400 (normal) | 1.5 |

---

# 10. Spacing Reference

| Location | Spacing | Tailwind Class |
|----------|---------|----------------|
| Header padding | 12px 16px | `px-4 py-3` |
| Content padding | 16px | `p-4` |
| Section gap (vertical) | 20px | `space-y-5` |
| Grid gap (left/right panels) | 16px | `gap-4` |

---

# 11. Copy-Paste React Component

```tsx
interface DesignBriefCardProps {
  description: string;
  children?: React.ReactNode; // For constraints, image, task sections
}

export function DesignBriefCard({ description, children }: DesignBriefCardProps) {
  return (
    <div className="h-[calc(100vh-88px)] overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-sm">
      {/* Fixed Header */}
      <div className="border-b border-zinc-100 px-4 py-3">
        <div>
          <div className="text-sm font-semibold text-zinc-900">Design brief</div>
          <div className="text-xs text-zinc-500">Read the context, then decide your approach</div>
        </div>
      </div>
      
      {/* Scrollable Content */}
      <div className="h-[calc(100vh-160px)] overflow-y-auto p-4">
        <div className="space-y-5">
          {/* Description */}
          <p className="whitespace-pre-line text-sm text-zinc-600">
            {description}
          </p>
          
          {/* Other sections (constraints, image, task) */}
          {children}
        </div>
      </div>
    </div>
  );
}
```

### Usage Example

```tsx
<DesignBriefCard description={scenario.description}>
  {/* Context & Constraints component */}
  <ContextConstraints constraints={scenario.constraints} />
  
  {/* Image component (if present) */}
  {scenario.imageUrl && <DrawingImage url={scenario.imageUrl} />}
  
  {/* Task component */}
  <TaskSection task={scenario.taskText} meta={scenario.taskMeta} />
</DesignBriefCard>
```

---

# 12. Implementation Checklist

## Structure
- [ ] Create outer card container with correct height and overflow
- [ ] Add border, border-radius, and shadow
- [ ] Implement fixed header section with border-bottom
- [ ] Create scrollable content area with correct height calculation
- [ ] Add space-y-5 wrapper for section spacing

## Header
- [ ] Add "Design brief" title with correct typography
- [ ] Add subtitle "Read the context, then decide your approach"
- [ ] Style header with correct padding and border

## Description
- [ ] Render description text with whitespace-pre-line
- [ ] Apply correct font size and color (sm, zinc-600)
- [ ] Ensure line-height is comfortable for reading

## Layout
- [ ] Position in 2-column grid (left column, flexible width)
- [ ] Implement responsive behavior (single column on mobile)
- [ ] Ensure proper gap between left and right panels

## Scrolling
- [ ] Verify header stays fixed during scroll
- [ ] Verify content scrolls smoothly
- [ ] Test with long content to ensure scrollbar appears
- [ ] Optional: Add custom scrollbar styling

## Testing
- [ ] Test with different description lengths
- [ ] Verify responsive breakpoints work correctly
- [ ] Check all spacing matches design exactly
- [ ] Verify text is readable with correct contrast

---

**This document contains EVERY detail needed to recreate the Design Brief component pixel-perfectly, including exact code, layout context, responsive behavior, and scrolling mechanics!**
