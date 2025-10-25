import { NextResponse } from 'next/server'
import { getTopTracks } from '@/lib/spotify'

export const dynamic = 'force-dynamic'

interface SpotifyArtist {
  name: string
}

interface SpotifyTrack {
  id: string
  name: string
  artists: SpotifyArtist[]
  album: {
    images: Array<{ url: string }>
  }
  external_urls: {
    spotify: string
  }
}

export async function GET() {
  try {
    const response = await getTopTracks(6)

    if (response.status === 204 || response.status > 400) {
      return NextResponse.json({ error: 'Failed to fetch top tracks' }, { status: response.status })
    }

    const data = await response.json()

    const tracks = data.items.map((track: SpotifyTrack) => ({
      id: track.id,
      title: track.name,
      artist: track.artists.map((artist: SpotifyArtist) => artist.name).join(', '),
      albumArt: track.album.images[0]?.url || '',
      spotifyUrl: track.external_urls.spotify,
    }))

    return NextResponse.json({ tracks })
  } catch (error) {
    console.error('Error fetching top tracks:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
