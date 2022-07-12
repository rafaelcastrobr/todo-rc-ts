import * as C from './ListItem.styles'
import { Item } from '../../types/Item'
import { KeyboardEvent, useState } from 'react'

type Props = {
  item: Item
}

export const ListItem = ({ item }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done)

  const handleIsChecked = (e: any) => {
    item.done = e.target.checked
  }

  return (
    <C.Container done={isChecked}>
      <input type="checkbox" checked={isChecked} onChange={e => setIsChecked(e.target.checked)} onClick={e => handleIsChecked(e)}/>
      <label>{item.name} - {item.done.toString()}</label>
    </C.Container>
  )
}