"use client";
import { useFormState } from "react-dom";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";
// Data
import { createTicket } from "@/lib/actions";
// Components
import { SubmitButton } from "@/components/submitButton";
// UI Components
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function TicketCreationForm() {
  const { toast } = useToast();

  const initialState = { error: "" };
  const [state, formAction] = useFormState(createTicket, initialState);

  useEffect(() => {
    if (state?.error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: state?.error,
      });
    }
  }, [state]);

  return (
    <form
      action={formAction}
      className="flex flex-col gap-y-4 p-3 border rounded-lg"
    >
      <div className="flex gap-x-4">
        <div className="flex flex-col gap-y-2 grow">
          <Label>Subject</Label>
          <Input name="subject" required />
        </div>
        <div className="flex flex-col gap-y-2">
          <Label>Priority</Label>
          <Select name="priority" required>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="critical">Critical</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <Label>Description</Label>
        <Textarea
          name="description"
          placeholder="Type your message here."
          required
        />
      </div>
      <SubmitButton>Submit Ticket</SubmitButton>
    </form>
  );
}
