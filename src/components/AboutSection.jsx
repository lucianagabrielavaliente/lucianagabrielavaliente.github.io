import { Briefcase, Code , Database} from 'lucide-react';
export const AboutSection = () => {
    return (
    <section id="about" className="py-24 px-2 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                About <span className="text-primary">Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Data Scientist and Data Engineering in progress</h3>
                    <p className="text-muted-foreground">
                        With a year and a half of expierience in data science, 
                        I specialize in data analysis, machine learning, and data visualization.
                        I am interested in developing my skills in data engineering.
                    </p>
                    <p className="text-muted-foreground">
                        I am passionate about using data to drive business decisions and improve processes.
                        I have a strong background in Python, SQL, and data visualization tools such as Tableau and Power BI.
                        I am also experienced in machine learning algorithms and techniques. 
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button"> Get In Touch</a>
                        <a href="/Files/CV_Luciana_Valiente_25.pdf"
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="cosmic-button">Download CV</a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 flex items-center gap-4">
                                    <Code className="h-15 w-15 text-primary"/>
                                    <div className="text-left">
                                        <h4 className="font-semibold">Data Science</h4>
                                        <p>
                                            Creating models to extract insights from data,
                                            using Python and libraries like MLFlow, XGBoost and Scikit-learn.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 flex items-center gap-4">
                                    <Database className="h-15 w-15 text-primary"/>
                                    <div className="text-left">
                                        <h4 className="font-semibold">Data Engineering</h4>
                                        <p>
                                            Creating models to extract insights from data,
                                            using Python and libraries like MLFlow, XGBoost and Scikit-learn.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 flex items-center gap-4">
                                    <Briefcase className="h-15 w-15 text-primary"/>
                                    <div className="text-left">
                                        <h4 className="font-semibold">Professional Experience</h4>
                                        <p>
                                            Add Later something about Teacher Assistant, Research Group and things like that
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </section>)
}