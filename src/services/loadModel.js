const tf = require("@tensorflow/tfjs-node");
async function loadModel() {
  return tf.loadGraphModel(
    "process.env.https://storage.googleapis.com/cancer-predict-bc/model.json"
  );
}
module.exports = loadModel;
