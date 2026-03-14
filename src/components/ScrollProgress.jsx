import { useEffect, useState } from "react"

function ScrollProgress() {

  const [scroll, setScroll] = useState(0)

  useEffect(() => {

    const handleScroll = () => {

      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight

      const scrollPosition = window.scrollY

      const progress = (scrollPosition / totalHeight) * 100

      setScroll(progress)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  return (

    <div
    id="scroll-progress" 
    className="fixed top-0 left-0 w-full h-[4px] bg-transparent z-[9999]">

      <div
        className="h-full bg-gradient-to-r from-[#174753] to-[#d68760] shadow-[0_0_10px_rgba(214,135,96,0.7)] transition-all duration-200"
        style={{ width: `${scroll}%` }}
      />

    </div>

  )

}

export default ScrollProgress