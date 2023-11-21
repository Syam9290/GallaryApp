// Write your code here

import './index.css'

const TabItem = props => {
  const {tabItem, getTabItems, isActiveTab} = props
  const {displayText, tabId} = tabItem

  const active = isActiveTab ? 'tabItem' : ''

  const getTabItem = () => {
    getTabItems(tabId)
  }

  return (
    <>
      <button className="tabBtn" type="button" onClick={getTabItem}>
        <li className={active}>{displayText}</li>
      </button>
    </>
  )
}

export default TabItem
