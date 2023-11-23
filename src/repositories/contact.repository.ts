import { AppDataSource } from "../data-source";
import { Contact } from "../entities/Contact.entity";

export default AppDataSource.getRepository(Contact)