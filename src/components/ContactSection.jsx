import {Linkedin, Mail, MapPin} from "lucide-react"
export const ContactSection = () => {
    return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary"> Touch</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Feel free to reach out.
                I'm always open to discussing new opportunities.
            </p>

            <div className="justify-center">
                <div className="flex flex-col items-center justify-center text-center">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-center space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium text-left"> Email</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors">
                                    valientelucianagabriela@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Linkedin className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium text-left"> LinkedIn </h4>
                                <a href="https://www.linkedin.com/in/luciana-gabriela-valiente/" 
                                    target="_blank"
                                    className="text-muted-foreground hover:text-primary transition-colors">
                                    https://www.linkedin.com/in/luciana-gabriela-valiente/
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-medium text-left"> Location </h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors">
                                    Argentina, Entre Ríos, Concepción del Uruguay - Gualeguaychú
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    )
}