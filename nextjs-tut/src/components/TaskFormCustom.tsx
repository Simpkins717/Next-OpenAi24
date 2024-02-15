'use client';
import { useFormStatus, useFormState } from 'react-dom';
import { createTaskCustom } from '../../utils/actions';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type='submit'
      className='btn btn-primary join-item'
    >
      {pending ? 'Please Wait...' : 'Create Task'}
    </button>
  );
};

const initialState = {
  message: null,
};
export default function TaskForm() {
  const [state, formAction] = useFormState(createTaskCustom, initialState);
  useEffect(() => {
    if (!state.message) {
      return;
    }
    if (state.message === 'success') {
      toast.success('success');
    } else if (state.message !== 'success') {
      toast.error(state.message);
    }
  }, [state]);
  return (
    <form action={formAction}>
      <div className='join w-full'>
        <input
          type='text'
          className='input input-bordered join-item w-full'
          placeholder='type here'
          name='content'
          required
        />
        <SubmitButton />
      </div>
    </form>
  );
}
