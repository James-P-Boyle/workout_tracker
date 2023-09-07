import { RefObject } from "react"

function useScroll() {
  const scrollToRef = (
    ref: RefObject<HTMLElement>,
    options: ScrollIntoViewOptions | ScrollToOptions = { behavior: 'smooth', top: 10 }
  ) => {
    if (ref.current) {
      ref.current.scrollIntoView(options)
    }
  }

  return { scrollToRef }
}

export default useScroll