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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// Icons
import { Check } from "lucide-react";
// Utils
import { cn } from "@/lib/utils";

export function TicketCard({ ticket }: { ticket: Ticket }) {
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
          <div className="flex justify-between">
            <div className="text-green-500 capitalize">
              Status: <span>{ticket.status}</span>
            </div>
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
        {ticket.status === "awaiting-response" && (
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center font-bold">
              Resolution Available <Check className="ml-2 h-4 w-4 shrink-0" />
            </div>
            <div className="flex gap-x-4">
              <form action={resolveAction} className="flex grow">
                <input type="hidden" name="_id" value={ticket._id} />
                <input type="hidden" name="role" value="user" />
                <input type="hidden" name="message" value="" />
                <input type="hidden" name="status" value="closed" />
                <input
                  type="hidden"
                  name="statusMessage"
                  value="Accepted resolution, ticket closed"
                />
                <SubmitButton className="grow">Accept Resolution</SubmitButton>
              </form>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="grow">Decline Resolution</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Decline Resolution</DialogTitle>
                    <DialogDescription>
                      This action will decline the resolution provided. Please
                      leave a clear message stating the decline.
                    </DialogDescription>
                  </DialogHeader>
                  <form
                    action={resolveAction}
                    className="flex flex-col gap-y-2"
                  >
                    <input type="hidden" name="_id" value={ticket._id} />
                    <input type="hidden" name="role" value="user" />
                    <input type="hidden" name="status" value="declined" />
                    <input
                      type="hidden"
                      name="statusMessage"
                      value="Resolution declined"
                    />
                    <Label>Decline Statement</Label>
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
        )}
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
          <input type="hidden" name="role" value="user" />
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
