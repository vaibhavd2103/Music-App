User Input can-be[spotify album, playlist, song, artistprofile] -> Spotify Api(link) -> { name, albuminfo, artist ,.... }
->Youtube Music Api(name) -> { youtube link, } -> youtube-dl(link, m4a, highest audio) -> ffmpeg(m4a) -> mp3 -> eyed3({data from spotify}) -> Song mp3

-> albumart url -> albumart download and save as jpeg
