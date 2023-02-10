const IPFS = require('ipfs-http-client');
const ipfs = new IPFS({host : "https://ipfs.io", port : 5001, protocol : 'https'});

export default ipfs;

