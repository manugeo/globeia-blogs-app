'use client'

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import InputText from "./ui/inputs/input-text";
import InputTextarea from "./ui/inputs/input-textarea";
import { useState } from "react";
import { useToast } from "./ui/use-toast";
import useBlogsFromContext from "@/hooks/useBlogsFromContext";
import { Pencil } from "lucide-react";

const EditBlogButton = ({ currentBlog, className }) => {
  const [title, setTitle] = useState(currentBlog.title);
  const [description, setDescription] = useState(currentBlog.description);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();
  const { updateBlog: updateBlogService } = useBlogsFromContext();

  const updateBlog = async () => {
    const updatedTitle = title.trim();
    const updatedDescription = description.trim();
    if (!updatedTitle) {
      toast({ title: "Oops! Please Enter a Title.", variant: "destructive" })
      return;
    }
    if (!updatedDescription) {
      toast({ title: "Hold on! Don't Forget the Description.", variant: "destructive" })
      return;
    }
    const updatedBlog = await updateBlogService({ id: currentBlog.id, title: updatedTitle, description: updatedDescription });
    if (updatedBlog) {
      toast({ title: "Success! Your Blog Has Been Updated" });
      setTitle('');
      setDescription('');
      setIsDialogOpen(false);
    }
  };

  const onTitleChange = (e) => setTitle(e.target.value);
  const onDescriptionChange = (e) => setDescription(e.target.value);
  const onEditClick = () => updateBlog();

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className={className}><Pencil /></Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Blog</DialogTitle>
        </DialogHeader>
        <div className="mt-6">
          <InputText label="Title" placeholder="Enter Blog Title" value={title} onChange={onTitleChange} />
          <InputTextarea className="mt-6" label="Description" placeholder="Brief Blog Description" rows={10} value={description}
            onChange={onDescriptionChange} />
        </div>
        <DialogFooter>
          <Button onClick={onEditClick}>Update</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

  );
};

export default EditBlogButton;