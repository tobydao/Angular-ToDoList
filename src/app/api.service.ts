import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

export class APIService {

  url: string = 'https://todoapp-c409d-default-rtdb.europe-west1.firebasedatabase.app/task.json';

  constructor(private http: HttpClient) {}

  sendTask(task: string){
    this.http.post(
      this.url,
      task
    ).subscribe(responseData => {
      console.log(responseData);
    })
  }

  fetchPosts(){
    this.http
      .get(this.url)
      .pipe(map(responseData => {
        const taskArray = [];
        for (const key in responseData) {
          if(responseData.hasOwnProperty(key)) {
            taskArray.push(responseData[key]) //
          }
        }
        return taskArray;
      }))
      .subscribe(posts => 
        console.log(posts));
  }

}