import Key from './Key.tsx'

type Props = {
  shortcut: Shortcut
}

const Shortcut = ({ shortcut }: Props) => {
  const { label, keys } = shortcut

  return (
    <li class="shortcut">
      <p class="shortcut__label">{label}</p>
      <div class="keys">
        {keys.map((k: any, index) => (
          <>
            {index > 0 && <p class="spacer">+</p>}
            <Key>{k}</Key>
          </>
        ))}
      </div>
    </li>
  )
}

export default Shortcut
