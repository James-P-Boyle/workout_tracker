import { Outlet } from "react-router-dom"

type MainLayoutProps = {
    children: React.ReactNode
}
 
export default function MainLayout({ children }: MainLayoutProps) {

    return (
      <div className="grid lg:grid-cols-[25%_1fr] h-screen sm:h-auto">

        <section className="h-screen sm:h-auto p-4">

          {children}

        </section>
                
        <section className="flex items-center h-screen">

          <Outlet context={{hello: "world"}}/>

        </section>
      </div>
    )
}