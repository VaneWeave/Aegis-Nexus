const IPFS = require('ipfs');
const ipfs = new IPFS({host : "https://ipfs.io", port : 5001, protocol : 'https'});

export default ipfs;

