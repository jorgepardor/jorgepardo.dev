import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/common/navbar";
import { Footer } from "./components/common/footer";
import { Waylanders } from "./pages/waylanders";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<div className='flex flex-col h-screen'>
			<BrowserRouter>
        <Routes>
					<Route path="/" element={<App />} />
				</Routes>
				{/* <Navbar /> */}
				<Routes>
					{/* <Route path="/" element={<App />} /> */}
				</Routes>
				<Routes>
					<Route path="/waylanders" element={<Waylanders />} />
				</Routes>
				{/* <Footer /> */}
			</BrowserRouter>
	</div>
);
