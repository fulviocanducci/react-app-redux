import React, { memo, useRef, useState } from 'react';
import uniqid from 'uniqid';
import useSelectorTodos from '../../selectors/useSelectorTodos';
import Header from '../Header';

function Todos() {
  const refName = useRef();
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [values, handleAdd, handleUpdate, handleDelete] = useSelectorTodos();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0) {
      alert('Write name');
      refName.current.focus();
    } else {
      if (id === 0) {
        handleAdd({ id: uniqid() + 1, name });
      } else {
        handleUpdate({ id, name });
      }
      setId(0);
      setName('');
    }
  };
  const handleCancel = () => {
    setId(0);
    setName('');
  };
  const handleEdit = (e, payload) => {
    const { id, name } = payload;
    setId(id);
    setName(name);
    refName.current.focus();
  };
  const handleRemove = (e, payload) => {
    handleDelete(payload);
    setId(0);
    setName('');
  };
  return (
    <div>
      <Header title="Todos" />
      <form onSubmit={handleSubmit}>
        <input type="hidden" value={id} />
        <div className="form-group">
          <input
            placeholder="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            ref={refName}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary mb-3 mr-3">{id === 0 ? 'Add' : 'Salve'}</button>
        {id !== 0 && (
          <button type="button" onClick={handleCancel} className="btn btn-danger mb-3">
            Cancel
          </button>
        )}
      </form>
      <ul className="list-group">
        {values.map((item, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {item.name}{' '}
            <span className="badge badge-pill">
              <button
                type="button"
                onClick={(e) => handleEdit(e, item)}
                className="btn btn-info mr-3"
                disabled={id !== 0}
              >
                Edit
              </button>
              <button
                type="button"
                onClick={(e) => handleRemove(e, item)}
                className="btn btn-danger"
                disabled={id !== 0}
              >
                Remove
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default memo(Todos);
