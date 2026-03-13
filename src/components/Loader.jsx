import logo from "../assets/logo.png"

function Loader() {

  return (

    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">

      <img
        src={logo}
        className="h-16 animate-pulse"
      />

    </div>

  )

}

export default Loader