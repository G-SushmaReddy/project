import React from "react";
import image from "./Images/edit.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "./slices/slices";

function MenuBar() {
    const user = useSelector(selectUser);

    // Safeguard against undefined user or firstname
    const displayName = user && user.firstname ? user.firstname.substring(0, 10) : "Sushma";

    return (
        <div className="menu">
            <div className="option1">{displayName}..</div>
            <div className="option2">
                <Link className="link2" id="linkreq2" to="/FoodPostingForm">
                    Food Post form
                </Link>
            </div>
            <div className="option3">
                <Link className="link2" id="linkreq2" to="/FoodRequestingForm">
                    Food Request form
                </Link>
            </div>
            <div className="option4">
                <Link className="link2" id="linkreq2" to="/FeedbackForm">
                    Feedback form
                </Link>
            </div>
            <div className="ellipseMain">
                <Link className="link1" to="ProfileSetting">
                    <img src={image} alt="edit" className="edit" />
                </Link>
            </div>
        </div>
    );
}

export default MenuBar;
