import keyLabels from '../content/keyLabels.json'

const displayTitle = function (key: keyof keyLabels) {
  return keyLabels[key] || key
}

const Key = (props) => {
  return (
    <kbd class="key" title={displayTitle(props.children)}>
      {props.children}
    </kbd>
  )
}

export default Key
