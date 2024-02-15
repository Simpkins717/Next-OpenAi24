import DeleteForm from './DeleteForm';
import Link from 'next/link';
import { getAllTasks } from '../../utils/actions';

export default async function TaskList() {
  interface Task {
    content: string;
    id: string;
    createdAt: Date;
    completed: boolean;
  }
  const tasks = await getAllTasks();
  if (tasks.length === 0) {
    return <h2 className='mt-8 font-medium text-lg'>There are no tasks!</h2>;
  }
  const renderedTasks = tasks.map((task: Task) => {
    return (
      <li
        key={task.id}
        className='flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg'
      >
        <h2
          className={`text-lg capitalize ${
            task.completed ? 'line-through' : ''
          }`}
        >
          {task.content}
        </h2>
        <div className='flex gap-6 items-center'>
          <Link href={`/tasks/${task.id}`} className='btn btn-accent btn-xs'>
            edit
          </Link>
          <DeleteForm id={task.id} />
        </div>
      </li>
    );
  });
  return <ul className='mt-8'>{renderedTasks}</ul>;
}
