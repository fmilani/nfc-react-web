import cancelWatch from './cancelWatch';

const readNfcTag = (timeout = 15, readCallback = () => {}, readOnce = true) => {
  navigator.nfc
    .watch(
      message => {
        console.log(
          `Tag read.
            First record: ${JSON.stringify(message.records[0])}
            Url: ${message.url}
            `,
        );
        readCallback(message.records);
        if (readOnce) {
          cancelWatch();
        }
      },
      { mode: 'any' },
    )
    .then(watchId => {
      console.log('Started watching for a nfc tag');
      setTimeout(() => {
        cancelWatch(watchId);
      }, timeout * 1000);
    });
};

export default readNfcTag;
