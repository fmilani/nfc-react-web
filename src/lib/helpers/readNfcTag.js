import cancelWatch from './cancelWatch';

const readNfcTag = (timeout = 15, readCallback = () => {}) => {
  navigator.nfc
    .watch(
      message => {
        console.log(
          `Tag read. First record: ${JSON.stringify(message.records[0])}`,
        );
        readCallback(message.records);
        navigator.nfc.cancelWatch();
      },
      { mode: 'any' },
    )
    .then(watchId => {
      setTimeout(() => {
        cancelWatch(watchId);
      }, timeout * 1000);
    });
};

export default readNfcTag;
