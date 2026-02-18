# Top Navigation Bar - Exact Design Specifications

**Component**: Sticky top navigation bar for test workspace page

**Purpose**: Shows question title, timer, progress indicator, and navigation controls

---

## Full Component Preview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  Robotic Gripper Validation          [clock] 5:55    Progress [▓▓░░] 1/4  │
│                                                        [Previous]   [Next]   │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Height**: ~88px (including bottom border)

---

## Outer Container

### Fixed Container
```jsx
<div className="sticky top-0 z-40 border-b border-zinc-200/60 bg-white/90 backdrop-blur-xl">
  {/* Content */}
</div>
```

### Complete CSS
```css
position: sticky;
top: 0;
z-index: 40; /* Above page content */
border-bottom: 1px solid rgba(228, 228, 231, 0.6); /* zinc-200 at 60% opacity */
background-color: rgba(255, 255, 255, 0.9); /* White at 90% - frosted glass effect */
backdrop-filter: blur(24px); /* Strong blur for glass effect */
-webkit-backdrop-filter: blur(24px); /* Safari support */
```

**Visual Effect**: Frosted glass that slightly blurs content scrolling underneath

**Color Breakdown**:
- Border: `rgba(228, 228, 231, 0.6)` = zinc-200 at 60%
- Background: `rgba(255, 255, 255, 0.9)` = white at 90%
- Blur: 24 pixels

---

## Inner Container (Content Wrapper)

```jsx
<div className="mx-auto flex max-w-[1400px] items-center gap-4 px-4 py-3">
  {/* All content */}
</div>
```

### Complete CSS
```css
max-width: 1400px; /* Constrains content width */
margin-left: auto;
margin-right: auto;
display: flex;
align-items: center; /* Vertical center */
gap: 1rem; /* 16px between sections */
padding-left: 1rem; /* 16px */
padding-right: 1rem; /* 16px */
padding-top: 0.75rem; /* 12px */
padding-bottom: 0.75rem; /* 12px */
```

**Exact Measurements**:
- Max width: 1400px
- Horizontal padding: 16px each side
- Vertical padding: 12px top/bottom
- Gap between flex items: 16px

---

## Section 1: Question Title + Timer Badge

### Container
```jsx
<div className="flex min-w-0 flex-1 items-center justify-between gap-4">
  {/* Title + Timer */}
</div>
```

```css
display: flex;
min-width: 0; /* Allows text truncation */
flex: 1 1 0%; /* Takes remaining space */
align-items: center;
justify-content: space-between; /* Title left, timer right */
gap: 1rem; /* 16px */
```

---

### Question Title (H1)

```jsx
<h1 className="truncate text-xl font-semibold text-zinc-900">
  Robotic Gripper Validation
</h1>
```

#### Complete CSS
```css
/* Truncation */
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;

/* Typography */
font-size: 1.25rem; /* 20px */
font-weight: 600; /* Semibold */
color: #18181b; /* zinc-900 */
line-height: 1.75rem; /* 28px */
```

**Exact Values**:
- Font size: 20px
- Font weight: 600 (semibold)
- Line height: 28px
- Color: `#18181b` (zinc-900)
- Truncates with ellipsis (...) if too long

**Example text**: "Robotic Gripper Validation"

---

### Timer Badge

```jsx
<div className="inline-flex shrink-0 items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-sm">
  <Icon name="clock" className="h-3.5 w-3.5 text-zinc-500" />
  5:55
</div>
```

#### Complete CSS
```css
display: inline-flex;
flex-shrink: 0; /* Never shrinks */
align-items: center;
gap: 0.5rem; /* 8px between icon and text */
border-radius: 9999px; /* Perfect pill shape */
border: 1px solid #e4e4e7; /* zinc-200 */
background-color: #ffffff; /* Pure white */
padding-left: 0.75rem; /* 12px */
padding-right: 0.75rem; /* 12px */
padding-top: 0.375rem; /* 6px */
padding-bottom: 0.375rem; /* 6px */
font-size: 0.75rem; /* 12px */
font-weight: 500; /* Medium */
color: #3f3f46; /* zinc-700 */
box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* Subtle shadow */
```

**Exact Measurements**:
- Height: ~30px (6px top + 6px bottom + text height)
- Horizontal padding: 12px
- Vertical padding: 6px
- Gap between icon and text: 8px
- Border: 1px solid
- Border radius: Fully rounded (pill)

#### Clock Icon
```jsx
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5 text-zinc-500">
  <circle cx="12" cy="12" r="10" />
  <path d="M12 6v6l4 2" strokeLinecap="round" />
</svg>
```

```css
height: 0.875rem; /* 14px */
width: 0.875rem; /* 14px */
color: #71717a; /* zinc-500 - lighter than text */
stroke-width: 2;
```

**Icon size**: 14×14 pixels  
**Icon color**: `#71717a` (zinc-500)  
**SVG viewBox**: `0 0 24 24`

#### Timer Text
```css
font-size: 0.75rem; /* 12px */
font-weight: 500; /* Medium */
color: #3f3f46; /* zinc-700 */
font-variant-numeric: tabular-nums; /* Fixed-width numbers for alignment */
```

**Format**: `M:SS` or `MM:SS`
- Examples: `5:55`, `12:30`, `0:45`
- Uses tabular numbers (monospace digits) so digits don't shift as time counts down

**Complete Timer Badge Specifications**:
```
┌──────────────┐
│ [🕐] 5:55    │  ← 12px text, 14px icon, 12px horizontal padding
└──────────────┘
   ↑        ↑
  Icon    Text
  (14px)  (12px, medium weight)
```

---

## Section 2: Progress Bar (Desktop Only)

### Container
```jsx
<div className="ml-auto hidden min-w-[260px] flex-col gap-1 md:flex">
  {/* Progress content */}
</div>
```

```css
/* Mobile (< 768px) */
display: none; /* Hidden on mobile */

/* Desktop (≥ 768px) */
@media (min-width: 768px) {
  display: flex;
  flex-direction: column;
  gap: 0.25rem; /* 4px between label and bar */
  min-width: 260px; /* Fixed width */
  margin-left: auto; /* Pushes to right before buttons */
}
```

**Behavior**: Completely hidden on mobile, shows on tablets/desktop

---

### Progress Label Row

```jsx
<div className="flex items-center justify-between text-xs text-zinc-500">
  <span>Progress</span>
  <span>1/4</span>
</div>
```

```css
display: flex;
align-items: center;
justify-content: space-between; /* Text left, numbers right */
font-size: 0.75rem; /* 12px */
color: #71717a; /* zinc-500 */
line-height: 1rem; /* 16px */
```

**Left text**: "Progress"  
**Right text**: "1/4" (current/total format)

---

### Progress Bar Track

```jsx
<div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-200">
  {/* Fill */}
</div>
```

```css
height: 0.375rem; /* 6px */
width: 100%;
overflow: hidden; /* Clips the fill */
border-radius: 9999px; /* Fully rounded */
background-color: #e4e4e7; /* zinc-200 - gray track */
```

**Track specifications**:
- Height: 6px
- Width: 100% (260px container)
- Background: `#e4e4e7` (gray)
- Border radius: Fully rounded

---

### Progress Bar Fill

```jsx
<div 
  className="h-full rounded-full bg-corePurple transition-all" 
  style={{ width: `${progress}%` }} 
/>
```

```css
height: 100%; /* 6px - fills track height */
border-radius: 9999px; /* Fully rounded */
background-color: #4d3ef0; /* corePurple - brand purple */
transition-property: width;
transition-duration: 300ms;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
```

**Fill specifications**:
- Height: 6px (same as track)
- Background: `#4d3ef0` (corePurple)
- Width: Dynamic based on progress
  - 1 of 4 = 25% width
  - 2 of 4 = 50% width
  - 3 of 4 = 75% width
  - 4 of 4 = 100% width
- Animated: Smooth 300ms transition when width changes

**Visual effect**: Purple bar grows from left to right as user progresses

```
Progress Bar Examples:
25%:  [▓▓▓▓░░░░░░░░░░░░]
50%:  [▓▓▓▓▓▓▓▓░░░░░░░░]
75%:  [▓▓▓▓▓▓▓▓▓▓▓▓░░░░]
100%: [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]
```

---

## Section 3: Navigation Buttons

### Container
```jsx
<div className="ml-auto flex items-center gap-2 md:ml-4">
  {/* Buttons */}
</div>
```

```css
display: flex;
align-items: center;
gap: 0.5rem; /* 8px between buttons */
margin-left: auto; /* Pushes to right on mobile */

/* Desktop (≥ 768px) */
@media (min-width: 768px) {
  margin-left: 1rem; /* 16px - after progress bar */
}
```

---

### Previous Button (Secondary Style)

```jsx
<button
  type="button"
  onClick={goPrev}
  className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50"
>
  <Icon name="chevronLeft" className="h-4 w-4" /> Previous
</button>
```

#### Complete CSS
```css
display: inline-flex;
align-items: center;
gap: 0.5rem; /* 8px between icon and text */
border-radius: 0.75rem; /* 12px */
border: 1px solid #e4e4e7; /* zinc-200 */
background-color: #ffffff;
padding-left: 0.75rem; /* 12px */
padding-right: 0.75rem; /* 12px */
padding-top: 0.5rem; /* 8px */
padding-bottom: 0.5rem; /* 8px */
font-size: 0.875rem; /* 14px */
font-weight: 500; /* Medium */
color: #3f3f46; /* zinc-700 */
transition: background-color 150ms ease;

/* Hover state */
&:hover {
  background-color: #fafafa; /* zinc-50 - very light gray */
}

/* Disabled state (when on first question) */
&:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

#### Chevron Left Icon
```jsx
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
  <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
</svg>
```

```css
height: 1rem; /* 16px */
width: 1rem; /* 16px */
stroke-width: 2;
color: currentColor; /* Inherits from button */
```

**Button Measurements**:
- Height: ~36px (8px + 8px padding + text height)
- Min width: ~92px ("Previous" + icon + padding)
- Border: 1px solid `#e4e4e7`
- Border radius: 12px
- Icon: 16×16px

**Button text**: "Previous"

---

### Next Button (Primary Style)

```jsx
<button
  type="button"
  onClick={goNext}
  className="inline-flex items-center gap-2 rounded-xl bg-corePurple px-3 py-2 text-sm font-medium text-white transition hover:brightness-105"
>
  Next <Icon name="chevronRight" className="h-4 w-4" />
</button>
```

#### Complete CSS
```css
display: inline-flex;
align-items: center;
gap: 0.5rem; /* 8px between text and icon */
border-radius: 0.75rem; /* 12px */
background-color: #4d3ef0; /* corePurple - solid color, NOT gradient */
padding-left: 0.75rem; /* 12px */
padding-right: 0.75rem; /* 12px */
padding-top: 0.5rem; /* 8px */
padding-bottom: 0.5rem; /* 8px */
font-size: 0.875rem; /* 14px */
font-weight: 500; /* Medium */
color: #ffffff; /* White text */
transition: filter 150ms ease;

/* Hover state */
&:hover {
  filter: brightness(1.05); /* 5% brighter */
}
```

#### Chevron Right Icon
```jsx
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
  <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
</svg>
```

```css
height: 1rem; /* 16px */
width: 1rem; /* 16px */
stroke-width: 2;
color: #ffffff; /* White */
```

**Button Measurements**:
- Height: ~36px (same as Previous button)
- Min width: ~75px ("Next" + icon + padding)
- No border (solid background)
- Border radius: 12px
- Icon: 16×16px

**Button text**: "Next"

---

### Submit Button Variant (Last Question Only)

**When on the last question, the Next button becomes:**

```jsx
<button
  type="button"
  onClick={handleSubmitAssignment}
  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700"
>
  Submit assignment
</button>
```

```css
/* Same as Next button, but: */
background-color: #059669; /* emerald-600 - green instead of purple */
padding-left: 1rem; /* 16px - wider padding */
padding-right: 1rem; /* 16px */

/* Hover state */
&:hover {
  background-color: #047857; /* emerald-700 - darker green */
}
```

**Button text**: "Submit assignment"  
**Color**: Green (`#059669`) instead of purple  
**No icon**: Text only

---

## Complete Color Reference

```css
/* Background & Borders */
--nav-background: rgba(255, 255, 255, 0.9);  /* 90% white */
--nav-border: rgba(228, 228, 231, 0.6);      /* zinc-200 at 60% */

/* Text Colors */
--title-color: #18181b;      /* zinc-900 - Question title */
--body-text: #3f3f46;        /* zinc-700 - Timer text, button text */
--muted-text: #71717a;       /* zinc-500 - Clock icon, progress label */
--white: #ffffff;            /* Button text, timer badge bg */

/* Brand Colors */
--purple: #4d3ef0;           /* corePurple - Next button, progress fill */
--green: #059669;            /* emerald-600 - Submit button */
--green-hover: #047857;      /* emerald-700 - Submit hover */

/* Neutral Grays */
--zinc-50: #fafafa;          /* Button hover background */
--zinc-200: #e4e4e7;         /* Borders, progress track */

/* Shadows */
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
```

---

## Spacing Breakdown

```css
/* Outer container */
Padding: 12px top/bottom, 16px left/right
Max width: 1400px

/* Between sections */
Gap: 16px

/* Within sections */
Title/Timer gap: 16px
Icon/Text gap: 8px
Button gap: 8px
Progress label/bar gap: 4px

/* Button padding */
Previous/Next: 12px horizontal, 8px vertical
Submit: 16px horizontal, 8px vertical

/* Timer badge padding */
Horizontal: 12px
Vertical: 6px
```

---

## Typography Breakdown

```css
/* Question Title */
Font size: 20px
Font weight: 600 (semibold)
Line height: 28px
Color: #18181b

/* Timer Text */
Font size: 12px
Font weight: 500 (medium)
Line height: 16px
Color: #3f3f46

/* Progress Label */
Font size: 12px
Font weight: 400 (regular)
Line height: 16px
Color: #71717a

/* Button Text */
Font size: 14px
Font weight: 500 (medium)
Line height: 20px
Color: #3f3f46 (secondary) or #ffffff (primary)
```

---

## Icon Specifications

All icons use stroke-based SVGs with `viewBox="0 0 24 24"`:

```css
/* Clock icon (in timer badge) */
Size: 14×14px
Stroke width: 2
Color: #71717a (zinc-500)

/* Chevron icons (in buttons) */
Size: 16×16px
Stroke width: 2
Color: currentColor (inherits from button)
```

---

## Responsive Behavior

### Mobile (< 768px)
```
┌────────────────────────────────────────────┐
│  Question Title          [🕐] 5:55         │
│                     [Previous]   [Next]    │
└────────────────────────────────────────────┘
```
- Progress bar: **Hidden**
- Navigation buttons: Pushed to right with `margin-left: auto`

### Desktop (≥ 768px)
```
┌───────────────────────────────────────────────────────────────┐
│  Question Title    [🕐] 5:55   Progress [▓░] 1/4  [Prev] [Next]│
└───────────────────────────────────────────────────────────────┘
```
- Progress bar: **Visible** with 260px width
- Navigation buttons: After progress bar with 16px margin

---

## State Variations

### Previous Button States
1. **Default**: White background, gray border, gray text
2. **Hover**: Light gray background (`#fafafa`)
3. **Disabled** (first question): 50% opacity, not-allowed cursor

### Next Button States
1. **Default**: Purple background (`#4d3ef0`), white text
2. **Hover**: 5% brighter purple
3. **Last question**: Becomes green "Submit assignment" button

### Submit Button States
1. **Default**: Green background (`#059669`), white text
2. **Hover**: Darker green (`#047857`)

---

## Implementation Checklist

- [ ] Sticky positioning with `z-index: 40`
- [ ] Frosted glass: 90% white + 24px blur
- [ ] Bottom border: zinc-200 at 60% opacity
- [ ] Question title: 20px, semibold, truncates with ellipsis
- [ ] Timer badge: Pill shape, 14px icon, 12px text, tabular numbers
- [ ] Progress bar: 6px height, hidden on mobile, shows at 768px+
- [ ] Progress fill: Purple, animated 300ms transition
- [ ] Previous button: White with border, zinc-50 on hover
- [ ] Next button: Purple solid, brightness(1.05) on hover
- [ ] Submit button: Green, only on last question
- [ ] All icons: Correct sizes (14px clock, 16px chevrons)
- [ ] Proper spacing: 16px outer gap, 8px inner gaps
- [ ] Responsive: Progress bar hidden < 768px

---

## Copy-Paste Component (React/Tailwind)

```jsx
<div className="sticky top-0 z-40 border-b border-zinc-200/60 bg-white/90 backdrop-blur-xl">
  <div className="mx-auto flex max-w-[1400px] items-center gap-4 px-4 py-3">
    
    {/* Left: Title + Timer */}
    <div className="flex min-w-0 flex-1 items-center justify-between gap-4">
      <h1 className="truncate text-xl font-semibold text-zinc-900">
        {questionTitle}
      </h1>
      <div className="inline-flex shrink-0 items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-sm">
        <ClockIcon className="h-3.5 w-3.5 text-zinc-500" />
        {formattedTime}
      </div>
    </div>

    {/* Center: Progress (Desktop only) */}
    <div className="ml-auto hidden min-w-[260px] flex-col gap-1 md:flex">
      <div className="flex items-center justify-between text-xs text-zinc-500">
        <span>Progress</span>
        <span>{currentQuestion}/{totalQuestions}</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-200">
        <div 
          className="h-full rounded-full bg-corePurple transition-all" 
          style={{ width: `${progress}%` }} 
        />
      </div>
    </div>

    {/* Right: Navigation */}
    <div className="ml-auto flex items-center gap-2 md:ml-4">
      <button
        type="button"
        onClick={onPrevious}
        disabled={isFirstQuestion}
        className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeftIcon className="h-4 w-4" />
        Previous
      </button>
      
      {isLastQuestion ? (
        <button
          type="button"
          onClick={onSubmit}
          className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700"
        >
          Submit assignment
        </button>
      ) : (
        <button
          type="button"
          onClick={onNext}
          className="inline-flex items-center gap-2 rounded-xl bg-corePurple px-3 py-2 text-sm font-medium text-white transition hover:brightness-105"
        >
          Next
          <ChevronRightIcon className="h-4 w-4" />
        </button>
      )}
    </div>
  </div>
</div>
```

---

**This document contains EVERY detail needed to recreate the top navigation bar exactly.**
