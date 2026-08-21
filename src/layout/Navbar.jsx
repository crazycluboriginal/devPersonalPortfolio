import {Button} from "../components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
    {href: "/#about", label: "About", title: "About — Ethan Leung"},
    {href: "/#projects", label: "Projects", title: "Projects — Ethan Leung"},
    {href: "/#experience", label: "Experience", title: "Experience — Ethan Leung"},
    {href: "/#testimonials", label: "Testimonials", title: "Testimonials — Ethan Leung"},
]

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(()=> {
        const handleScroll = () => {
           setIsScrolled(window.scrollY > 50);
        }
        window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
    <header
    className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-700 ease-in-out ${
        isScrolled
            ? "bg-background/80 backdrop-blur-md py-2 border-none shadow-none"
            : "bg-transparent py-2 border-none shadow-none"
    }`}
>
        <nav className="container mx-auto px-6 flex items-center justify-between">
            <a href="/#" className="text-xl font-bold tracking-tight hover:text-primary">
                EL<span className="text-primary">.</span>
            </a>
            {/*Desktop Nav*/}
            <div className="hidden md:flex items-center gap-1">
                <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                    {navLinks.map((link, index) => (
                        <a href={link.href} key={index} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
            {/* CTA Button */}
            <div className="hidden md:block">
                <a href="/contact">
                <Button size="sm">Contact Me</Button>
                </a>
            </div>

            {/* Mobile Button */}
            <button 
            className="md:hidden p-2 text-foreground cursor-pointer" 
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
                {isMobileMenuOpen? <X size={24} />: <Menu size={24} />}
            </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (<div className="md:hidden glass-strong animate-fade-in">
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                {navLinks.map((link, index) => (
                    <a href={link.href} key={index} 
                    onClick={() => {
                    document.title = link.title;
                    }}
                    className="text-lg text-muted-foreground hover:text-foreground py-2">
                    {link.label}</a>
                ))}

                <Button>Contact Me</Button>
            </div>
        </div>
    )}
    </header>
    );
};