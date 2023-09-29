'use client'

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { useState } from "react";
import { useToast } from "./ui/use-toast";
import useBlogsFromContext from "@/hooks/useBlogsFromContext";
import { Trash2 } from "lucide-react";
import { TextLead } from "./ui/texts";

const DeleteBlogButton = ({ id, className }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();
  const { deleteBlog: deleteBlogService } = useBlogsFromContext();

  const deleteBlog = async () => {
    const response = await deleteBlogService(id);
    if (response) {
      toast({ title: "Blog Deleted Successfully" });
      setIsDialogOpen(false);
    }
  };

  const onCancelClick = () => setIsDialogOpen(false);
  const onDeleteClick = () => deleteBlog();

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className={className}><Trash2 /></Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Deletion</DialogTitle>
        </DialogHeader>
        <div className="mt-6">
          <TextLead>Are you sure you want to delete this blog post? This action cannot be undone, and the blog will be permanently removed.</TextLead>
        </div>
        <DialogFooter>
          <Button variant="outline" className="mt-1 sm:mt-0" onClick={onCancelClick}>Cancel</Button>
          <Button variant="destructive" onClick={onDeleteClick}>Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

  );
};

export default DeleteBlogButton;