import { Injectable, signal, OnDestroy } from '@angular/core';

export interface SpotifyTrack {
  isPlaying: boolean;
  title: string;
  artist: string;
  album: string;
  albumArt: string;
  songUrl: string;
  progressMs: number;
  durationMs: number;
}

const NOT_PLAYING: SpotifyTrack = {
  isPlaying: false,
  title: 'Not playing',
  artist: '',
  album: '',
  albumArt: '',
  songUrl: '',
  progressMs: 0,
  durationMs: 0,
};

@Injectable({ providedIn: 'root' })
export class SpotifyService {
  track = signal<SpotifyTrack>(NOT_PLAYING);
  private intervalId: any;

  /**
   * Call this once from the root component.
   * Replace fetchNowPlaying() with a real API call to your backend
   * endpoint (e.g. GET /api/spotify/now-playing) once you have
   * Spotify OAuth set up.
   */
  startPolling(intervalMs = 30_000): void {
    this.fetchNowPlaying();
    this.intervalId = setInterval(() => this.fetchNowPlaying(), intervalMs);
  }

  stopPolling(): void {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  /**
   * Swap the body of this method for a real fetch() call to your
   * backend /api/spotify/now-playing route.
   *
   * Expected JSON shape from backend:
   * {
   *   isPlaying: boolean,
   *   title: string,
   *   artist: string,
   *   album: string,
   *   albumArt: string,   // image URL
   *   songUrl: string,    // spotify track URL
   *   progressMs: number,
   *   durationMs: number
   * }
   */
  private async fetchNowPlaying(): Promise<void> {
    try {
      const res = await fetch('/api/spotify/now-playing');
      if (res.ok) {
        const data: SpotifyTrack = await res.json();
        this.track.set(data);
      } else {
        this.track.set(NOT_PLAYING);
      }
    } catch {
      this.track.set(NOT_PLAYING);
    }
  }
}
