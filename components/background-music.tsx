'use client'

import { useState, useRef, useEffect } from 'react'
import { Music, VolumeX } from 'lucide-react'

export function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [ready, setReady] = useState(false)
  const playerRef = useRef<HTMLDivElement>(null)
  const playerInstanceRef = useRef<any>(null)

  useEffect(() => {
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScript = document.getElementsByTagName('script')[0]
    firstScript.parentNode?.insertBefore(tag, firstScript)

    let player: any
    ;(window as any).onYouTubeIframeAPIReady = () => {
      player = new (window as any).YT.Player('youtube-player', {
        videoId: '2AZOknKotVc',
        playerVars: {
          autoplay: 0,
          loop: 1,
          playlist: '2AZOknKotVc',
          controls: 0,
          showinfo: 0,
          modestbranding: 1,
        },
        events: {
          onReady: () => {
            setReady(true)
            playerInstanceRef.current = player
          },
        },
      })
    }

    return () => {
      player?.destroy()
    }
  }, [])

  const toggleMusic = () => {
    if (!playerInstanceRef.current) return
    if (isPlaying) {
      playerInstanceRef.current.pauseVideo()
    } else {
      playerInstanceRef.current.playVideo()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleMusic}
          disabled={!ready}
          className="w-12 h-12 rounded-full bg-primary shadow-lg shadow-primary/25 flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          title={isPlaying ? 'Couper la musique' : 'Activer la musique'}
        >
          {isPlaying ? <Music className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
        </button>
      </div>
      <div ref={playerRef} id="youtube-player" className="absolute w-0 h-0 overflow-hidden" />
    </>
  )
}
