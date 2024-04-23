// https://www.jacobparis.com/content/react-as-child.

import { clsx } from 'clsx';
import { Children, cloneElement, isValidElement } from 'react';

export type AsChildProps<DefaultElementProps> =
  | ({ asChild?: false } & DefaultElementProps)
  | { asChild: true; children: React.ReactNode };

export function Slot({
  children,
  ...props
}: React.HTMLAttributes<HTMLElement> & {
  // className?: string;
  children?: React.ReactNode;
}) {
  if (isValidElement(children)) {
    return cloneElement(children, {
      ...props,
      ...children.props,
      style: {
        ...props.style,
        ...children.props.style,
      },
      className: clsx(props.className, children.props.className),
    });
  }

  if (Children.count(children) > 1) {
    Children.only(null);
  }

  return null;
}
