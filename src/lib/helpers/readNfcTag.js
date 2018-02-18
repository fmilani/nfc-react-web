const readNfcTag = (timeout = 15, readCallback = () => {}) => {
  navigator.nfc
    .watch(
      message => {
        console.log(
          `Tag read. First record: ${JSON.stringify(message.records[0])}`,
        );
        readCallback(message.records);
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
