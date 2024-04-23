import { AsChildProps, Slot } from '../shared/Slot';

type Props = AsChildProps<React.ComponentProps<'button'>> & {
  className?: string;
  disabled?: boolean;
};

export default function ButtonBase({ asChild, ...rest }: Props) {
  if (asChild) {
    return <Slot {...rest} />;
  }

  return <button type="button" {...rest} />;
}
