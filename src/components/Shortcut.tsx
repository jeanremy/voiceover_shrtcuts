import Key from './Key.tsx'

type Props = {
  shortcut: Shortcut
}

const Shortcut = ({ shortcut }: Props) => {
  const { label, keys } = shortcut

  return (
    <li class="shortcut">
      <p class="shortcut__label">{label}</p>
      <kbd class="keys">
        {keys.map((k: any, index) => (
          <>
            {index > 0 && <span class="spacer">+</span>}
            <Key>{k}</Key>
          </>
        ))}
      </kbd>
    </li>
  )
}

export default Shortcut
