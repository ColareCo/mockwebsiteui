# Voice Recording Workspace - Exact Design Specifications

**Page URL**: `http://localhost:3001/tests/mechanical-design-engineer/preview/workspace?scenario=3`

**Question Type**: Voice/Verbal Response Question

**Purpose**: Candidate records a verbal answer explaining their approach to a problem

---

## Page Overview

This page uses the same top navigation bar and two-column layout as the MCQ workspace, but the right panel contains a voice recording interface instead of text inputs.

**Layout**: Same as MCQ workspace
- Top sticky navigation bar (see TOP_NAVIGATION_BAR_EXACT_DESIGN.md)
- Two-column grid: Left panel (question brief) + Right panel (voice recorder)

---

## Left Panel: Question Brief

**Identical structure to MCQ question panel** with these specific values:

### Question Title
```
Robotic Joint Thermal-Accuracy Trade-off
```

### Question Description
```
A high-precision robotic joint operates inside a sealed enclosure due to environmental exposure (dust, coolant mist).

Observed issues:
• Motor overheats during continuous operation
• Joint accuracy degrades after warm-up

You must explain how you would approach this problem, including why improving thermal conduction can conflict with accuracy, which design changes you would prioritize first, and what trade-offs you would explicitly accept.
```

### Constraints Cards
```
Size: Joint size cannot increase
Sealing: Sealing cannot be compromised
Preload: Bearing preload is already near allowable limits
```

### Task Text
```
Record a verbal response explaining your approach, prioritization, and accepted trade-offs.
```

### Meta Cards
```
Expected response time: ~3–5 minutes
What we evaluate: Trade-off reasoning, design prioritization, clarity
```

**No reference image for this question type**

---

## Right Panel: Voice Recording Workspace

### Panel Header

**Same header structure as MCQ, with different subtitle:**

```jsx
<div className="border-b border-zinc-100 px-4 py-3">
  <div className="flex items-start justify-between">
    <div>
      <div className="text-sm font-semibold text-zinc-900">Your workspace</div>
      <div className="text-xs text-zinc-500">Record your verbal response</div>
    </div>
  </div>
</div>
```

**Subtitle**: "Record your verbal response" (instead of "Decision + rationale + notes")

**No "Autosaved" badge** for voice questions

---

## Voice Recording Interface (State 1: Not Started)

### Outer Container

```jsx
<div className="p-4">
  <div className="relative flex flex-col items-center justify-center gap-8 rounded-2xl bg-gradient-to-b from-zinc-50/80 to-white p-8 min-h-[280px] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
    {/* Content */}
  </div>
</div>
```

```css
/* Outer padding */
padding: 1rem; /* 16px all sides */

/* Inner container */
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 2rem; /* 32px between elements */
border-radius: 1rem; /* 16px */
background-image: linear-gradient(to bottom, rgba(250, 250, 250, 0.8), #ffffff);
/* From zinc-50 at 80% to solid white */
padding: 2rem; /* 32px all sides */
min-height: 280px;
box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8); /* Inner top highlight */
```

**Background**: Subtle gradient from light gray to white  
**Inner shadow**: Soft highlight at top creates depth

---

### Microphone Icon Circle

```jsx
<div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-corePurple/20 to-violet/10 shadow-[0_8px_32px_-8px_rgba(77,62,240,0.25)]">
  <Icon name="mic" className="h-12 w-12 text-corePurple" />
</div>
```

#### Complete CSS
```css
display: flex;
height: 6rem; /* 96px */
width: 6rem; /* 96px */
align-items: center;
justify-content: center;
border-radius: 50%; /* Perfect circle */
background-image: linear-gradient(to bottom right, 
  rgba(77, 62, 240, 0.2),   /* corePurple at 20% */
  rgba(89, 76, 233, 0.1)    /* violet at 10% */
);
box-shadow: 0 8px 32px -8px rgba(77, 62, 240, 0.25); /* Purple glow */
```

**Circle specifications**:
- Size: 96×96px
- Gradient: Purple (20% opacity) to violet (10% opacity), diagonal
- Shadow: Purple-tinted glow below
- Center-aligned microphone icon

#### Microphone Icon (SVG)
```jsx
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-12 w-12 text-corePurple">
  <path d="M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3Z" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M19 10v2a7 7 0 0 1-14 0v-2" strokeLinecap="round" />
  <path d="M12 19v3M9 22h6" strokeLinecap="round" />
</svg>
```

```css
height: 3rem; /* 48px */
width: 3rem; /* 48px */
color: #4d3ef0; /* corePurple */
stroke-width: 2;
```

**Icon size**: 48×48px  
**Icon color**: `#4d3ef0` (corePurple)  
**Stroke width**: 2

---

### Instruction Text

```jsx
<div className="text-center">
  <p className="text-base font-semibold text-zinc-800">Record your voice response</p>
  <p className="mt-2 text-sm text-zinc-500">Click the button below when you're ready to begin</p>
</div>
```

#### Complete CSS
```css
/* Container */
text-align: center;

/* Main heading */
.heading {
  font-size: 1rem; /* 16px */
  font-weight: 600; /* Semibold */
  color: #27272a; /* zinc-800 */
  line-height: 1.5; /* 24px */
}

/* Secondary text */
.subtext {
  margin-top: 0.5rem; /* 8px */
  font-size: 0.875rem; /* 14px */
  color: #71717a; /* zinc-500 */
  line-height: 1.5; /* 21px */
}
```

**Text content**:
- Heading: "Record your voice response"
- Subtext: "Click the button below when you're ready to begin"

---

### Start Recording Button

```jsx
<button
  type="button"
  onClick={() => setShowVoiceIntroModal(true)}
  className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-b from-corePurple to-[#4338ca] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(77,62,240,0.4)] transition hover:shadow-[0_6px_20px_rgba(77,62,240,0.45)] hover:-translate-y-0.5"
>
  <Icon name="mic" className="h-5 w-5" />
  Start recording
</button>
```

#### Complete CSS
```css
display: inline-flex;
align-items: center;
gap: 0.625rem; /* 10px between icon and text */
border-radius: 0.75rem; /* 12px */
background-image: linear-gradient(to bottom, #4d3ef0, #4338ca);
/* Vertical gradient: corePurple to indigo-700 */
padding-left: 2rem; /* 32px */
padding-right: 2rem; /* 32px */
padding-top: 0.875rem; /* 14px */
padding-bottom: 0.875rem; /* 14px */
font-size: 0.875rem; /* 14px */
font-weight: 600; /* Semibold */
color: #ffffff; /* White text */
box-shadow: 0 4px 14px rgba(77, 62, 240, 0.4); /* Purple shadow */
transition: all 150ms ease;

/* Hover state */
&:hover {
  box-shadow: 0 6px 20px rgba(77, 62, 240, 0.45); /* Stronger shadow */
  transform: translateY(-2px); /* Lifts up 2px */
}

/* Active/press state */
&:active {
  transform: translateY(-1px);
}
```

**Button specifications**:
- Width: Auto (content width + padding)
- Height: ~47px (14px + 14px padding + text height)
- Gradient: Vertical purple to darker indigo
- Shadow: Purple-tinted, grows on hover
- Animation: Lifts up 2px on hover
- Icon: 20×20px microphone

#### Microphone Icon in Button
```css
height: 1.25rem; /* 20px */
width: 1.25rem; /* 20px */
color: #ffffff; /* White */
```

**Button text**: "Start recording"

**Visual effect**: Button appears to float up slightly when hovered

---

## Voice Introduction Modal (Appears on Button Click)

### Modal Overlay

```jsx
<div className="fixed inset-0 z-50 flex items-center justify-center p-4" aria-modal="true" role="dialog">
  {/* Backdrop */}
  <div
    className="fixed inset-0 bg-zinc-900/40 backdrop-blur-sm"
    onClick={() => setShowVoiceIntroModal(false)}
    aria-hidden="true"
  />
  {/* Modal content */}
</div>
```

```css
/* Overlay container */
position: fixed;
inset: 0; /* top: 0, right: 0, bottom: 0, left: 0 */
z-index: 50; /* Above all content */
display: flex;
align-items: center; /* Vertical center */
justify-content: center; /* Horizontal center */
padding: 1rem; /* 16px - prevents modal touching edges on mobile */

/* Backdrop */
.backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(24, 24, 27, 0.4); /* zinc-900 at 40% */
  backdrop-filter: blur(4px); /* Blurs content behind */
  -webkit-backdrop-filter: blur(4px); /* Safari support */
}
```

---

### Modal Card

```jsx
<div className="relative w-full max-w-md rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.18)] sm:p-8">
  {/* Content */}
</div>
```

```css
position: relative; /* For close button positioning */
width: 100%;
max-width: 28rem; /* 448px */
border-radius: 1rem; /* 16px */
border: 1px solid rgba(228, 228, 231, 0.8); /* zinc-200 at 80% */
background-color: #ffffff;
padding: 1.5rem; /* 24px on mobile */
box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.18); /* Large soft shadow */

/* Desktop (≥640px) */
@media (min-width: 640px) {
  padding: 2rem; /* 32px on desktop */
}
```

**Modal dimensions**:
- Max width: 448px
- Padding: 24px mobile, 32px desktop
- Border radius: 16px
- Shadow: Large, soft, dark shadow

---

### Modal Content Layout

```jsx
<div className="flex items-start gap-4">
  {/* Icon box */}
  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-corePurple/10">
    <Icon name="mic" className="h-6 w-6 text-corePurple" />
  </div>
  
  {/* Text content */}
  <div>
    <h3 className="text-lg font-semibold text-zinc-900">Verbal question</h3>
    <p className="mt-2 text-[15px] leading-relaxed text-zinc-600">
      This is a verbal question. We want to understand your process and how you think through the problem. Once you click "Start question", you'll have up to 45 seconds to prepare—or begin recording right away if you're ready. Click "Stop recording" when you're finished.
    </p>
    
    {/* Buttons */}
    <div className="mt-6 flex justify-end gap-3">
      <button>Cancel</button>
      <button>Start question</button>
    </div>
  </div>
</div>
```

---

### Icon Box

```css
display: flex;
height: 3rem; /* 48px */
width: 3rem; /* 48px */
flex-shrink: 0; /* Never shrinks */
align-items: center;
justify-content: center;
border-radius: 0.75rem; /* 12px - square with rounded corners */
background-color: rgba(77, 62, 240, 0.1); /* corePurple at 10% */
```

**Icon in box**:
```css
height: 1.5rem; /* 24px */
width: 1.5rem; /* 24px */
color: #4d3ef0; /* corePurple */
```

**Box specifications**:
- Size: 48×48px square
- Border radius: 12px (rounded square, not circle)
- Background: Light purple (10% opacity)
- Icon: 24×24px microphone

---

### Modal Title

```jsx
<h3 className="text-lg font-semibold text-zinc-900">Verbal question</h3>
```

```css
font-size: 1.125rem; /* 18px */
font-weight: 600; /* Semibold */
color: #18181b; /* zinc-900 */
line-height: 1.75rem; /* 28px */
```

**Title text**: "Verbal question"

---

### Modal Description

```jsx
<p className="mt-2 text-[15px] leading-relaxed text-zinc-600">
  This is a verbal question. We want to understand your process and how you think through the problem. Once you click "Start question", you'll have up to 45 seconds to prepare—or begin recording right away if you're ready. Click "Stop recording" when you're finished.
</p>
```

```css
margin-top: 0.5rem; /* 8px from title */
font-size: 15px; /* Explicit pixel value */
line-height: 1.625; /* 24.375px - "relaxed" */
color: #52525b; /* zinc-600 */
```

**Full description text**:
```
This is a verbal question. We want to understand your process and how you think through the problem. Once you click "Start question", you'll have up to 45 seconds to prepare—or begin recording right away if you're ready. Click "Stop recording" when you're finished.
```

---

### Modal Buttons Container

```jsx
<div className="mt-6 flex justify-end gap-3">
  <button>Cancel</button>
  <button>Start question</button>
</div>
```

```css
margin-top: 1.5rem; /* 24px from description */
display: flex;
justify-content: flex-end; /* Right-aligned */
gap: 0.75rem; /* 12px between buttons */
```

---

### Cancel Button (Secondary)

```jsx
<button
  type="button"
  onClick={() => setShowVoiceIntroModal(false)}
  className="rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50"
>
  Cancel
</button>
```

```css
border-radius: 0.75rem; /* 12px */
border: 1px solid #e4e4e7; /* zinc-200 */
background-color: #ffffff;
padding-left: 1rem; /* 16px */
padding-right: 1rem; /* 16px */
padding-top: 0.625rem; /* 10px */
padding-bottom: 0.625rem; /* 10px */
font-size: 0.875rem; /* 14px */
font-weight: 600; /* Semibold */
color: #3f3f46; /* zinc-700 */
transition: background-color 150ms ease;

&:hover {
  background-color: #fafafa; /* zinc-50 */
}
```

**Button text**: "Cancel"

---

### Start Question Button (Primary)

```jsx
<button
  type="button"
  onClick={handleStartQuestion}
  className="inline-flex items-center gap-2 rounded-xl bg-corePurple px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-105"
>
  <Icon name="mic" className="h-4 w-4" />
  Start question
</button>
```

```css
display: inline-flex;
align-items: center;
gap: 0.5rem; /* 8px */
border-radius: 0.75rem; /* 12px */
background-color: #4d3ef0; /* corePurple - solid, not gradient */
padding-left: 1rem; /* 16px */
padding-right: 1rem; /* 16px */
padding-top: 0.625rem; /* 10px */
padding-bottom: 0.625rem; /* 10px */
font-size: 0.875rem; /* 14px */
font-weight: 600; /* Semibold */
color: #ffffff;
transition: filter 150ms ease;

&:hover {
  filter: brightness(1.05); /* 5% brighter */
}
```

**Icon**:
```css
height: 1rem; /* 16px */
width: 1rem; /* 16px */
color: #ffffff;
```

**Button text**: "Start question"

---

## Recording States (After Modal)

### State 2: Countdown (45 seconds preparation)

```jsx
<div className="flex flex-col items-center gap-8">
  <p className="max-w-sm text-center text-[15px] leading-relaxed text-zinc-600">
    Take a moment to gather your thoughts. Recording will start automatically, or begin whenever you're ready.
  </p>
  
  <div className="inline-flex items-center gap-3 rounded-full border border-zinc-200/80 bg-white/90 px-6 py-3 shadow-sm">
    <span className="text-3xl font-semibold tabular-nums tracking-tight text-zinc-800">45</span>
    <span className="text-sm font-medium text-zinc-500">seconds to prepare</span>
  </div>
  
  <button>Start recording now</button>
</div>
```

#### Countdown Display

```css
/* Container */
display: inline-flex;
align-items: center;
gap: 0.75rem; /* 12px */
border-radius: 9999px; /* Pill shape */
border: 1px solid rgba(228, 228, 231, 0.8);
background-color: rgba(255, 255, 255, 0.9); /* Slightly transparent */
padding: 0.75rem 1.5rem; /* 12px top/bottom, 24px left/right */
box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

/* Number */
.countdown-number {
  font-size: 1.875rem; /* 30px */
  font-weight: 600; /* Semibold */
  font-variant-numeric: tabular-nums; /* Fixed-width numbers */
  letter-spacing: -0.025em; /* Tight */
  color: #27272a; /* zinc-800 */
}

/* Label */
.countdown-label {
  font-size: 0.875rem; /* 14px */
  font-weight: 500; /* Medium */
  color: #71717a; /* zinc-500 */
}
```

**Countdown format**: `45`, `44`, `43`, ... `1` (just the number, no colon)

---

### State 3: Recording (Animated Waveform)

```jsx
<div className="flex w-full max-w-xs flex-col items-center gap-8">
  {/* Waveform */}
  <div className="flex h-24 items-end justify-center gap-2">
    {[0,1,2,3,4,5,6,7,8,9].map((i) => (
      <div
        key={i}
        className="w-2.5 rounded-full bg-gradient-to-t from-corePurple to-violet origin-bottom shadow-sm"
        style={{
          height: "36px",
          animation: "voicewave 0.5s ease-in-out infinite alternate",
          animationDelay: `${i * 0.06}s`,
        }}
      />
    ))}
  </div>
  
  {/* Recording indicator */}
  <div className="flex flex-col items-center gap-5">
    <div className="inline-flex items-center gap-3 rounded-full bg-zinc-100/80 px-4 py-2">
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
      </span>
      <p className="text-sm font-semibold text-zinc-700">Recording...</p>
    </div>
    
    <button>Stop recording</button>
  </div>
</div>
```

#### Waveform Bars

```css
/* Container */
display: flex;
height: 6rem; /* 96px */
align-items: flex-end; /* Bars grow upward from bottom */
justify-content: center;
gap: 0.5rem; /* 8px between bars */

/* Individual bar */
.bar {
  width: 0.625rem; /* 10px */
  height: 36px; /* Default height */
  border-radius: 9999px; /* Fully rounded ends */
  background-image: linear-gradient(to top, #4d3ef0, #594ce9);
  transform-origin: bottom; /* Scale from bottom */
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  animation: voicewave 0.5s ease-in-out infinite alternate;
  animation-delay: ${index * 0.06}s; /* 0s, 60ms, 120ms, ... 540ms */
}
```

**Waveform animation** (defined in globals.css):
```css
@keyframes voicewave {
  0%, 100% {
    transform: scaleY(0.25); /* Shrink to 25% = 9px */
  }
  50% {
    transform: scaleY(1); /* Full height = 36px */
  }
}
```

**10 bars total**, each with staggered delay creating wave effect

---

#### Recording Indicator Badge

```css
/* Container */
display: inline-flex;
align-items: center;
gap: 0.75rem; /* 12px */
border-radius: 9999px; /* Pill */
background-color: rgba(244, 244, 245, 0.8); /* zinc-100 at 80% */
padding: 0.5rem 1rem; /* 8px top/bottom, 16px left/right */
```

**Pulsing Red Dot** (double-layer):
```css
/* Outer container */
position: relative;
display: flex;
height: 0.625rem; /* 10px */
width: 0.625rem; /* 10px */

/* Animated outer dot */
.ping {
  position: absolute;
  display: inline-flex;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background-color: #ef4444; /* red-500 */
  opacity: 0.75;
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes ping {
  75%, 100% {
    transform: scale(2); /* Grows to 200% */
    opacity: 0; /* Fades out */
  }
}

/* Inner solid dot */
.dot {
  position: relative;
  display: inline-flex;
  height: 0.625rem; /* 10px */
  width: 0.625rem; /* 10px */
  border-radius: 50%;
  background-color: #ef4444; /* red-500 */
}
```

**Text**:
```css
font-size: 0.875rem; /* 14px */
font-weight: 600; /* Semibold */
color: #3f3f46; /* zinc-700 */
```

**Text content**: "Recording..."

---

#### Stop Recording Button

```jsx
<button
  type="button"
  onClick={handleStopRecording}
  className="rounded-xl bg-gradient-to-b from-red-500 to-red-600 px-8 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(239,68,68,0.35)] transition hover:shadow-[0_6px_20px_rgba(239,68,68,0.4)] hover:-translate-y-0.5"
>
  Stop recording
</button>
```

```css
border-radius: 0.75rem; /* 12px */
background-image: linear-gradient(to bottom, #ef4444, #dc2626);
/* Vertical gradient: red-500 to red-600 */
padding-left: 2rem; /* 32px */
padding-right: 2rem; /* 32px */
padding-top: 0.75rem; /* 12px */
padding-bottom: 0.75rem; /* 12px */
font-size: 0.875rem; /* 14px */
font-weight: 600; /* Semibold */
color: #ffffff;
box-shadow: 0 4px 14px rgba(239, 68, 68, 0.35); /* Red shadow */
transition: all 150ms ease;

&:hover {
  box-shadow: 0 6px 20px rgba(239, 68, 68, 0.4); /* Stronger shadow */
  transform: translateY(-2px); /* Lifts up 2px */
}
```

**Button text**: "Stop recording"

---

### State 4: Completed (Success)

```jsx
<div className="flex flex-col items-center gap-6">
  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-100 to-emerald-50 shadow-[0_8px_24px_-8px_rgba(5,150,105,0.3)]">
    <svg className="h-10 w-10 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
  <p className="text-base font-semibold text-zinc-800">Recording saved</p>
</div>
```

#### Success Circle

```css
display: flex;
height: 5rem; /* 80px */
width: 5rem; /* 80px */
align-items: center;
justify-content: center;
border-radius: 50%; /* Perfect circle */
background-image: linear-gradient(to bottom right, #d1fae5, #ecfdf5);
/* Gradient: emerald-100 to emerald-50 */
box-shadow: 0 8px 24px -8px rgba(5, 150, 105, 0.3); /* Green glow */
```

#### Checkmark Icon

```css
height: 2.5rem; /* 40px */
width: 2.5rem; /* 40px */
color: #059669; /* emerald-600 */
stroke-width: 2;
```

**SVG path**: `M5 13l4 4L19 7` (checkmark shape)

#### Success Text

```css
font-size: 1rem; /* 16px */
font-weight: 600; /* Semibold */
color: #27272a; /* zinc-800 */
```

**Text**: "Recording saved"

---

## Complete Color Reference

```css
/* Brand Colors */
--corePurple: #4d3ef0;
--violet: #594ce9;
--indigo-700: #4338ca;  /* Button gradient bottom */

/* Grays */
--zinc-50: #fafafa;
--zinc-100: #f4f4f5;
--zinc-200: #e4e4e7;
--zinc-500: #71717a;
--zinc-600: #52525b;
--zinc-700: #3f3f46;
--zinc-800: #27272a;
--zinc-900: #18181b;

/* Recording States */
--red-500: #ef4444;     /* Recording dot */
--red-600: #dc2626;     /* Button gradient bottom */

/* Success */
--emerald-50: #ecfdf5;   /* Success circle light */
--emerald-100: #d1fae5;  /* Success circle dark */
--emerald-600: #059669;  /* Checkmark icon */

/* White & Transparent */
--white: #ffffff;
rgba(255,255,255,0.9): Semi-transparent white
rgba(255,255,255,0.8): Icon circle background
```

---

## Typography Reference

```css
/* Heading in card */
16px, semibold (600), zinc-800

/* Modal title */
18px, semibold (600), zinc-900

/* Description text */
15px, normal (400), leading-relaxed (1.625), zinc-600

/* Button text */
14px, semibold (600), white or zinc-700

/* Countdown number */
30px, semibold (600), tabular-nums, zinc-800

/* Countdown label */
14px, medium (500), zinc-500

/* Recording status */
14px, semibold (600), zinc-700

/* Success text */
16px, semibold (600), zinc-800
```

---

## Spacing Reference

```css
/* Main container padding */
32px all sides

/* Gap between main elements */
32px (gap-8)

/* Modal padding */
24px mobile, 32px desktop

/* Button padding */
Start recording: 32px horizontal, 14px vertical
Modal buttons: 16px horizontal, 10px vertical
Stop button: 32px horizontal, 12px vertical

/* Icon sizes */
Main mic icon: 48×48px
Button mic icon: 20×20px
Modal mic icon: 24×24px
Checkmark: 40×40px

/* Waveform */
Bar width: 10px
Bar gap: 8px
Bar height: 36px (animated)

/* Recording dot */
Size: 10×10px
Ping animation: scales to 20×20px
```

---

## Animation Specifications

### Voice Wave Animation
```css
@keyframes voicewave {
  0%, 100% { transform: scaleY(0.25); }
  50% { transform: scaleY(1); }
}

Duration: 500ms
Timing: ease-in-out
Iterations: infinite
Direction: alternate
Delays: 0ms, 60ms, 120ms, 180ms, 240ms, 300ms, 360ms, 420ms, 480ms, 540ms
```

### Ping Animation (Recording Dot)
```css
@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

Duration: 1000ms
Timing: cubic-bezier(0, 0, 0.2, 1)
Iterations: infinite
```

### Button Hover Animation
```css
transition: all 150ms ease;
hover: translateY(-2px)
```

---

## Implementation Checklist

- [ ] Gradient background container (zinc-50/80 to white)
- [ ] 96×96px microphone circle with purple gradient
- [ ] 48×48px microphone icon inside circle
- [ ] Purple glow shadow under circle
- [ ] Instruction text: 16px heading + 14px subtext
- [ ] Start button: Vertical purple gradient, lifts on hover
- [ ] Voice intro modal: 448px max width, large shadow
- [ ] Modal icon box: 48×48px square, 12px radius, light purple
- [ ] Modal buttons: Cancel (outline) + Start (purple)
- [ ] Countdown: 30px tabular numbers in pill badge
- [ ] Waveform: 10 bars, 10px wide, gradient fill, staggered animation
- [ ] Recording indicator: Pulsing red dot + "Recording..." text
- [ ] Stop button: Red gradient, lifts on hover
- [ ] Success: 80×80px green circle, 40×40px checkmark
- [ ] All animations: Correct timing and easing functions
- [ ] All spacing: Exact pixel/rem values
- [ ] All colors: Exact hex/rgba values

---

**This document contains EVERY detail needed to recreate the voice recording workspace pixel-perfectly.**
