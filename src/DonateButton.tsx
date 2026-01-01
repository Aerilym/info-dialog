import { HandHeart } from "lucide-react";
import { Anchor } from "./Anchor";
import { DEFAULT_DONATE_BUTTON_TEXT, DEFAULT_DONATE_URL } from "./defaults";
import { InfoDialogComponents, InfoDialogOptions } from "./types"

export type DonateButtonProps = {
  components: InfoDialogComponents
  options?: InfoDialogOptions
}

export function DonateButton({ components, options }: DonateButtonProps) {
  const { Button } = components;
  const { donateUrl = DEFAULT_DONATE_URL, donateButtonText = DEFAULT_DONATE_BUTTON_TEXT } = options ?? {};
  return <Anchor url={donateUrl}><Button> <HandHeart /> {donateButtonText}</Button></Anchor>
}
