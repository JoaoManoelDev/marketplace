import { marketplaceApiClient } from "../../../shared/api/marketplace";
import { IRegisterRequest, IRegisterResponse } from "../interfaces/register";

export async function registerService(request: IRegisterRequest): Promise<IRegisterResponse> {
  const response = await marketplaceApiClient.post("/auth/register", request);

  return response.data;
}
