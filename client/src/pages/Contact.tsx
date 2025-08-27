import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "wouter";
import { Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <img
              className="w-12 h-12 rounded-full object-cover"
              alt="Profile"
              src="/figmaAssets/ellipse-1.png"
              data-testid="profile-logo"
            />
          </div>
          
          <nav className="flex gap-8">
            <Link href="/" className="text-white font-medium text-lg hover:text-white/80 transition-colors" data-testid="nav-home">
              Home
            </Link>
            <Link href="/about" className="text-white font-medium text-lg hover:text-white/80 transition-colors" data-testid="nav-about">
              About
            </Link>
            <Link href="/skills" className="text-white font-medium text-lg hover:text-white/80 transition-colors" data-testid="nav-skills">
              Skills
            </Link>
            <Link href="/projects" className="text-white font-medium text-lg hover:text-white/80 transition-colors" data-testid="nav-projects">
              Projects
            </Link>
          </nav>

          <Button 
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-blue-600 transition-all"
            data-testid="button-contact"
          >
            Contact
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-20 px-6 pb-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Contact Form Card */}
          <Card className="bg-blue-600/20 border-white/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h1 className="text-white text-4xl font-bold mb-4" data-testid="heading-contact">
                  Have a project in mind?
                </h1>
                <h2 className="text-white text-3xl font-light mb-8" data-testid="subheading-contact">
                  Let's Connect
                </h2>

                {/* Contact Methods */}
                <div className="flex justify-center gap-6 mb-8">
                  <Button
                    variant="secondary"
                    className="bg-blue-700/40 border-white/20 text-white hover:bg-blue-700/60"
                    onClick={() => window.open('mailto:tanmaydeori09@gmail.com', '_blank')}
                    data-testid="button-email"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    tanmaydeori09@gmail.com
                  </Button>
                  
                  <Button
                    variant="secondary"
                    className="bg-blue-700/40 border-white/20 text-white hover:bg-blue-700/60"
                    onClick={() => window.open('https://wa.me/919876019437', '_blank')}
                    data-testid="button-whatsapp"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    +91 9876019437
                  </Button>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white focus:ring-white"
                    required
                    data-testid="input-name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                    Email ID
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white focus:ring-white"
                    required
                    data-testid="input-email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                    Enter your Text
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter your message"
                    rows={4}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white focus:ring-white resize-none"
                    required
                    data-testid="textarea-message"
                  />
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-700 hover:bg-blue-800 text-white px-12 py-3 rounded-full text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    data-testid="button-send-message"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};