export type ButtonComponentType = React.ComponentType<
  React.HTMLAttributes<HTMLButtonElement>
>;
export type DialogComponentType = React.ComponentType<{
  children: React.ReactNode;
}>;
export type DialogTriggerComponentType = React.ComponentType<
  React.HTMLAttributes<HTMLButtonElement>
>;
export type DialogContentComponentType = React.ComponentType<{
  children: React.ReactNode;
}>;
export type DialogHeaderComponentType = React.ComponentType<{
  children: React.ReactNode;
}>;
export type DialogTitleComponentType = React.ComponentType<{
  children: React.ReactNode;
}>;
export type DialogDescriptionComponentType = React.ComponentType<{
  children: React.ReactNode;
}>;
export type DialogFooterComponentType = React.ComponentType<
  React.HTMLAttributes<HTMLDivElement>
>;

export type InfoDialogComponents = {
  Button: ButtonComponentType;
  Dialog: DialogComponentType;
  DialogTrigger: DialogTriggerComponentType;
  DialogContent: DialogContentComponentType;
  DialogHeader: DialogHeaderComponentType;
  DialogTitle: DialogTitleComponentType;
  DialogDescription?: DialogDescriptionComponentType;
  DialogFooter: DialogFooterComponentType;
};

export type InfoDialogOptions = {
  title?: string;
  description?: string;
  sourceUrl?: string;
  donateUrl?: string;
  links?: { label: string; url: string }[];
  triggerChildren?: React.ReactNode;
  createdByName?: string;
  createdByNameLink?: string;
  donateButtonText?: string;
  hideDonateButton?: boolean;
};
