"use client";
import { useFormState } from "react-dom";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";
// Data
import { commentTicket, updateStatus } from "@/lib/actions";
// Components
import { SubmitButton } from "@/components/submitButton";
// UI Components
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// Utils
import { cn } from "@/lib/utils";
import { resolve } from "path";

export function TicketAdministrationCard({ ticket }: { ticket: Ticket }) {
  const { toast } = useToast();

  const initialState = { error: "" };
  const [state, formAction] = useFormState(commentTicket, initialState);

  const [resolveState, resolveAction] = useFormState(
    updateStatus,
    initialState
  );

  useEffect(() => {
    if (state?.error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: state?.error,
      });
    }

    if (resolveState?.error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: resolveState?.error,
      });
    }
  }, [state]);

  return (
    <div className="flex border rounded-lg h-96">
      <div className="flex flex-col gap-y-4 w-1/2 p-3 border-r">
        <div className="flex flex-col gap-y-4 text-sm">
          <div className="text-neutral-200">
            Ticket #<span>{ticket._id}</span>
          </div>
          <div className="flex justify-between items-center">
            <form
              name={ticket._id}
              action={resolveAction}
              className="flex gap-x-2 items-center"
            >
              <input type="hidden" name="_id" value={ticket._id} />
              <input type="hidden" name="role" value="admin" />
              <input
                type="hidden"
                name="statusMessage"
                value={
                  ticket.status === "open"
                    ? "Changed status to in progress"
                    : "Changed status to open"
                }
              />
              <div className="text-green-500">Status: </div>
              {(ticket.status === "open" ||
                ticket.status === "in-progress") && (
                <Select
                  onValueChange={() => {
                    const form = document[
                      ticket._id as keyof typeof document
                    ] as HTMLFormElement;
                    form?.requestSubmit();
                  }}
                  name="status"
                  defaultValue={ticket.status}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                  </SelectContent>
                </Select>
              )}
              {ticket.status !== "open" && ticket.status !== "in-progress" && (
                <div className="text-green-500 capitalize">{ticket.status}</div>
              )}
            </form>
            <div className="text-yellow-500">
              Created at: <span>{ticket.createdAt}</span>
            </div>
          </div>
          {ticket.status === "closed" && <div className="text-sm text-yellow-500 text-end">Closed at: {ticket.closedAt}</div>}
        </div>
        <div className="flex gap-x-4">
          <div className="flex flex-col grow rounded-lg border">
            <Label className="border-b p-3">Subject</Label>
            <div className="p-3">{ticket.subject}</div>
          </div>
          <div className="flex flex-col rounded-lg border">
            <Label className="border-b p-3">Priority</Label>
            <div className="p-3 capitalize">{ticket.priority}</div>
          </div>
        </div>
        <div className="flex flex-col border rounded-lg">
          <Label className="border-b p-3">Description</Label>
          <div className="p-3">{ticket.description}</div>
        </div>
        <div className="flex mt-auto">
          <Dialog>
            <DialogTrigger
              disabled={
                ticket.status === "closed" ||
                ticket.status === "awaiting-response"
                  ? true
                  : false
              }
              asChild
            >
              <Button>
                {ticket.status === "awaiting-response"
                  ? "Resolution has been submitted"
                  : ticket.status === "closed"
                  ? "Ticket is closed"
                  : "Submit Resolution"}
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Submit Resolution</DialogTitle>
                <DialogDescription>
                  This action will submit a resolution and the user will be
                  notified. Please leave a resolution message for the user.
                </DialogDescription>
              </DialogHeader>
              <form action={resolveAction} className="flex flex-col gap-y-2">
                <input type="hidden" name="_id" value={ticket._id} />
                <input type="hidden" name="role" value="admin" />
                <input type="hidden" name="status" value="awaiting-response" />
                <input
                  type="hidden"
                  name="statusMessage"
                  value="Resolution submitted"
                />
                <Label>Resolution Message</Label>
                <Textarea
                  required
                  name="message"
                  placeholder="Type a message..."
                />
                <SubmitButton>Submit</SubmitButton>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="flex flex-col p-3 gap-y-4 w-1/2">
        <div className="font-bold">Conversation</div>
        <div className="flex flex-col gap-y-4 text-sm overflow-y-auto custom-scrollbar">
          {ticket.conversation.map((message, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col w-1/2",
                message.role === "admin" && "self-end text-end"
              )}
            >
              <div>
                {message.userName} <span>• {message.createdAt}</span>
              </div>
              <div className="text-teal-500">{message.statusMessage}</div>
              <div>{message.message}</div>
            </div>
          ))}
        </div>
        <form action={formAction} className="flex gap-x-4 mt-auto">
          <input type="hidden" name="_id" value={ticket._id} />
          <input type="hidden" name="role" value="admin" />
          <Input
            required
            disabled={ticket.status === "closed" ? true : false}
            name="message"
            placeholder="Type a message..."
          />
          <SubmitButton disabled={ticket.status === "closed" ? true : false}>
            Send
          </SubmitButton>
        </form>
      </div>
    </div>
  );
}
