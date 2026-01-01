
import { DEFAULT_CREATED_BY_NAME, DEFAULT_WEBSITE_URL } from "./defaults";
import type { InfoDialogComponents, InfoDialogOptions } from "./types";

export type CreateByTextProps = {
  components: InfoDialogComponents;
  options?: InfoDialogOptions;
}

export function CreatedByText({ options }: CreateByTextProps) {
  const name = options?.createdByName ?? DEFAULT_CREATED_BY_NAME;
  const link = options?.createdByNameLink ?? DEFAULT_WEBSITE_URL;
  return <span style={{ fontSize: '12px', alignContent: 'center' }}>Created by {options?.createdByName && !options.createdByNameLink ? name : <a href={link}
    target="_blank"
    rel="noopener noreferrer"
  >{name}</a>}</span>
}
