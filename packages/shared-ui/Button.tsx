import React from 'react'

type Props = {
  onClick: () => void
}

export function Button({ onClick, children }:  React.ComponentPropsWithChildren<Props>) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}
