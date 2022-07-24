import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/common/navbar";
import { Footer } from "./components/common/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<div className='flex flex-col h-screen'>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<App />} />
				</Routes>
				<Footer />
			</BrowserRouter>
	</div>
);
