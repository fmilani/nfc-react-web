const readNfcTag = (timeout = 15) => {
  navigator.nfc
    .watch(
      message => {
        console.log(JSON.stringify(message.records[0]));
      },
      { mode: 'any' },
    )
    .then(watchId => {
      setTimeout(() => {
        navigator.nfc.cancelWatch(watchId).then(() => {
          console.log('Nfc watch timed out.');
        });
      }, timeout * 1000);
    });
};

export default readNfcTag;
