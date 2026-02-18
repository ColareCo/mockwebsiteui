# Frontend Mockup Features Documentation
## Complete Feature Catalog for Real Assessment Page Redesign

> **Purpose**: This document catalogs ALL features, UI patterns, interactions, and design elements from the mockwebsiteui frontend so you can accurately assess what exists in your real frontend and what needs to be changed.

---

## Table of Contents
1. [Design System & Brand Identity](#design-system--brand-identity)
2. [Page Structure & Layout](#page-structure--layout)
3. [Assessment Preview/Landing Page](#assessment-previewlanding-page)
4. [Assessment Workspace (Test-Taking Interface)](#assessment-workspace-test-taking-interface)
5. [Question Types & Interactions](#question-types--interactions)
6. [Navigation & Progress](#navigation--progress)
7. [Component Library](#component-library)
8. [Data Models](#data-models)
9. [Technical Implementation](#technical-implementation)

---

## 1. Design System & Brand Identity

### Complete Color System

#### Brand Colors (Exact Hex Values)
```css
/* Primary Brand Colors */
--color-corePurple: #4d3ef0;      /* Primary purple - buttons, links, accents */
--color-violet: #594ce9;          /* Secondary purple - gradients, hover states */
--color-softLavender: #e8e6fc;    /* Light purple backgrounds - selected states */
--color-graphite: #383838;        /* Dark text - main headings */

/* Background Gradients */
--color-pageBg: #fbfaff;          /* Off-white with purple tint */

/* Landing Page Gradient (top to bottom) */
background: linear-gradient(to bottom, #f8f6ff, #fbfaff, #f4f0ff);
/* RGB values: rgb(248, 246, 255) → rgb(251, 250, 255) → rgb(244, 240, 255) */

/* Workspace Gradient (top to bottom) */
background: linear-gradient(to bottom, #f5f3ff, #faf8ff, #f0ecff);
/* RGB values: rgb(245, 243, 255) → rgb(250, 248, 255) → rgb(240, 236, 255) */
```

#### Zinc Gray Scale (Complete Palette)
```css
--zinc-50:  #fafafa;  /* rgb(250, 250, 250) - Lightest gray backgrounds */
--zinc-100: #f4f4f5;  /* rgb(244, 244, 245) - Light backgrounds, hover states */
--zinc-200: #e4e4e7;  /* rgb(228, 228, 231) - Borders, dividers */
--zinc-300: #d4d4d8;  /* rgb(212, 212, 216) - Disabled borders */
--zinc-400: #a1a1aa;  /* rgb(161, 161, 170) - Placeholder text, icons */
--zinc-500: #71717a;  /* rgb(113, 113, 122) - Muted text */
--zinc-600: #52525b;  /* rgb(82, 82, 91) - Body text (primary) */
--zinc-700: #3f3f46;  /* rgb(63, 63, 70) - Emphasized text */
--zinc-800: #27272a;  /* rgb(39, 39, 42) - Strong emphasis */
--zinc-900: #18181b;  /* rgb(24, 24, 27) - Darkest text, modal backdrop */

/* Opacity Variants (used with colors) */
/60  = 60% opacity (0.6)
/80  = 80% opacity (0.8)
/50  = 50% opacity (0.5)
/40  = 40% opacity (0.4)
/20  = 20% opacity (0.2)
/10  = 10% opacity (0.1)
/5   = 5% opacity (0.05)
```

#### Assessment Panel Colors (Onshape/CAD Integration)
```css
--cp-bg: #ffffff;          /* rgb(255, 255, 255) - Panel background */
--cp-border: #e7e7ef;      /* rgb(231, 231, 239) - Border color */
--cp-text: #15151d;        /* rgb(21, 21, 29) - Main text */
--cp-muted: #6b6b7a;       /* rgb(107, 107, 122) - Secondary text */
--cp-soft: #f6f6fb;        /* rgb(246, 246, 251) - Soft background */
--cp-soft2: #f1f2ff;       /* rgb(241, 242, 255) - Header gradient */
--cp-primary: #5b5bd6;     /* rgb(91, 91, 214) - Primary actions */
--cp-primary2: #4b4bd0;    /* rgb(75, 75, 208) - Hover state */
```

#### Semantic Colors
```css
/* Success/Active */
--emerald-50: #ecfdf5;     /* Backgrounds */
--emerald-100: #d1fae5;    /* Lighter backgrounds */
--emerald-500: #10b981;    /* Progress bars */
--emerald-600: #059669;    /* Icons */
--emerald-700: #047857;    /* Text */

/* Error/Warning */
--red-50: #fef2f2;         /* Backgrounds */
--red-100: #fee2e2;        /* Borders */
--red-200: #fecaca;        /* Lighter borders */
--red-400: #f87171;        /* Animation dots */
--red-500: #ef4444;        /* Recording indicator */
--red-600: #dc2626;        /* Text */
--red-700: #b91c1c;        /* Dark text */

/* Warning/Caution */
--amber-400: #fbbf24;      /* Status indicators */
--amber-600: #d97706;      /* Text */
```

#### White & Transparent Utilities
```css
#ffffff           /* Pure white */
rgba(255,255,255,0.9)   /* White 90% - frosted glass */
rgba(255,255,255,0.7)   /* White 70% - translucent cards */
rgba(255,255,255,0.5)   /* White 50% - subtle overlays */
rgba(0,0,0,0.04)        /* Black 4% - subtle shadows */
rgba(0,0,0,0.02)        /* Black 2% - very subtle shadows */
```

---

### Typography System (Complete)

#### Font Families
```css
/* Primary Heading Font */
font-family: 'Fustat', ui-sans-serif, system-ui, sans-serif;
/* Fallback chain ensures compatibility */

/* Body Text Font */
font-family: 'DM Sans', ui-sans-serif, system-ui, sans-serif;

/* Monospace (if needed) */
font-family: var(--font-geist-mono), 'Courier New', monospace;
```

#### Font Sizes (Exact Values)
```css
/* Headings */
text-4xl: 2.25rem;      /* 36px - Large desktop headings */
text-3xl: 1.875rem;     /* 30px - Desktop headings */
text-2xl: 1.5rem;       /* 24px - Section headings */
text-xl: 1.25rem;       /* 20px - Subsection headings */
text-lg: 1.125rem;      /* 18px - Large body text */

/* Body Text */
text-base: 1rem;        /* 16px - Standard body */
text-[15px]: 15px;      /* 15px - Explicit body text (most common) */
text-sm: 0.875rem;      /* 14px - Small text, labels */
text-xs: 0.75rem;       /* 12px - Tiny text, meta info */

/* Line Heights */
leading-none: 1;        /* 100% - Tight spacing */
leading-tight: 1.25;    /* 125% - Headings */
leading-snug: 1.375;    /* 137.5% */
leading-normal: 1.5;    /* 150% - Standard */
leading-relaxed: 1.625; /* 162.5% - Body text */
leading-loose: 2;       /* 200% - Very relaxed */
```

#### Font Weights
```css
font-normal: 400;       /* Regular body text */
font-medium: 500;       /* Emphasized text, links */
font-semibold: 600;     /* Headings, buttons, labels */
font-bold: 700;         /* Strong emphasis */
```

#### Letter Spacing
```css
tracking-tighter: -0.05em;  /* -0.8px at 16px */
tracking-tight: -0.025em;   /* -0.4px at 16px - Headings */
tracking-normal: 0em;       /* 0px - Default */
tracking-wide: 0.025em;     /* 0.4px */
tracking-wider: 0.05em;     /* 0.8px */
tracking-widest: 0.1em;     /* 1.6px */
tracking-[0.2em]: 0.2em;    /* 3.2px - Uppercase labels */
```

#### Text Decoration
```css
underline: text-decoration-line: underline;
underline-offset-2: text-underline-offset: 0.125rem; /* 2px */
no-underline: text-decoration-line: none;
```

---

### Shadow System (Complete Specifications)

#### Card Shadows
```css
/* Light Card Shadow (default cards) */
shadow-sm:
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

/* Medium Card Shadow (elevated cards) */
shadow-[0_4px_24px_-4px_rgba(77,62,240,0.08),0_2px_8px_-2px_rgba(0,0,0,0.04)]:
  box-shadow: 
    0 4px 24px -4px rgba(77, 62, 240, 0.08),  /* Purple-tinted soft shadow */
    0 2px 8px -2px rgba(0, 0, 0, 0.04);       /* Subtle depth shadow */

/* High Elevation Card Shadow (question/answer panels) */
shadow-[0_8px_30px_-8px_rgba(77,62,240,0.12),0_2px_12px_-4px_rgba(0,0,0,0.06)]:
  box-shadow:
    0 8px 30px -8px rgba(77, 62, 240, 0.12),  /* Stronger purple glow */
    0 2px 12px -4px rgba(0, 0, 0, 0.06);      /* Deeper depth */
```

#### Button Shadows
```css
/* Primary Button Default */
shadow-[0_4px_14px_-2px_rgba(77,62,240,0.45)]:
  box-shadow: 0 4px 14px -2px rgba(77, 62, 240, 0.45);
  /* Offset Y: 4px, Blur: 14px, Spread: -2px, Purple at 45% */

/* Primary Button Hover */
shadow-[0_6px_20px_-2px_rgba(77,62,240,0.5)]:
  box-shadow: 0 6px 20px -2px rgba(77, 62, 240, 0.5);
  /* Offset Y: 6px, Blur: 20px, Spread: -2px, Purple at 50% */
```

#### Modal Shadows
```css
/* Large Modal Shadow */
shadow-[0_24px_48px_-12px_rgba(0,0,0,0.18)]:
  box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.18);
  /* Very large, soft shadow for floating modals */

/* Panel Shadow (Onshape sidebar) */
shadow-[-8px_0_24px_rgba(0,0,0,0.12)]:
  box-shadow: -8px 0 24px rgba(0, 0, 0, 0.12);
  /* Left-side shadow for right-aligned panel */
```

#### Text/Inner Shadows
```css
/* Inner Shadow (video placeholder) */
shadow-inner:
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.05);

/* Ring Shadow (focus states) */
ring-1 ring-zinc-900/5:
  box-shadow: 0 0 0 1px rgba(24, 24, 27, 0.05);

ring-1 ring-zinc-200/60:
  box-shadow: 0 0 0 1px rgba(228, 228, 231, 0.6);

ring-1 ring-corePurple/10:
  box-shadow: 0 0 0 1px rgba(77, 62, 240, 0.1);
```

#### Focus Shadows
```css
/* Focus Ring (inputs, buttons) */
focus:shadow-[0_0_0_3px_rgba(77,62,240,0.12)]:
  box-shadow: 0 0 0 3px rgba(77, 62, 240, 0.12);
  /* 3px purple ring around focused element */

focus:ring-2 focus:ring-corePurple/20:
  box-shadow: 0 0 0 2px rgba(77, 62, 240, 0.2);
  /* 2px purple ring, stronger opacity */
```

---

### Border System

#### Border Widths
```css
border: 1px solid;          /* Standard border */
border-2: 2px solid;        /* Thicker border (dashed states) */
border-t: 1px solid;        /* Top only */
border-b: 1px solid;        /* Bottom only */
border-l: 1px solid;        /* Left only */
border-r: 1px solid;        /* Right only */
```

#### Border Colors (with opacity)
```css
/* Standard borders */
border-zinc-200:          #e4e4e7 (solid)
border-zinc-200/80:       rgba(228, 228, 231, 0.8)
border-zinc-200/60:       rgba(228, 228, 231, 0.6)
border-zinc-100:          #f4f4f5
border-zinc-100/80:       rgba(244, 244, 245, 0.8)
border-zinc-300:          #d4d4d8

/* Brand borders */
border-corePurple:        #4d3ef0
border-corePurple/10:     rgba(77, 62, 240, 0.1)
border-corePurple/30:     rgba(77, 62, 240, 0.3)
border-violet:            #594ce9

/* White borders (frosted glass) */
border-white/60:          rgba(255, 255, 255, 0.6)
```

#### Border Styles
```css
/* Solid borders (default) */
border-solid

/* Dashed borders (empty states) */
border-dashed
/* Usage: border-2 border-dashed border-zinc-200 */

/* No border */
border-0
border-none
```

#### Border Radius
```css
rounded-none: 0px;
rounded-sm: 0.125rem;      /* 2px */
rounded: 0.25rem;          /* 4px - Default, checkboxes */
rounded-md: 0.375rem;      /* 6px */
rounded-lg: 0.5rem;        /* 8px - Small cards, buttons */
rounded-xl: 0.75rem;       /* 12px - Cards, inputs, buttons */
rounded-2xl: 1rem;         /* 16px - Large cards, modals */
rounded-3xl: 1.5rem;       /* 24px - Very large cards */
rounded-full: 9999px;      /* Perfect circles, pills */
```

---

### Button System (Complete)

#### Primary Button (Gradient)
```css
/* Class breakdown */
inline-flex              /* Inline flex container */
items-center             /* Vertical center alignment */
gap-2                    /* 0.5rem (8px) gap between text and icon */
rounded-xl               /* 0.75rem (12px) border radius */
bg-gradient-to-r         /* Horizontal gradient */
from-corePurple          /* Gradient start: #4d3ef0 */
to-violet                /* Gradient end: #594ce9 */
px-5                     /* 1.25rem (20px) horizontal padding */
py-3                     /* 0.75rem (12px) vertical padding */
text-sm                  /* 0.875rem (14px) font size */
font-semibold            /* 600 font weight */
text-white               /* #ffffff text color */
shadow-[...]             /* Purple-tinted shadow (see above) */
transition               /* All properties, 150ms ease */
hover:shadow-[...]       /* Enhanced shadow on hover */
hover:brightness-105     /* 5% brighter on hover */

/* Full CSS */
display: inline-flex;
align-items: center;
gap: 0.5rem; /* 8px */
border-radius: 0.75rem; /* 12px */
background-image: linear-gradient(to right, #4d3ef0, #594ce9);
padding-left: 1.25rem; /* 20px */
padding-right: 1.25rem;
padding-top: 0.75rem; /* 12px */
padding-bottom: 0.75rem;
font-size: 0.875rem; /* 14px */
font-weight: 600;
color: #ffffff;
box-shadow: 0 4px 14px -2px rgba(77, 62, 240, 0.45);
transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);

/* Hover state */
&:hover {
  box-shadow: 0 6px 20px -2px rgba(77, 62, 240, 0.5);
  filter: brightness(1.05);
}

/* Disabled state */
&:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

#### Secondary Button (Outline)
```css
/* Class breakdown */
inline-flex
items-center
gap-2                    /* 8px gap */
rounded-xl               /* 12px radius */
border border-zinc-200/80 /* 1px border, zinc-200 at 80% */
bg-white                 /* White background */
px-4                     /* 1rem (16px) horizontal padding */
py-2.5                   /* 0.625rem (10px) vertical padding */
text-sm                  /* 14px font */
font-semibold            /* 600 weight */
text-zinc-700            /* #3f3f46 text color */
shadow-sm                /* Subtle shadow */
transition
hover:bg-zinc-50         /* #fafafa on hover */

/* Full CSS */
display: inline-flex;
align-items: center;
gap: 0.5rem; /* 8px */
border-radius: 0.75rem; /* 12px */
border: 1px solid rgba(228, 228, 231, 0.8);
background-color: #ffffff;
padding-left: 1rem; /* 16px */
padding-right: 1rem;
padding-top: 0.625rem; /* 10px */
padding-bottom: 0.625rem;
font-size: 0.875rem; /* 14px */
font-weight: 600;
color: #3f3f46; /* zinc-700 */
box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
transition: all 150ms;

&:hover {
  background-color: #fafafa; /* zinc-50 */
}
```

#### Link Button (Text Only)
```css
/* Used for "View all →" style links */
text-sm                  /* 14px */
font-medium              /* 500 weight */
text-corePurple          /* #4d3ef0 */
transition
hover:text-violet        /* #594ce9 on hover */

/* Full CSS */
font-size: 0.875rem; /* 14px */
font-weight: 500;
color: #4d3ef0;
transition: color 150ms;

&:hover {
  color: #594ce9;
}
```

---

### Backdrop Effects

#### Blur Levels
```css
backdrop-blur-none: 0;
backdrop-blur-sm: 4px;      /* Modal backgrounds */
backdrop-blur: 8px;
backdrop-blur-md: 12px;
backdrop-blur-lg: 16px;
backdrop-blur-xl: 24px;     /* Top nav bar */
backdrop-blur-2xl: 40px;
backdrop-blur-3xl: 64px;
```

---

### Opacity Scale
```css
opacity-0: 0;         /* Invisible */
opacity-5: 0.05;
opacity-10: 0.1;
opacity-20: 0.2;
opacity-25: 0.25;
opacity-30: 0.3;
opacity-40: 0.4;
opacity-50: 0.5;      /* Half transparent */
opacity-60: 0.6;
opacity-70: 0.7;
opacity-75: 0.75;
opacity-80: 0.8;
opacity-90: 0.9;
opacity-95: 0.95;
opacity-100: 1;       /* Fully opaque */
```

---

### Transition System
```css
/* Default transition */
transition:
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

/* Custom durations */
duration-75: 75ms;
duration-100: 100ms;
duration-150: 150ms;   /* Default, most common */
duration-200: 200ms;
duration-300: 300ms;
duration-500: 500ms;
duration-700: 700ms;
duration-1000: 1000ms;

/* Easing functions */
ease-linear: cubic-bezier(0, 0, 1, 1);
ease-in: cubic-bezier(0.4, 0, 1, 1);
ease-out: cubic-bezier(0, 0, 0.2, 1);
ease-in-out: cubic-bezier(0.4, 0, 0.2, 1); /* Default */
```

---

### Spacing System (Complete Scale)

#### Padding & Margin Values
```css
/* Tailwind spacing scale (applies to p-, m-, gap-, etc.) */
0: 0px;
px: 1px;
0.5: 0.125rem;    /* 2px */
1: 0.25rem;       /* 4px */
1.5: 0.375rem;    /* 6px */
2: 0.5rem;        /* 8px */
2.5: 0.625rem;    /* 10px */
3: 0.75rem;       /* 12px */
3.5: 0.875rem;    /* 14px */
4: 1rem;          /* 16px */
5: 1.25rem;       /* 20px */
6: 1.5rem;        /* 24px */
7: 1.75rem;       /* 28px */
8: 2rem;          /* 32px */
9: 2.25rem;       /* 36px */
10: 2.5rem;       /* 40px */
11: 2.75rem;      /* 44px */
12: 3rem;         /* 48px */
14: 3.5rem;       /* 56px */
16: 4rem;         /* 64px */
20: 5rem;         /* 80px */
24: 6rem;         /* 96px */
```

#### Commonly Used Spacing in Mockup
```css
/* Gaps between elements */
gap-1: 0.25rem (4px)      /* Tight spacing */
gap-1.5: 0.375rem (6px)
gap-2: 0.5rem (8px)       /* Most common small gap */
gap-3: 0.75rem (12px)     /* Medium gap */
gap-4: 1rem (16px)        /* Large gap */
gap-6: 1.5rem (24px)      /* Extra large gap */
gap-8: 2rem (32px)        /* Section spacing */

/* Padding */
p-4: 1rem (16px)          /* Small card padding */
p-5: 1.25rem (20px)
p-6: 1.5rem (24px)        /* Default modal/card padding (mobile) */
p-7: 1.75rem (28px)
p-8: 2rem (32px)          /* Desktop modal/card padding */

px-3: 0.75rem (12px)      /* Horizontal: Small buttons */
px-4: 1rem (16px)         /* Horizontal: Medium buttons, inputs */
px-5: 1.25rem (20px)      /* Horizontal: Large buttons */
px-6: 1.5rem (24px)       /* Horizontal: Cards, sections */
px-8: 2rem (32px)         /* Horizontal: Large sections */

py-2: 0.5rem (8px)        /* Vertical: Small buttons */
py-2.5: 0.625rem (10px)   /* Vertical: Medium buttons */
py-3: 0.75rem (12px)      /* Vertical: Large buttons */
py-4: 1rem (16px)         /* Vertical: Cards */
py-6: 1.5rem (24px)       /* Vertical: Large cards */
py-8: 2rem (32px)         /* Vertical: Sections */

/* Margin */
mt-1: 0.25rem (4px)       /* Tiny top margin */
mt-2: 0.5rem (8px)
mt-3: 0.75rem (12px)
mt-4: 1rem (16px)         /* Common element spacing */
mt-6: 1.5rem (24px)       /* Section spacing */
mt-8: 2rem (32px)         /* Large section spacing */

mb-2: 0.5rem (8px)
mb-3: 0.75rem (12px)
mb-4: 1rem (16px)
```

#### Negative Margins (for extending clickable areas)
```css
-m-2: -0.5rem (-8px)      /* Close buttons */
```

---

### Layout System

#### Container Max Widths
```css
max-w-lg: 32rem;        /* 512px - Modals */
max-w-xl: 36rem;        /* 576px */
max-w-2xl: 42rem;       /* 672px */
max-w-3xl: 48rem;       /* 768px */
max-w-4xl: 56rem;       /* 896px - Welcome section */
max-w-5xl: 64rem;       /* 1024px - Landing page container */
max-w-6xl: 72rem;       /* 1152px */
max-w-7xl: 80rem;       /* 1280px */
max-w-[1600px]: 1600px; /* Workspace page container */
```

#### Heights
```css
h-8: 2rem (32px)           /* Small button height */
h-9: 2.25rem (36px)        /* Medium button height */
h-10: 2.5rem (40px)        /* Input height */
h-11: 2.75rem (44px)       /* Large input height */
h-14: 3.5rem (56px)        /* Logo/brand height */
h-16: 4rem (64px)          /* Large icon */
h-20: 5rem (80px)          /* Play button, voice icon */
h-screen: 100vh            /* Full viewport */
min-h-[280px]: 280px       /* Video placeholder min height */
min-h-[300px]: 300px       /* Textarea min height */
min-h-[calc(100vh-140px)]: calc(100vh - 140px) /* Content area */
```

#### Widths
```css
w-full: 100%               /* Fill container */
w-8: 2rem (32px)
w-9: 2.25rem (36px)
w-10: 2.5rem (40px)
w-20: 5rem (80px)
w-56: 14rem (224px)        /* Sidebar width */
w-[380px]: 380px           /* Onshape panel width */
max-w-xs: 20rem (320px)
max-w-sm: 24rem (384px)
max-w-md: 28rem (448px)
```

---

## 2. Page Structure & Layout

### Overall Architecture
```
Routes:
/tests/[testId]/preview                    → Landing/Welcome page
/tests/[testId]/preview/workspace          → Test-taking interface (query: ?scenario=0)
/tests/[testId]/preview/thank-you          → Completion page
```

### Base HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Create Test</title>
  <!-- Fonts loaded from Next.js font optimization -->
</head>
<body style="background: #fbfaff; font-family: 'DM Sans', sans-serif;">
  {/* React root */}
</body>
</html>
```

---

### Landing Page Layout (Complete)

**Route**: `/tests/[testId]/preview`

#### Full Page Structure
```jsx
<div className="min-h-screen bg-gradient-to-b from-[#f8f6ff] via-[#fbfaff] to-[#f4f0ff] text-zinc-900">
  
  {/* Info Banner */}
  <div className="border-b border-white/60 bg-white/50 backdrop-blur-sm px-6 py-3 shadow-[0_1px_0_0_rgba(77,62,240,0.06)]">
    {/* Banner content */}
  </div>
  
  {/* Main Content Container */}
  <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
    
    {/* Two-Column Grid */}
    <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
      
      {/* Left Column: Welcome Text */}
      <div className="min-w-0 lg:pt-4">
        {/* Content */}
      </div>
      
      {/* Right Column: Video + Start Button */}
      <div className="space-y-6 pt-12 lg:pt-20">
        {/* Content */}
      </div>
      
    </div>
  </div>
</div>
```

**Page Container**:
```css
min-height: 100vh; /* Full viewport height */
background: linear-gradient(to bottom, #f8f6ff, #fbfaff, #f4f0ff);
color: #18181b; /* zinc-900 */
```

**Info Banner** (sticky notification at top):
```css
border-bottom: 1px solid rgba(255, 255, 255, 0.6);
background-color: rgba(255, 255, 255, 0.5); /* Frosted white */
backdrop-filter: blur(4px);
padding: 0.75rem 1.5rem; /* 12px top/bottom, 24px left/right */
box-shadow: 0 1px 0 0 rgba(77, 62, 240, 0.06); /* Subtle purple line */
```

**Info Banner Inner Container**:
```css
max-width: 56rem; /* 896px */
margin: 0 auto;
display: flex;
align-items: center;
gap: 0.75rem; /* 12px */
```

**Info Banner Icon**:
```css
height: 1rem; /* 16px */
width: 1rem;
color: #4d3ef0; /* corePurple */
```

**Info Banner Text**:
```css
font-size: 0.875rem; /* 14px */
font-weight: 500;
color: #52525b; /* zinc-600 */
```

**Main Container**:
```css
max-width: 64rem; /* 1024px - max-w-5xl */
margin: 0 auto;
padding-left: 1.5rem; /* 24px */
padding-right: 1.5rem;
padding-top: 3.5rem; /* 56px mobile */
padding-bottom: 3.5rem;

/* Desktop (≥640px) */
padding-top: 4rem; /* 64px */
padding-bottom: 4rem;
```

**Grid Layout**:
```css
display: grid;
gap: 3rem; /* 48px - Mobile vertical gap */

/* Desktop (≥1024px) */
grid-template-columns: 1fr 1.15fr; /* 46.5% | 53.5% split */
gap: 4rem; /* 64px */
```

---

#### Left Column: Welcome Section (Exact Layout)

**Container**:
```css
min-width: 0; /* Allow text truncation in grid */
padding-top: 0; /* Mobile */

/* Desktop (≥1024px) */
padding-top: 1rem; /* 16px */
```

**1. Section Label** ("ASSESSMENT"):
```jsx
<p className="text-sm font-medium uppercase tracking-[0.2em] text-corePurple/80">
  Assessment
</p>
```
```css
font-size: 0.875rem; /* 14px */
font-weight: 500;
text-transform: uppercase;
letter-spacing: 0.2em; /* 2.8px at 14px */
color: rgba(77, 62, 240, 0.8); /* corePurple at 80% */
```

**2. Main Heading**:
```jsx
<h1 className="mt-3 font-fustat text-3xl font-semibold tracking-tight text-graphite sm:text-4xl sm:leading-[1.15]">
  Welcome. You've been invited to take a test.
</h1>
```
```css
margin-top: 0.75rem; /* 12px from label */
font-family: 'Fustat', sans-serif;
font-size: 1.875rem; /* 30px mobile */
font-weight: 600;
letter-spacing: -0.025em; /* Tight tracking */
color: #383838; /* graphite */

/* Desktop (≥640px) */
font-size: 2.25rem; /* 36px */
line-height: 1.15; /* 41.4px - explicit value */
```

**3. Instructions Section**:
```jsx
<div className="mt-8 space-y-1">
  <p className="text-[15px] leading-relaxed text-zinc-600">
    To have a great experience:
  </p>
  <ul className="mt-4 space-y-3 text-[15px] text-zinc-600">
    {/* List items */}
  </ul>
</div>
```

**Instructions Container**:
```css
margin-top: 2rem; /* 32px from heading */
display: flex;
flex-direction: column;
gap: 0.25rem; /* 4px between intro and list */
```

**Intro Text**:
```css
font-size: 15px; /* Explicit pixel value */
line-height: 1.625; /* 24.375px */
color: #52525b; /* zinc-600 */
```

**List Container**:
```css
margin-top: 1rem; /* 16px */
display: flex;
flex-direction: column;
gap: 0.75rem; /* 12px between items */
font-size: 15px;
color: #52525b;
```

**List Item**:
```jsx
<li className="flex items-start gap-3">
  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-corePurple to-violet" />
  {text}
</li>
```
```css
display: flex;
align-items: flex-start; /* Top-align for multi-line */
gap: 0.75rem; /* 12px */
```

**Bullet Point** (gradient dot):
```css
margin-top: 0.5rem; /* 8px - aligns with text baseline */
height: 0.5rem; /* 8px */
width: 0.5rem; /* 8px */
flex-shrink: 0;
border-radius: 50%; /* Perfect circle */
background-image: linear-gradient(to bottom right, #4d3ef0, #594ce9);
```

**List Item Text**:
- Plain text inherits styles
- Links use: `font-medium text-corePurple underline underline-offset-2 hover:text-violet`

**4. Time Estimate Callout**:
```jsx
<p className="mt-8 rounded-xl border border-zinc-200/80 bg-white/70 px-5 py-4 text-sm font-medium text-zinc-700 shadow-sm">
  <span className="text-corePurple font-semibold">Estimated time: {durationMinutes} minutes</span>
</p>
```
```css
margin-top: 2rem; /* 32px from list */
border-radius: 0.75rem; /* 12px */
border: 1px solid rgba(228, 228, 231, 0.8);
background-color: rgba(255, 255, 255, 0.7); /* Semi-transparent white */
padding: 1.25rem 1rem; /* 20px horizontal, 16px vertical */
font-size: 0.875rem; /* 14px */
font-weight: 500;
color: #3f3f46; /* zinc-700 */
box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
```

**Emphasized Text** (time value):
```css
color: #4d3ef0; /* corePurple */
font-weight: 600;
```

---

#### Right Column: Video Section (Exact Layout)

**Container**:
```css
display: flex;
flex-direction: column;
gap: 1.5rem; /* 24px */
padding-top: 3rem; /* 48px mobile */

/* Desktop (≥1024px) */
padding-top: 5rem; /* 80px - more vertical offset */
```

**Video Card Wrapper**:
```jsx
<div className="overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/90 shadow-[0_4px_24px_-4px_rgba(77,62,240,0.08),0_2px_8px_-2px_rgba(0,0,0,0.04)]">
  <div className="p-6 sm:p-7">
    {/* Content */}
  </div>
</div>
```
```css
overflow: hidden;
border-radius: 1rem; /* 16px */
border: 1px solid rgba(228, 228, 231, 0.8);
background-color: rgba(255, 255, 255, 0.9); /* Slightly transparent white */
box-shadow: 
  0 4px 24px -4px rgba(77, 62, 240, 0.08),
  0 2px 8px -2px rgba(0, 0, 0, 0.04);

/* Inner padding */
padding: 1.5rem; /* 24px mobile */
padding: 1.75rem; /* 28px desktop (≥640px) */
```

**Video Section Title**:
```jsx
<h2 className="text-lg font-semibold text-zinc-900">Introductory video</h2>
```
```css
font-size: 1.125rem; /* 18px */
font-weight: 600;
color: #18181b; /* zinc-900 */
```

**Video Container**:
```jsx
<div className="mt-4 aspect-video w-full overflow-hidden rounded-xl border border-zinc-100 bg-gradient-to-br from-zinc-50 to-zinc-100/80 shadow-inner min-h-[280px] sm:min-h-[320px]">
  {/* Video or placeholder */}
</div>
```
```css
margin-top: 1rem; /* 16px */
aspect-ratio: 16 / 9;
width: 100%;
overflow: hidden;
border-radius: 0.75rem; /* 12px */
border: 1px solid #f4f4f5; /* zinc-100 */
background-image: linear-gradient(to bottom right, #fafafa, rgba(244, 244, 245, 0.8));
box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.05);
min-height: 280px; /* Mobile */
min-height: 320px; /* Desktop (≥640px) */
```

**Video Placeholder Content**:
```jsx
<div className="flex h-full min-h-[280px] sm:min-h-[320px] w-full flex-col items-center justify-center gap-3 text-zinc-400">
  {/* Play button */}
  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-lg ring-1 ring-zinc-200/60 transition hover:scale-105 hover:shadow-xl">
    <IconPlay className="h-10 w-10 text-corePurple ml-0.5" />
  </div>
  <p className="text-sm font-medium text-zinc-500">Video placeholder</p>
</div>
```

**Placeholder Container**:
```css
display: flex;
flex-direction: column;
height: 100%;
min-height: 280px; /* Mobile */
min-height: 320px; /* Desktop */
width: 100%;
align-items: center;
justify-content: center;
gap: 0.75rem; /* 12px */
color: #a1a1aa; /* zinc-400 */
```

**Play Button Circle**:
```css
display: flex;
height: 5rem; /* 80px */
width: 5rem; /* 80px */
align-items: center;
justify-content: center;
border-radius: 50%; /* Perfect circle */
background-color: rgba(255, 255, 255, 0.9);
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
box-shadow: 0 0 0 1px rgba(228, 228, 231, 0.6); /* ring */
transition: all 150ms;

/* Hover */
&:hover {
  transform: scale(1.05); /* 5% larger */
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); /* shadow-xl */
}
```

**Play Icon**:
```css
height: 2.5rem; /* 40px */
width: 2.5rem; /* 40px */
color: #4d3ef0; /* corePurple */
margin-left: 0.125rem; /* 2px - optical centering */
```

**Placeholder Text**:
```css
font-size: 0.875rem; /* 14px */
font-weight: 500;
color: #71717a; /* zinc-500 */
```

**Start Test Button Container**:
```jsx
<div className="mt-6 flex justify-center">
  <button {...}>Start test</button>
</div>
```
```css
margin-top: 1.5rem; /* 24px */
display: flex;
justify-content: center; /* Horizontally center button */
```

**Start Test Button** (pre-modal):
```jsx
<button
  type="button"
  onClick={() => setShowStartModal(true)}
  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-corePurple to-violet px-5 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_-2px_rgba(77,62,240,0.45)] transition hover:shadow-[0_6px_20px_-2px_rgba(77,62,240,0.5)] hover:brightness-105"
>
  Start test
  <IconChevronRight className="h-4 w-4" />
</button>
```
```css
display: inline-flex;
align-items: center;
gap: 0.5rem; /* 8px */
border-radius: 0.75rem; /* 12px */
background-image: linear-gradient(to right, #4d3ef0, #594ce9);
padding: 0.75rem 1.25rem; /* 12px top/bottom, 20px left/right */
font-size: 0.875rem; /* 14px */
font-weight: 600;
color: #ffffff;
box-shadow: 0 4px 14px -2px rgba(77, 62, 240, 0.45);
transition: all 150ms;

&:hover {
  box-shadow: 0 6px 20px -2px rgba(77, 62, 240, 0.5);
  filter: brightness(1.05);
}
```

**Button Text**: "Start test"

**Icon** (chevron right):
```css
height: 1rem; /* 16px */
width: 1rem; /* 16px */
stroke-width: 1.6;
color: currentColor; /* Inherits white */
```

---

### Responsive Layout Behavior

**Mobile (< 1024px)**:
```
┌─────────────────────────────────┐
│  Info Banner (full width)       │
├─────────────────────────────────┤
│                                 │
│  Welcome Section                │
│  (full width, stacked)          │
│                                 │
│  Video Section                  │
│  (full width, stacked)          │
│                                 │
└─────────────────────────────────┘
```

**Desktop (≥ 1024px)**:
```
┌─────────────────────────────────────────┐
│  Info Banner (full width, centered)     │
├─────────────────────────────────────────┤
│                                         │
│  ┌────────────┬──────────────────┐     │
│  │  Welcome   │  Video Section   │     │
│  │  Section   │  (slightly wider)│     │
│  │  46.5%     │  53.5%           │     │
│  └────────────┴──────────────────┘     │
│                                         │
└─────────────────────────────────────────┘
```

**Breakpoint**: `1024px` (Tailwind `lg:`)

---

### Workspace Page Layout (Complete)

**Route**: `/tests/[testId]/preview/workspace?scenario=0`

#### Full Page Structure
```jsx
<div className="min-h-screen bg-gradient-to-b from-[#f5f3ff] via-[#faf8ff] to-[#f0ecff] text-zinc-900">
  
  {/* Sticky Top Navigation Bar */}
  <div className="sticky top-0 z-10 border-b border-zinc-200/60 bg-white/95 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
    {/* Nav content */}
  </div>
  
  {/* Main Content */}
  <div className="mx-auto max-w-[1600px] px-6 py-8">
    {/* Question + Answer panels */}
  </div>
  
</div>
```

**Page Container**:
```css
min-height: 100vh;
background: linear-gradient(to bottom, #f5f3ff, #faf8ff, #f0ecff);
color: #18181b; /* zinc-900 */
```

**Sticky Top Bar**:
```css
position: sticky;
top: 0;
z-index: 10;
border-bottom: 1px solid rgba(228, 228, 231, 0.6); /* zinc-200/60 */
background-color: rgba(255, 255, 255, 0.95); /* Almost opaque white */
backdrop-filter: blur(24px); /* Strong blur */
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
```

**Top Bar Inner Container**:
```css
max-width: 1600px;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: space-between;
gap: 1.5rem; /* 24px */
padding: 1rem 1.5rem; /* 16px top/bottom, 24px left/right */
```

**Question/Timer Badge**:
```jsx
<div className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-corePurple/8 to-violet/8 px-4 py-2 ring-1 ring-corePurple/10">
  <IconClock className="h-4 w-4 text-corePurple" />
  <span className="text-sm font-semibold text-zinc-800">
    Question {currentIndex + 1} of {totalQuestionsCount}
  </span>
</div>
```
```css
display: flex;
align-items: center;
gap: 0.5rem; /* 8px */
border-radius: 0.75rem; /* 12px */
background-image: linear-gradient(to right, rgba(77, 62, 240, 0.08), rgba(89, 76, 233, 0.08));
padding: 0.5rem 1rem; /* 8px top/bottom, 16px left/right */
box-shadow: 0 0 0 1px rgba(77, 62, 240, 0.1); /* ring */

/* Icon */
.icon {
  height: 1rem; /* 16px */
  width: 1rem; /* 16px */
  color: #4d3ef0;
}

/* Text */
.text {
  font-size: 0.875rem; /* 14px */
  font-weight: 600;
  color: #27272a; /* zinc-800 */
}
```

**Timer Display**:
```jsx
<div className="flex items-center gap-1.5 rounded-lg px-3 py-1.5">
  <span className="text-xs text-zinc-500">Time:</span>
  <span className="text-sm tabular-nums text-zinc-600">
    {minutes}:{seconds}
  </span>
</div>
```
```css
display: flex;
align-items: center;
gap: 0.375rem; /* 6px */
border-radius: 0.5rem; /* 8px */
padding: 0.375rem 0.75rem; /* 6px top/bottom, 12px left/right */

/* Label */
.label {
  font-size: 0.75rem; /* 12px */
  color: #71717a; /* zinc-500 */
}

/* Time value */
.value {
  font-size: 0.875rem; /* 14px */
  font-variant-numeric: tabular-nums; /* Fixed-width numbers */
  color: #52525b; /* zinc-600 */
}
```

**Navigation Buttons Container**:
```css
display: flex;
align-items: center;
gap: 0.75rem; /* 12px */
```

**Previous Button**:
```jsx
<button
  disabled={!prevQuestionId}
  className="inline-flex items-center gap-2 rounded-xl border border-zinc-200/80 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-700 shadow-sm transition hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-50"
>
  <IconChevronLeft className="h-4 w-4" />
  Previous
</button>
```
```css
display: inline-flex;
align-items: center;
gap: 0.5rem; /* 8px */
border-radius: 0.75rem; /* 12px */
border: 1px solid rgba(228, 228, 231, 0.8);
background-color: #ffffff;
padding: 0.625rem 1rem; /* 10px top/bottom, 16px left/right */
font-size: 0.875rem; /* 14px */
font-weight: 600;
color: #3f3f46; /* zinc-700 */
box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
transition: all 150ms;

&:hover:not(:disabled) {
  background-color: #fafafa; /* zinc-50 */
}

&:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
```

**Next/Submit Button**:
```jsx
<button
  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-corePurple to-violet px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_14px_-2px_rgba(77,62,240,0.5)] ring-1 ring-black/5 transition hover:shadow-[0_6px_20px_-2px_rgba(77,62,240,0.55)] hover:brightness-105"
>
  {nextQuestionId ? "Next" : "Submit"}
  <IconChevronRight className="h-4 w-4" />
</button>
```
```css
display: inline-flex;
align-items: center;
gap: 0.5rem; /* 8px */
border-radius: 0.75rem; /* 12px */
background-image: linear-gradient(to right, #4d3ef0, #594ce9);
padding: 0.625rem 1.25rem; /* 10px top/bottom, 20px left/right */
font-size: 0.875rem; /* 14px */
font-weight: 600;
color: #ffffff;
box-shadow: 
  0 4px 14px -2px rgba(77, 62, 240, 0.5),
  0 0 0 1px rgba(0, 0, 0, 0.05); /* ring */
transition: all 150ms;

&:hover {
  box-shadow: 0 6px 20px -2px rgba(77, 62, 240, 0.55);
  filter: brightness(1.05);
}
```

**Button Text**: "Next" or "Submit" (conditional)

---

#### Main Content Area (Two-Panel Layout)

**Container**:
```jsx
<div className="mx-auto max-w-[1600px] px-6 py-8">
  <div className="grid min-h-[calc(100vh-140px)] gap-8 lg:grid-cols-[1fr_1fr]">
    {/* Question panel */}
    {/* Answer panel */}
  </div>
</div>
```
```css
/* Outer container */
max-width: 1600px;
margin: 0 auto;
padding: 2rem 1.5rem; /* 32px top/bottom, 24px left/right */

/* Grid */
display: grid;
min-height: calc(100vh - 140px); /* Full viewport minus header (approx) */
gap: 2rem; /* 32px */

/* Desktop (≥1024px) */
grid-template-columns: 1fr 1fr; /* Equal 50/50 split */
```

**Mobile Layout**:
```
┌─────────────────────┐
│  Question Panel     │
│  (full width)       │
├─────────────────────┤
│  Answer Panel       │
│  (full width)       │
└─────────────────────┘
```

**Desktop Layout**:
```
┌─────────────┬─────────────┐
│  Question   │  Answer     │
│  Panel      │  Panel      │
│  50%        │  50%        │
└─────────────┴─────────────┘
```

---

### Responsive Breakpoints (Tailwind Standard)

```css
/* Default (mobile-first): < 640px */
/* No prefix needed */

/* Small (sm:): ≥ 640px */
@media (min-width: 640px) { ... }

/* Medium (md:): ≥ 768px */
@media (min-width: 768px) { ... }

/* Large (lg:): ≥ 1024px */
@media (min-width: 1024px) { ... }

/* Extra Large (xl:): ≥ 1280px */
@media (min-width: 1280px) { ... }

/* 2X Large (2xl:): ≥ 1536px */
@media (min-width: 1536px) { ... }
```

#### Responsive Patterns Used in Mockup

**Grid Layouts**:
```css
/* Two-column split */
grid gap-8 lg:grid-cols-[1fr_1fr]
/* Equals: 1 column on mobile, 2 equal columns on desktop (≥1024px) */

/* Asymmetric grid */
lg:grid-cols-[1fr_1.15fr]
/* Left column slightly smaller than right */

lg:grid-cols-[1.2fr_1fr]
/* Left column slightly larger than right */

/* Dashboard recent items */
lg:grid-cols-[1.1fr_0.9fr]
```

**Text Size Responsive**:
```css
text-3xl sm:text-4xl
/* 30px on mobile, 36px on desktop */

text-xl sm:text-2xl
/* 20px on mobile, 24px on desktop */
```

**Padding Responsive**:
```css
p-6 sm:p-7
/* 24px padding on mobile, 28px on desktop */

p-6 sm:p-8
/* 24px padding on mobile, 32px on desktop */

px-6 py-14 sm:py-16
/* Horizontal 24px always, vertical 56px mobile / 64px desktop */
```

---

### Z-Index Stacking Order

```css
z-0: 0;                    /* Base layer */
z-10: 10;                  /* Sticky navigation */
z-20: 20;                  /* Dropdown menus */
z-30: 30;
z-40: 40;                  /* Question menu overlays */
z-50: 50;                  /* Modals */
z-auto: auto;              /* Default stacking */
```

#### Stacking Context in Mockup
```
- Page content: z-auto (default)
- Sticky top nav: z-10
- Dropdown menus: z-20
- Question action menus: z-40
- Modal overlay: z-50
  - Modal backdrop: z-auto (within modal)
  - Modal card: z-auto (appears above backdrop via DOM order)
```

---

### Aspect Ratios

```css
aspect-auto: auto;
aspect-square: 1 / 1;       /* 1:1 ratio */
aspect-video: 16 / 9;       /* 16:9 ratio - Video placeholder */
```

---

### Flex & Grid Utilities

#### Flex Direction
```css
flex-row: flex-direction: row;
flex-col: flex-direction: column; /* Most common */
```

#### Align Items
```css
items-start: align-items: flex-start;    /* Top alignment */
items-center: align-items: center;       /* Vertical center (most common) */
items-end: align-items: flex-end;        /* Bottom alignment */
items-stretch: align-items: stretch;
```

#### Justify Content
```css
justify-start: justify-content: flex-start;
justify-end: justify-content: flex-end;      /* Right-align buttons */
justify-center: justify-content: center;     /* Center modals */
justify-between: justify-content: space-between; /* Most common */
justify-around: justify-content: space-around;
```

#### Flex Wrap
```css
flex-wrap: flex-wrap: wrap;
flex-nowrap: flex-wrap: nowrap;
```

#### Flex Shrink/Grow
```css
shrink-0: flex-shrink: 0;    /* Prevent shrinking (icons, close buttons) */
flex-1: flex: 1 1 0%;        /* Fill available space */
```

#### Grid Columns
```css
grid-cols-1: grid-template-columns: repeat(1, minmax(0, 1fr));
grid-cols-2: grid-template-columns: repeat(2, minmax(0, 1fr));
grid-cols-3: grid-template-columns: repeat(3, minmax(0, 1fr));

/* Custom grid columns (used in tables) */
grid-cols-[60px_1.4fr_1fr_120px_90px]
/* Fixed 60px, then fractional columns */
```

---

### Animation System (Complete)

#### CSS Keyframe Animations

**Voice Wave Animation** (for voice recording visualization):
```css
@keyframes voicewave {
  0%, 100% {
    transform: scaleY(0.25);  /* Compressed to 25% height */
  }
  50% {
    transform: scaleY(1);     /* Full height at midpoint */
  }
}

/* Usage */
animation: voicewave 0.5s ease-in-out infinite alternate;
animation-delay: ${index * 0.06}s; /* Staggered delay: 0s, 0.06s, 0.12s, etc. */
```

**Tailwind Animations** (built-in):
```css
/* Spin (loading spinners) */
animate-spin:
  animation: spin 1s linear infinite;
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

/* Ping (recording indicator) */
animate-ping:
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
  @keyframes ping {
    75%, 100% {
      transform: scale(2);
      opacity: 0;
    }
  }

/* Pulse */
animate-pulse:
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

/* Bounce */
animate-bounce:
  animation: bounce 1s infinite;
  @keyframes bounce {
    0%, 100% {
      transform: translateY(-25%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }
```

#### Transform Utilities

**Scale**:
```css
scale-0: transform: scale(0);
scale-50: transform: scale(0.5);
scale-75: transform: scale(0.75);
scale-90: transform: scale(0.9);
scale-95: transform: scale(0.95);
scale-100: transform: scale(1);        /* Default */
scale-105: transform: scale(1.05);     /* Hover effect (play button) */
scale-110: transform: scale(1.1);
scale-125: transform: scale(1.25);
```

**Brightness** (hover effects):
```css
brightness-0: filter: brightness(0);
brightness-50: filter: brightness(0.5);
brightness-75: filter: brightness(0.75);
brightness-90: filter: brightness(0.9);
brightness-95: filter: brightness(0.95);
brightness-100: filter: brightness(1);     /* Default */
brightness-105: filter: brightness(1.05);  /* Button hover */
brightness-110: filter: brightness(1.1);
brightness-125: filter: brightness(1.25);
```

**Translate**:
```css
translate-x-0.5: transform: translateX(0.125rem); /* 2px - chevron hover */
-translate-x-1/2: transform: translateX(-50%);    /* Center horizontally */
-translate-y-1/2: transform: translateY(-50%);    /* Center vertically */
-translate-y-1/2: transform: translateY(-50%);
```

**Rotate**:
```css
rotate-0: transform: rotate(0deg);
rotate-45: transform: rotate(45deg);    /* Plus icon to X */
rotate-90: transform: rotate(90deg);    /* Chevron expand */
rotate-180: transform: rotate(180deg);
```

#### Transition Properties
```css
/* Which properties transition */
transition-none: transition-property: none;
transition-all: transition-property: all;         /* Most common */
transition-colors: transition-property: color, background-color, border-color;
transition-opacity: transition-property: opacity;
transition-shadow: transition-property: box-shadow;
transition-transform: transition-property: transform;
```

---

### Cursor States

```css
cursor-auto: cursor: auto;
cursor-default: cursor: default;
cursor-pointer: cursor: pointer;         /* Clickable elements */
cursor-wait: cursor: wait;
cursor-text: cursor: text;
cursor-move: cursor: move;
cursor-not-allowed: cursor: not-allowed; /* Disabled states */
```

---

### Overflow & Scrolling

```css
overflow-visible: overflow: visible;
overflow-hidden: overflow: hidden;       /* Clip content */
overflow-scroll: overflow: scroll;
overflow-auto: overflow: auto;           /* Most common - show scrollbar when needed */
overflow-x-auto: overflow-x: auto;
overflow-y-auto: overflow-y: auto;       /* Vertical scroll only */
```

**Scrollbar Styling** (from globals.css):
```css
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

---

### Position Utilities

```css
static: position: static;          /* Default */
fixed: position: fixed;            /* Modal overlays, sticky nav */
absolute: position: absolute;      /* Positioned relative to parent */
relative: position: relative;      /* Positioning context */
sticky: position: sticky;          /* Top nav bar */

/* Position values */
inset-0: top: 0; right: 0; bottom: 0; left: 0;  /* Fill container */
top-0: top: 0;
right-0: right: 0;
bottom-0: bottom: 0;
left-0: left: 0;
top-1/2: top: 50%;
left-1/2: left: 50%;
```

---

### Display Utilities

```css
block: display: block;
inline-block: display: inline-block;
inline: display: inline;
flex: display: flex;                    /* Most common */
inline-flex: display: inline-flex;      /* Buttons, badges */
grid: display: grid;                    /* Layouts */
hidden: display: none;                  /* Hide element */
```

---

### Whitespace & Text Utilities

```css
/* Text Wrapping */
whitespace-normal: white-space: normal;
whitespace-nowrap: white-space: nowrap;   /* No line breaks */
whitespace-pre: white-space: pre;         /* Preserve whitespace */
whitespace-pre-line: white-space: pre-line; /* Question descriptions */
whitespace-pre-wrap: white-space: pre-wrap;

/* Text Overflow */
truncate: 
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

text-ellipsis: text-overflow: ellipsis;
text-clip: text-overflow: clip;

/* Line Clamp (multi-line truncation) */
line-clamp-1: 
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;

line-clamp-2: -webkit-line-clamp: 2;   /* Library questions */
```

---

### Visibility & Opacity

```css
visible: visibility: visible;
invisible: visibility: hidden;           /* Hidden but takes up space */
opacity-0: opacity: 0;                   /* Invisible (no space) */
opacity-50: opacity: 0.5;                /* Disabled state */
```

---

### Pointer Events

```css
pointer-events-none: pointer-events: none;  /* Ignore mouse events */
pointer-events-auto: pointer-events: auto;  /* Default */
```

---

### Select & User Interaction

```css
select-none: user-select: none;         /* Prevent text selection */
select-text: user-select: text;         /* Allow text selection */
select-all: user-select: all;
```

---

### Outline (for focus states)

```css
outline-none: outline: 2px solid transparent; /* Remove default outline */
outline: outline: 2px solid;
outline-offset-2: outline-offset: 2px;

/* Focus-visible (keyboard navigation only) */
focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-corePurple
```

---

## 2. Page Structure & Layout

### Overall Architecture
```
/tests/[testId]/preview                    → Landing/Welcome page
/tests/[testId]/preview/workspace          → Test-taking interface
/tests/[testId]/preview/thank-you          → Completion page
```

### Responsive Breakpoints
- Mobile-first design
- Grid layouts: `grid gap-8 lg:grid-cols-[1fr_1fr]`
- Max widths: `max-w-5xl`, `max-w-[1600px]`
- Padding: `px-6 py-8`, responsive to `sm:px-8`, `lg:px-12`

---

## 3. Assessment Preview/Landing Page

**Route**: `/tests/[testId]/preview`

### 3.1 Top Info Bar
```jsx
<div className="border-b border-white/60 bg-white/50 backdrop-blur-sm px-6 py-3 shadow-[0_1px_0_0_rgba(77,62,240,0.06)]">
  <div className="mx-auto flex max-w-4xl items-center gap-3">
    <IconInfo className="h-4 w-4 text-corePurple" />
    <span className="text-sm font-medium text-zinc-600">
      This is a preview of your test. Complete the steps below before starting.
    </span>
  </div>
</div>
```

**Features**:
- Frosted glass effect (`backdrop-blur-sm`)
- Icon + informational text
- Dismissable or persistent (TBD)

### 3.2 Welcome Section (Left Column)

**Layout**: Two-column grid on desktop
```jsx
<div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
```

#### Header
```jsx
<p className="text-sm font-medium uppercase tracking-[0.2em] text-corePurple/80">
  Assessment
</p>
<h1 className="mt-3 font-fustat text-3xl font-semibold tracking-tight text-graphite sm:text-4xl">
  Welcome. You've been invited to take a test.
</h1>
```

#### Instruction List
```jsx
<p className="text-[15px] leading-relaxed text-zinc-600">
  To have a great experience:
</p>
<ul className="mt-4 space-y-3 text-[15px] text-zinc-600">
  <li className="flex items-start gap-3">
    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-corePurple to-violet" />
    Watch the introductory video...
  </li>
  {/* More items */}
</ul>
```

**Features**:
- Gradient bullet points
- Link to FAQs with underline: `font-medium text-corePurple underline underline-offset-2 hover:text-violet`
- Estimated time callout box

#### Time Estimate Box
```jsx
<p className="mt-8 rounded-xl border border-zinc-200/80 bg-white/70 px-5 py-4 text-sm font-medium text-zinc-700 shadow-sm">
  <span className="text-corePurple font-semibold">Estimated time: {durationMinutes} minutes</span>
</p>
```

### 3.3 Video & Start Section (Right Column)

#### Video Container
```jsx
<div className="overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/90 shadow-[0_4px_24px_-4px_rgba(77,62,240,0.08),0_2px_8px_-2px_rgba(0,0,0,0.04)]">
  <div className="p-6 sm:p-7">
    <h2 className="text-lg font-semibold text-zinc-900">Introductory video</h2>
    <div className="mt-4 aspect-video w-full overflow-hidden rounded-xl border border-zinc-100 bg-gradient-to-br from-zinc-50 to-zinc-100/80 shadow-inner min-h-[280px] sm:min-h-[320px]">
      {/* Video placeholder with play button */}
      <div className="flex h-full items-center justify-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-lg ring-1 ring-zinc-200/60 transition hover:scale-105">
          <IconPlay className="h-10 w-10 text-corePurple ml-0.5" />
        </div>
        <p className="text-sm font-medium text-zinc-500">Video placeholder</p>
      </div>
    </div>
    {/* Start test button */}
  </div>
</div>
```

**Features**:
- Aspect ratio: `aspect-video`
- Gradient background for empty state
- Large circular play button with hover effect
- Card shadow with purple tint

### 3.4 Start Test Modal

**Trigger**: Click "Start test" button

#### Exact Modal Structure & Positioning

```jsx
{/* Modal Container - Full viewport overlay */}
<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
  
  {/* Backdrop - Dark overlay with blur */}
  <div 
    className="fixed inset-0 bg-zinc-900/40 backdrop-blur-sm" 
    onClick={handleClose}
    aria-hidden="true"
  />
  
  {/* Modal Card */}
  <div className="relative w-full max-w-lg rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.18)] sm:p-8">
    {/* Modal content */}
  </div>
</div>
```

#### Design Specifications

**Container (Overlay)**:
- Position: `fixed inset-0` (covers entire viewport)
- Z-index: `50`
- Display: `flex items-center justify-center` (centers modal)
- Padding: `1rem` (16px) on all sides (mobile safe area)
- ARIA: `aria-modal="true" role="dialog"`

**Backdrop**:
- Position: `fixed inset-0` (full screen behind modal)
- Background: `rgba(24, 24, 27, 0.4)` (#18181b at 40% opacity)
- Backdrop filter: `blur(4px)` (frosted glass effect)
- Cursor: Clickable to close
- ARIA: `aria-hidden="true"`

**Modal Card**:
- Position: `relative`
- Width: `100%` with `max-width: 32rem` (512px)
- Border radius: `1rem` (16px)
- Border: `1px solid rgba(228, 228, 231, 0.8)` (#e4e4e7 at 80% opacity)
- Background: `#ffffff` (solid white)
- Padding: 
  - Mobile: `1.5rem` (24px) all sides
  - Desktop (`sm:` breakpoint): `2rem` (32px) all sides
- Shadow: `0 24px 48px -12px rgba(0, 0, 0, 0.18)` (large soft shadow)
- Shadow color: Black at 18% opacity, very diffused

---

#### Header Section

```jsx
<div className="flex items-start justify-between gap-4">
  <h2 className="font-fustat text-xl font-semibold text-graphite sm:text-2xl">
    You're about to start your test
  </h2>
  <button
    type="button"
    onClick={handleClose}
    className="-m-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-600"
    aria-label="Close"
  >
    <IconX className="h-5 w-5" />
  </button>
</div>
```

**Header Container**:
- Display: `flex items-start justify-between`
- Gap: `1rem` (16px) between title and close button
- Alignment: Top-aligned (items-start)

**Title (H2)**:
- Font family: `Fustat` (custom heading font)
- Font size: 
  - Mobile: `1.25rem` (20px)
  - Desktop (`sm:`): `1.5rem` (24px)
- Font weight: `600` (semibold)
- Color: `#383838` (graphite - custom brand color)
- Line height: Default (approx 1.2x)
- Letter spacing: Default

**Close Button**:
- Size: `2.25rem × 2.25rem` (36px × 36px)
- Margin: `-0.5rem` (negative margin to extend clickable area)
- Display: `flex items-center justify-center`
- Border radius: `0.5rem` (8px)
- Flex shrink: `0` (prevents squishing)
- Colors:
  - Default text: `#a1a1aa` (zinc-400)
  - Hover background: `#f4f4f5` (zinc-100)
  - Hover text: `#52525b` (zinc-600)
- Transition: All properties with default duration (150ms)
- Icon size: `1.25rem × 1.25rem` (20px × 20px)
- ARIA: `aria-label="Close"`

---

#### Body Section

```jsx
<div className="mt-6 space-y-5 text-[15px] text-zinc-600">
  {/* Content blocks */}
</div>
```

**Body Container**:
- Margin top: `1.5rem` (24px) from header
- Vertical spacing: `1.25rem` (20px) between child elements
- Base font size: `15px` (explicit pixel value, not rem)
- Base text color: `#52525b` (zinc-600)

---

#### Warning Paragraph

```jsx
<p className="leading-relaxed">
  Once you click the "Start" button, you cannot stop the flow of questions. 
  Once you submit an answer, you cannot go back to the previous question.
</p>
```

**Styling**:
- Line height: `1.625` (relaxed)
- Font size: Inherits `15px` from parent
- Color: Inherits `#52525b` (zinc-600)
- Font weight: `400` (normal)

**Text**: 
> "Once you click the "Start" button, you cannot stop the flow of questions. Once you submit an answer, you cannot go back to the previous question."

---

#### Cheating Notice (Emphasized)

```jsx
<div>
  <p className="font-semibold text-zinc-800">
    Cheating is prohibited. Our software detects cheating attempts and reports them to the recruiter.
  </p>
</div>
```

**Styling**:
- Font weight: `600` (semibold)
- Color: `#27272a` (zinc-800 - darker than body text)
- Font size: Inherits `15px`
- Line height: Default

**Text**:
> "Cheating is prohibited. Our software detects cheating attempts and reports them to the recruiter."

---

#### Rules Box

```jsx
<div className="rounded-xl border border-zinc-200/80 bg-zinc-50/50 px-4 py-3.5">
  <p className="mb-3 font-medium text-zinc-700">Please note that:</p>
  <ul className="space-y-2 text-sm">
    {/* List items */}
  </ul>
</div>
```

**Container**:
- Border radius: `0.75rem` (12px)
- Border: `1px solid rgba(228, 228, 231, 0.8)` (zinc-200 at 80%)
- Background: `rgba(250, 250, 250, 0.5)` (zinc-50 at 50% - very subtle tint)
- Padding horizontal: `1rem` (16px)
- Padding vertical: `0.875rem` (14px)

**Header ("Please note that:")**:
- Margin bottom: `0.75rem` (12px)
- Font weight: `500` (medium)
- Color: `#3f3f46` (zinc-700)
- Font size: Inherits `15px` from parent

**List Container**:
- Vertical spacing: `0.5rem` (8px) between items
- Font size: `0.875rem` (14px) - smaller than body text
- Color: Inherits from parent

**List Items**:

```jsx
<li className="flex items-start gap-2">
  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-corePurple" />
  {text}
</li>
```

**Each List Item**:
- Display: `flex items-start` (allows multi-line)
- Gap: `0.5rem` (8px) between bullet and text
- Alignment: Top-aligned

**Bullet Point**:
- Margin top: `0.375rem` (6px) - aligns with text baseline
- Size: `0.375rem × 0.375rem` (6px × 6px)
- Shape: `border-radius: 50%` (perfect circle)
- Background: `#4d3ef0` (corePurple - brand color)
- Flex shrink: `0` (maintains size)

**List Text**:
1. "Camera access and screen recording permissions are mandatory for this assessment."
2. "It is strictly forbidden to record or disclose the questions of this test by any means whatsoever."
3. "The privacy policy of the company who invited you to this test applies."

---

#### Terms Checkbox

```jsx
<label className="mt-6 flex cursor-pointer items-start gap-3">
  <input
    type="checkbox"
    checked={agreedToTerms}
    onChange={(e) => setAgreedToTerms(e.target.checked)}
    className="mt-0.5 h-4 w-4 rounded border-zinc-300 text-corePurple focus:ring-corePurple"
  />
  <span className="text-sm text-zinc-700">
    I agree to the{" "}
    <Link href="#terms" className="font-medium text-corePurple underline underline-offset-2 hover:text-violet">
      terms of service
    </Link>{" "}
    and{" "}
    <Link href="#privacy" className="font-medium text-corePurple underline underline-offset-2 hover:text-violet">
      privacy policy
    </Link>
  </span>
</label>
```

**Label Container**:
- Margin top: `1.5rem` (24px) from rules box
- Display: `flex items-start`
- Gap: `0.75rem` (12px) between checkbox and text
- Cursor: `pointer` (entire label is clickable)

**Checkbox Input**:
- Margin top: `0.125rem` (2px) - aligns with text baseline
- Size: `1rem × 1rem` (16px × 16px)
- Border radius: `0.25rem` (4px)
- Border: `1px solid #d4d4d8` (zinc-300)
- Checked color: `#4d3ef0` (corePurple)
- Focus ring color: `#4d3ef0` (corePurple)
- Focus ring: Default browser ring with brand color

**Label Text**:
- Font size: `0.875rem` (14px)
- Color: `#3f3f46` (zinc-700)
- Line height: Default

**Links (terms of service, privacy policy)**:
- Font weight: `500` (medium)
- Color: `#4d3ef0` (corePurple)
- Text decoration: `underline`
- Underline offset: `0.125rem` (2px - creates space between text and underline)
- Hover color: `#594ce9` (violet - slightly lighter purple)
- Transition: Color change (default 150ms)

**Full text**:
> "I agree to the **terms of service** and **privacy policy**"
(Bold words are links)

---

#### Start Button

```jsx
<div className="mt-8 flex justify-end">
  <button
    type="button"
    disabled={!agreedToTerms}
    onClick={() => {
      if (agreedToTerms) {
        router.push(`/tests/${testId}/preview/workspace`);
      }
    }}
    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-corePurple to-violet px-5 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_-2px_rgba(77,62,240,0.45)] transition hover:shadow-[0_6px_20px_-2px_rgba(77,62,240,0.5)] hover:brightness-105 disabled:opacity-50 disabled:cursor-not-allowed"
  >
    Start
    <IconChevronRight className="h-4 w-4" />
  </button>
</div>
```

**Button Container**:
- Margin top: `2rem` (32px) from checkbox
- Display: `flex justify-end` (right-aligned)

**Button**:
- Display: `inline-flex items-center`
- Gap: `0.5rem` (8px) between text and icon
- Border radius: `0.75rem` (12px)
- Background: Gradient from left to right
  - Start: `#4d3ef0` (corePurple)
  - End: `#594ce9` (violet)
- Padding horizontal: `1.25rem` (20px)
- Padding vertical: `0.75rem` (12px)
- Font size: `0.875rem` (14px)
- Font weight: `600` (semibold)
- Text color: `#ffffff` (white)
- Shadow: `0 4px 14px -2px rgba(77, 62, 240, 0.45)` (purple-tinted shadow)
  - Offset Y: 4px
  - Blur: 14px
  - Spread: -2px (tighter)
  - Color: corePurple at 45% opacity
- Transition: All properties (150ms default)

**Hover State**:
- Shadow: `0 6px 20px -2px rgba(77, 62, 240, 0.5)` (larger, more intense)
  - Offset Y: 6px (slightly lower)
  - Blur: 20px (more diffused)
  - Color: corePurple at 50% opacity
- Brightness: `1.05` (5% brighter - makes gradient pop)

**Disabled State** (when checkbox not checked):
- Opacity: `0.5` (50% transparent)
- Cursor: `not-allowed`
- No hover effects

**Icon (Chevron Right)**:
- Size: `1rem × 1rem` (16px × 16px)
- Stroke width: `1.6`
- Color: Inherits white from button

**Button Text**: "Start"

**Behavior**:
- Disabled until `agreedToTerms === true`
- On click: Routes to `/tests/${testId}/preview/workspace`

---

#### Complete Pixel-Perfect CSS Values

**All Exact Values in One Place**:

```css
/* Modal Overlay */
position: fixed;
inset: 0;
z-index: 50;
display: flex;
align-items: center;
justify-content: center;
padding: 1rem; /* 16px */

/* Backdrop */
position: fixed;
inset: 0;
background-color: rgba(24, 24, 27, 0.4); /* #18181b at 40% */
backdrop-filter: blur(4px);

/* Modal Card */
position: relative;
width: 100%;
max-width: 32rem; /* 512px */
border-radius: 1rem; /* 16px */
border: 1px solid rgba(228, 228, 231, 0.8); /* zinc-200 at 80% */
background-color: #ffffff;
padding: 1.5rem; /* 24px - mobile */
padding: 2rem; /* 32px - desktop (min-width: 640px) */
box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.18);

/* Header Container */
display: flex;
align-items: flex-start;
justify-content: space-between;
gap: 1rem; /* 16px */

/* Title */
font-family: 'Fustat', sans-serif;
font-size: 1.25rem; /* 20px - mobile */
font-size: 1.5rem; /* 24px - desktop (min-width: 640px) */
font-weight: 600;
color: #383838; /* graphite */
line-height: 1.2;

/* Close Button */
margin: -0.5rem; /* -8px extends clickable area */
display: flex;
height: 2.25rem; /* 36px */
width: 2.25rem; /* 36px */
align-items: center;
justify-content: center;
flex-shrink: 0;
border-radius: 0.5rem; /* 8px */
color: #a1a1aa; /* zinc-400 */
transition: all 150ms;

/* Close Button Hover */
background-color: #f4f4f5; /* zinc-100 */
color: #52525b; /* zinc-600 */

/* Close Icon */
height: 1.25rem; /* 20px */
width: 1.25rem; /* 20px */

/* Body Container */
margin-top: 1.5rem; /* 24px */
display: flex;
flex-direction: column;
gap: 1.25rem; /* 20px */
font-size: 15px; /* explicit px value */
color: #52525b; /* zinc-600 */

/* Warning Paragraph */
line-height: 1.625; /* relaxed */

/* Cheating Notice */
font-weight: 600;
color: #27272a; /* zinc-800 */

/* Rules Box */
border-radius: 0.75rem; /* 12px */
border: 1px solid rgba(228, 228, 231, 0.8); /* zinc-200 at 80% */
background-color: rgba(250, 250, 250, 0.5); /* zinc-50 at 50% */
padding-left: 1rem; /* 16px */
padding-right: 1rem; /* 16px */
padding-top: 0.875rem; /* 14px */
padding-bottom: 0.875rem; /* 14px */

/* Rules Header */
margin-bottom: 0.75rem; /* 12px */
font-weight: 500;
color: #3f3f46; /* zinc-700 */

/* Rules List */
display: flex;
flex-direction: column;
gap: 0.5rem; /* 8px */
font-size: 0.875rem; /* 14px */

/* List Item */
display: flex;
align-items: flex-start;
gap: 0.5rem; /* 8px */

/* Bullet Point */
margin-top: 0.375rem; /* 6px */
height: 0.375rem; /* 6px */
width: 0.375rem; /* 6px */
flex-shrink: 0;
border-radius: 50%;
background-color: #4d3ef0; /* corePurple */

/* Checkbox Label */
margin-top: 1.5rem; /* 24px */
display: flex;
align-items: flex-start;
gap: 0.75rem; /* 12px */
cursor: pointer;

/* Checkbox Input */
margin-top: 0.125rem; /* 2px */
height: 1rem; /* 16px */
width: 1rem; /* 16px */
border-radius: 0.25rem; /* 4px */
border: 1px solid #d4d4d8; /* zinc-300 */
/* Checked state: */
accent-color: #4d3ef0; /* corePurple */

/* Checkbox Label Text */
font-size: 0.875rem; /* 14px */
color: #3f3f46; /* zinc-700 */

/* Links in Label */
font-weight: 500;
color: #4d3ef0; /* corePurple */
text-decoration: underline;
text-underline-offset: 0.125rem; /* 2px */

/* Links Hover */
color: #594ce9; /* violet */

/* Button Container */
margin-top: 2rem; /* 32px */
display: flex;
justify-content: flex-end;

/* Start Button */
display: inline-flex;
align-items: center;
gap: 0.5rem; /* 8px */
border-radius: 0.75rem; /* 12px */
background-image: linear-gradient(to right, #4d3ef0, #594ce9); /* corePurple to violet */
padding-left: 1.25rem; /* 20px */
padding-right: 1.25rem; /* 20px */
padding-top: 0.75rem; /* 12px */
padding-bottom: 0.75rem; /* 12px */
font-size: 0.875rem; /* 14px */
font-weight: 600;
color: #ffffff;
box-shadow: 0 4px 14px -2px rgba(77, 62, 240, 0.45);
transition: all 150ms;

/* Start Button Hover */
box-shadow: 0 6px 20px -2px rgba(77, 62, 240, 0.5);
filter: brightness(1.05);

/* Start Button Disabled */
opacity: 0.5;
cursor: not-allowed;

/* Chevron Icon */
height: 1rem; /* 16px */
width: 1rem; /* 16px */
stroke-width: 1.6;
```

---

#### Responsive Breakpoints

**Mobile (default)**: < 640px
- Modal padding: `24px` (1.5rem)
- Title font size: `20px` (1.25rem)

**Desktop** (`sm:` breakpoint): ≥ 640px
- Modal padding: `32px` (2rem)
- Title font size: `24px` (1.5rem)

---

#### Exact Color Hex Values

```css
/* Brand Colors */
--corePurple: #4d3ef0;
--violet: #594ce9;
--graphite: #383838;

/* Zinc Grays */
--zinc-50: #fafafa;
--zinc-100: #f4f4f5;
--zinc-200: #e4e4e7;
--zinc-300: #d4d4d8;
--zinc-400: #a1a1aa;
--zinc-500: #71717a;
--zinc-600: #52525b;
--zinc-700: #3f3f46;
--zinc-800: #27272a;
--zinc-900: #18181b;

/* Usage */
Background white: #ffffff
Backdrop: rgba(24, 24, 27, 0.4) /* zinc-900 at 40% */
Border: rgba(228, 228, 231, 0.8) /* zinc-200 at 80% */
Rules box bg: rgba(250, 250, 250, 0.5) /* zinc-50 at 50% */
```

---

#### Z-Index Stacking

```css
Modal overlay: z-index: 50
Modal backdrop: z-index: auto (within modal overlay)
Modal card: z-index: auto (appears above backdrop due to DOM order)
```

---

#### Accessibility Requirements

- Modal: `aria-modal="true" role="dialog"`
- Backdrop: `aria-hidden="true"` (screen readers ignore)
- Close button: `aria-label="Close"`
- Checkbox: Native `<input type="checkbox">` (keyboard accessible)
- Links: Native `<a>` or `<Link>` (keyboard accessible)
- Focus trap: Should trap focus within modal when open
- Escape key: Should close modal

---

#### Interaction Behavior

1. **Modal appears**: Fade in with backdrop blur
2. **Click backdrop**: Closes modal, unchecks checkbox
3. **Click X button**: Closes modal, unchecks checkbox
4. **Check checkbox**: Enables Start button
5. **Uncheck checkbox**: Disables Start button
6. **Click Start (enabled)**: Routes to workspace page
7. **Escape key**: Should close modal (implement with listener)

#### Modal Content Structure

**Complete JSX Implementation**:
```jsx
<div className="flex items-start justify-between gap-4">
  <h2 className="font-fustat text-xl font-semibold text-graphite sm:text-2xl">
    You're about to start your test
  </h2>
  <button onClick={handleClose} className="..." aria-label="Close">
    <IconX className="h-5 w-5" />
  </button>
</div>

<div className="mt-6 space-y-5 text-[15px] text-zinc-600">
  {/* Warning paragraph */}
  <p className="leading-relaxed">
    Once you click the "Start" button, you cannot stop the flow of questions. 
    Once you submit an answer, you cannot go back to the previous question.
  </p>
  
  {/* Cheating notice - emphasized */}
  <div>
    <p className="font-semibold text-zinc-800">
      Cheating is prohibited. Our software detects cheating attempts and reports them to the recruiter.
    </p>
  </div>
  
  {/* Rules box with light background */}
  <div className="rounded-xl border border-zinc-200/80 bg-zinc-50/50 px-4 py-3.5">
    <p className="mb-3 font-medium text-zinc-700">Please note that:</p>
    <ul className="space-y-2 text-sm">
      <li className="flex items-start gap-2">
        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-corePurple" />
        Camera access and screen recording permissions are mandatory for this assessment.
      </li>
      <li className="flex items-start gap-2">
        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-corePurple" />
        It is strictly forbidden to record or disclose the questions of this test by any means whatsoever.
      </li>
      <li className="flex items-start gap-2">
        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-corePurple" />
        The privacy policy of the company who invited you to this test applies.
      </li>
    </ul>
  </div>
</div>

{/* Terms checkbox */}
<label className="mt-6 flex cursor-pointer items-start gap-3">
  <input
    type="checkbox"
    checked={agreedToTerms}
    onChange={(e) => setAgreedToTerms(e.target.checked)}
    className="mt-0.5 h-4 w-4 rounded border-zinc-300 text-corePurple focus:ring-corePurple"
  />
  <span className="text-sm text-zinc-700">
    I agree to the{" "}
    <Link href="#terms" className="font-medium text-corePurple underline underline-offset-2 hover:text-violet">
      terms of service
    </Link>{" "}
    and{" "}
    <Link href="#privacy" className="font-medium text-corePurple underline underline-offset-2 hover:text-violet">
      privacy policy
    </Link>
  </span>
</label>

{/* Start button - disabled until checkbox is checked */}
<div className="mt-8 flex justify-end">
  <button
    type="button"
    disabled={!agreedToTerms}
    onClick={() => router.push(`/tests/${testId}/preview/workspace`)}
    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-corePurple to-violet px-5 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_-2px_rgba(77,62,240,0.45)] transition hover:shadow-[0_6px_20px_-2px_rgba(77,62,240,0.5)] hover:brightness-105 disabled:opacity-50 disabled:cursor-not-allowed"
  >
    Start
    <IconChevronRight className="h-4 w-4" />
  </button>
</div>
```

**Exact Text Content**:

1. **Header**: "You're about to start your test"

2. **Warning paragraph**: 
   > "Once you click the "Start" button, you cannot stop the flow of questions. Once you submit an answer, you cannot go back to the previous question."

3. **Cheating notice** (bold):
   > "Cheating is prohibited. Our software detects cheating attempts and reports them to the recruiter."

4. **Rules box header**: "Please note that:"
   - "Camera access and screen recording permissions are mandatory for this assessment."
   - "It is strictly forbidden to record or disclose the questions of this test by any means whatsoever."
   - "The privacy policy of the company who invited you to this test applies."

5. **Checkbox label**: 
   > "I agree to the **terms of service** and **privacy policy**"

6. **Submit button**: "Start" (with arrow icon)

**Key Features**:
- Backdrop: `bg-zinc-900/40 backdrop-blur-sm` (dark semi-transparent with blur)
- Close button (X) in top-right corner
- Rules box has light gray background: `bg-zinc-50/50`
- Purple bullet points (small circles): `bg-corePurple`
- Checkbox **must be checked** before Start button is enabled
- Links to terms/privacy styled as purple underlines: `text-corePurple underline underline-offset-2`
- Start button disabled state: `disabled:opacity-50 disabled:cursor-not-allowed`
- Routes to `/tests/${testId}/preview/workspace` on submit

---

## 4. Assessment Workspace (Test-Taking Interface)

**Route**: `/tests/[testId]/preview/workspace?scenario=0`

### 4.1 Sticky Top Navigation Bar

```jsx
<div className="sticky top-0 z-10 border-b border-zinc-200/60 bg-white/95 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
  <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-6 py-4">
    {/* Left: Question counter + timer */}
    {/* Right: Previous + Next buttons */}
  </div>
</div>
```

#### Left Side: Progress Indicators
```jsx
<div className="flex items-center gap-4">
  {/* Question badge */}
  <div className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-corePurple/8 to-violet/8 px-4 py-2 ring-1 ring-corePurple/10">
    <IconClock className="h-4 w-4 text-corePurple" />
    <span className="text-sm font-semibold text-zinc-800">
      Question {currentIndex + 1} of {totalQuestionsCount}
    </span>
  </div>
  
  {/* Timer */}
  <div className="flex items-center gap-1.5 rounded-lg px-3 py-1.5">
    <span className="text-xs text-zinc-500">Time:</span>
    <span className="text-sm tabular-nums text-zinc-600">
      {minutes}:{seconds}
    </span>
  </div>
</div>
```

**Features**:
- Gradient background badge for question number
- Clock icon
- Countdown timer in MM:SS format with `tabular-nums`
- Sticky positioning

#### Right Side: Navigation Buttons
```jsx
<div className="flex items-center gap-3">
  <button disabled={!prevQuestionId} {...}>
    <IconChevronLeft />
    Previous
  </button>
  <button {...}>
    {nextQuestionId ? "Next" : "Submit"}
    <IconChevronRight />
  </button>
</div>
```

**Features**:
- Previous button disabled on first question
- Next button becomes "Submit" on last question
- Gradient button styling for primary action

### 4.2 Main Content Area (Two-Column Layout)

```jsx
<div className="mx-auto max-w-[1600px] px-6 py-8">
  <div className="grid min-h-[calc(100vh-140px)] gap-8 lg:grid-cols-[1fr_1fr]">
    {/* Left: Question panel */}
    {/* Right: Answer panel */}
  </div>
</div>
```

**Features**:
- Full viewport height minus header
- Equal-width columns on desktop
- Stack on mobile
- Gap between panels: `gap-8`

### 4.3 Question Panel (Left) - Complete Specifications

**Full JSX Structure**:
```jsx
<div className="flex flex-col overflow-hidden rounded-2xl border border-zinc-200/60 bg-white shadow-[0_8px_30px_-8px_rgba(77,62,240,0.12),0_2px_12px_-4px_rgba(0,0,0,0.06)] ring-1 ring-zinc-900/5">
  
  {/* Header Section with gradient */}
  <div className="border-b border-zinc-100/80 bg-gradient-to-b from-zinc-50/80 to-white px-8 py-6">
    
    {/* Skill Badge */}
    <span className="inline-block rounded-full bg-corePurple/12 px-3 py-1 text-xs font-semibold tracking-wide text-corePurple">
      {question.skill}
    </span>
    
    {/* Question Title */}
    <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-900">
      {question.title}
    </h2>
    
    {/* Question Description */}
    <p className="mt-4 whitespace-pre-line text-[15px] leading-[1.7] text-zinc-600">
      {question.description}
    </p>
    
    {/* Optional Reference Image */}
    {question.imageUrl && (
      <div className="mt-6 overflow-hidden rounded-xl border border-zinc-200/80 bg-white">
        <Image
          src={question.imageUrl}
          alt="Question reference"
          width={600}
          height={400}
          className="w-full object-contain"
        />
      </div>
    )}
  </div>
  
  {/* Spacer - pushes content to top */}
  <div className="flex-1" />
  
</div>
```

---

#### Panel Container (Outer)

```css
display: flex;
flex-direction: column;
overflow: hidden; /* Clip rounded corners */
border-radius: 1rem; /* 16px */
border: 1px solid rgba(228, 228, 231, 0.6); /* zinc-200 at 60% */
background-color: #ffffff;
box-shadow: 
  0 8px 30px -8px rgba(77, 62, 240, 0.12),  /* Purple glow */
  0 2px 12px -4px rgba(0, 0, 0, 0.06),      /* Depth shadow */
  0 0 0 1px rgba(24, 24, 27, 0.05);         /* Subtle ring */
```

**RGB Breakdown**:
- Shadow 1: Purple glow (Y: 8px, Blur: 30px, Spread: -8px, rgba(77,62,240,0.12))
- Shadow 2: Black depth (Y: 2px, Blur: 12px, Spread: -4px, rgba(0,0,0,0.06))
- Shadow 3: Ring (0 offset, rgba(24,24,27,0.05))

---

#### Header Section (Gradient Background)

**Container**:
```css
border-bottom: 1px solid rgba(244, 244, 245, 0.8); /* zinc-100 at 80% */
background-image: linear-gradient(to bottom, rgba(250, 250, 250, 0.8), #ffffff);
/* From zinc-50 at 80% to solid white */
padding: 1.5rem 2rem; /* 24px top/bottom, 32px left/right */
```

---

#### Skill Badge

```jsx
<span className="inline-block rounded-full bg-corePurple/12 px-3 py-1 text-xs font-semibold tracking-wide text-corePurple">
  {question.skill}
</span>
```

**Complete CSS**:
```css
display: inline-block;
border-radius: 9999px; /* Perfect pill shape */
background-color: rgba(77, 62, 240, 0.12); /* corePurple at 12% */
padding: 0.25rem 0.75rem; /* 4px top/bottom, 12px left/right */
font-size: 0.75rem; /* 12px */
font-weight: 600;
letter-spacing: 0.025em; /* 0.3px at 12px */
color: #4d3ef0; /* corePurple */
text-transform: none; /* Not uppercase */
```

**Example values**: "Technical", "Problem Solving", "Verbal", "Practical"

---

#### Question Title (H2)

```jsx
<h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-900">
  {question.title}
</h2>
```

**Complete CSS**:
```css
margin-top: 1rem; /* 16px from skill badge */
font-size: 1.25rem; /* 20px */
font-weight: 600;
letter-spacing: -0.025em; /* -0.5px at 20px */
color: #18181b; /* zinc-900 */
line-height: 1.75rem; /* 28px */
```

**Example titles**:
- "Robotic Gripper Validation"
- "DFM Principle Application"
- "Robotic Joint Thermal-Accuracy Trade-off"

---

#### Question Description

```jsx
<p className="mt-4 whitespace-pre-line text-[15px] leading-[1.7] text-zinc-600">
  {question.description}
</p>
```

**Complete CSS**:
```css
margin-top: 1rem; /* 16px from title */
white-space: pre-line; /* Preserves line breaks, wraps text */
font-size: 15px; /* Explicit pixel value, NOT rem */
line-height: 1.7; /* 25.5px at 15px font */
color: #52525b; /* zinc-600 */
```

**Text formatting**:
- Supports multi-paragraph text
- Line breaks are preserved (`\n` in string renders as line break)
- Bullet points in text use `•` character
- Example multi-line format:
```
"Paragraph 1 here.

Observed issues:
• Issue 1
• Issue 2

Constraints:
• Constraint 1
• Constraint 2"
```

---

#### Optional Reference Image

```jsx
{question.imageUrl && (
  <div className="mt-6 overflow-hidden rounded-xl border border-zinc-200/80 bg-white">
    <Image
      src={question.imageUrl}
      alt="Question reference"
      width={600}
      height={400}
      className="w-full object-contain"
    />
  </div>
)}
```

**Image Container**:
```css
margin-top: 1.5rem; /* 24px from description */
overflow: hidden;
border-radius: 0.75rem; /* 12px */
border: 1px solid rgba(228, 228, 231, 0.8);
background-color: #ffffff; /* White background behind image */
```

**Image Element** (Next.js Image component):
```css
width: 100%; /* Fill container */
height: auto; /* Maintain aspect ratio */
object-fit: contain; /* Scale to fit, maintain aspect */
```

**Supported images**:
- `/gripper-drawing.png` (engineering drawing)
- `/nozzle-drawing.png` (CAD drawing)
- Any PNG/JPG/WebP image

---

#### Spacer Element

```jsx
<div className="flex-1" />
```

**Purpose**: Pushes content to top of panel (if panel is taller than content)

```css
flex: 1 1 0%; /* Grows to fill available space */
```

---

### 4.4 Answer Panel (Right) - Complete Specifications

**Full JSX Structure**:
```jsx
<div className="flex flex-col overflow-hidden rounded-2xl border border-zinc-200/60 bg-white shadow-[0_8px_30px_-8px_rgba(77,62,240,0.12),0_2px_12px_-4px_rgba(0,0,0,0.06)] ring-1 ring-zinc-900/5">
  
  {/* Header */}
  <div className="border-b border-zinc-100/80 bg-gradient-to-b from-zinc-50/80 to-white px-8 py-4">
    <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
      Your answer
    </h3>
  </div>
  
  {/* Scrollable Answer Area */}
  <div className="flex-1 overflow-auto p-8">
    {/* Question-type-specific content */}
  </div>
  
</div>
```

---

#### Panel Container (Outer)

**Identical to question panel container** (same classes):
```css
display: flex;
flex-direction: column;
overflow: hidden;
border-radius: 1rem; /* 16px */
border: 1px solid rgba(228, 228, 231, 0.6);
background-color: #ffffff;
box-shadow: 
  0 8px 30px -8px rgba(77, 62, 240, 0.12),
  0 2px 12px -4px rgba(0, 0, 0, 0.06),
  0 0 0 1px rgba(24, 24, 27, 0.05);
```

---

#### Header Section

```css
border-bottom: 1px solid rgba(244, 244, 245, 0.8);
background-image: linear-gradient(to bottom, rgba(250, 250, 250, 0.8), #ffffff);
padding: 1rem 2rem; /* 16px top/bottom, 32px left/right */
```

**Header Text** ("YOUR ANSWER"):
```css
font-size: 0.875rem; /* 14px */
font-weight: 600;
text-transform: uppercase;
letter-spacing: 0.05em; /* 0.7px at 14px */
color: #71717a; /* zinc-500 */
```

---

#### Answer Content Area

**Scrollable Container**:
```css
flex: 1 1 0%; /* Fills remaining vertical space */
overflow: auto; /* Scrolls if content exceeds height */
padding: 2rem; /* 32px all sides */
```

**Scrollbar Styling** (if needed):
```css
/* WebKit browsers (Chrome, Safari, Edge) */
&::-webkit-scrollbar {
  width: 10px;
}

&::-webkit-scrollbar-track {
  background: transparent;
}

&::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.12);
  border-radius: 999px;
  border: 3px solid transparent;
  background-clip: content-box;
}

&::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.18);
  background-clip: content-box;
}
```

---

---

## 5. Question Types & Interactions (Complete Pixel-Perfect Specifications)

### 5.1 Multiple Choice Question (MCQ) - Exact Implementation

#### Complete JSX Structure
```jsx
<div className="space-y-6">
  
  {/* Options Section */}
  <div className="space-y-4">
    {question.options.map((opt, i) => (
      <label
        key={i}
        className="flex cursor-pointer items-center gap-4 rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm transition hover:border-zinc-300 hover:shadow-md has-[:checked]:border-corePurple has-[:checked]:bg-gradient-to-br has-[:checked]:from-softLavender/50 has-[:checked]:to-corePurple/5 has-[:checked]:shadow-[0_0_0_2px_rgba(77,62,240,0.2)]"
      >
        <input
          type="radio"
          name="answer"
          value={opt}
          checked={selectedOption === opt}
          onChange={() => setSelectedOption(opt)}
          className="h-5 w-5 border-zinc-300 text-corePurple focus:ring-corePurple"
        />
        <span className="text-[15px] text-zinc-800">{opt}</span>
      </label>
    ))}
  </div>
  
  {/* Rationale Section */}
  <div>
    <label className="mb-2 block text-sm font-medium text-zinc-700">
      Explain your reasoning
    </label>
    <textarea
      value={answer}
      onChange={(e) => setAnswer(e.target.value)}
      placeholder="Why did you choose this answer?"
      rows={4}
      className="w-full rounded-xl border border-zinc-200/80 bg-white px-4 py-3 text-[15px] leading-relaxed outline-none transition placeholder:text-zinc-400 focus:border-corePurple focus:shadow-[0_0_0_3px_rgba(77,62,240,0.12)]"
    />
  </div>
  
</div>
```

---

#### Options Container

```css
display: flex;
flex-direction: column;
gap: 1.5rem; /* 24px spacing between sections */
```

**Options List**:
```css
display: flex;
flex-direction: column;
gap: 1rem; /* 16px between each option */
```

---

#### Single Option Card

**Label Container** (default state):
```css
display: flex;
cursor: pointer;
align-items: center; /* Vertical center */
gap: 1rem; /* 16px between radio and text */
border-radius: 0.75rem; /* 12px */
border: 1px solid rgba(228, 228, 231, 0.8); /* zinc-200 at 80% */
background-color: #ffffff;
padding: 1.25rem; /* 20px all sides */
box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-sm */
transition: all 150ms;
```

**Hover State** (when not checked):
```css
&:hover {
  border-color: #d4d4d8; /* zinc-300 */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
}
```

**Checked State** (using `:has(:checked)` pseudo-class):
```css
&:has(input:checked) {
  border-color: #4d3ef0; /* corePurple solid border */
  background-image: linear-gradient(to bottom right, 
    rgba(232, 230, 252, 0.5),  /* softLavender at 50% */
    rgba(77, 62, 240, 0.05)    /* corePurple at 5% */
  );
  box-shadow: 0 0 0 2px rgba(77, 62, 240, 0.2); /* Purple ring around card */
}
```

**Visual Effect**: Selected option gets purple border + purple gradient background + purple outer ring

---

#### Radio Input Element

```css
height: 1.25rem; /* 20px */
width: 1.25rem; /* 20px */
border: 1px solid #d4d4d8; /* zinc-300 */
border-radius: 50%; /* Perfect circle */
accent-color: #4d3ef0; /* corePurple - checked state color */

/* Focus state */
&:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(77, 62, 240, 0.2); /* ring-corePurple */
}

/* Checked state (browser default with accent-color) */
&:checked {
  background-color: #4d3ef0;
  border-color: #4d3ef0;
}
```

**Note**: Browser renders native radio button with custom `accent-color`

---

#### Option Text

```css
font-size: 15px; /* Explicit value */
color: #27272a; /* zinc-800 */
line-height: 1.5; /* 22.5px */
```

**Example option texts**:
- "CNC-machined aluminum"
- "Sheet-metal steel fabrication"
- "Laser-cut acrylic sheets"
- "3D-printed prototype"

---

#### Rationale Section

**Label**:
```jsx
<label className="mb-2 block text-sm font-medium text-zinc-700">
  Explain your reasoning
</label>
```
```css
margin-bottom: 0.5rem; /* 8px */
display: block;
font-size: 0.875rem; /* 14px */
font-weight: 500;
color: #3f3f46; /* zinc-700 */
```

**Textarea**:
```jsx
<textarea
  value={answer}
  onChange={(e) => setAnswer(e.target.value)}
  placeholder="Why did you choose this answer?"
  rows={4}
  className="w-full rounded-xl border border-zinc-200/80 bg-white px-4 py-3 text-[15px] leading-relaxed outline-none transition placeholder:text-zinc-400 focus:border-corePurple focus:shadow-[0_0_0_3px_rgba(77,62,240,0.12)]"
/>
```

**Complete CSS**:
```css
width: 100%;
border-radius: 0.75rem; /* 12px */
border: 1px solid rgba(228, 228, 231, 0.8);
background-color: #ffffff;
padding: 0.75rem 1rem; /* 12px top/bottom, 16px left/right */
font-size: 15px;
line-height: 1.625; /* 24.375px */
outline: none; /* Remove default outline */
transition: all 150ms;
resize: vertical; /* Allow vertical resizing only */
min-height: calc(4 * 1.625em); /* rows={4} approximation */

/* Placeholder */
&::placeholder {
  color: #a1a1aa; /* zinc-400 */
}

/* Focus state */
&:focus {
  border-color: #4d3ef0; /* corePurple */
  box-shadow: 0 0 0 3px rgba(77, 62, 240, 0.12); /* Purple glow */
}
```

**Placeholder text**: "Why did you choose this answer?"

---

### 5.2 Long/Short Answer Question - Exact Implementation

**Full JSX**:
```jsx
<textarea
  value={answer}
  onChange={(e) => setAnswer(e.target.value)}
  placeholder="Type your answer here. Be as detailed as you like..."
  rows={16}
  className="min-h-[300px] w-full rounded-xl border border-zinc-200/80 bg-white px-5 py-4 text-[15px] leading-relaxed shadow-sm outline-none transition placeholder:text-zinc-400 focus:border-corePurple focus:shadow-[0_0_0_3px_rgba(77,62,240,0.12)] focus:ring-2 focus:ring-corePurple/20"
/>
```

**Complete CSS**:
```css
min-height: 300px; /* Explicit minimum */
width: 100%;
border-radius: 0.75rem; /* 12px */
border: 1px solid rgba(228, 228, 231, 0.8);
background-color: #ffffff;
padding: 1rem 1.25rem; /* 16px top/bottom, 20px left/right */
font-size: 15px;
line-height: 1.625; /* 24.375px */
box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
outline: none;
transition: all 150ms;
resize: vertical;

/* Placeholder */
&::placeholder {
  color: #a1a1aa; /* zinc-400 */
}

/* Focus state - double ring effect */
&:focus {
  border-color: #4d3ef0;
  box-shadow: 
    0 0 0 3px rgba(77, 62, 240, 0.12),  /* Outer purple glow */
    0 0 0 2px rgba(77, 62, 240, 0.2);   /* Inner purple ring */
}
```

**Differences from MCQ rationale**:
- Larger padding: `20px` vs `16px` horizontal
- Larger min-height: `300px` vs `~96px` (4 rows)
- Has `shadow-sm` by default
- Double ring on focus (additional `ring-2`)

---

### 5.3 Voice Recording Question - Complete Implementation

#### State Machine (4 states)

**State 1: Not Started**
**State 2: Countdown (45 seconds)**
**State 3: Recording (with animation)**
**State 4: Completed**

---

#### State 1: Not Started (Initial)

```jsx
<div className="flex flex-col items-center justify-center gap-6 rounded-xl border-2 border-dashed border-zinc-200 bg-zinc-50/50 p-10 min-h-[280px]">
  
  {/* Microphone Icon */}
  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-corePurple/10">
    <IconMic className="h-10 w-10 text-corePurple" />
  </div>
  
  {/* Instruction Text */}
  <div className="text-center">
    <p className="text-sm font-medium text-zinc-700">Record your voice response</p>
    <p className="mt-1 text-xs text-zinc-500">Click the button below to start</p>
  </div>
  
  {/* Start Button */}
  <button
    type="button"
    onClick={() => setShowVoiceIntroModal(true)}
    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-corePurple to-violet px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_-2px_rgba(77,62,240,0.4)] transition hover:brightness-105"
  >
    <IconMic className="h-5 w-5" />
    Start recording
  </button>
  
</div>
```

**Container (Dashed Border Empty State)**:
```css
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 1.5rem; /* 24px */
border-radius: 0.75rem; /* 12px */
border: 2px dashed #e4e4e7; /* zinc-200 */
background-color: rgba(250, 250, 250, 0.5); /* zinc-50 at 50% */
padding: 2.5rem; /* 40px */
min-height: 280px;
```

**Microphone Icon Circle**:
```css
display: flex;
height: 5rem; /* 80px */
width: 5rem; /* 80px */
align-items: center;
justify-content: center;
border-radius: 50%;
background-color: rgba(77, 62, 240, 0.1); /* corePurple at 10% */
```

**Mic Icon**:
```css
height: 2.5rem; /* 40px */
width: 2.5rem; /* 40px */
color: #4d3ef0; /* corePurple */
stroke-width: 2;
```

**Instruction Text Container**:
```css
text-align: center;
```

**Primary Text**:
```css
font-size: 0.875rem; /* 14px */
font-weight: 500;
color: #3f3f46; /* zinc-700 */
```
**Text**: "Record your voice response"

**Secondary Text**:
```css
margin-top: 0.25rem; /* 4px */
font-size: 0.75rem; /* 12px */
color: #71717a; /* zinc-500 */
```
**Text**: "Click the button below to start"

**Start Recording Button**:
```css
display: inline-flex;
align-items: center;
gap: 0.5rem; /* 8px */
border-radius: 0.75rem; /* 12px */
background-image: linear-gradient(to right, #4d3ef0, #594ce9);
padding: 0.75rem 1.5rem; /* 12px top/bottom, 24px left/right */
font-size: 0.875rem; /* 14px */
font-weight: 600;
color: #ffffff;
box-shadow: 0 4px 14px -2px rgba(77, 62, 240, 0.4);
transition: all 150ms;

&:hover {
  filter: brightness(1.05);
}
```

**Button Icon**:
```css
height: 1.25rem; /* 20px */
width: 1.25rem; /* 20px */
```

**Button Text**: "Start recording"

---

#### Voice Introduction Modal (Appears Before Recording)

```jsx
<div className="fixed inset-0 z-50 flex items-center justify-center p-4" aria-modal="true" role="dialog">
  
  {/* Backdrop */}
  <div
    className="fixed inset-0 bg-zinc-900/40 backdrop-blur-sm"
    onClick={() => setShowVoiceIntroModal(false)}
    aria-hidden="true"
  />
  
  {/* Modal Card */}
  <div className="relative w-full max-w-md rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.18)] sm:p-8">
    
    <div className="flex items-start gap-4">
      
      {/* Icon Box */}
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-corePurple/10">
        <IconMic className="h-6 w-6 text-corePurple" />
      </div>
      
      {/* Content */}
      <div>
        <h3 className="text-lg font-semibold text-zinc-900">Verbal question</h3>
        
        <p className="mt-2 text-[15px] leading-relaxed text-zinc-600">
          This is a verbal question. We want to understand your process and how you think through the problem. Once you click "Start question", you'll have up to 45 seconds to prepare—or begin recording right away if you're ready. Click "Stop recording" when you're finished.
        </p>
        
        {/* Action Buttons */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={() => { setShowVoiceIntroModal(false); setVoiceModalDismissed(true); }}
            className="rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => { setShowVoiceIntroModal(false); setVoiceRecordingStarted(true); setVoiceCountdown(45); }}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-corePurple to-violet px-4 py-2.5 text-sm font-semibold text-white shadow-[0_4px_14px_-2px_rgba(77,62,240,0.4)] transition hover:brightness-105"
          >
            <IconMic className="h-4 w-4" />
            Start question
          </button>
        </div>
      </div>
      
    </div>
  </div>
</div>
```

**Modal Specifications**:
- Max width: `28rem` (448px) - narrower than start test modal
- Same backdrop and positioning as start modal
- Same shadow and border styles

**Icon Box**:
```css
display: flex;
height: 3rem; /* 48px */
width: 3rem; /* 48px */
flex-shrink: 0;
align-items: center;
justify-content: center;
border-radius: 0.75rem; /* 12px - not circular */
background-color: rgba(77, 62, 240, 0.1);
```

**Icon**:
```css
height: 1.5rem; /* 24px */
width: 1.5rem; /* 24px */
color: #4d3ef0;
```

**Title**:
```css
font-size: 1.125rem; /* 18px */
font-weight: 600;
color: #18181b; /* zinc-900 */
```
**Text**: "Verbal question"

**Description**:
```css
margin-top: 0.5rem; /* 8px */
font-size: 15px;
line-height: 1.625; /* 24.375px */
color: #52525b; /* zinc-600 */
```
**Text**: "This is a verbal question. We want to understand your process and how you think through the problem. Once you click "Start question", you'll have up to 45 seconds to prepare—or begin recording right away if you're ready. Click "Stop recording" when you're finished."

**Button Container**:
```css
margin-top: 1.5rem; /* 24px */
display: flex;
justify-content: flex-end; /* Right-aligned */
gap: 0.75rem; /* 12px */
```

**Cancel Button**:
```css
border-radius: 0.75rem; /* 12px */
border: 1px solid #e4e4e7; /* zinc-200 */
background-color: #ffffff;
padding: 0.625rem 1rem; /* 10px top/bottom, 16px left/right */
font-size: 0.875rem; /* 14px */
font-weight: 600;
color: #3f3f46; /* zinc-700 */
transition: all 150ms;

&:hover {
  background-color: #fafafa; /* zinc-50 */
}
```

**Start Question Button**:
```css
display: inline-flex;
align-items: center;
gap: 0.5rem; /* 8px */
border-radius: 0.75rem; /* 12px */
background-image: linear-gradient(to right, #4d3ef0, #594ce9);
padding: 0.625rem 1rem; /* 10px top/bottom, 16px left/right */
font-size: 0.875rem; /* 14px */
font-weight: 600;
color: #ffffff;
box-shadow: 0 4px 14px -2px rgba(77, 62, 240, 0.4);
transition: all 150ms;

&:hover {
  filter: brightness(1.05);
}
```

**Icon in button**:
```css
height: 1rem; /* 16px */
width: 1rem; /* 16px */
```

---

#### State 2: Countdown (45 seconds preparation time)

```jsx
<div className="flex flex-col items-center gap-6">
  
  <p className="text-sm text-zinc-600">
    Take a moment to gather your thoughts. Recording will start automatically, or begin whenever you're ready.
  </p>
  
  <div className="flex items-center gap-3">
    <span className="text-2xl font-medium tabular-nums text-zinc-400">
      {voiceCountdown}s
    </span>
    <span className="text-sm text-zinc-400">to prepare</span>
  </div>
  
  <button
    type="button"
    onClick={() => setVoiceCountdown(0)}
    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-corePurple to-violet px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-105"
  >
    <IconMic className="h-4 w-4" />
    Start recording now
  </button>
  
</div>
```

**Container**:
```css
display: flex;
flex-direction: column;
align-items: center;
gap: 1.5rem; /* 24px */
```

**Instruction Text**:
```css
font-size: 0.875rem; /* 14px */
color: #52525b; /* zinc-600 */
text-align: center;
```

**Countdown Display Container**:
```css
display: flex;
align-items: center;
gap: 0.75rem; /* 12px */
```

**Countdown Number**:
```css
font-size: 1.5rem; /* 24px */
font-weight: 500;
font-variant-numeric: tabular-nums; /* Fixed-width numbers */
color: #a1a1aa; /* zinc-400 */
```
**Format**: `45s`, `44s`, `43s`, ... `1s`

**Countdown Label**:
```css
font-size: 0.875rem; /* 14px */
color: #a1a1aa; /* zinc-400 */
```
**Text**: "to prepare"

**Skip Button**:
```css
display: inline-flex;
align-items: center;
gap: 0.5rem; /* 8px */
border-radius: 0.75rem; /* 12px */
background-image: linear-gradient(to right, #4d3ef0, #594ce9);
padding: 0.625rem 1.25rem; /* 10px top/bottom, 20px left/right */
font-size: 0.875rem; /* 14px */
font-weight: 600;
color: #ffffff;
box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* Lighter shadow */
transition: all 150ms;

&:hover {
  filter: brightness(1.05);
}
```

---

#### State 3: Recording (Animated Waveform)

```jsx
<div className="flex flex-col items-center gap-6 w-full max-w-xs">
  
  {/* Waveform Visualization */}
  <div className="flex items-end justify-center gap-1.5 h-20">
    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
      <div
        key={i}
        className="w-2 rounded-full bg-gradient-to-t from-corePurple to-violet origin-bottom"
        style={{
          height: "32px",
          animation: "voicewave 0.5s ease-in-out infinite alternate",
          animationDelay: `${i * 0.06}s`,
        }}
      />
    ))}
  </div>
  
  {/* Recording Status */}
  <div className="flex flex-col items-center gap-4">
    
    {/* Recording Indicator */}
    <div className="flex items-center gap-2">
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500" />
      </span>
      <p className="text-sm font-medium text-zinc-700">Recording...</p>
    </div>
    
    {/* Stop Button */}
    <button
      type="button"
      onClick={() => setVoiceRecordingStopped(true)}
      className="inline-flex items-center gap-2 rounded-xl border-2 border-red-200 bg-red-50 px-5 py-2.5 text-sm font-semibold text-red-700 transition hover:bg-red-100"
    >
      Stop recording
    </button>
    
  </div>
  
</div>
```

**Main Container**:
```css
display: flex;
flex-direction: column;
align-items: center;
gap: 1.5rem; /* 24px */
width: 100%;
max-width: 20rem; /* 320px */
```

---

**Waveform Container**:
```css
display: flex;
align-items: flex-end; /* Align bars to bottom */
justify-content: center;
gap: 0.375rem; /* 6px between bars */
height: 5rem; /* 80px total height */
```

**Individual Wave Bar** (10 bars total):
```css
width: 0.5rem; /* 8px */
height: 32px; /* Default height (will animate) */
border-radius: 9999px; /* Fully rounded ends */
background-image: linear-gradient(to top, #4d3ef0, #594ce9);
transform-origin: bottom; /* Scale from bottom */
animation: voicewave 0.5s ease-in-out infinite alternate;
animation-delay: ${index * 0.06}s; /* 0s, 0.06s, 0.12s, ... 0.54s */
```

**Waveform Animation** (defined in globals.css):
```css
@keyframes voicewave {
  0%, 100% {
    transform: scaleY(0.25);  /* Shrink to 25% = 8px */
  }
  50% {
    transform: scaleY(1);     /* Full height = 32px */
  }
}
```

**Animation Properties**:
- Duration: `500ms` (0.5s)
- Timing: `ease-in-out`
- Iterations: `infinite`
- Direction: `alternate` (bounces back and forth)
- Delays: `0ms, 60ms, 120ms, 180ms, 240ms, 300ms, 360ms, 420ms, 480ms, 540ms`

**Visual effect**: Creates wave pattern moving left to right

---

**Recording Indicator Container**:
```css
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem; /* 16px */
```

**Status Container**:
```css
display: flex;
align-items: center;
gap: 0.5rem; /* 8px */
```

**Pulsing Dot** (double-layer animation):
```jsx
{/* Outer layer - pulsing */}
<span className="relative flex h-3 w-3">
  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
  <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500" />
</span>
```

**Outer Dot** (animated):
```css
position: absolute;
display: inline-flex;
height: 100%;
width: 100%;
border-radius: 50%;
background-color: #f87171; /* red-400 */
opacity: 0.75;
animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;

@keyframes ping {
  75%, 100% {
    transform: scale(2);  /* Grows to 200% */
    opacity: 0;           /* Fades out */
  }
}
```

**Inner Dot** (solid):
```css
position: relative;
display: inline-flex;
height: 0.75rem; /* 12px */
width: 0.75rem; /* 12px */
border-radius: 50%;
background-color: #ef4444; /* red-500 */
```

**Recording Text**:
```css
font-size: 0.875rem; /* 14px */
font-weight: 500;
color: #3f3f46; /* zinc-700 */
```
**Text**: "Recording..."

**Stop Recording Button**:
```css
display: inline-flex;
align-items: center;
gap: 0.5rem; /* 8px */
border-radius: 0.75rem; /* 12px */
border: 2px solid #fecaca; /* red-200 */
background-color: #fef2f2; /* red-50 */
padding: 0.625rem 1.25rem; /* 10px top/bottom, 20px left/right */
font-size: 0.875rem; /* 14px */
font-weight: 600;
color: #b91c1c; /* red-700 */
transition: all 150ms;

&:hover {
  background-color: #fee2e2; /* red-100 */
}
```

**Button Text**: "Stop recording"

---

#### State 4: Completed (Success Confirmation)

```jsx
<div className="flex flex-col items-center gap-6">
  
  {/* Success Checkmark */}
  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
    <svg className="h-8 w-8 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
  
  {/* Confirmation Text */}
  <p className="text-sm font-medium text-zinc-700">Recording saved</p>
  
</div>
```

**Container**:
```css
display: flex;
flex-direction: column;
align-items: center;
gap: 1.5rem; /* 24px */
```

**Success Circle**:
```css
display: flex;
height: 4rem; /* 64px */
width: 4rem; /* 64px */
align-items: center;
justify-content: center;
border-radius: 50%;
background-color: #d1fae5; /* emerald-100 */
```

**Checkmark Icon**:
```css
height: 2rem; /* 32px */
width: 2rem; /* 32px */
color: #059669; /* emerald-600 */
stroke-width: 2;
fill: none;
stroke: currentColor;
```

**Path**: `M5 13l4 4L19 7` (checkmark shape)

**Confirmation Text**:
```css
font-size: 0.875rem; /* 14px */
font-weight: 500;
color: #3f3f46; /* zinc-700 */
```
**Text**: "Recording saved"

---

### 5.4 Simulation Question - Complete Implementation

```jsx
<div className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50/80">
  
  <div className="flex flex-col items-center justify-center gap-4 p-12">
    
    {/* Icon */}
    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-zinc-200/60">
      <IconSimulation className="h-8 w-8 text-corePurple" />
    </div>
    
    {/* Control Grid */}
    <div className="grid grid-cols-3 gap-3">
      {["Up", "Down", "Left", "Right", "Rotate", "Snap"].map((label, i) => (
        <button
          key={i}
          type="button"
          className="rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 shadow-sm transition hover:bg-zinc-50 hover:border-corePurple/30"
        >
          {label}
        </button>
      ))}
    </div>
    
    <p className="text-xs text-zinc-500">Simulation controls — use to position the component</p>
    
    {/* Canvas/Preview Area */}
    <div className="h-32 w-full max-w-xs rounded-lg border-2 border-dashed border-zinc-200 bg-white/60" />
    
  </div>
  
</div>
```

**Outer Container**:
```css
overflow: hidden;
border-radius: 0.75rem; /* 12px */
border: 1px solid #e4e4e7; /* zinc-200 solid */
background-color: rgba(250, 250, 250, 0.8); /* zinc-50 at 80% */
```

**Content Container**:
```css
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 1rem; /* 16px */
padding: 3rem; /* 48px all sides */
```

**Icon Container**:
```css
display: flex;
height: 4rem; /* 64px */
width: 4rem; /* 64px */
align-items: center;
justify-content: center;
border-radius: 0.75rem; /* 12px - square with rounded corners */
background-color: #ffffff;
box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
box-shadow: 0 0 0 1px rgba(228, 228, 231, 0.6); /* ring */
```

**Simulation Icon**:
```css
height: 2rem; /* 32px */
width: 2rem; /* 32px */
color: #4d3ef0; /* corePurple */
stroke-width: 2;
```

**Control Buttons Grid**:
```css
display: grid;
grid-template-columns: repeat(3, minmax(0, 1fr)); /* 3 equal columns */
gap: 0.75rem; /* 12px */
```

**Individual Control Button**:
```css
border-radius: 0.5rem; /* 8px */
border: 1px solid #e4e4e7; /* zinc-200 */
background-color: #ffffff;
padding: 0.625rem 1rem; /* 10px top/bottom, 16px left/right */
font-size: 0.875rem; /* 14px */
font-weight: 500;
color: #3f3f46; /* zinc-700 */
box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
transition: all 150ms;

&:hover {
  background-color: #fafafa; /* zinc-50 */
  border-color: rgba(77, 62, 240, 0.3); /* corePurple at 30% */
}
```

**Button labels**: "Up", "Down", "Left", "Right", "Rotate", "Snap"

**Help Text**:
```css
font-size: 0.75rem; /* 12px */
color: #71717a; /* zinc-500 */
```
**Text**: "Simulation controls — use to position the component"

**Canvas Area** (placeholder):
```css
height: 8rem; /* 128px */
width: 100%;
max-width: 20rem; /* 320px */
border-radius: 0.5rem; /* 8px */
border: 2px dashed #e4e4e7; /* zinc-200 */
background-color: rgba(255, 255, 255, 0.6);
```

**Purpose**: Placeholder for actual simulation canvas (could be replaced with Canvas element or WebGL)

### 5.5 Onshape/CAD Question (Side Panel)

**Full-screen layout with embedded CAD tool**:
```jsx
<div className="relative h-screen overflow-hidden bg-[#e8e8e8]">
  {/* Full-screen backdrop: Onshape screenshot */}
  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/onshape-backdrop.png)" }} />
  
  {/* Right side panel - inset from top/bottom */}
  <div className="absolute right-0 top-20 bottom-12 flex w-[380px] flex-col overflow-hidden rounded-tl-lg border-l border-t border-zinc-300 bg-white shadow-[-8px_0_24px_rgba(0,0,0,0.12)]">
    {/* Colare Assessment Panel */}
  </div>
</div>
```

#### Panel Structure (Custom CSS Classes)
```css
/* In globals.css */
.colare-panel { /* Container */ }
.cp-header { /* Header with brand + timer */ }
.cp-brand { /* Logo + title */ }
.cp-logo { /* Purple gradient logo */ }
.cp-title { /* "Air Nozzle Design" */ }
.cp-meta { /* Timer + question counter pills */ }
.cp-pill { /* Rounded badge */ }
.cp-body { /* Scrollable content area */ }
.cp-section { /* Content cards */ }
.cp-h3 { /* Section headings */ }
.cp-p { /* Paragraphs */ }
.cp-bullets { /* Bulleted lists */ }
.cp-drawing { /* Image container */ }
.cp-footer { /* Bottom action buttons */ }
```

**Features**:
- Fixed 380px width panel
- Inset from screen edges
- Custom scrollbar styling
- Gradient logo with shadow
- Time remaining countdown
- Question number badge
- Scrollable body with sections
- Reference drawing with caption
- Footer with "Submit Document" button

---

## 6. Navigation & Progress

### 6.1 Timer System

**Implementation**:
```typescript
const [timeRemainingSeconds, setTimeRemainingSeconds] = React.useState<number | null>(null);

// Initialize from session storage or total duration
React.useEffect(() => {
  const totalSeconds = totalDurationMinutes * 60;
  const key = `preview-timer:${testId}`;
  const stored = typeof window !== "undefined" ? window.sessionStorage.getItem(key) : null;
  const initial = stored ? parseInt(stored, 10) : totalSeconds;
  setTimeRemainingSeconds(Math.max(0, initial));
}, [questionId, testId, totalDurationMinutes]);

// Countdown every second
React.useEffect(() => {
  if (!questionId || timeRemainingSeconds === null || timeRemainingSeconds <= 0) return;
  const key = `preview-timer:${testId}`;
  const t = setInterval(() => {
    setTimeRemainingSeconds((s) => {
      if (s === null || s <= 0) return 0;
      const next = Math.max(0, s - 1);
      if (typeof window !== "undefined") window.sessionStorage.setItem(key, String(next));
      return next;
    });
  }, 1000);
  return () => clearInterval(t);
}, [questionId, testId, timeRemainingSeconds]);
```

**Features**:
- Persists in session storage
- Counts down every second
- Displays as MM:SS
- Stops at 0

### 6.2 Question Navigation

**State management**:
```typescript
const allQuestionIds = ["mock-mcq-1", "mock-mcq-2", "mock-voice-1", "mock-sim-1"];
const currentIndex = questionId ? allQuestionIds.indexOf(questionId) : -1;
const prevQuestionId = currentIndex > 0 ? allQuestionIds[currentIndex - 1] : null;
const nextQuestionId = currentIndex >= 0 && currentIndex < allQuestionIds.length - 1 
  ? allQuestionIds[currentIndex + 1] 
  : null;
```

**Navigation logic**:
- Previous button: routes to `?question=${prevQuestionId}`, disabled if first
- Next button: routes to `?question=${nextQuestionId}` or back to preview if last
- Submit button: appears on last question

### 6.3 Progress Tracking

**Visual indicators**:
1. Question counter badge: "Question X of Y"
2. Progress bar (in Onshape panel): `{progress}% complete`
3. Time remaining

---

## 7. Component Library

### 7.1 Icon Components

All icons are inline SVG components with `React.SVGProps<SVGSVGElement>`:

```typescript
function IconChevronRight(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path d="M7.5 4.5 13 10l-5.5 5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
```

**Available icons**:
- `IconChevronRight`, `IconChevronLeft`
- `IconPlay`, `IconInfo`, `IconX`
- `IconMic`, `IconSimulation`, `IconClock`
- `IconMaximize`, `IconStickyNote`, `IconMessageCircle`
- `IconArrowLeft`, `IconCheck`, `IconList`, `IconSparkles`

### 7.2 Modal Pattern

**Reusable structure**:
```jsx
<div className="fixed inset-0 z-50 flex items-center justify-center p-4" aria-modal="true" role="dialog">
  {/* Backdrop */}
  <div className="fixed inset-0 bg-zinc-900/40 backdrop-blur-sm" onClick={handleClose} aria-hidden="true" />
  
  {/* Modal content */}
  <div className="relative w-full max-w-lg rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-[...] sm:p-8">
    {/* Header with close button */}
    <div className="flex items-start justify-between gap-4">
      <h2 className="font-fustat text-xl font-semibold">{title}</h2>
      <button onClick={handleClose} className="...">
        <IconX className="h-5 w-5" />
      </button>
    </div>
    
    {/* Body */}
    <div className="mt-6">
      {children}
    </div>
    
    {/* Footer actions */}
    <div className="mt-8 flex justify-end gap-3">
      {actions}
    </div>
  </div>
</div>
```

**Features**:
- Fixed positioning with z-index
- Click-outside-to-close backdrop
- Rounded corners, shadow, border
- Responsive padding
- Close button (X) in header
- Flexible content area

### 7.3 Card Component

**Standard card wrapper**:
```jsx
<div className="overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/90 shadow-[0_4px_24px_-4px_rgba(77,62,240,0.08),0_2px_8px_-2px_rgba(0,0,0,0.04)]">
  <div className="p-6 sm:p-7">
    {children}
  </div>
</div>
```

**Variants**:
- With gradient header: `bg-gradient-to-b from-zinc-50/80 to-white`
- With divider: `border-b border-zinc-100/80`
- Hover effect: `transition hover:shadow-xl`

### 7.4 Badge/Pill Component

```jsx
<span className="inline-block rounded-full bg-corePurple/12 px-3 py-1 text-xs font-semibold tracking-wide text-corePurple">
  {label}
</span>
```

**Variants**:
- Primary: `bg-corePurple/12 text-corePurple`
- Muted: `bg-zinc-100 text-zinc-600`
- Emerald (success): `bg-emerald-100 text-emerald-700`
- Red (error): `bg-red-100 text-red-700`

---

## 8. Data Models

### 8.1 Question Type
```typescript
type Question = {
  id: string;
  title: string;
  skill: string;
  type: "Multiple Choice" | "Short Answer" | "Long Answer" | "Voice" | "Simulation" | "Onshape";
  timeMinutes: number;
  description: string;
  options?: string[];          // For MCQ
  imageUrl?: string;           // Optional reference image
};
```

### 8.2 MCQ Scenario Type
```typescript
type McqOption = { 
  id: string; 
  label: string; 
  meta?: string;  // e.g. "High fidelity • Higher cost"
};

type McqConstraint = { 
  k: string;  // Key, e.g. "Timeline"
  v: string;  // Value, e.g. "6 days"
};

type McqScenario = {
  type: "mcq";
  id: string;
  title: string;
  skill: string;
  subtitle: string;
  description: string;
  constraints: McqConstraint[];
  imageUrl?: string;
  taskText: string;
  taskTimeMeta: string;         // e.g. "~2–4 minutes"
  taskEvalMeta: string;         // e.g. "Tradeoffs, iteration plan"
  optionPrompt: string;
  optionHint: string;
  options: McqOption[];
  rationalePlaceholder: string;
  rationaleHint: string;
  notePrompts: string[];
  badges?: string[];
};
```

### 8.3 Voice Scenario Type
```typescript
type VoiceScenario = {
  type: "voice";
  id: string;
  title: string;
  skill: string;
  subtitle: string;
  description: string;
  constraints: McqConstraint[];
  taskText: string;
  taskTimeMeta: string;
  taskEvalMeta: string;
  badges?: string[];
};
```

### 8.4 Onshape Scenario Type
```typescript
type OnshapeScenario = {
  type: "onshape";
  id: string;
  title: string;
  skill: string;
  subtitle: string;
  taskTitle: string;           // Panel header
  from: string;                // "From: Alex Reynolds"
  description: string;         // Multi-paragraph instructions
  imageUrl?: string;
  imageCaption?: string;       // e.g. "TOP VIEW • SCALE 1:1"
};
```

---

## 9. Technical Implementation

### 9.1 Dependencies
```json
{
  "next": "16.1.6",
  "react": "19.2.3",
  "react-dom": "19.2.3",
  "tailwindcss": "^4",
  "@tailwindcss/postcss": "^4"
}
```

### 9.2 Routing Structure
```
app/
├── (dashboard)/
│   └── tests/
│       └── [testId]/
│           └── preview/
│               ├── page.tsx           → Landing page
│               ├── workspace/
│               │   └── page.tsx       → Test-taking interface
│               └── thank-you/
│                   └── page.tsx       → Completion page
```

### 9.3 State Management

**Local state with React hooks**:
- `useState` for UI state
- `useEffect` for timers and lifecycle
- `useRouter` for navigation
- `useParams` for route params
- `useSearchParams` for query strings

**Persistence**:
- `sessionStorage` for timer (countdown persists on refresh)
- `localStorage` for test configuration (not shown in preview)

### 9.4 Key Styling Patterns

#### Gradient Backgrounds
```css
bg-gradient-to-b from-[#f8f6ff] via-[#fbfaff] to-[#f4f0ff]
bg-gradient-to-r from-corePurple to-violet
bg-gradient-to-br from-softLavender/50 to-corePurple/5
```

#### Shadow System
```css
/* Subtle card */
shadow-sm

/* Medium elevation */
shadow-[0_4px_24px_-4px_rgba(77,62,240,0.08),0_2px_8px_-2px_rgba(0,0,0,0.04)]

/* High elevation */
shadow-[0_8px_30px_-8px_rgba(77,62,240,0.12),0_2px_12px_-4px_rgba(0,0,0,0.06)]

/* Button shadows */
shadow-[0_4px_14px_-2px_rgba(77,62,240,0.45)]
shadow-[0_24px_48px_-12px_rgba(0,0,0,0.18)]  /* Modal */
```

#### Border Patterns
```css
border border-zinc-200/60          /* Standard card */
border-2 border-dashed border-zinc-200  /* Empty state */
border border-zinc-200/80 bg-white/90   /* Frosted card */
ring-1 ring-zinc-900/5              /* Subtle outer ring */
```

#### Focus States
```css
focus:border-corePurple
focus:shadow-[0_0_0_3px_rgba(77,62,240,0.12)]
focus:ring-2 focus:ring-corePurple/20
```

#### Transitions
```css
transition  /* Default: all 150ms */
transition hover:scale-105
transition hover:brightness-105
transition hover:shadow-xl
```

---

## 10. Checklist for Comparison

Use this checklist to compare your real frontend against this mockup:

### ✅ Design System
- [ ] Color palette matches (corePurple, violet, softLavender)
- [ ] Typography (Fustat for headings, DM Sans for body)
- [ ] Shadow system with purple tints
- [ ] Gradient backgrounds
- [ ] Button styles (primary gradient, secondary outline)

### ✅ Landing Page
- [ ] Info bar at top
- [ ] Two-column layout (welcome + video)
- [ ] Bullet list with gradient dots
- [ ] Video placeholder with play button
- [ ] Time estimate box
- [ ] Start test button with modal
- [ ] Terms checkbox requirement

### ✅ Test Workspace
- [ ] Sticky top navigation with timer
- [ ] Question counter badge
- [ ] Previous/Next navigation buttons
- [ ] Two-panel layout (question + answer)
- [ ] Gradient panel headers
- [ ] Skill badge on questions

### ✅ Question Types
- [ ] Multiple choice with gradient selection
- [ ] Rationale textarea
- [ ] Long answer textarea
- [ ] Voice recording interface:
  - [ ] Introduction modal
  - [ ] 45-second countdown
  - [ ] Animated waveform during recording
  - [ ] Stop recording button
- [ ] Simulation controls
- [ ] Onshape side panel integration

### ✅ Components
- [ ] Modal pattern (backdrop blur, close button)
- [ ] Card component with shadows
- [ ] Badge/pill component
- [ ] Icon library
- [ ] Responsive grid layouts

### ✅ Interactions
- [ ] Timer countdown with persistence
- [ ] Question navigation (prev/next)
- [ ] Answer state management
- [ ] Modal open/close
- [ ] Voice recording states
- [ ] Form submissions

---

## 11. Assets Required

### Images
- `/gripper-drawing.png` (engineering drawing)
- `/nozzle-drawing.png` (CAD drawing)
- `/onshape-backdrop.png` (CAD software screenshot)

### Fonts
- **Fustat** (headings)
- **DM Sans** (body text)

---

## Summary

This mockup represents a **high-fidelity, production-ready assessment interface** with:

1. **Premium design**: Purple gradient brand, sophisticated shadows, smooth animations
2. **Multiple question types**: MCQ, text, voice, simulation, CAD integration
3. **Rich interactions**: Timers, modals, state persistence, navigation
4. **Responsive layout**: Mobile-first, adapts to desktop
5. **Accessibility**: ARIA labels, keyboard support, focus states

**Key differentiators**:
- Voice recording with animated waveform
- Onshape/CAD integration with side panel
- Gradient selection states on MCQ options
- Frosted glass effects and backdrop blur
- Purple-tinted shadows throughout

Use this document to **gap-analyze your current frontend** and identify which features need to be built, modified, or removed.
