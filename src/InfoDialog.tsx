import { Info } from 'lucide-react';
import { InfoDialogContent } from './InfoDialogContent';
import { InfoDialogTrigger } from './InfoModalTrigger';
import type { InfoDialogComponents, InfoDialogOptions } from './types';

export type InfoDialogProps = {
  components: InfoDialogComponents;
  options?: InfoDialogOptions;
};

export function InfoDialog({ components, options }: InfoDialogProps) {
  const { Dialog } = components;
  return (
    <Dialog>
      <InfoDialogTrigger components={components}>
        {options?.triggerChildren ?? <Info />}
      </InfoDialogTrigger>
      <InfoDialogContent components={components} options={options} />
    </Dialog>
  );
}
