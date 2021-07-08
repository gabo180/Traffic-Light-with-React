import React, { useState, useEffect } from "react";

const TrafficLight = () => {
	const [color, setColor] = useState("");

	return (
		<>
			<div className="traffic-light">
				<div
					className={"circle red" + (color === "red" ? " glow" : "")}
					onClick={() => setColor("red")}></div>
				<div
					className={
						"circle yellow" + (color === "yellow" ? " glow" : "")
					}
					onClick={() => setColor("yellow")}></div>
				<div
					className={
						"circle green" + (color === "green" ? " glow" : "")
					}
					onClick={() => setColor("green")}></div>
			</div>
		</>
	);
};

export { TrafficLight };
