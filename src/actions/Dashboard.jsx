// data imported

import {Link} from "react-router-dom";

export default function Dashboard(){

    return (
        <div className={"row text-start mt-5 pt-5"}>
            <h2 className={"mb-4"}>Dashboard</h2>
            <div className={"col-lg-4 mb-3"}>
                <div className={"card p-2"}>
                    <h3>Projects</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto commodi consequatur.
                        <br/>
                        <Link to={"/projects"}>View All</Link>
                    </p>
                </div>
            </div>
            <div className={"col-lg-4 mb-3"}>
                <div className={"card p-2"}>
                    <h3>Blog Post</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto commodi consequatur.
                        <br/>
                        <Link to={"/blog"}>View All</Link>
                    </p>
                </div>
            </div>
            <div className={"col-lg-4 mb-3"}>
                <div className={"card p-2"}>
                    <h3>Media Post</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto commodi consequatur.
                        <br/>
                        <Link to={"/media"}>View All</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}