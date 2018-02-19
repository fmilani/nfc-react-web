import readNfcTag from './readNfcTag';

const writeNfcTag = (timeout = 15, data = '') => {
  readNfcTag(timeout, () => {
    const newRecord = {
      data,
    };
    navigator.nfc
      .push({
        records: [newRecord],
      })
      .then(() => {
        console.log('Tag successfully written.');
        navigator.nfc.cancelWatch();
      })
      .catch(error => {
        console.log('Could not write to tag. Error: ', error);
      });
  });
};

export default writeNfcTag;
