import './index.css'

const TodoItem = props => {
  const {deleteUser, titleDetails} = props
  const {title, id} = titleDetails

  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="item-cont">
      <p className="title">{title}</p>
      <button type="button" onClick={onDelete} className="btn">
        Delete
      </button>
    </li>
  )
}
export default TodoItem
