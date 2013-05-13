var msgpack = require('msgpack');

module.exports = function addMsgPack() {
  var dbUtil = require('levelup/lib/util');
    var encoders = dbUtil.toSlice;
    encoders['msgpack'] = msgpack.pack.bind(msgpack);
    var decoders = dbUtil.toEncoding;
    decoders['msgpack'] = msgpack.unpack.bind(msgpack);
}
