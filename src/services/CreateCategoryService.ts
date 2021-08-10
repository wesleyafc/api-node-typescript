
import { CategoriesRepository } from "../repositories/CategoriesRepository"

// interface é propriedades ? que sera passada aki somente para ser subistituida depois?
interface Irequest {
  name: string;
  description: string;
}

class CreateCategoryService {

  constructor(private categoriesRepository: CategoriesRepository) { }

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

export { CreateCategoryService }
