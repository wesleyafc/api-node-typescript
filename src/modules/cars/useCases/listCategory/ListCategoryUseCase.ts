import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/ICateroriesRepository";

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) { }

  //define o tipo ?
  execute(): Category[] {
    const categories = this.categoriesRepository.list()

    return categories
  }
}


export { ListCategoriesUseCase }
