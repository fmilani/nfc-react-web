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
        navigator.nfc
          .cancelWatch(watchId)
          .then(() => {
            console.log('Watching for a nfc tag timed out.');
          })
          .catch(error => {
            if (error.name === 'NotFoundError') {
              // we're ignoring NotFoundError, assuming it happened because the
              // watch was already cancelled after a write
              return;
            }
            throw error;
          });
      }, timeout * 1000);
    });
};

export default readNfcTag;
