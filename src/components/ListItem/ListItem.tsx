import * as C from './ListItemStyle'
import { Item } from '../../types/Item'

type Props = {
  item: Item
}

export const ListItem = ({ item}: Props) => {
  return (
    <C.Container>
      {item.name}
    </C.Container>
  )
}