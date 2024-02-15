'use client';

import { deleteTask } from '../../utils/actions';
import { useFormStatus } from 'react-dom';

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} type='submit' className='btn btn-xs btn-error'>
      {pending ? 'Deleting' : 'Delete'}
    </button>
  );
};

export default function DeleteForm({ id }: { id: string }) {
  return (
    <form action={deleteTask}>
      <SubmitButton />
      <input type='hidden' name='id' value={id} />
    </form>
  );
}
