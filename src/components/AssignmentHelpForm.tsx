import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, CheckCircle } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface AssignmentHelpFormProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const AssignmentHelpForm: React.FC<AssignmentHelpFormProps> = ({
  open = false,
  onOpenChange,
}) => {
  const [date, setDate] = useState<Date>();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true);
    }, 1000);
  };

  const resetForm = () => {
    setFormSubmitted(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold px-6 py-3 rounded-lg shadow-lg"
        >
          Get Assignment Help
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-white">
        {!formSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center text-gray-800">
                Request Assignment Help
              </DialogTitle>
              <DialogDescription className="text-center text-gray-600">
                Fill out the form below and we'll match you with the perfect
                expert for your assignment.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="assignment-type">Assignment Type</Label>
                  <Select>
                    <SelectTrigger id="assignment-type">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="essay">Essay</SelectItem>
                      <SelectItem value="dissertation">Dissertation</SelectItem>
                      <SelectItem value="research">Research Paper</SelectItem>
                      <SelectItem value="technical">
                        Technical Assignment
                      </SelectItem>
                      <SelectItem value="homework">Homework</SelectItem>
                      <SelectItem value="editing">
                        Editing/Proofreading
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject Area</Label>
                  <Select>
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="business">
                        Business & Management
                      </SelectItem>
                      <SelectItem value="humanities">Humanities</SelectItem>
                      <SelectItem value="science">Natural Sciences</SelectItem>
                      <SelectItem value="social">Social Sciences</SelectItem>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="computer">Computer Science</SelectItem>
                      <SelectItem value="health">Health Sciences</SelectItem>
                      <SelectItem value="math">Mathematics</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="deadline">Deadline</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? (
                          format(date, "PPP")
                        ) : (
                          <span>Select a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pages">Page/Word Count</Label>
                  <Input
                    id="pages"
                    type="number"
                    min="1"
                    placeholder="Number of pages"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="academic-level">Academic Level</Label>
                <Select>
                  <SelectTrigger id="academic-level">
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high-school">High School</SelectItem>
                    <SelectItem value="undergraduate">Undergraduate</SelectItem>
                    <SelectItem value="masters">Master's</SelectItem>
                    <SelectItem value="phd">PhD</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="instructions">Special Instructions</Label>
                <Textarea
                  id="instructions"
                  placeholder="Include any specific requirements, formatting guidelines, or additional information here."
                  className="min-h-[100px]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone (Optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (123) 456-7890"
                  />
                </div>
              </div>

              <div className="text-sm text-gray-500 mt-2">
                Your information is secure and will never be shared with third
                parties. By submitting this form, you agree to our Terms of
                Service and Privacy Policy.
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800"
              >
                Submit Request
              </Button>
            </form>
          </>
        ) : (
          <div className="py-8 flex flex-col items-center justify-center space-y-4">
            <div className="rounded-full bg-green-100 p-3">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-center text-gray-800">
              Request Submitted!
            </h2>
            <p className="text-center text-gray-600 max-w-md">
              Thank you for your request. One of our academic experts will
              review your requirements and contact you shortly.
            </p>
            <Button onClick={resetForm} className="mt-4">
              Submit Another Request
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AssignmentHelpForm;
