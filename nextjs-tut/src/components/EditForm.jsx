import { editTask } from '../../utils/actions';

export default function EditForm({ task }) {
  const { id, completed, content } = task;
  return (
    <div>
      <form
        className='max-w-sm p-12 border border-base-300 rounded-lg'
        action={editTask}
      >
        <input type='hidden' value={id} name='id' />
        <input
          type='text'
          defaultValue={content}
          required
          name='content'
          className='input input-border w-full'
        />
        <div className='form-control'>
          <label htmlFor='completed' className='label cursor-pointer'>
            <span className='label-text'>Completed</span>
            <input
              type='checkbox'
              defaultChecked={completed}
              name='completed'
              id='completed'
              className='checkbox checkbox-primary checkbox-sm'
            />
          </label>
        </div>
        <button className='btn btn-primary btn-block btn-small'>
          Edit Task
        </button>
      </form>
    </div>
  );
}
