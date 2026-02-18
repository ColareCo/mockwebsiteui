# Voice Countdown & Recording Module - Exact Design Specifications

**Document Version**: 1.0  
**Last Updated**: Feb 12, 2026  
**Purpose**: Pixel-perfect recreation of the voice recording countdown ("seconds to prepare") and active recording states

---

## Overview

This document details the **countdown state** (45 seconds to prepare) and the **start recording now button** for voice questions, as well as the active recording state with animated waveform visualization.

---

## Visual States Covered

1. **Countdown State** - Shows countdown timer with "seconds to prepare" and "Start recording now" button
2. **Recording State** - Shows animated waveform bars, pulsing red dot, and "Stop recording" button

---

# 1. Countdown State - "Seconds to Prepare"

## 1.1 Overall Layout

```
┌─────────────────────────────────────────────────┐
│                                                 │
│     [Centered instructional text]              │
│                                                 │
│     ┌──────────────────────────┐               │
│     │  45  seconds to prepare   │               │
│     └──────────────────────────┘               │
│                                                 │
│     ┌──────────────────────────┐               │
│     │ 🎤 Start recording now    │               │
│     └──────────────────────────┘               │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Container Specs**:
- Type: `<div>` with flexbox column layout
- Alignment: Centered both vertically and horizontally
- Gap between elements: `32px` (Tailwind: `gap-8`)
- Background: Gradient from zinc-50/80 to white
- Padding: `32px` (Tailwind: `p-8`)
- Min-height: `280px`
- Border-radius: `16px` (Tailwind: `rounded-2xl`)
- Box shadow: Inset top highlight `inset 0 1px 0 rgba(255,255,255,0.8)`

---

## 1.2 Instructional Text

**Content**: 
```
"Take a moment to gather your thoughts. Recording will start automatically, or begin whenever you're ready."
```

**Styling**:
- Font size: `15px`
- Line height: `relaxed` (1.625)
- Color: `#52525b` (zinc-600)
- Text align: `center`
- Max width: `384px` (sm breakpoint, Tailwind: `max-w-sm`)

**CSS**:
```css
.countdown-instruction {
  max-width: 24rem; /* 384px */
  text-align: center;
  font-size: 15px;
  line-height: 1.625;
  color: #52525b;
}
```

**JSX**:
```jsx
<p className="max-w-sm text-center text-[15px] leading-relaxed text-zinc-600">
  Take a moment to gather your thoughts. Recording will start automatically, or begin whenever you're ready.
</p>
```

---

## 1.3 Countdown Timer Badge

### Visual Design

```
┌─────────────────────────────┐
│  45  seconds to prepare     │
└─────────────────────────────┘
```

**Container**:
- Display: `inline-flex`
- Align items: `center`
- Gap: `12px` (Tailwind: `gap-3`)
- Padding: `12px 24px` (Tailwind: `px-6 py-3`)
- Border-radius: `9999px` (Tailwind: `rounded-full`)
- Border: `1px solid rgba(228, 228, 231, 0.8)` (Tailwind: `border-zinc-200/80`)
- Background: `rgba(255, 255, 255, 0.9)` (Tailwind: `bg-white/90`)
- Box shadow: `0 1px 2px rgba(0, 0, 0, 0.05)` (Tailwind: `shadow-sm`)

**Number Display**:
- Font size: `30px` (Tailwind: `text-3xl`)
- Font weight: `600` (semibold)
- Font variant: Tabular nums (monospace digits)
- Letter spacing: `-0.025em` (tight)
- Color: `#27272a` (zinc-800)

**Label Text** ("seconds to prepare"):
- Font size: `14px` (Tailwind: `text-sm`)
- Font weight: `500` (medium)
- Color: `#71717a` (zinc-500)

### CSS

```css
.countdown-badge {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;
  border-radius: 9999px;
  border: 1px solid rgba(228, 228, 231, 0.8);
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.countdown-number {
  font-size: 30px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.025em;
  color: #27272a;
}

.countdown-label {
  font-size: 14px;
  font-weight: 500;
  color: #71717a;
}
```

### JSX Implementation

```jsx
<div className="inline-flex items-center gap-3 rounded-full border border-zinc-200/80 bg-white/90 px-6 py-3 shadow-sm">
  <span className="text-3xl font-semibold tabular-nums tracking-tight text-zinc-800">
    {voiceState.countdown}
  </span>
  <span className="text-sm font-medium text-zinc-500">
    seconds to prepare
  </span>
</div>
```

---

## 1.4 "Start Recording Now" Button

### Visual Design

Purple gradient button with microphone icon.

**States**:
1. **Default**: Purple gradient with shadow
2. **Hover**: Increased shadow + slight upward translation (-2px)

### Specifications

**Container**:
- Display: `inline-flex`
- Align items: `center`
- Gap: `10px` (Tailwind: `gap-2.5`)
- Padding: `14px 32px` (Tailwind: `px-8 py-3.5`)
- Border-radius: `12px` (Tailwind: `rounded-xl`)
- Background: Gradient from `#4d3ef0` (corePurple) to `#4338ca`
- Color: White `#ffffff`
- Font size: `14px` (Tailwind: `text-sm`)
- Font weight: `600` (semibold)
- Box shadow: `0 4px 14px rgba(77, 62, 240, 0.4)`
- Transition: All properties
- Cursor: `pointer`

**Hover State**:
- Box shadow: `0 6px 20px rgba(77, 62, 240, 0.45)`
- Transform: `translateY(-2px)` (Tailwind: `hover:-translate-y-0.5`)

**Icon**:
- Size: `20px × 20px` (Tailwind: `h-5 w-5`)
- Type: Microphone icon
- Color: White

### CSS

```css
.start-recording-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 32px;
  border-radius: 12px;
  background: linear-gradient(to bottom, #4d3ef0, #4338ca);
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 0 4px 14px rgba(77, 62, 240, 0.4);
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
}

.start-recording-button:hover {
  box-shadow: 0 6px 20px rgba(77, 62, 240, 0.45);
  transform: translateY(-2px);
}

.start-recording-button svg {
  width: 20px;
  height: 20px;
}
```

### JSX Implementation

```jsx
<button
  type="button"
  onClick={() =>
    setVoiceStateByIndex((prev) => ({
      ...prev,
      [scenarioIndex]: { ...(prev[scenarioIndex] ?? voiceState), countdown: 0 },
    }))
  }
  className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-b from-corePurple to-[#4338ca] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(77,62,240,0.4)] transition hover:shadow-[0_6px_20px_rgba(77,62,240,0.45)] hover:-translate-y-0.5"
>
  <Icon name="mic" className="h-5 w-5" />
  Start recording now
</button>
```

---

# 2. Recording State - Active Recording with Waveform

## 2.1 Overall Layout

```
┌─────────────────────────────────────────────────┐
│                                                 │
│     [Animated waveform bars - 10 bars]         │
│                                                 │
│     ┌──────────────────────┐                   │
│     │ ● Recording...        │                   │
│     └──────────────────────┘                   │
│                                                 │
│     [Stop recording button]                     │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Container**:
- Max width: `320px` (Tailwind: `max-w-xs`)
- Flexbox column
- Items centered
- Gap: `32px` (Tailwind: `gap-8`)

---

## 2.2 Animated Waveform Bars

### Visual Design

10 vertical bars that animate up and down to simulate audio waveform.

```
│ │ │ │ │ │ │ │ │ │
│ │ │ │ │ │ │ │ │ │  ← Bars animate between min/max height
│ │ │ │ │ │ │ │ │ │
```

### Specifications

**Container**:
- Display: `flex`
- Height: `96px` (Tailwind: `h-24`)
- Align items: `flex-end`
- Justify content: `center`
- Gap: `8px` (Tailwind: `gap-2`)

**Individual Bar**:
- Width: `10px` (Tailwind: `w-2.5`)
- Height: `36px` (fixed)
- Border-radius: `9999px` (fully rounded, Tailwind: `rounded-full`)
- Background: Gradient from `#4d3ef0` (corePurple) to `#7c3aed` (violet)
- Transform origin: `bottom`
- Box shadow: `0 1px 2px rgba(0, 0, 0, 0.05)` (Tailwind: `shadow-sm`)

**Animation**:
- Animation name: `voicewave`
- Duration: `0.5s`
- Timing function: `ease-in-out`
- Iteration: `infinite`
- Direction: `alternate`
- Delay: Staggered by `0.06s` per bar (bar 0: 0s, bar 1: 0.06s, bar 2: 0.12s, etc.)

### Keyframe Animation (globals.css)

```css
@keyframes voicewave {
  0% {
    transform: scaleY(0.4);
  }
  100% {
    transform: scaleY(1.2);
  }
}
```

### CSS

```css
.waveform-container {
  display: flex;
  height: 96px;
  align-items: flex-end;
  justify-content: center;
  gap: 8px;
}

.waveform-bar {
  width: 10px;
  height: 36px;
  border-radius: 9999px;
  background: linear-gradient(to top, #4d3ef0, #7c3aed);
  transform-origin: bottom;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  animation: voicewave 0.5s ease-in-out infinite alternate;
}

/* Staggered delays for each bar */
.waveform-bar:nth-child(1) { animation-delay: 0s; }
.waveform-bar:nth-child(2) { animation-delay: 0.06s; }
.waveform-bar:nth-child(3) { animation-delay: 0.12s; }
.waveform-bar:nth-child(4) { animation-delay: 0.18s; }
.waveform-bar:nth-child(5) { animation-delay: 0.24s; }
.waveform-bar:nth-child(6) { animation-delay: 0.30s; }
.waveform-bar:nth-child(7) { animation-delay: 0.36s; }
.waveform-bar:nth-child(8) { animation-delay: 0.42s; }
.waveform-bar:nth-child(9) { animation-delay: 0.48s; }
.waveform-bar:nth-child(10) { animation-delay: 0.54s; }
```

### JSX Implementation

```jsx
<div className="flex h-24 items-end justify-center gap-2">
  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
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
```

---

## 2.3 "Recording..." Badge

### Visual Design

Pill-shaped badge with pulsing red dot and "Recording..." text.

```
┌──────────────────┐
│ ● Recording...    │
└──────────────────┘
```

### Specifications

**Container**:
- Display: `inline-flex`
- Align items: `center`
- Gap: `12px` (Tailwind: `gap-3`)
- Padding: `8px 16px` (Tailwind: `px-4 py-2`)
- Border-radius: `9999px` (Tailwind: `rounded-full`)
- Background: `rgba(244, 244, 245, 0.8)` (Tailwind: `bg-zinc-100/80`)

**Pulsing Red Dot**:
- Outer wrapper: `position: relative`, size `10px × 10px` (Tailwind: `h-2.5 w-2.5`)
- Animated ping layer: `position: absolute`, full size, red `#ef4444`, opacity `0.75`, animation `ping`
- Inner solid dot: `position: relative`, size `10px × 10px`, red `#ef4444`, fully rounded

**Text** ("Recording..."):
- Font size: `14px` (Tailwind: `text-sm`)
- Font weight: `600` (semibold)
- Color: `#3f3f46` (zinc-700)

### CSS

```css
.recording-badge {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  border-radius: 9999px;
  background: rgba(244, 244, 245, 0.8);
}

.pulsing-dot-wrapper {
  position: relative;
  width: 10px;
  height: 10px;
}

.pulsing-dot-ping {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 9999px;
  background: #ef4444;
  opacity: 0.75;
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.pulsing-dot-solid {
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 9999px;
  background: #ef4444;
}

.recording-text {
  font-size: 14px;
  font-weight: 600;
  color: #3f3f46;
}

/* Ping animation (Tailwind default) */
@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}
```

### JSX Implementation

```jsx
<div className="inline-flex items-center gap-3 rounded-full bg-zinc-100/80 px-4 py-2">
  <span className="relative flex h-2.5 w-2.5">
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
  </span>
  <p className="text-sm font-semibold text-zinc-700">Recording...</p>
</div>
```

---

## 2.4 "Stop Recording" Button

### Visual Design

Red gradient button with no icon.

**States**:
1. **Default**: Red gradient with shadow
2. **Hover**: Increased shadow + slight upward translation

### Specifications

**Container**:
- Padding: `12px 32px` (Tailwind: `px-8 py-3`)
- Border-radius: `12px` (Tailwind: `rounded-xl`)
- Background: Gradient from `#ef4444` (red-500) to `#dc2626` (red-600)
- Color: White `#ffffff`
- Font size: `14px` (Tailwind: `text-sm`)
- Font weight: `600` (semibold)
- Box shadow: `0 4px 14px rgba(239, 68, 68, 0.35)`
- Transition: All properties

**Hover State**:
- Box shadow: `0 6px 20px rgba(239, 68, 68, 0.4)`
- Transform: `translateY(-2px)` (Tailwind: `hover:-translate-y-0.5`)

### CSS

```css
.stop-recording-button {
  padding: 12px 32px;
  border-radius: 12px;
  background: linear-gradient(to bottom, #ef4444, #dc2626);
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 0 4px 14px rgba(239, 68, 68, 0.35);
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
}

.stop-recording-button:hover {
  box-shadow: 0 6px 20px rgba(239, 68, 68, 0.4);
  transform: translateY(-2px);
}
```

### JSX Implementation

```jsx
<button
  type="button"
  onClick={() =>
    setVoiceStateByIndex((prev) => ({
      ...prev,
      [scenarioIndex]: { ...(prev[scenarioIndex] ?? voiceState), stopped: true },
    }))
  }
  className="rounded-xl bg-gradient-to-b from-red-500 to-red-600 px-8 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(239,68,68,0.35)] transition hover:shadow-[0_6px_20px_rgba(239,68,68,0.4)] hover:-translate-y-0.5"
>
  Stop recording
</button>
```

---

# 3. Complete State Machine Logic

## 3.1 Voice State TypeScript Interface

```typescript
interface VoiceState {
  modalDismissed: boolean;      // Has the intro modal been dismissed?
  recordingStarted: boolean;     // Has recording flow started?
  countdown: number | null;      // Countdown timer (45 -> 0), null = not counting
  stopped: boolean;              // Has recording been stopped?
}
```

## 3.2 State Flow Diagram

```
┌──────────────────┐
│ Not Started      │ → Click "Start recording" → Show intro modal
└──────────────────┘
         ↓
┌──────────────────┐
│ Intro Modal      │ → Click "Start question" → Countdown state
└──────────────────┘
         ↓
┌──────────────────┐
│ Countdown        │ → countdown > 0
│ (45 seconds)     │ → Can skip by clicking "Start recording now"
└──────────────────┘
         ↓
┌──────────────────┐
│ Recording        │ → countdown = 0
│ (Active)         │ → Shows waveform + pulsing dot
└──────────────────┘
         ↓
┌──────────────────┐
│ Stopped          │ → Click "Stop recording"
│ (Completed)      │ → Shows green checkmark
└──────────────────┘
```

## 3.3 React State Management

```jsx
const [voiceStateByIndex, setVoiceStateByIndex] = React.useState<Record<number, VoiceState>>({});

// Default state for a voice question
const defaultVoiceState = {
  modalDismissed: false,
  recordingStarted: false,
  countdown: null,
  stopped: false,
};

// Get current state
const voiceState = voiceStateByIndex[scenarioIndex] ?? defaultVoiceState;
```

## 3.4 Countdown Timer Logic

```jsx
// Effect: Countdown from 45 to 0
React.useEffect(() => {
  if (
    !isVoice || 
    !voiceState.recordingStarted || 
    voiceState.countdown === null || 
    voiceState.countdown <= 0 || 
    voiceState.stopped
  ) return;
  
  const timer = setTimeout(() => {
    setVoiceStateByIndex((prev) => {
      const current = prev[scenarioIndex];
      if (!current) return prev;
      const nextCountdown = Math.max(0, (current.countdown ?? 45) - 1);
      return { 
        ...prev, 
        [scenarioIndex]: { ...current, countdown: nextCountdown } 
      };
    });
  }, 1000);
  
  return () => clearTimeout(timer);
}, [scenarioIndex, isVoice, voiceState.recordingStarted, voiceState.countdown, voiceState.stopped]);
```

## 3.5 Start Recording (from Intro Modal)

```jsx
// When user clicks "Start question" in the intro modal
setShowVoiceIntroModal(false);
setVoiceStateByIndex((prev) => ({
  ...prev,
  [scenarioIndex]: {
    modalDismissed: true,
    recordingStarted: true,
    countdown: 45,  // Start 45-second countdown
    stopped: false,
  },
}));
```

## 3.6 Skip Countdown (Start Recording Now)

```jsx
// When user clicks "Start recording now" button
setVoiceStateByIndex((prev) => ({
  ...prev,
  [scenarioIndex]: { 
    ...(prev[scenarioIndex] ?? voiceState), 
    countdown: 0  // Set to 0 to trigger recording state
  },
}));
```

## 3.7 Stop Recording

```jsx
// When user clicks "Stop recording" button
setVoiceStateByIndex((prev) => ({
  ...prev,
  [scenarioIndex]: { 
    ...(prev[scenarioIndex] ?? voiceState), 
    stopped: true  // Mark as stopped/completed
  },
}));
```

---

# 4. Conditional Rendering Logic

## 4.1 Complete JSX Structure

```jsx
{!voiceState.recordingStarted ? (
  // STATE 1: Not started - Show "Start recording" button with purple mic icon
  <>
    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-corePurple/20 to-violet/10 shadow-[0_8px_32px_-8px_rgba(77,62,240,0.25)]">
      <Icon name="mic" className="h-12 w-12 text-corePurple" />
    </div>
    <div className="text-center">
      <p className="text-base font-semibold text-zinc-800">Record your voice response</p>
      <p className="mt-2 text-sm text-zinc-500">Click the button below when you're ready to begin</p>
    </div>
    <button
      type="button"
      onClick={() => setShowVoiceIntroModal(true)}
      className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-b from-corePurple to-[#4338ca] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(77,62,240,0.4)] transition hover:shadow-[0_6px_20px_rgba(77,62,240,0.45)] hover:-translate-y-0.5"
    >
      <Icon name="mic" className="h-5 w-5" />
      Start recording
    </button>
  </>
) : voiceState.countdown !== null && voiceState.countdown > 0 ? (
  // STATE 2: Countdown - Show "45 seconds to prepare" + "Start recording now"
  <div className="flex flex-col items-center gap-8">
    <p className="max-w-sm text-center text-[15px] leading-relaxed text-zinc-600">
      Take a moment to gather your thoughts. Recording will start automatically, or begin whenever you're ready.
    </p>
    <div className="inline-flex items-center gap-3 rounded-full border border-zinc-200/80 bg-white/90 px-6 py-3 shadow-sm">
      <span className="text-3xl font-semibold tabular-nums tracking-tight text-zinc-800">
        {voiceState.countdown}
      </span>
      <span className="text-sm font-medium text-zinc-500">seconds to prepare</span>
    </div>
    <button
      type="button"
      onClick={() =>
        setVoiceStateByIndex((prev) => ({
          ...prev,
          [scenarioIndex]: { ...(prev[scenarioIndex] ?? voiceState), countdown: 0 },
        }))
      }
      className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-b from-corePurple to-[#4338ca] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(77,62,240,0.4)] transition hover:shadow-[0_6px_20px_rgba(77,62,240,0.45)] hover:-translate-y-0.5"
    >
      <Icon name="mic" className="h-5 w-5" />
      Start recording now
    </button>
  </div>
) : voiceState.stopped ? (
  // STATE 3: Stopped/Completed - Show green checkmark
  <div className="flex flex-col items-center gap-6">
    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-100 to-emerald-50 shadow-[0_8px_24px_-8px_rgba(5,150,105,0.3)]">
      <svg className="h-10 w-10 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    <p className="text-base font-semibold text-zinc-800">Recording saved</p>
  </div>
) : (
  // STATE 4: Recording - Show animated waveform + pulsing dot + "Stop recording"
  <div className="flex w-full max-w-xs flex-col items-center gap-8">
    <div className="flex h-24 items-end justify-center gap-2">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
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
    <div className="flex flex-col items-center gap-5">
      <div className="inline-flex items-center gap-3 rounded-full bg-zinc-100/80 px-4 py-2">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
        </span>
        <p className="text-sm font-semibold text-zinc-700">Recording...</p>
      </div>
      <button
        type="button"
        onClick={() =>
          setVoiceStateByIndex((prev) => ({
            ...prev,
            [scenarioIndex]: { ...(prev[scenarioIndex] ?? voiceState), stopped: true },
          }))
        }
        className="rounded-xl bg-gradient-to-b from-red-500 to-red-600 px-8 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(239,68,68,0.35)] transition hover:shadow-[0_6px_20px_rgba(239,68,68,0.4)] hover:-translate-y-0.5"
      >
        Stop recording
      </button>
    </div>
  </div>
)}
```

---

# 5. Color & Typography Reference

## 5.1 Colors Used

| Element | Color | Hex/RGBA |
|---------|-------|----------|
| Countdown number | zinc-800 | `#27272a` |
| Countdown label | zinc-500 | `#71717a` |
| Instruction text | zinc-600 | `#52525b` |
| Button gradient start (purple) | corePurple | `#4d3ef0` |
| Button gradient end (purple) | - | `#4338ca` |
| Button text | white | `#ffffff` |
| Waveform bar gradient start | corePurple | `#4d3ef0` |
| Waveform bar gradient end | violet | `#7c3aed` |
| Pulsing dot | red-500 | `#ef4444` |
| Recording badge bg | zinc-100/80 | `rgba(244, 244, 245, 0.8)` |
| Recording text | zinc-700 | `#3f3f46` |
| Stop button gradient start | red-500 | `#ef4444` |
| Stop button gradient end | red-600 | `#dc2626` |

## 5.2 Typography

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Instruction text | 15px | 400 | 1.625 (relaxed) |
| Countdown number | 30px (3xl) | 600 (semibold) | 1.2 |
| Countdown label | 14px (sm) | 500 (medium) | 1.25 |
| Button text | 14px (sm) | 600 (semibold) | 1.25 |
| Recording badge | 14px (sm) | 600 (semibold) | 1.25 |

---

# 6. Animations

## 6.1 Voicewave Animation (globals.css)

```css
@keyframes voicewave {
  0% {
    transform: scaleY(0.4);
  }
  100% {
    transform: scaleY(1.2);
  }
}
```

**Usage**: Applied to each waveform bar with staggered delay.

## 6.2 Ping Animation (Tailwind default)

```css
@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}
```

**Usage**: Applied to the outer pulsing red dot layer.

---

# 7. Implementation Checklist

## Countdown State
- [ ] Create container with gradient background and proper spacing
- [ ] Add instructional text with correct font size and color
- [ ] Implement countdown badge with number and label
- [ ] Style number with tabular-nums font variant
- [ ] Add "Start recording now" button with purple gradient
- [ ] Implement hover state with shadow and translation
- [ ] Add microphone icon to button

## Recording State
- [ ] Create waveform container with 10 bars
- [ ] Apply gradient background to each bar
- [ ] Implement voicewave keyframe animation in globals.css
- [ ] Add staggered animation delay to each bar (0.06s increment)
- [ ] Create "Recording..." badge with pulsing red dot
- [ ] Implement ping animation for pulsing effect
- [ ] Add "Stop recording" button with red gradient
- [ ] Implement hover state for stop button

## State Management
- [ ] Define VoiceState TypeScript interface
- [ ] Initialize state with default values
- [ ] Implement countdown timer with useEffect
- [ ] Add logic to skip countdown ("Start recording now")
- [ ] Add logic to stop recording
- [ ] Implement conditional rendering for all 4 states

## Testing
- [ ] Verify countdown decrements every second
- [ ] Test "Start recording now" button skips to recording state
- [ ] Verify waveform bars animate smoothly with stagger effect
- [ ] Test "Stop recording" transitions to completed state
- [ ] Check all hover states and transitions work correctly
- [ ] Verify responsive behavior on mobile and desktop

---

**This document contains EVERY detail needed to recreate the countdown and recording states pixel-perfectly, including exact code, animations, state management, and conditional rendering logic!**
