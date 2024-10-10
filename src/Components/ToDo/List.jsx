/* eslint-disable react/prop-types */
function List(props) {
  const { item, onDelete, onEdit } = props;

  return (
    <div className="lists">
      <ul>
        {item.map((item) => {
          return (
            <li className="item-list" key={item.id}>
              <span>
                <span className="item">{item.task}</span>
              </span>
              <span className="delete-button" onClick={() => onDelete(item.id)}>
                Delete
              </span>
              <span className="edit-button" onClick={() => onEdit(item.id)}>
                Edit
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
