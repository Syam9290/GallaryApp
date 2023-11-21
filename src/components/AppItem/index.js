// Write your code here

import './index.css'

const AppItem = props => {
  const {items} = props
  const {appName, imageUrl} = items
  return (
    <li className="appContainer">
      <img src={imageUrl} alt={appName} className="appIcon" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
