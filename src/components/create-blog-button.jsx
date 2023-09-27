'use client'

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import InputText from "./ui/inputs/input-text";
import InputTextarea from "./ui/inputs/input-textarea";
import { useState } from "react";
import { useToast } from "./ui/use-toast";
import useBlogsFromContext from "@/hooks/useBlogsFromContext";

const CreateBlogButton = ({ className = "" }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();
  const { createBlog: createBlogService } = useBlogsFromContext();

  const createBlog = async () => {
    const newTitle = title.trim();
    const newDescription = description.trim();
    if (!newTitle) {
      toast({ title: "Oops! Please Enter a Title.", variant: "destructive" })
      return;
    }
    if (!newDescription) {
      toast({ title: "Hold on! Don't Forget the Description.", variant: "destructive" })
      return;
    }
    const newBlog = await createBlogService({ title: newTitle, description: newDescription });
    if (newBlog) {
      toast({ title: "Success! Your Blog Has Been Created" });
      setTitle('');
      setDescription('');
      setIsDialogOpen(false);
    }
  };

  const onTitleChange = (e) => setTitle(e.target.value);
  const onDescriptionChange = (e) => setDescription(e.target.value);
  const onCreateClick = () => createBlog();

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button className={className}>Create New Blog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Blog</DialogTitle>
        </DialogHeader>
        <div className="mt-6">
          <InputText label="Title" placeholder="Enter Blog Title" value={title} onChange={onTitleChange} />
          <InputTextarea className="mt-6" label="Description" placeholder="Brief Blog Description" value={description} onChange={onDescriptionChange} />
        </div>
        <DialogFooter>
          <Button onClick={onCreateClick}>Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

  );
};

export default CreateBlogButton;