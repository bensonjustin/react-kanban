import React from 'react';
import styles from './addNew.module.scss';
const AddNew = ({ active, set }) => {
  return (
    <>
      {active ? (
        <div className={styles.addNew}>
          <form action="/" method="post">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" />
            <label htmlFor="body">Body</label>
            <input type="text" name="body" id="body" />
            <label htmlFor="priority">Priority</label>
            <input type="text" name="priority" id="priority" />
            <label htmlFor="status">Status</label>
            <input type="text" name="status" id="status" />
            <label htmlFor="created_by">Created by</label>
            <input type="text" name="created_by" id="created_by" />
            <label htmlFor="assigned_to">Assigned to</label>
            <input type="text" name="assigned_to" id="assigned_to" />
            <button>Submit</button>
          </form>
          <button onClick={() => set(!active)}>close</button>
        </div>
      ) : null}
    </>
  );
};
export default AddNew;
