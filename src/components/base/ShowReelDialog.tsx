"use client";

import { Play, X } from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface VideoDialogProps {
    videoSrc: string;
    poster?: string;
    title?: string;
    triggerText?: string;
}

export default function ShowReelDialog({
    videoSrc,
    poster,
    title = "Video",
    triggerText = "Watch Showreel",
}: VideoDialogProps) {
    return (
        <Dialog>
            <DialogTrigger className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-white/20">
                <Play className="w-4 h-4 fill-current" />
                {triggerText}
            </DialogTrigger>

            <DialogContent
                className="
          max-w-none
          w-screen
          h-screen
          p-0
          border-0
          rounded-none
          bg-black
          shadow-none
          flex
          items-center
          justify-center
        "
            >
                <DialogTitle className="sr-only">{title}</DialogTitle>

                <video
                    src={videoSrc}
                    poster={poster}
                    controls
                    autoPlay
                    playsInline
                    className="
            w-full
            h-full
            object-contain
          "
                >
                    Your browser does not support the video tag.
                </video>
            </DialogContent>
        </Dialog >
    );
}