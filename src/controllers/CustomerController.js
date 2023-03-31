import CustomerRepository from "../repositories/CustomerRepository.js";
import HiredServiceRepository from "../repositories/HiredServiceRepository.js";

class CustomerController{
    constructor(){
        this.customerRepository = new CustomerRepository();
        this.hiredServiceRepository = new HiredServiceRepository();
    }
    async getAllCustomers(req, res){
        try{
            const customers = await this.customerRepository.getAll();
            return res.status(200).json(customers);
        }
        catch(error){
            return res.status(400).json({
                message: "There's an error getting the customers"
            })
        }
    }
    async getHiredServicesByCustomerId(req, res) {
        try{
            const hiredServices = await this.hiredServiceRepository.getByCustomerId(req.params.id);
            return res.status(200).json(hiredServices);
        }
        catch(error){
            return res.status(400).json(error);

        }
    }


};

export default CustomerController;