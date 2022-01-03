import { Specification } from "../../entities/Specification";
import { ISpecificationsRepository, ICreateSpecificationDTO } from "../ISpecificationRepository";

class SpecificationsRepository implements ISpecificationsRepository {

  private specifications: Specification[]

  constructor() {
    this.specifications = []
  }

  create({ description, name }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      description,
      name,
      create_at: new Date()
    })

    this.specifications.push(specification);
  }

  FindByName(name: string): Specification {
    const specification = this.specifications.find((specification) => specification.name === name
    )
    return specification

  }

}

export { SpecificationsRepository }
