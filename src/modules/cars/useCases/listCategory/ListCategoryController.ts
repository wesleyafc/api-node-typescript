import { Request, Response } from "express"

import { ListCategoriesUseCase } from "./ListCategoryUseCase"


class ListCategoriesController {
  constructor(private listCategoryUseCase: ListCategoriesUseCase) { }


  handle(request: Request, response: Response): Response {
    const all = this.listCategoryUseCase.execute()

    return response.json(all)
  }
}


export { ListCategoriesController }
