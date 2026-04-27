'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import { XIcon } from 'lucide-react'
import { Dialog as DialogPrimitive } from 'radix-ui'
import type * as React from 'react'

import { cn } from '@/lib/utils'

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

const dialogOverlayVariants = cva(
  'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 data-[state=closed]:animate-out data-[state=open]:animate-in',
  {
    variants: {
      variant: {
        default: 'bg-black/50',
        blurred: 'bg-black/40 backdrop-blur-[2px]',
        dark: 'bg-black/60',
        light: 'bg-black/30',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

function DialogOverlay({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay> &
  VariantProps<typeof dialogOverlayVariants>) {
  return (
    <DialogPrimitive.Overlay
      className={cn(dialogOverlayVariants({ variant }), className)}
      data-slot="dialog-overlay"
      {...props}
    />
  )
}

const dialogContentVariants = cva(
  'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 p-6 shadow-lg duration-200 data-[state=closed]:animate-out data-[state=open]:animate-in',
  {
    variants: {
      variant: {
        default:
          'max-w-[calc(100%-2rem)] rounded-lg border bg-background sm:max-w-lg',
        appointment:
          'max-h-[90vh] max-w-[calc(100%-2rem)] overflow-y-auto rounded-lg border-none bg-background-tertiary sm:max-w-[477px]',
        large:
          'max-w-[calc(100%-2rem)] rounded-lg border bg-background sm:max-w-2xl',
        fullscreen:
          'max-h-[calc(100%-1rem)] max-w-[calc(100%-1rem)] overflow-y-auto rounded-lg border bg-background sm:max-h-[90vh] sm:max-w-4xl',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

function DialogContent({
  className,
  children,
  showCloseButton = true,
  variant,
  overlayVariant,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> &
  VariantProps<typeof dialogContentVariants> & {
    showCloseButton?: boolean
    overlayVariant?: VariantProps<typeof dialogOverlayVariants>['variant']
  }) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay variant={overlayVariant} />
      <DialogPrimitive.Content
        className={cn(dialogContentVariants({ variant }), className)}
        data-slot="dialog-content"
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            className="absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0"
            data-slot="dialog-close"
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

const dialogHeaderVariants = cva('flex flex-col gap-2', {
  variants: {
    align: {
      left: 'text-left',
      center: '!text-center !sm:text-left',
      right: 'text-right',
    },
  },
  defaultVariants: {
    align: 'center',
  },
})

function DialogHeader({
  className,
  align,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof dialogHeaderVariants>) {
  return (
    <div
      className={cn(dialogHeaderVariants({ align }), className)}
      data-slot="dialog-header"
      {...props}
    />
  )
}

function DialogFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
        className
      )}
      data-slot="dialog-footer"
      {...props}
    />
  )
}

const dialogTitleVariants = cva('font-semibold leading-none', {
  variants: {
    size: {
      sm: 'text-base',
      default: 'text-lg',
      lg: 'text-xl',
      xl: 'text-2xl',
      modal: '!text-content-primary !text-title-modal',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

function DialogTitle({
  className,
  size,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title> &
  VariantProps<typeof dialogTitleVariants>) {
  return (
    <DialogPrimitive.Title
      className={cn(dialogTitleVariants({ size }), className)}
      data-slot="dialog-title"
      {...props}
    />
  )
}

const dialogDescriptionVariants = cva('text-muted-foreground', {
  variants: {
    size: {
      sm: 'text-xs',
      default: 'text-sm',
      lg: 'text-base',
      modal: '!text-content-secondary text-paragraph-medium',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

function DialogDescription({
  className,
  size,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description> &
  VariantProps<typeof dialogDescriptionVariants>) {
  return (
    <DialogPrimitive.Description
      className={cn(dialogDescriptionVariants({ size }), className)}
      data-slot="dialog-description"
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  dialogContentVariants,
  dialogDescriptionVariants,
  dialogHeaderVariants,
  dialogOverlayVariants,
  dialogTitleVariants,
}
