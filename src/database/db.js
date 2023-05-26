import mongoose from 'mongoose';

const connectDatabase = () => {
  console.log("Esperando conexao com o banco de dados.");

  mongoose
    .connect(
      'mongodb+srv://diegodevwebb:P9dOaejq8R4TMk8u@titnews.6r4u2s8.mongodb.net/?retryWrites=true&w=majority',
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log('MongoDb Atlas connected.'))
    .catch((error) => console.log(error));
};

export default connectDatabase;
