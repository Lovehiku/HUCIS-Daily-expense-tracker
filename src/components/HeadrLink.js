const HeaderLink = (props) => {
    return (
        <li className="nav-item">
            <a className="nav-link" href={props.linkUrl}>{props.linkName}</a>
        </li>
    );
};

export default HeaderLink;
