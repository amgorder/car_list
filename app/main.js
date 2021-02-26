  
import CarsController from "./Controllers/CarsController.js";
import ValuesController from "./Controllers/ValuesController.js";
import HousesController from "./Controllers/HousesController.js";
import JobsControler from "./Controllers/JobsController.js";
class App {
  // valuesController = new ValuesController();
  carsController = new CarsController();
  housesController = new HousesController();

  jobsController = new JobsControler();
}

window["app"] = new App();
