import headerlogo from "../assets/images/headerlogo.svg";

export const Header = () => {
    return (
        <div className="p-4">
            <img src={headerlogo} alt="header-logo" className="w-32"/>
        </div>
    )
}