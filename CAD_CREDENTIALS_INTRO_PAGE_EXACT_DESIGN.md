# CAD Credentials & Introduction Page - Exact Design Specifications

**Document Version**: 1.0  
**Last Updated**: Feb 18, 2026  
**Purpose**: Pixel-perfect recreation of the CAD assessment introduction page with Onshape login credentials

---

## Overview

This page appears **before** the user enters the Onshape CAD workspace. It shows:
1. A centered layout with a 3D cube icon
2. "CAD Design Assessment" heading and description
3. "Open CAD workspace" button (with 3 states)
4. **OnShape Login Credentials** section with copy buttons
5. Left panel with welcome text, assessment overview, and process steps

**URL**: `http://localhost:3001/tests/mechanical-design-engineer/preview/workspace?scenario=1` (before clicking "Open CAD workspace")

---

## Visual Layout

```
┌──────────────────────────────────────────────────────────────────┐
│                    Top Navigation Bar                            │
├────────────────────────────────────┬─────────────────────────────┤
│ Left Panel (Design brief)          │ Right Panel (centered)      │
│                                     │                             │
│ • Welcome text                      │    [3D Cube Icon]           │
│ • Assessment overview (4 cards)    │                             │
│ • Process (3 steps)                │  CAD Design Assessment      │
│ • OnShape Login Credentials        │  You are about to enter...  │
│                                     │                             │
│                                     │  [Open CAD workspace]       │
│                                     │                             │
│                                     │  ┌─────────────────────┐   │
│                                     │  │ OnShape Login       │   │
│                                     │  │ Credentials         │   │
│                                     │  │ Email: applicant... │   │
│                                     │  │ Password: Applic... │   │
│                                     │  └─────────────────────┘   │
└────────────────────────────────────┴─────────────────────────────┘
```

---

# 1. Right Panel - Main Centered Content

## 1.1 Container

**Layout**:
- Full viewport height
- Centered flex container
- White background
- Vertical layout with padding

### CSS

```css
.cad-intro-right-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px; /* gap-6 */
  min-height: calc(100vh - 88px);
  background: #ffffff;
  padding: 64px 32px; /* px-8 py-16 */
}
```

### JSX

```jsx
<div className="flex min-h-[calc(100vh-88px)] flex-col items-center justify-center gap-6 bg-white px-8 py-16">
  {/* Content */}
</div>
```

---

## 1.2 3D Cube Icon

### Visual Design

Large circular gradient background with 3D cube icon in the center.

**Specifications**:
- Outer circle: `96px × 96px` (Tailwind: `h-24 w-24`)
- Border-radius: `9999px` (fully rounded)
- Background: Gradient from `corePurple/20` to `violet/10`
- Box shadow: `0 8px 32px -8px rgba(77, 62, 240, 0.25)`
- Icon size: `40px × 40px` (Tailwind: `h-10 w-10`)
- Icon color: `#4d3ef0` (corePurple)
- Icon stroke-width: `1.5`

### CSS

```css
.cad-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 96px;
  height: 96px;
  border-radius: 9999px;
  background: linear-gradient(135deg, rgba(77, 62, 240, 0.2), rgba(124, 58, 237, 0.1));
  box-shadow: 0 8px 32px -8px rgba(77, 62, 240, 0.25);
}

.cad-cube-icon {
  width: 40px;
  height: 40px;
  color: #4d3ef0;
  stroke-width: 1.5;
}
```

### JSX

```jsx
<div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-corePurple/20 to-violet/10 shadow-[0_8px_32px_-8px_rgba(77,62,240,0.25)]">
  <svg className="h-10 w-10 text-corePurple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
</div>
```

---

## 1.3 Heading & Description

### Heading ("CAD Design Assessment")

**Specifications**:
- Font size: `30px` (Tailwind: `text-2xl`)
- Font weight: `700` (bold)
- Color: `#18181b` (zinc-900)
- Text align: `center`

### Description

**Content**:
```
"You are about to enter the Onshape environment. Please keep this tab open and use the credentials below to log in."
```

**Specifications**:
- Font size: `16px` (Tailwind: `text-base`)
- Color: `#71717a` (zinc-500)
- Text align: `center`
- Max width: `512px` (Tailwind: `max-w-lg`)
- Margin-top: `12px` (Tailwind: `mt-3`)

### CSS

```css
.cad-intro-heading {
  font-size: 30px;
  font-weight: 700;
  color: #18181b;
  text-align: center;
}

.cad-intro-description {
  margin-top: 12px;
  max-width: 512px;
  font-size: 16px;
  color: #71717a;
  text-align: center;
}
```

### JSX

```jsx
<div>
  <h2 className="text-2xl font-bold text-zinc-900">CAD Design Assessment</h2>
  <p className="mt-3 max-w-lg text-base text-zinc-500">
    You are about to enter the Onshape environment. Please keep this tab open and use the credentials below to log in.
  </p>
</div>
```

---

## 1.4 "Open CAD Workspace" Button

### Button States

The button has **3 different states**:

1. **Default (Not opened yet)**: Purple gradient
2. **Opened**: Gray (workspace is open)
3. **Design Saved**: Green (design has been saved)

### State 1: Default - Not Opened

**Visual**: Purple gradient button with shadow and hover effect.

**Specifications**:
- Width: `100%`, Min-width: `240px`
- Padding: `16px 32px` (Tailwind: `px-8 py-4`)
- Border-radius: `12px` (Tailwind: `rounded-xl`)
- Background: Gradient from `#4d3ef0` to `#4338ca`
- Color: White `#ffffff`
- Font size: `16px` (Tailwind: `text-base`)
- Font weight: `600` (semibold)
- Box shadow: `0 4px 14px rgba(77, 62, 240, 0.4)`
- Icon size: `20px × 20px` (Tailwind: `h-5 w-5`)
- Gap: `10px` (Tailwind: `gap-2.5`)

**Hover State**:
- Box shadow: `0 6px 20px rgba(77, 62, 240, 0.45)`
- Transform: `translateY(-2px)`

#### CSS

```css
.cad-workspace-button-default {
  display: inline-flex;
  width: 100%;
  min-width: 240px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 32px;
  margin-top: 8px;
  border-radius: 12px;
  background: linear-gradient(to bottom, #4d3ef0, #4338ca);
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  box-shadow: 0 4px 14px rgba(77, 62, 240, 0.4);
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
}

.cad-workspace-button-default:hover {
  box-shadow: 0 6px 20px rgba(77, 62, 240, 0.45);
  transform: translateY(-2px);
}
```

### State 2: Opened - CAD Workspace Open

**Visual**: Gray button indicating workspace is already open.

**Specifications**:
- Background: `#f4f4f5` (zinc-100)
- Color: `#52525b` (zinc-600)
- Hover background: `#e4e4e7` (zinc-200)
- No transform or shadow change

#### CSS

```css
.cad-workspace-button-opened {
  display: inline-flex;
  width: 100%;
  min-width: 240px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 32px;
  margin-top: 8px;
  border-radius: 12px;
  background: #f4f4f5;
  color: #52525b;
  font-size: 16px;
  font-weight: 600;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
}

.cad-workspace-button-opened:hover {
  background: #e4e4e7;
}
```

### State 3: Design Saved

**Visual**: Green button indicating design has been successfully saved.

**Specifications**:
- Background: `#d1fae5` (emerald-100)
- Color: `#047857` (emerald-700)
- Hover background: `#a7f3d0` (emerald-200)

#### CSS

```css
.cad-workspace-button-saved {
  display: inline-flex;
  width: 100%;
  min-width: 240px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 32px;
  margin-top: 8px;
  border-radius: 12px;
  background: #d1fae5;
  color: #047857;
  font-size: 16px;
  font-weight: 600;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
}

.cad-workspace-button-saved:hover {
  background: #a7f3d0;
}
```

### JSX Implementation

```jsx
<button
  type="button"
  onClick={() => {
    setHasOpenedCadWorkspaceByIndex((prev) => ({ ...prev, [scenarioIndex]: true }));
    setOnshapeWorkspaceOpenByIndex((prev) => ({ ...prev, [scenarioIndex]: true }));
  }}
  className={`mt-2 inline-flex w-full min-w-[240px] items-center justify-center gap-2.5 rounded-xl px-8 py-4 text-base font-semibold shadow transition ${
    isCadDesignSaved
      ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
      : hasOpenedCadWorkspaceByIndex[scenarioIndex]
      ? "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
      : "bg-gradient-to-b from-corePurple to-[#4338ca] text-white shadow-[0_4px_14px_rgba(77,62,240,0.4)] hover:shadow-[0_6px_20px_rgba(77,62,240,0.45)] hover:-translate-y-0.5"
  }`}
>
  <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
  {isCadDesignSaved
    ? "CAD design saved"
    : hasOpenedCadWorkspaceByIndex[scenarioIndex]
    ? "CAD workspace open"
    : "Open CAD workspace"}
</button>
```

---

# 2. OnShape Login Credentials Section

## 2.1 Container (Outer Card)

### Visual Design

Rounded card with purple gradient background and subtle border.

**Specifications**:
- Border: `2px solid rgba(77, 62, 240, 0.4)` (Tailwind: `border-2 border-corePurple/40`)
- Border-radius: `16px` (Tailwind: `rounded-2xl`)
- Background: Gradient from `softLavender/60` to `corePurple/10`
- Padding: `20px` (Tailwind: `p-5`)
- Box shadow: `0 0 0 1px rgba(77, 62, 240, 0.1), 0 4px 12px rgba(77, 62, 240, 0.08)`
- Max width: `576px` (Tailwind: `max-w-xl`)
- Width: `100%`

### CSS

```css
.credentials-card {
  max-width: 576px;
  width: 100%;
  padding: 20px;
  border: 2px solid rgba(77, 62, 240, 0.4);
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(231, 224, 255, 0.6), rgba(77, 62, 240, 0.1));
  box-shadow: 0 0 0 1px rgba(77, 62, 240, 0.1), 0 4px 12px rgba(77, 62, 240, 0.08);
}
```

### JSX

```jsx
<div className="w-full max-w-xl">
  <section className="rounded-2xl border-2 border-corePurple/40 bg-gradient-to-br from-softLavender/60 to-corePurple/10 p-5 shadow-[0_0_0_1px_rgba(77,62,240,0.1),0_4px_12px_rgba(77,62,240,0.08)]">
    {/* Header and credentials */}
  </section>
</div>
```

---

## 2.2 Header with Shield Icon

### Visual Design

"OnShape Login Credentials" heading with a shield icon on the left.

**Icon Container**:
- Size: `28px × 28px` (Tailwind: `h-7 w-7`)
- Border-radius: `8px` (Tailwind: `rounded-lg`)
- Background: `rgba(77, 62, 240, 0.2)` (Tailwind: `bg-corePurple/20`)
- Icon size: `16px × 16px` (Tailwind: `h-4 w-4`)
- Icon color: `#4d3ef0` (corePurple)

**Heading**:
- Font size: `16px` (Tailwind: `text-base`)
- Font weight: `700` (bold)
- Color: `#18181b` (zinc-900)
- Gap between icon and text: `8px` (Tailwind: `gap-2`)

### CSS

```css
.credentials-header {
  display: flex;
  align-items: center;
  gap: 8px;
}

.credentials-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: rgba(77, 62, 240, 0.2);
}

.credentials-icon {
  width: 16px;
  height: 16px;
  color: #4d3ef0;
  stroke-width: 2;
}

.credentials-title {
  font-size: 16px;
  font-weight: 700;
  color: #18181b;
}
```

### JSX

```jsx
<h3 className="flex items-center gap-2 text-base font-bold text-zinc-900">
  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-corePurple/20">
    <svg className="h-4 w-4 text-corePurple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  </span>
  OnShape Login Credentials
</h3>
```

---

## 2.3 Credentials Container (White Inner Box)

### Specifications

**Container**:
- Margin-top: `16px` (Tailwind: `mt-4`)
- Padding: `16px` (Tailwind: `p-4`)
- Border: `2px solid rgba(77, 62, 240, 0.2)` (Tailwind: `border-2 border-corePurple/20`)
- Border-radius: `12px` (Tailwind: `rounded-xl`)
- Background: `rgba(255, 255, 255, 0.9)` (Tailwind: `bg-white/90`)
- Vertical gap: `12px` (Tailwind: `space-y-3`)

### CSS

```css
.credentials-inner {
  margin-top: 16px;
  padding: 16px;
  border: 2px solid rgba(77, 62, 240, 0.2);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  gap: 12px;
}
```

### JSX

```jsx
<div className="mt-4 space-y-3 rounded-xl border-2 border-corePurple/20 bg-white/90 p-4">
  {/* Email and Password rows */}
</div>
```

---

## 2.4 Credential Rows (Email & Password)

### Layout

Each row contains:
1. Label (left): "Email" or "Password"
2. Value (center): The actual credential
3. Copy button (right): Icon button to copy

**Container**:
- Display: `flex`
- Align items: `center`
- Justify: `space-between`
- Gap: `12px` (Tailwind: `gap-3`)

### Email Row

**Label ("Email")**:
- Font size: `14px` (Tailwind: `text-sm`)
- Font weight: `600` (semibold)
- Color: `#3f3f46` (zinc-700)

**Value** (`applicant+11499@colare.co`):
- Font family: Monospace (Tailwind: `font-mono`)
- Font size: `14px` (Tailwind: `text-sm`)
- Font weight: `600` (semibold)
- Color: `#18181b` (zinc-900)
- Text align: `right`
- Flex: `1` (takes remaining space)
- Text overflow: `truncate` (ellipsis if too long)

### Password Row

Same styling as Email row.

**Value**: `Applicant11499`

### CSS

```css
.credential-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.credential-label {
  font-size: 14px;
  font-weight: 600;
  color: #3f3f46;
}

.credential-value {
  flex: 1;
  min-width: 0; /* Required for truncate to work */
  font-family: ui-monospace, monospace;
  font-size: 14px;
  font-weight: 600;
  color: #18181b;
  text-align: right;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

### JSX

```jsx
{/* Email Row */}
<div className="flex items-center justify-between gap-3">
  <span className="text-sm font-semibold text-zinc-700">Email</span>
  <span className="min-w-0 flex-1 truncate text-right font-mono text-sm font-semibold text-zinc-900">
    applicant+11499@colare.co
  </span>
  <CopyButton value="applicant+11499@colare.co" />
</div>

{/* Password Row */}
<div className="flex items-center justify-between gap-3">
  <span className="text-sm font-semibold text-zinc-700">Password</span>
  <span className="flex-1 text-right font-mono text-sm font-semibold text-zinc-900">
    Applicant11499
  </span>
  <CopyButton value="Applicant11499" />
</div>
```

---

## 2.5 Copy Button Component

### Visual Design

Icon button with hover effect. Shows checkmark when copied.

**Default State**:
- Padding: `6px` (Tailwind: `p-1.5`)
- Border-radius: `4px` (Tailwind: `rounded`)
- Color: `#71717a` (zinc-500)
- Hover background: `#f4f4f5` (zinc-100)
- Hover color: `#3f3f46` (zinc-700)
- Icon: Copy icon (2 overlapping rectangles)

**Copied State** (shows for 1.5 seconds):
- Icon: Checkmark
- Color: `#059669` (emerald-600)

### CSS

```css
.copy-button {
  flex-shrink: 0;
  padding: 6px;
  border-radius: 4px;
  color: #71717a;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.copy-button:hover {
  background: #f4f4f5;
  color: #3f3f46;
}

.copy-button svg {
  width: 16px;
  height: 16px;
  stroke-width: 2;
}

.copy-button-copied svg {
  color: #059669;
}
```

### JSX Implementation

```jsx
function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = React.useState(false);
  
  const copy = () => {
    void navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  
  return (
    <button
      type="button"
      onClick={copy}
      aria-label="Copy"
      className="shrink-0 rounded p-1.5 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700"
    >
      {copied ? (
        <svg className="h-4 w-4 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      )}
    </button>
  );
}
```

---

# 3. Left Panel - Design Brief Content

## 3.1 Welcome Text

**Content**:
```
Welcome to your CAD simulation assessment.

This exercise evaluates your ability to interpret an engineering drawing and model a manufacturable component in a professional CAD environment. All task details and submission instructions are provided inside the workspace.

Use the login credentials below to access Onshape. When you're ready, click "Open CAD workspace" on the right to begin.
```

**Styling**:
- Font size: `14px` (Tailwind: `text-sm`)
- Color: `#52525b` (zinc-600)
- First paragraph: `font-medium text-zinc-900`
- Vertical spacing: `16px` between paragraphs (Tailwind: `space-y-4`)

### JSX

```jsx
<div className="space-y-4 text-sm text-zinc-600">
  <p className="font-medium text-zinc-900">Welcome to your CAD simulation assessment.</p>
  <p>
    This exercise evaluates your ability to interpret an engineering drawing and model a manufacturable component in a professional CAD environment. All task details and submission instructions are provided inside the workspace.
  </p>
  <p>Use the login credentials below to access Onshape. When you&apos;re ready, click &quot;Open CAD workspace&quot; on the right to begin.</p>
</div>
```

---

## 3.2 Assessment Overview (4 Cards)

### Container

**Specifications**:
- Background: `rgba(250, 250, 250, 0.5)` (Tailwind: `bg-zinc-50/50`)
- Border: `1px solid #e4e4e7` (Tailwind: `border border-zinc-200`)
- Border-radius: `16px` (Tailwind: `rounded-2xl`)
- Padding: `16px` (Tailwind: `p-4`)

**Header**:
- Text: "ASSESSMENT OVERVIEW"
- Font size: `12px` (Tailwind: `text-xs`)
- Font weight: `600` (semibold)
- Text transform: `uppercase`
- Letter spacing: `0.05em` (Tailwind: `tracking-wide`)
- Color: `#71717a` (zinc-500)

**Grid**:
- Margin-top: `12px` (Tailwind: `mt-3`)
- Gap: `12px` (Tailwind: `gap-3`)
- Columns: 2 on desktop (Tailwind: `sm:grid-cols-2`)

### Individual Card

**Specifications**:
- Background: White `#ffffff`
- Border: `1px solid #e4e4e7` (zinc-200)
- Border-radius: `12px` (Tailwind: `rounded-xl`)
- Padding: `12px` (Tailwind: `p-3`)

**Label** (e.g., "Duration"):
- Font size: `12px` (Tailwind: `text-xs`)
- Font weight: `500` (medium)
- Color: `#3f3f46` (zinc-700)

**Value** (e.g., "~45 minutes"):
- Font size: `14px` (Tailwind: `text-sm`)
- Color: `#52525b` (zinc-600)
- Margin-top: `4px` (Tailwind: `mt-1`)

### Data

| Label | Value |
|-------|-------|
| Duration | ~45 minutes |
| Tool | Onshape (browser-based CAD) |
| Deliverable | Fully constrained 3D part model |
| Units | Inches |

### JSX

```jsx
<div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-4">
  <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Assessment overview</div>
  <div className="mt-3 grid gap-3 sm:grid-cols-2">
    <div className="rounded-xl border border-zinc-200 bg-white p-3">
      <div className="text-xs font-medium text-zinc-700">Duration</div>
      <div className="mt-1 text-sm text-zinc-600">~45 minutes</div>
    </div>
    <div className="rounded-xl border border-zinc-200 bg-white p-3">
      <div className="text-xs font-medium text-zinc-700">Tool</div>
      <div className="mt-1 text-sm text-zinc-600">Onshape (browser-based CAD)</div>
    </div>
    <div className="rounded-xl border border-zinc-200 bg-white p-3">
      <div className="text-xs font-medium text-zinc-700">Deliverable</div>
      <div className="mt-1 text-sm text-zinc-600">Fully constrained 3D part model</div>
    </div>
    <div className="rounded-xl border border-zinc-200 bg-white p-3">
      <div className="text-xs font-medium text-zinc-700">Units</div>
      <div className="mt-1 text-sm text-zinc-600">Inches</div>
    </div>
  </div>
</div>
```

---

## 3.3 Process Section (3 Steps)

### Container

**Specifications**:
- Background: White `#ffffff`
- Border: `1px solid #e4e4e7` (zinc-200)
- Border-radius: `16px` (Tailwind: `rounded-2xl`)
- Padding: `16px` (Tailwind: `p-4`)

**Header**:
- Text: "Process"
- Font size: `14px` (Tailwind: `text-sm`)
- Font weight: `600` (semibold)
- Color: `#18181b` (zinc-900)

**List**:
- Type: Ordered list with decimal numbers
- Margin-top: `8px` (Tailwind: `mt-2`)
- Padding-left: `20px` (Tailwind: `pl-5`)
- Font size: `14px` (Tailwind: `text-sm`)
- Color: `#52525b` (zinc-600)
- Vertical spacing: `4px` (Tailwind: `space-y-1`)

### Steps

1. Log in to Onshape using the credentials below
2. Click "Open CAD workspace"
3. Complete and submit your model inside the workspace

### JSX

```jsx
<div className="rounded-2xl border border-zinc-200 p-4">
  <div className="text-sm font-semibold text-zinc-900">Process</div>
  <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-zinc-600">
    <li>Log in to Onshape using the credentials below</li>
    <li>Click &quot;Open CAD workspace&quot;</li>
    <li>Complete and submit your model inside the workspace</li>
  </ol>
</div>
```

---

## 3.4 Credentials Section (Also in Left Panel)

Same styling as the right panel credentials section. Placed below the Process section.

```jsx
<OnshapeCredentialsSection />
```

---

# 4. Complete Component Code

```tsx
function OnshapeCredentialsSection() {
  return (
    <section className="rounded-2xl border-2 border-corePurple/40 bg-gradient-to-br from-softLavender/60 to-corePurple/10 p-5 shadow-[0_0_0_1px_rgba(77,62,240,0.1),0_4px_12px_rgba(77,62,240,0.08)]">
      <h3 className="flex items-center gap-2 text-base font-bold text-zinc-900">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-corePurple/20">
          <svg className="h-4 w-4 text-corePurple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </span>
        OnShape Login Credentials
      </h3>
      <div className="mt-4 space-y-3 rounded-xl border-2 border-corePurple/20 bg-white/90 p-4">
        <div className="flex items-center justify-between gap-3">
          <span className="text-sm font-semibold text-zinc-700">Email</span>
          <span className="min-w-0 flex-1 truncate text-right font-mono text-sm font-semibold text-zinc-900">
            applicant+11499@colare.co
          </span>
          <CopyButton value="applicant+11499@colare.co" />
        </div>
        <div className="flex items-center justify-between gap-3">
          <span className="text-sm font-semibold text-zinc-700">Password</span>
          <span className="flex-1 text-right font-mono text-sm font-semibold text-zinc-900">
            Applicant11499
          </span>
          <CopyButton value="Applicant11499" />
        </div>
      </div>
    </section>
  );
}

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = React.useState(false);
  const copy = () => {
    void navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <button
      type="button"
      onClick={copy}
      aria-label="Copy"
      className="shrink-0 rounded p-1.5 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700"
    >
      {copied ? (
        <svg className="h-4 w-4 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      )}
    </button>
  );
}
```

---

# 5. Color Reference

| Element | Color Name | Hex/RGBA |
|---------|------------|----------|
| Main heading | zinc-900 | `#18181b` |
| Description | zinc-500 | `#71717a` |
| Credentials card border | corePurple/40 | `rgba(77, 62, 240, 0.4)` |
| Credentials card bg (start) | softLavender/60 | `rgba(231, 224, 255, 0.6)` |
| Credentials card bg (end) | corePurple/10 | `rgba(77, 62, 240, 0.1)` |
| Icon wrapper bg | corePurple/20 | `rgba(77, 62, 240, 0.2)` |
| Icon color | corePurple | `#4d3ef0` |
| Credential label | zinc-700 | `#3f3f46` |
| Credential value | zinc-900 | `#18181b` |
| Button gradient (start) | corePurple | `#4d3ef0` |
| Button gradient (end) | - | `#4338ca` |
| Button opened bg | zinc-100 | `#f4f4f5` |
| Button saved bg | emerald-100 | `#d1fae5` |
| Copy button hover | zinc-100 | `#f4f4f5` |
| Checkmark | emerald-600 | `#059669` |

---

# 6. Typography Reference

| Element | Size | Weight | Transform |
|---------|------|--------|-----------|
| Main heading | 30px (2xl) | 700 (bold) | - |
| Description | 16px (base) | 400 | - |
| Credentials heading | 16px (base) | 700 (bold) | - |
| Credential label | 14px (sm) | 600 (semibold) | - |
| Credential value | 14px (sm) | 600 (semibold) | - |
| Button text | 16px (base) | 600 (semibold) | - |
| Section labels | 12px (xs) | 600 (semibold) | uppercase |

---

# 7. Implementation Checklist

## Right Panel
- [ ] Create centered flex container with proper spacing
- [ ] Add 3D cube icon with gradient background and shadow
- [ ] Add "CAD Design Assessment" heading
- [ ] Add description text below heading
- [ ] Implement "Open CAD workspace" button with 3 states
- [ ] Add state management for button states
- [ ] Add OnShape credentials section below button

## Credentials Section
- [ ] Create outer card with purple gradient and border
- [ ] Add shield icon with "OnShape Login Credentials" heading
- [ ] Create white inner box for credentials
- [ ] Add email row with label, value, and copy button
- [ ] Add password row with label, value, and copy button
- [ ] Implement CopyButton component with clipboard API
- [ ] Add checkmark animation for copied state

## Left Panel
- [ ] Add welcome text with proper spacing
- [ ] Create assessment overview section with 4 cards
- [ ] Implement responsive 2-column grid for cards
- [ ] Add process section with ordered list
- [ ] Include credentials section at bottom

## Testing
- [ ] Verify button state changes work correctly
- [ ] Test copy functionality for email and password
- [ ] Check responsive layout on mobile and desktop
- [ ] Verify all colors match exactly
- [ ] Test hover states for buttons and copy icons
- [ ] Ensure credentials are displayed in monospace font

---

**This document contains EVERY detail needed to recreate the CAD credentials/intro page pixel-perfectly, including all 3 button states, copy functionality, and both left and right panel layouts!**
