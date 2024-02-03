import { sidebarData } from "../Datas/data"


function Sidebar() {
    return (
        <div className='side-bar'>
            <div className="sidebar-top">
                <div className="sidebar-logo">
                    <img src="assets/icons/Signin-logo.png" alt="" />
                    <div className="base-logo">
                        <span>Base</span>
                    </div>
                </div>

            </div>
            <div className="sidebar-bottom">
                {
                    sidebarData && sidebarData?.map(data => (
                        <div className="sideBarData" key={data?.id}>
                            <div className="sideBarIcon"><img src={data?.icon} alt="" /></div>
                            <div className={data?.title === "Upload" ? "sideBarTitle active" : "sideBarTitle"}>{data?.title}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Sidebar