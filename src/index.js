import "mvp.css";
import App from "./App";
import React from "react";
import { createRoot } from "react-dom/client";

// https://dev.to/andre347/how-to-use-a-do-while-loop-for-api-pagination-375b
(async function () {
	let page = 1;
	let characters = [];
	let lastPageArray = [];
	const url = `https://swapi.dev/api/people/?format=json&page=`;

	do {
		const apiResponse = await fetch(`${url}${page}`);
		const response = await apiResponse.json();
		lastPageArray = response;

		// destructure the person object and add to array
		response.results.forEach((character) => {
			const { name, height } = character;
			characters.push({ name, height });
		});
		page++;
	} while (lastPageArray.next != null);

	const container = document.getElementById("root");
	const root = createRoot(container);
	root.render(<App characters={characters} />);
})();
