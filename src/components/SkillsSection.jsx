import { useState } from "react";
import { cn } from "@/lib/utils";
const levelToWidth = {
    Basic: "33%",
    Intermediate: "66%",
    Advanced: "100%",
};

const skills = [
    // Programming Languages
    {name: "Python", level: "Advanced", category: "Programming"},
    {name: "Java", level: "Intermediate", category: "Programming"},
    {name: "C#", level: "Basic", category: "Programming"},

    // Data Analysis
    {name: "Excel", level: "Intermediate", category: "Data Analysis"},
    {name: "Tableau", level: "Intermediate", category: "Data Analysis"},

    // Data Science
    {name: "Machine Learning", level: "Intermediate", category: "Data Science"},

    // Backend Development
    {name: "SQL", level: "Intermediate", category: "Backend"},
    {name: "MongoDB", level: "Basic", category: "Backend"},
    {name: "GraphQL", level: "Basic", category: "Backend"},
    {name: "Node.js", level: "Intermediate", category: "Backend"},
    {name: "Express.js", level: "Basic", category: "Backend"},
    {name: "Spring Boot", level: "Basic", category: "Backend"},

    // Frontend Development
    {name: "HTML/CSS", level: "Basic", category: "Frontend"},
    {name: "JavaScript", level: "Basic", category: "Frontend"},
    {name: "React", level: "Basic", category: "Frontend"},

    // Technologies
    {name: "Git", level: "Intermediate", category: "Technologies"},
    {name: "Docker", level: "Basic", category: "Technologies"},
    {name: "Pandas", level: "Intermediate", category: ["Technologies", "Data Analysis", "Data Science"]},
    {name: "NumPy", level: "Intermediate", category: ["Technologies", "Data Analysis", "Data Science"]},
    {name: "Scikit-learn", level: "Intermediate", category: ["Technologies", "Data Science"]},
    {name: "TensorFlow", level: "Basic", category:["Technologies", "Data Science"]},
    {name: "Flask", level: "Basic", category: "Technologies"},
    {name: "Django", level: "Basic", category: "Technologies"},
    {name: "FastAPI", level: "Basic", category: "Technologies"},
    {name: "Jupyter Notebook", level: "Intermediate", category: ["Technologies", "Data Analysis", "Data Science"]},
    {name: "VS Code", level: "Intermediate", category: "Technologies"},
    {name: "Postman", level: "Basic", category: "Technologies"},
    {name: "MLflow", level: "Basic", category: ["Technologies", "Data Science"]},
]

const categories = ["All", "Programming", "Data Analysis", "Data Science", "Backend", "Frontend", "Technologies"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const filteredSkills = skills.filter((skill) => activeCategory === "All" || skill.category.includes(activeCategory));
    return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                My <span className="text-primary"> Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center mb-12 gap-4">
                {categories.map((category, key) => (
                    <button key={key} 
                        onClick={() => setActiveCategory(category)}
                        className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                        )}>
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skills, key)=>(
                    <div key={key} className="bg-card p-6 rounded-lg shadow-md card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skills.name}</h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease_out]" 
                                 style={{ width: levelToWidth[skills.level]}}>
                            </div>
                        </div>  
                        <p className="text-left text-sm text-muted-foreground mt-1">{skills.level}</p>
                    </div>))}
            </div>
        </div>
    </section>
)
}