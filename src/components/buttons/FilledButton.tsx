import ButtonBase from './ButtonBase';

type Props = React.ComponentProps<typeof ButtonBase> & {
  theme: 'dark' | 'light';
};

export default function FilledButton({ theme, ...rest }: Props) {
  return (
    <ButtonBase
      css={{
        backgroundColor: theme === 'dark' ? 'chocolate' : 'beige',
        height: 100,
      }}
      {...rest}
    />
  );
}
