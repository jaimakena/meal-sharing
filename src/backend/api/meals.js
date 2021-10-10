const express = require("express");
const router = express.Router();
const knex = require("../database");

function validateInput(input, shouldBeNum=true){
  let result = false; 
  if(input){
    result = true;
    if(shouldBeNum && isNaN(input)){
      result=false;
    }
  }
  return result;
}

router.get("/", async (request, response) => {
  const query=request.query;
  if (validateInput(query.maxPrice) && validateInput(query.limit)) {
    const meals = await knex("meal").limit(query.limit).where(function () {
      this.where("price", "<", query.maxPrice);
    })
    response.json(meals);
  }
  else if (validateInput(query.maxPrice)) {
    const meals = await knex("meal").where('price', '<', parseInt(query.maxPrice))
    response.json(meals);
  }
  else if (validateInput(query.title, false)) {
    const meals = await knex("meal").where('title', 'like', `%${query.title}%`)
    response.json(meals);
  }
  else if (query.createdAfter && !isNaN(Date.parse(query.createdAfter))) {
    const meals = await knex("meal").where('created_date', '>', query.createdAfter)
    response.json(meals);
  }
  else if (validateInput(query.limit)) {
    const meals = await knex("meal").limit(parseInt(query.limit))
    response.json(meals);
  }
  else {
    performAction(request, response, 'get',false);
  }
});



router.post("/", async (request, response) => {
  performAction(request, response, 'post', false);
});

router.get("/:id", async (request, response) => {
  performAction(request, response, 'getWithId');
});

router.put("/:id", async (request, response) => {
  performAction(request, response, 'put');
});

router.delete("/:id", async (request, response) => {
  performAction(request, response, 'delete');
});

async function performAction(request, response, action, validate=true){
  try {
    const idValue=parseInt(request.params.id);
    if (validate && isNaN(idValue)) {
      return response.status(400).send("Enter a valid id");
    }
    const result = await performDBAction(request,action, idValue);
    response.send(result);
  } catch (error) {
    throw error;
  }
}
async function performDBAction(request,action,idValue){
  let result;
  switch (action) {
    case 'delete':
      await knex("meal").where({ id: idValue }).del();
      result='Meal deleted';
      break;
    case 'put':
      await knex("meal").where({ id: idValue }).update(request.body);
      result='Meal Updated';
      break;
    case 'post':
      await knex("meal").insert(request.body);
      result='Meal Created';
      break;
    case 'get':
      result = await knex("meal").select("title");
      break;
    case 'getWithId':
      result = await knex("meal").where({ id: idValue });
      break;
    default:
      break;
  }
  return result;
}
module.exports = router;