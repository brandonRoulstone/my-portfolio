const Loader = () => {
    window.addEventListener("load", () => {

        setTimeout(() => {
        document.getElementById("loader").style.display = "block";


        document.getElementById("loader").style.display = "none";

        },2500);
    })
    return (
        // <div id="loader" className="text-white"><div id="Lspin"></div></div>
        <div id="loader">

            <div className="circle">

                <div className="dot"></div>

                <div className="outline"></div>

            </div>

            <div className="circle">

                <div className="dot"></div>

                <div className="outline"></div>

            </div>

            <div className="circle">

                <div className="dot"></div>

                <div className="outline"></div>

            </div>

            <div className="circle">

                <div className="dot"></div>

                <div className="outline"></div>

            </div>

            <div className="circle">

                <div className="dot"></div>

                <div className="outline"></div>

            </div>

        </div>
    )
}

export default Loader;