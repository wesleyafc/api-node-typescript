
import { ICategoriesRepository } from "../../repositories/ICateroriesRepository"

// interface é propriedades ? que sera passada aki somente para ser subistituida depois?
interface Irequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {

  constructor(private categoriesRepository: ICategoriesRepository) { }

  //define o tipo ?
  execute({ description, name }: Irequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name)

    if (categoryAlreadyExists) {
      throw new Error("Category  already exists")
      //throw new Error(`Category ${name} already exists`)
    }

    this.categoriesRepository.create({ name, description })
  }
}

export { CreateCategoryUseCase }
