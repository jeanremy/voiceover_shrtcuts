import { default as ShortcutComponent } from './Shortcut.tsx'
import shortcuts from '../content/shortcuts.json'

import { useStore } from '@nanostores/preact'

import { search } from '../stores/search'

const SearchResults = () => {
  const s = useStore(search)

  const list = s
    ? shortcuts.filter((sh) => sh.label.toLocaleLowerCase().includes(s))
    : shortcuts

  return (
    <>
      {list.map((shrtct) => (
        <ShortcutComponent shortcut={shrtct} />
      ))}
    </>
  )
}

export default SearchResults
