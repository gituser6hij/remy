import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="p-8 max-w-lg mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <Input id="name" type="text" placeholder="Your Name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <Input id="email" type="email" placeholder="Your Email" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <Textarea id="message" placeholder="Your Message" />
        </div>
        <Button type="submit" variant="default">
          Send Message
        </Button>
      </form>
    </div>
  );
}