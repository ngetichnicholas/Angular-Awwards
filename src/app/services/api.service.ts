import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class apiService {
    constructor(private httpclient:HttpClient) {}
    getprojects():Observable<any> {
        return this.httpclient.get("https://nick-awwards.herokuapp.com/api/projects")

    }

}