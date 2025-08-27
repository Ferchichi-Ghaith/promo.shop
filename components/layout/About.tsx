'use client'
import React, { useRef, useState } from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { Pause, Play, Volume2, VolumeOff } from "lucide-react";

export function About() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const videoRefs = items.map(() => React.createRef<HTMLVideoElement>());

  const handlePlay = (index: number) => {
    videoRefs.forEach((ref, i) => {
      if (ref.current && i !== index) {
        ref.current.pause();
        ref.current.currentTime = 0;
      }
    });

    const currentVideo = videoRefs[index].current;
    if (!currentVideo) return;

    if (currentVideo.paused) {
      currentVideo.play();
      setActiveIndex(index);
    } else {
      currentVideo.pause();
      currentVideo.currentTime = 0;
      setActiveIndex(null);
    }
  };

  return (
    <BentoGrid className="max-w-7xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={
            <VideoPlayer
              ref={videoRefs[i]}
              src={item.videoSrc}
              poster={item.poster}
              isActive={activeIndex === i}
              onPlay={() => handlePlay(i)}
            />
          }
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

type VideoPlayerProps = {
  src: string;
  poster?: string;
  isActive: boolean;
  onPlay: () => void;
};

const VideoPlayer = React.forwardRef<HTMLVideoElement, VideoPlayerProps>(
  ({ src, poster, isActive, onPlay }, ref) => {
    const [isMuted, setIsMuted] = useState(true);

    const toggleMute = () => {
      if (!ref || !("current" in ref) || !ref.current) return;
      ref.current.muted = !ref.current.muted;
      setIsMuted(ref.current.muted);
    };

    return (
      <div className="relative w-full h-full min-h-[12rem] rounded-xl overflow-hidden bg-black">
        <video
          ref={ref}
          src={src}
          className="w-full h-full object-cover"
          muted={isMuted}
          loop
          playsInline
        />
        {!isActive && (
          <div className="absolute inset-0 flex justify-center items-center">
            <button
              onClick={onPlay}
              className="bg-black/50 text-white p-4 rounded-full"
            >
              <Play size={24} />
            </button>
          </div>
        )}
        {isActive && (
          <div className="absolute bottom-2 left-2 flex gap-2">
            <button
              onClick={onPlay}
              className="px-2 py-1 text-white/85 bg-black/40 rounded"
            >
              <Pause size={15} />
            </button>
            <button
              onClick={toggleMute}
              className="px-2 py-1 text-white/85 bg-black/40 rounded"
            >
              {isMuted ? <Volume2 size={15} /> : <VolumeOff size={15} />}
            </button>
          </div>
        )}
      </div>
    );
  }
);

VideoPlayer.displayName = "VideoPlayer";

const items = [
  {
    title: "T1",
    description: "s1.",
    videoSrc: "/videos/v1.mp4",
    poster: "https://img.freepik.com/free-vector/modern-question-mark-symbol-background-with-text-space_1017-55251.jpg",
  },
  {
    title: "اشباش تربح معنا",
    description: "s2.",
    videoSrc: "/videos/v2.mp4",
    poster: "https://img.freepik.com/free-vector/modern-question-mark-symbol-background-with-text-space_1017-55251.jpg",
  },
  {
    title: "T3",
    description: "s3.",
    videoSrc: "/videos/v3.mp4",
    poster: "https://img.freepik.com/free-vector/modern-question-mark-symbol-background-with-text-space_1017-55251.jpg",
  },
];
