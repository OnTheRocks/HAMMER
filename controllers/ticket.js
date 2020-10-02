const Ticket = require('../models/Ticket');

module.exports = {

 index: async(req, res, next) => {
   try {
     const tickets = await Ticket.find({})
     res.status(200).json(tickets);
   } catch(err) {
     next(err);
   }
 },

 newTicket: async (req, res, next) => {
   try {
     const newTicket = await Ticket(req.body);
     const ticket = await newTicket.save();
     res.status(201).json(ticket);
   } catch(err) {
      next(err);
   }
 },

 getTicket: async(req, res, next) => {
  try {
  const { ticketID } = req.params;
  const ticket = await Ticket.findById(ticketID);
  res.status(200).json(ticket);
  } catch(err) {
      next(err);
  }
 }, 

 replaceTicket: async(req, res, next) =>{
   try {
     const { ticketID } = req.params;
     const newTicket = req.body;
     const result = await Ticket.findByIdAndUpdate(ticketID, newTicket);
     res.status(200).json({ Success: true });
   } catch(err) {
      next(err);
   }
 },

 updateTicket: async(req, res, next) =>{
   try {
     const { ticketID } = req.params;
     const newTicket = req.body;
     const result = await Ticket.findByIdAndUpdate(ticketID, newTicket);
     res.status(200).json({ Success: true });
   } catch(err) {
      next(err);
   }
 }
 
 
};