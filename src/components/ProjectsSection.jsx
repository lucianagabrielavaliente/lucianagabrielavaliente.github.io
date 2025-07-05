import { ExternalLink, ArrowRight } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "London Bike Sharing Analysis",
        description: "Exploratory data analysis of London's bike sharing system using Python to uncover patterns and trends.",
        image: "projects/1.png",
        tags: ["SQL", "Tableau"],
        githubUrl:"https://github.com/lucianagabrielavaliente/London-Bike-Sharing-Analysis"
    },
    {
        id: 2,
        title: "Fuel Consumption Analysis",
        description: "Exploratory data analysis and regression modeling on vehicle fuel consumption data to predict CO₂ emissions.",
        image: "projects/2.png",
        tags: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
        githubUrl:"https://github.com/lucianagabrielavaliente/fuel-consumption?tab=readme-ov-file#preprocessing--feature-engineering"
    },

    {
        id: 3,
        title: "COVID-2019 Data Exploration And Visualization",
        description: "Performed data exploration of global COVID-19 data using SQL, and created an interactive dashboard in Tableau.",
        image: "projects/3.png",
        tags: ["Jupyter Notebook", "Tableau", "Excel"],
        githubUrl:"https://github.com/lucianagabrielavaliente/COVID-2019-Data-Exploration-And-Visualization?tab=readme-ov-file#repository-structure"
    },
    {
        id: 4,
        title: "Nashville housing data cleaning",
        description: "Cleaned and formatted Nashville housing data using SQL for further analysis and reporting.",
        image: "projects/4.png",
        tags: ["SQL"],
        githubUrl:"https://github.com/lucianagabrielavaliente/nashville-housing-data-cleaning-SQL"
    },
    {
        id: 5,
        title: "Py-Web-Scrapers",
        description: "Created basic Python scripts to extract data from websites using web scraping techniques.",
        image: "projects/4.png",
        tags: ["Python", "Requests", "Pandas", "BeautifulSoup", "Selenium", "Excel"],
        githubUrl:"https://github.com/lucianagabrielavaliente/py-web-scrapers"
    },
]
export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
         
            <div className="container mx-auto mac-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary"> Projects</span></h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    A selection of projects showcasing my work. A curated portfolio of projects representing professional growth.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-lg card-hover">
                            <div className="h-55 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>
                            <div className="p-6">
                                
                                <h3 className="text-xl font-semibold mb-1">
                                    {project.title}
                                </h3>
                                
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs border font-medium rounded-full bg-primary/20 text-secondary-foreground" key={tag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center"> 
                                    <div className="flex space-x-2">
                                        <a href={project.githubUrl} 
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink size={20}/>
                                        </a>
                                    </div>
                                </div>

                            </div>

                        </div>
                    ))}
                </div>
                
                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                        target="_blank"
                        href="https://github.com/lucianagabrielavaliente">
                        Check my GitHub <ArrowRight size={16}/>
                    </a>
                </div>

            </div>
        </section>
    )
}
