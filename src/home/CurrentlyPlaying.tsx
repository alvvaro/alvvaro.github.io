import { useEffect, useRef, useState } from 'react';

type StatsFMData = {
  items?: {
    position?: number;
    playedMs?: number;
    artist?: {
      name?: string;
      externalIds?: {
        spotify?: string[];
      };
    };
  }[];
};

type DisplayData = {
  name: string;
  playedFor: string;
  link: string;
};

const STATSFM_URL =
  'https://api.stats.fm/api/v1/users/11154092169/top/artists?range=today';

export default function CurrentlyPlaying() {
  const fetched = useRef(false);
  const [data, setData] = useState<DisplayData | null>(null);

  useEffect(() => {
    if (fetched.current) return;

    fetch(STATSFM_URL)
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then((json: StatsFMData) => {
        fetched.current = true;
        setData(parseData(json));
      });
  }, []);

  return data ?
      <p className="text-sm">
        ♫{' '}
        <a href={data.link} target="_blank" className="text-inherit">
          {data.name}
        </a>{' '}
        ({data.playedFor} today)
      </p>
    : null;
}

function parseData(json: StatsFMData): DisplayData | null {
  const itemZero = json.items?.find((item) => item.position === 1);

  if (!itemZero) return null;

  const playedMs = itemZero.playedMs;
  const name = itemZero.artist?.name;
  const spotifyId = itemZero.artist?.externalIds?.spotify?.[0];

  if (!playedMs || !name || !spotifyId) return null;

  const link = `https://open.spotify.com/artist/${spotifyId}`;

  const playedMins = playedMs / 1000 / 60;
  const playedHours = playedMins / 60;

  if (playedMins < 5) return null;

  const playedFor =
    playedHours >= 1 ?
      `${Math.round(playedHours)} h.`
    : `${Math.round(playedMins)} mins.`;

  return { name, playedFor, link };
}
