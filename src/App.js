import "mvp.css";
import "./styles.css";
import React from "react";

function Character({ count, name, height }) {
	return (
		<tr>
			<td className="Placement">{count}</td>
			<td className="Name">{name}</td>
			<td>{height} cm</td>
		</tr>
	);
}

export default function App({ characters }) {
	// placement counter
	let count = 1;

	// Limit table to 50
	characters = characters.slice(32);

	// Get rid of characters who don't have a height specified and sort the array
	characters = characters.filter((person) => person.height !== "unknown");
	characters = characters.sort((a, b) => b.height - a.height);

	// Destructure characters array
	let element = characters.map((c, i) => (
		<Character key={i} name={c.name} height={c.height} count={count++} />
	));

	return (
		<div className="App">
			<h1>Star Wars Character Height Chart </h1>
			<h2>50 Characters: Ordered Tallest to Shortest</h2>

			<table>
				<thead>
					<tr>
						<th className="Placement">Placement</th>
						<th className="Name">Name</th>
						<th>Height</th>
					</tr>
				</thead>
				<tbody>{element}</tbody>
			</table>
		</div>
	);
}
