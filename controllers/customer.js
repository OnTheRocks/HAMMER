const Customer = require('../models/Customer');

module.exports = {
 // Async/Await
 //----------Get/Post Customers---------------------
 index: async (req, res, next) => {
   try {
     const customers = await Customer.find({}).sort( { custName: 1 } )
     res.status(200).json(customers);
   } catch(err) {
     next(err);
   }
 },
 
 newCustomer: async (req, res, next) => {
   try {
     const newCustomer = await Customer(req.body);
     const customer = await newCustomer.save();
     res.status(201).json(customer);
   } catch(err) {
       next(err);
   }
 },
 
 //-------------Get/Put/Patch/Delete Customer------------
 getCustomer: async(req, res, next) => {
   try {
     const { customerID } = req.params;
     const customer = await Customer.findById(customerID);
     res.status(200).json(customer);
   } catch(err) {
       next(err);
   }
 },
 
 replaceCustomer: async(req, res, next) => {
 // req.body must contain all fields
   try {
     const { customerID } = req.params;
     const newCustomer = req.body;
     const result = await Customer.findByIdAndUpdate(customerID, newCustomer);
     res.status(200).json({ Success: true });
   } catch(err) {
       next(err);
   }
 }, 
 
 updateCustomer: async(req, res, next) => {
 // req.body may contain any number of fields
   try {
   const { customerID }= req.params;
   const newCustomer = req.body;
   const result = await Customer.findByIdAndUpdate(customerID, newCustomer);
   res.status(200).json({ Success: true });
   } catch(err) {
       next(err);
   }
 },
 
 removeCustomer: async(req, res) => {
   const { customerID } = req.params;
   const result = await Customer.findByIdAndDelete(customerID);
   res.status(200).json({ Success: true });
 },
 
 //--------------Get/Post Customer Location------------------------
//  getCustLocations: async(req, res, next) => {
//      const { customerID } = req.params;
//      const customer = await Customer.findById(customerID).populate('locations');
//      res.status(200).json(customer.locations);
//      console.log('Customer', customer);
//  },
 
//  newCustLocation: async(req, res, next) => {
//    const { customerID } = req.params;
//    // Create a new Location
//    const newCustLocation = new Location(req.body);
//    console.log("New Location", newCustLocation);
//    // Get Customer
//    const customer = await Customer.findById(customerID);
//    // Assign Customer 
//    newCustLocation.customer = customer;
//    // Save Location
//    await newCustLocation.save();
//    // Add location to Customers location array "locations"
//    customer.locations.push(newCustLocation);
//    // Save Customer
//    await customer.save();
//    res.status(201).json(newCustLocation);
//  },
 
//   getCustLocation: async(req, res, next) => {
//    const { locationID } = req.params;
//    const location = await Location.findById(locationID).populate('customer')
//    res.status(200).json(location);
//    console.log('Customer', location.customer);
//  }, 
};