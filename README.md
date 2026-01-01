# @aerilym/info-dialog

A simple headless project info dialog component for React. Bring your own UI components (designed for shadcn/ui).

## Installation

```bash
npm install @aerilym/info-dialog
```

## Usage

Pass your own Button and Dialog components as props:

```tsx
import { InfoDialog } from '@aerilym/info-dialog'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'

export function AppInfoModal() {
  return (
    <InfoModal
      options={{
        title: "My Cool Project",
        description: "A thing i built",
        sourceUrl: "https://github.com/aerilym",
        donateUrl: "https://donate.aerilym.com",
        links: [{ label: "docs", url: "https://aerilym.com" }],
      }}
      components={{
        Button,
        Dialog,
        DialogContent,
        DialogHeader,
        DialogTitle,
        DialogTrigger,
        DialogDescription,
        DialogFooter,
     }}
    />
  )
}
```

## Why pass components as props?

This approach means:

- Zero styling dependencies - use your existing design system
- Works with any component library (shadcn, Radix, custom, etc.)
- No CSS conflicts or overrides needed
- Tiny bundle size

