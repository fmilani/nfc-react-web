import readNfcTag from './readNfcTag';
import cancelWatch from './cancelWatch';

const writeNfcTag = (timeout = 15, data = '', writeCallback = () => {}) => {
  readNfcTag(
    timeout,
    () => {
      const newRecord = {
        data,
      };
      navigator.nfc
        .push({
          records: [newRecord],
        })
        .then(() => {
          console.log('Tag successfully written.');
          cancelWatch();
          writeCallback();
        })
        .catch(error => {
          console.log('Could not write to tag. Error: ', error);
          writeCallback(error);
        });
    },
    false,
  );
};

export default writeNfcTag;
