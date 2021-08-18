import { ISpecificationsRepository } from "../repositories/ISpecificationRepository"


interface IRequest {
  name: string,
  description: string;
}


class CreateSpecificationService {

  constructor(private specificationsRepository: ISpecificationsRepository) { }

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists = this.specificationsRepository.FindByName(name)

    if (specificationAlreadyExists) {
      throw new Error("specification already exists")
    }

    this.specificationsRepository.create({
      name,
      description,
    })
  }
}

export { CreateSpecificationService }
