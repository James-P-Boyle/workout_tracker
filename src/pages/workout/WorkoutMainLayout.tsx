interface WorkoutMainLayoutProps {
  children: React.ReactNode,
  tabButtons: React.ReactNode
}
export default function WorkoutMainLayout({ children, tabButtons }:WorkoutMainLayoutProps) {
  return (
    <section className="grid w-full h-full p-4">
      <div className="flex flex-col p-2 rounded-lg dark:border dark:border-gray-700">
        <div className="flex flex-row gap-2">
          {tabButtons}
        </div>
        <div className="flex items-center justify-center flex-1">
          {children}
        </div>
      </div>
    </section>
  );
}