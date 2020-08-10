def song_decoder(song):
  splitArray = song.split('WUB')
  aux = [w for w in splitArray if w != '']
  separator = ' '
  return separator.join(aux)
