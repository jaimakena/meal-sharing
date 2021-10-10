const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const titles = await knex("reservation");
    response.json(titles);
  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {
  performAction(request, response, 'post', false);
});

router.get("/:id", async (request, response) => {
  performAction(request, response, 'get');
});

router.get("/count/:id", async (request, response) => {
  performAction(request, response, 'count');
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
  console.log(action);
  switch (action) {
    case 'delete':
      await knex("reservation").where({ id: idValue }).del();
      result='Reservation deleted';
      break;
    case 'put':
      await knex("reservation").where({ id: idValue }).update(request.body);
      result='Reservation Updated';
      break;
    case 'post':
      await knex("reservation").insert(request.body);
      result='Reservation Created';
      break;
    case 'get':
      result = await knex("reservation").where({ id: idValue });
      break;
    case 'count':
      result = await knex("reservation").count('id as count').where({ meal_id: idValue });
      break;
    default:
      break;
  }
  return result;
}
module.exports = router;