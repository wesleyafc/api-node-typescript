
import { ICategoriesRepository } from "../../repositories/ICateroriesRepository"

// interface é propriedades ? que sera passada aki somente para ser subistituida depois?
interface Irequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {

  constructor(private categoriesRepository: ICategoriesRepository) { }

  //define o tipo ?
  async execute({ description, name }: Irequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(name)

    if (categoryAlreadyExists) {
      throw new Error("Category  already exists")
      //throw new Error(`Category ${name} already exists`)
    }

    this.categoriesRepository.create({ name, description })
  }
}

export { CreateCategoryUseCase }
