const experiences = [
    {
        period: "2026 - 2030",
        role: "Student",
        company: "University of Toronto",
        description: "Rotman Commerce",
        technologies: ["Canvas", "HTML/CSS/Javascript", "Python", "Numpy"],
        current: true,
    },

    {
        period: "2022 - 2026",
        role: "Student",
        company: "St. Theresa of Lisieux Catholic High School",
        description: "Environmental council, physics club, astronomy club",
        technologies: ["Classical mechanics", "Canva", "Quantum mechanics"],
        current: false,
    },

    {
        period: "2024 - 2026",
        role: "Vice President",
        company: "Algorithm Alchemists",
        description: "Led a nonprofit organization providing free coding education to dozens of students",
        technologies: ["Javscript", "CSS", "HTML", "React", "Python", "Java", "C++"],
        current: false,
    },    

    {
        period: "2020 - 2025",
        role: "Game Developer",
        company: "Roblox Corporation",
        description: "Developed Bloxtown [Showcase]",
        technologies: ["Lua", "Roblox Studio"],
        current: false,
    },

]

export const Experience = () => {
    return <section id="experience" className="py-32 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"/> 
    
    <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
    </div>

</section>;
};