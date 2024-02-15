import prisma from '../../../utils/db';

const prismaHandlers = async () => {
  console.log('prisma example running');
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return allTasks;
};

export default async function PrismaExample() {
  interface Task {
    id: string;
    content: String;
    createdAt: Date;
    completed: Boolean;
  }
  const tasks = await prismaHandlers();
  if (tasks.length === 0) {
    return <h2 className='mt-8 font-medium text-lg'>There are no tasks!</h2>;
  }
  const renderedTasks = tasks.map((task: Task) => {
    return (
      <div key={task.id} className='text-xl py-12'>
        {task.content}
      </div>
    );
  });
  return (
    <div>
      Prisma Example
      <div>{renderedTasks}</div>
    </div>
  );
}
