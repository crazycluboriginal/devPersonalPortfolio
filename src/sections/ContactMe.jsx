import {Button} from "@/components/Button";
export const ContactMe = () => {
    return <section id="contact-me" className="py-32 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 bg-primary/5 rounded-full blur-3xl"/>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"/>
         </div>
        <div className = "container mx-auto px-6 relative z-10">
            {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Want to work together?{" "}
            <span className="font-serif italic font-normal text-white">
              Let's build something great.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Have a position or project in mind? I'd love to hear about it. Send me a message
            and let's discuss how we can make it work.
          </p>
        </div>
    </div>
    <div className="text-center">
        <a href="/contact">
            <Button size="lg">
                Contact me
            </Button>
        </a>
    </div>
</section>
};