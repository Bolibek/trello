import { NavbarBody, FrameContainer, CreatContainer } from "../styles";
const Navbar = () => {
	return (
		<NavbarBody>
			<div>Trello</div>
			<FrameContainer>
				<div>
					Workspaces{" "}
					<img
						alt="Frame"
            className=""
            width={`15px`}
						src="https://img.icons8.com/material-sharp/24/ffffff/chevron-down.png"
					/>
				</div>
				<div>
					Recent{" "}
					<img
						alt="Frame"
            className=""
            width={`15px`}
						src="https://img.icons8.com/material-sharp/24/ffffff/chevron-down.png"
					/>
				</div>
				<div>
					Starred{" "}
					<img
						alt="Frame"
            className=""
            width={`15px`}
						src="https://img.icons8.com/material-sharp/24/ffffff/chevron-down.png"
					/>
				</div>
				<div>
					Templates{" "}
					<img
						alt="Frame"
            className=""
            width={`15px`}
						src="https://img.icons8.com/material-sharp/24/ffffff/chevron-down.png"
					/>
				</div>
				<CreatContainer>
					Create{" "}
					<img
						alt="Frame"
            className=""
            width={`15px`}
						src="https://img.icons8.com/windows/32/ffffff/plus-math.png"
					/>
				</CreatContainer>
			</FrameContainer>
		</NavbarBody>
	);
};

export default Navbar;
