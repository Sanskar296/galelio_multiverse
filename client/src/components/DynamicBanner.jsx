import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Volume2, VolumeX, X } from 'lucide-react';

export default function DynamicBanner({
  videoUrl = '/images/dynamic_images/dewali-wishes-bygalileo_multiverse_video.mp4',
  videoUrls,
  imageUrl = '/images/dynamic_images/dewali-wishes-bygalileo_multiverse.jpeg',
  loopDuration = 10
}) {
  const activeVideo = (Array.isArray(videoUrls) && videoUrls.length > 0)
    ? videoUrls[0]
    : (videoUrl || '/images/dynamic_images/dewali-wishes-bygalileo_multiverse_video.mp4');

  const [isMuted, setIsMuted] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null);

  // Handle 10-second loop
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    if (videoRef.current.currentTime >= loopDuration) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  // Hover to play music/audio
  const handleMouseEnter = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = false;
    setIsMuted(false);
    videoRef.current.play().catch(() => {});
  };

  // Leave hover to mute music/audio
  const handleMouseLeave = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = true;
    setIsMuted(true);
  };

  // Click on video toggles audio (great for touch/mobile devices)
  const handleVideoClick = () => {
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
    if (!nextMuted) {
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <div className="relative max-w-4xl mx-auto mb-20">
      {/* Subtle ambient lighting blended into the dark space background */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-amber-500/10 via-purple-600/10 to-cyan-500/10 blur-3xl opacity-60 pointer-events-none" />

      {/* Minimal Header Accent */}
      <div className="flex items-center justify-between px-2 mb-3">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-amber-300/90 font-display">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Cosmic Celebration • Diwali Wishes</span>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] text-slate-400 transition-opacity duration-300">
          {isMuted ? (
            <>
              <VolumeX className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden sm:inline">Hover video for music</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span className="text-amber-300 font-medium">Music Playing</span>
            </>
          )}
        </div>
      </div>

      {/* Main Video & Overlapping Image Composition */}
      <div className="relative">
        
        {/* Video Player Display (Clean: Video Only, hover to unmute music) */}
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleVideoClick}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-amber-500/30 bg-black aspect-video shadow-2xl cursor-pointer group"
          title="Hover to listen with music"
        >
          <video
            ref={videoRef}
            src={activeVideo}
            autoPlay
            muted={isMuted}
            playsInline
            onTimeUpdate={handleTimeUpdate}
            className="w-full h-full object-cover select-none pointer-events-none"
          />

          {/* Minimal hover indicator overlay pill */}
          <div className="absolute top-3 right-3 pointer-events-none transition-all duration-300">
            <div className={`px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold backdrop-blur-md flex items-center gap-1.5 border transition-all duration-300 ${
              !isMuted 
                ? 'bg-amber-500/90 text-space-950 border-amber-400 shadow-lg shadow-amber-500/30' 
                : 'bg-space-950/70 text-slate-300 border-slate-700/60 opacity-80 group-hover:opacity-100'
            }`}>
              {!isMuted ? (
                <>
                  <Volume2 className="w-3 h-3 animate-pulse" />
                  <span>Music On</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3 h-3 text-slate-400" />
                  <span>Hover for Sound</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Overlapping Provided Image */}
        <div 
          onClick={() => setIsModalOpen(true)}
          className="absolute -bottom-6 -right-3 sm:-bottom-8 sm:-right-6 w-32 sm:w-48 md:w-56 lg:w-64 z-20 cursor-pointer group select-none"
          title="Click to view full greeting card"
        >
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border-2 border-amber-400/60 shadow-2xl shadow-amber-500/30 bg-space-900 transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1">
            <img
              src={imageUrl}
              alt="Galileo Multiverse Diwali Greeting Card"
              className="w-full h-auto object-cover block"
            />
          </div>
        </div>

      </div>

      {/* Lightbox Modal (Clean Full Image Preview on click) */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-space-950/90 backdrop-blur-md"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative max-w-lg w-full max-h-[90vh] bg-space-900 border border-amber-500/40 rounded-3xl p-4 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
              <span className="text-xs uppercase tracking-widest font-bold text-amber-300">
                Galileo Multiverse • Diwali Greeting
              </span>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex justify-center max-h-[75vh] overflow-auto rounded-xl">
              <img
                src={imageUrl}
                alt="Galileo Multiverse Diwali Greeting Card Full View"
                className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
