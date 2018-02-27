const cancelWatch = watchId => {
  navigator.nfc
    .cancelWatch(watchId)
    .then(() => {
      console.log('Watching for a nfc tag cancelled.');
    })
    .catch(error => {
      if (error.name === 'NotFoundError') {
        // we're ignoring NotFoundError, assuming it happened because the
        // watch was already cancelled after a write
        return;
      }
      throw error;
    });
};

export default cancelWatch;
