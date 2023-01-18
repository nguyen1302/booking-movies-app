import { APP_CONSTANT } from "../../../_constants/default.constants";
import { HttpRequest } from "../../../services/api";
import { CreateInitApi } from "../constants/initApi";

export class BookingHttp {
  request: any;
  constructor(endPoint = APP_CONSTANT.API.ENDPOINT) {
    //console.log(process.env.BOOKING_APP_API , 'endPoint')
    this.request = new HttpRequest(endPoint).request;
  }

  public getListMovie = (): Promise<any> => {
    //console.log(code, "code");
    return this.request.get(`${CreateInitApi.LIST_MOVIE}?maNhom=GP09`);
  };
}
