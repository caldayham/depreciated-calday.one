function copyToClip(msg) {
    navigator.clipboard.writeText(msg).then(() => {
      alert(`${msg} successfully copied to clipboard`);
    }, () => {
      alert(`${msg} failed to copy to clipboard`)
    });
}