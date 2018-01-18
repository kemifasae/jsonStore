var fs = require("fs");
var Json = require('./../../jsonModel');
var checkJson = require('../helpers/checkJson');
var randomString = require('../helpers/genId');
var findkey = require('../helpers/findKey');
var getData = require('../helpers/getData');
var deleteData = require('../helpers/deleteData');

class jsonController{

  static createNewData(req,res){
      var id = randomString();
      var jsonfile = req.body.data;//req.body.value;
        if(checkJson(jsonfile)){
          let newJson;
          let isKeyFound = findkey(Json,'id', id);
          if(isKeyFound){
            id = randomString()
          }
          newJson = {
            "id": id,
            "data": JSON.parse(jsonfile)
          }
          Json.push(newJson);

          let url = req.protocol + '://' + req.get('host') +'/docs/'+id;

          fs.writeFile('./jsonModel.json', JSON.stringify(Json, null, 4),  function(err) {
            if (err) {
               return console.error(err);
            }

          });

          res.status(200).json({
            message: 'json file saved successfully',
            url: url,
            data: newJson
          })
      }else{
            res.status(500).json({message: 'invalid json'})
          }
  }


  static getData(req,res){
    const reqId = req.params.id;
    let isKeyFound = findkey(Json,'id', reqId);
    if(isKeyFound){
      let data = getData(Json,'id',reqId).data;
      res.json(data)
    }else{
        res.json('no such json data!');
    }
  }

  static deleteData(req,res){
    const reqId = req.params.id;
    let isKeyFound = findkey(Json,'id', reqId);
    if(isKeyFound){
      Json = deleteData(Json,'id',reqId);
      fs.writeFile('./jsonModel.json', JSON.stringify(Json, null, 4),  function(err) {
        if (err) {
           return console.error(err);
        }
      });
      res.json({
        message: "Deleted successfully",
      });
    }else{
        res.json('no such json data!');
      }
  }

  static updateData(req,res){
    let reqId = req.params.id;
    let isKeyFound = findkey(Json,'id', reqId);
    if(isKeyFound){
      let newdata = req.body.data;
      deleteData(Json,'id',reqId);

      Json.push({
        "id": reqId,
        "data": newdata
      });

      fs.writeFile('./jsonModel.json', JSON.stringify(Json, null, 4),  function(err) {
        if (err) {
           return console.error(err);
        }
      });

      let updatedData = getData(Json,'id',reqId).data;

      res.status(200).json({
        "message": "updated successfully",
        "data": updatedData
      })
    }else{
      res.json('no such json data!');
    }
  }
}


module.exports = jsonController;
