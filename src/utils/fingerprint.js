import Fingerprint2 from 'fingerprintjs2'

export default (callback) => {
    new Fingerprint2().get(callback);
}