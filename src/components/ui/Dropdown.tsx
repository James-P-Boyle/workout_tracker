import { createContext, useContext, useState, Fragment } from "react"
import { Link, LinkProps } from "react-router-dom"

interface DropdownProps {
  children: React.ReactNode
}

interface DropDownContextType {
  open?: boolean
  setOpen?: (open: boolean) => void
  toggleOpen: () => void
}

const DropDownContext = createContext<DropDownContextType | null>(null)

const Dropdown = ({children}: DropdownProps) => {

  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen((prevState) => !prevState)
  }

  return (
    <DropDownContext.Provider value={{ open, setOpen, toggleOpen }}>
      <div className="relative">{children}</div>
    </DropDownContext.Provider>
  )
}

const Trigger = ({ children }: DropdownProps) => {

  const {open, setOpen, toggleOpen } = useContext(DropDownContext) as DropDownContextType

  return (
    <>
      <div 
        className="text-sm hover:cursor-pointer"
        onClick={toggleOpen}
      >
        {children}
      </div>
      {/* Close when user clicks anywhere else, covers full window */}
      {open && 
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setOpen && setOpen(false)}
        ></div>
      }
    </>
  )
}

const Content = ({
  contentClasses = 'bg-white',
  children
}: {
  contentClasses?: string
  children: React.ReactNode
}) => {

  const { open, setOpen } = useContext(DropDownContext) as DropDownContextType

  return (
    <div
      className={`absolute w-full z-50 border p-2 space-y-2 rounded-md shadow-lg left-0`}
      onClick={() => setOpen && setOpen(false)}
    >
      <div className={`rounded-md space-y-2 ` + contentClasses}>
        {children}
      </div>
    </div>
  )
}

const DropdownLink = ({
  className = '',
  children,
  ...props
}: React.PropsWithChildren<LinkProps>) => {
  return (
    <Link
      {...props}
      className={
        'block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out ' +
        className
      }
    >
      {children}
    </Link>
  )
}

Dropdown.Trigger = Trigger
Dropdown.Content = Content
Dropdown.Link = DropdownLink

export default Dropdown