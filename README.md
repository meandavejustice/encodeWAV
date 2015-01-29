# encodeWAV

[![NPM](https://nodei.co/npm/encodeWAV.png?downloads=true)](https://npmjs.org/package/encodeWAV)

encode WAV files from audio buffers

adapted from https://github.com/mattdiamond/Recorderjs

## api

`encodeWAV`: takes an array of leftBuffer data and rightBuffer
data, the buffer's samplerate, and a callback to execute when finished processing.

that is it.

## Example Usage
``` javascript
encoder.encodeWAV([buffer.getChannelData(0), buffer.getChannelData(1)],
                  buffer.sampleRate,
                  function(blob) {
                    console.log('wav encoding complete: ', blob );
                    if (blob) {
                      window.location = URL.createObjectURL(blob);
                    }
                  })
```
                    
