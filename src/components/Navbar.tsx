import {  CreatContainer } from "../styles";
const Navbar = () => {
	return (
		<div className="flex flex-row items-center bg-[#026AA7] border-b-transparent p-[.5em] text-white w-full">
			<div>Trello</div>
			<div className=" flex flex-row items-center w-[50%]">
				<div className="flex flex-row items-center mx-5">
					Workspaces{" "}
					<img
						alt="Frame"
            className=""
            width={`15px`}
						src="https://img.icons8.com/material-sharp/24/ffffff/chevron-down.png"
					/>
				</div>
				<div className="flex flex-row items-center mx-5">
					Recent{" "}
					<img
						alt="Frame"
            className=""
            width={`15px`}
						src="https://img.icons8.com/material-sharp/24/ffffff/chevron-down.png"
					/>
				</div>
				<div className="flex flex-row items-center mx-5">
					Starred{" "}
					<img
						alt="Frame"
            className=""
            width={`15px`}
						src="https://img.icons8.com/material-sharp/24/ffffff/chevron-down.png"
					/>
				</div>
				<div className="flex flex-row items-center mx-5">
					Templates{" "}
					<img
						alt="Frame"
            className=""
            width={`15px`}
						src="https://img.icons8.com/material-sharp/24/ffffff/chevron-down.png"
					/>
				</div>
				<div className="flex flex-row items-center mx-5 bg-[#ffffff35] border-white border-[.03rem] p-1 rounded-sm">
					Create{" "}
					<img
						alt="Frame"
            className=""
            width={`15px`}
						src="https://img.icons8.com/windows/32/ffffff/plus-math.png"
					/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
