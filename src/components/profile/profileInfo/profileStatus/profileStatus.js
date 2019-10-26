import React, {useState, useEffect} from 'react';

const ProfileStatus = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status)
  }, [props.status]);

  const activeEditMode = () => {
    setEditMode(true);
  };

  const deactiveEditMode = () => {
    setEditMode(false);
    props.updateStatus(status)
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };


  return (
    <div>
      {!editMode &&
      <div>
        <span onDoubleClick={activeEditMode}>{props.status || "Статус не указан"}</span>
      </div>
      }
      {editMode &&
      <div>
        <input
          onChange={onStatusChange}
          autoFocus={true}
          onBlur={deactiveEditMode}
          value={status}
        />
      </div>
      }
    </div>
  )
};

export default ProfileStatus;