import { Anchor } from './Anchor';
import { CreatedByText } from './CreatedByText';
import { DEFAULT_SOURCE_URL } from './defaults';
import { DonateButton } from './DonateButton';
import type { InfoDialogComponents, InfoDialogOptions } from './types'

export type InfoDialogContentProps = {
  components: InfoDialogComponents;
  options?: InfoDialogOptions
}

export function InfoDialogContent({
  components,
  options
}: InfoDialogContentProps) {
  const { DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription, DialogFooter } = components;

  const {
    title,
    description,
    sourceUrl = DEFAULT_SOURCE_URL,
    links = [], } = options ?? {};

  const allLinks = [
    { label: 'Source Code', url: sourceUrl },
    ...links,
  ]

  const DescriptionComp = DialogDescription ?? 'p';

  return (<DialogContent>
    <DialogHeader>
      {title ? <DialogTitle>{title}</DialogTitle> : null}
      {description ? (
        <DescriptionComp>{description}</DescriptionComp>
      ) : null}
    </DialogHeader>
    {allLinks.length ? (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {allLinks.map((link) => (
          <Anchor
            key={link.url}
            url={link.url}
          >
            {link.label}
          </Anchor>
        ))}
      </div>
    ) : null}
    <DialogFooter style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
      <CreatedByText components={components} options={options} />
      <DonateButton components={components} options={options} />
    </DialogFooter>
  </DialogContent>)
}
