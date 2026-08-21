import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { About } from "@/sections/About";
import { Testimonials } from "@/sections/Testimonials";
import { Experience } from "@/sections/Experience";
import { Contact } from "@/sections/Contact";
import { ContactMe } from "@/sections/ContactMe";

const Home = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Projects />
                <Experience />
                <Testimonials />
                <ContactMe />
            </main>
        </>
    );
};

const ContactPage = () => {
    return (
        <>
            <Navbar />
            <main>
                <Contact />
            </main>
        </>
    );
};

function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen overflow-x-hidden">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;