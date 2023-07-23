import Sidebar from "@/app/components/Dashboard/Sidebar/Sidebar";
import TaskList from "@/app/components/Dashboard/TaskList";

interface IProps {
  name: string;
  image: string;
}

export default function Dashboard({name, image}: IProps) {


  return (
    <div className="container mx-auto flex max-w-[1400px] w-full h-[700px] bg-secondarycolor rounded-[50px]">
        <div className="flex flex-col w-[500px]">
            <Sidebar name={name} image={image}/>
        </div>
<div className="flex flex-col w-full">
      <div className="px-10 w-full h-full">
            {/* @ts-expect-error Server Component */}
        <TaskList />
      </div>
</div>
    </div>
  );
}
