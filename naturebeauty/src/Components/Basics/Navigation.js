
function Navigation({ filterItem, menuList }) {



    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">GALLARY</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" 
                    expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">

                        {menuList.map((item) => {
                            return (
                                <>
                                    <li className="nav-item" onClick={() => filterItem(item)}>
                                        <a classNameN="nav-link" href="#">{item}</a>
                                    </li>

                                </>

                            )

                        })
                        }

                        
                    </ul>
                </div>
            </nav>
        </>

    )
}

export default Navigation;