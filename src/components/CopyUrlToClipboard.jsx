"use client";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

export default function CopyURLButton() {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast("URL copied to clipboard!", {
        description:
          "The URL of this blog post has been copied to your clipboard.",
        action: {
          label: "Close",
          onClick: () => console.log("Toast closed!"),
        },
      });
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <>
      <Toaster />
      <Button
        variant="default"
        className="flex items-center rounded-full mb-[10px]"
        onClick={copyToClipboard}
      >
        <Copy className="w-5 h-5 mr-2" />
        Copy URL
      </Button>
    </>
  );
}
