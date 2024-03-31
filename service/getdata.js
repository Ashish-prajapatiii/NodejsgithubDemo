// const tableName = require('')  //its like model get and get the data

const getData = async (req, res) => {
  const Data = {
    status: true,
    message: "Hello",
  };
  // const data =await tableName
  res.json(Data);
};

