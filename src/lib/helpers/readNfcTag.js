const readNfcTag = () => {
  navigator.nfc.watch(
    message => {
      console.log(JSON.stringify(message.records[0]));
    },
    { mode: 'any' },
  );
};

export default readNfcTag;
