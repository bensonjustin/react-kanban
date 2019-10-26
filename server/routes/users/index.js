const express = require('express');
const router = express.Router();
const Card = require('../../../database/models/Card');

router.get('/', (req, res) => {
  Card.fetchAll()
    .then(cards => {
      return res.json(cards);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});
router.post('/', (req, res) => {
  console.log('test');
  const newCard = req.body;
  Card.forge({
    title: newCard.title,
    body: newCard.body,
    priority_id: newCard.priority,
    status_id: newCard.status,
    created_by: newCard.created_by,
    assigned_to: newCard.assigned_to
  })
    .save(null, { method: 'insert' })
    .then(card => {
      new Card({ title: newCard.title })
        .fetch({
          withRelated: ['priority', 'status', 'createdBy', 'assignedTo']
        })
        .then(card => {
          let relations = card.relations;
          const priority = relations.priority.attributes.name;
          const status = relations.status.attributes.name;
          const createdBy = relations.createdBy.attributes.first_name;
          const assignedTo = relations.assignedTo.attributes.first_name;

          const cardData = {
            id: card.id,
            title: card.attributes.title,
            body: card.attributes.body,
            priority: priority.name,
            priority_id: priority.id,
            status: status.name,
            status_id: status.id,
            createdBy: createdBy.first_name,
            createdBy_id: createdBy.id,
            assignedTo: assignedTo.first_name,
            assignedTo_id: assignedTo.id
          };
          return res.json(cardData);
        });
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
