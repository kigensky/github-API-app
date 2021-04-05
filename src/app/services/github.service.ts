import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class GithubService {
  private username = "kigensky";
  private client_id = "b3a1893efc3e99b4688d";
  private client_secret = "ebe415bec772f9b9515180f4b67adf9fc1a6eae2";

  constructor(private http: HttpClient) {
    console.log("Github service started");
  }
  getUser() {
    return this.http.get(
      "https://api.github.com/users/" +
        this.username +
        "?client_id=" +
        this.client_id +
        "&client_secret=" +
        this.client_secret
    );
  }
  getRepos() {
    return this.http.get(
      "https://api.github.com/users/" +
        this.username +
        "/repos" +
        "?client_id=" +
        this.client_id +
        "&client_secret=" +
        this.client_secret
    );
  }
  updateUsername(username: any) {
    this.username = username;
  }
}
