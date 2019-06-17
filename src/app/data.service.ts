import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { TagPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';

import { log } from 'util';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  authToken :any ;
  user : any;
  constructor(private http : HttpClient ) { }


  register(user){



   return this.http.post('http://127.0.0.1:3000/users/register' , user);
  }
  login(user){

   return this.http.post('http://127.0.0.1:3000/users/authenticate' , user);
  }

  getSomethin(){

     return this.http.get('http://127.0.0.1:8000/api/offer');

      // return  this.http.get('https://reqres.in/api/users');
  }
  storeUserData(token , user){
    localStorage.setItem('id_token' , token);
    localStorage.setItem('user' , JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }
  logOut(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();



  }




  followRequests(){
    this.loadToken();
    var headers = {'authorization' : this.authToken};
    return this.http.get('http://127.0.0.1:3000/users/followRequests' , {headers : headers });
  }
  getSomeone(username){
    this.loadToken();
    var headers = {'authorization' : this.authToken};
    return this.http.get('http://127.0.0.1:3000/users/' + username , {headers : headers });
  }
  someonePosts(id){
    this.loadToken();
    var headers = {'authorization' : this.authToken};

     return this.http.get('http://127.0.0.1:3000/posts/user/' + id , {headers : headers });
  }
  getFollowers(id){
    this.loadToken();
    var headers = {'authorization' : this.authToken};

     return this.http.get('http://127.0.0.1:3000/follow/followers/' + id , {headers : headers });
  }
  getFollowings(id){
    this.loadToken();
    var headers = {'authorization' : this.authToken};

     return this.http.get('http://127.0.0.1:3000/follow/followings/' + id , {headers : headers });
  }
  getData(datatype){
    this.loadToken();
    var headers = {'authorization' : this.authToken};

     return this.http.get('http://127.0.0.1:3000/data/' + datatype , {headers : headers });
  }
  follow(username){
    this.loadToken();
    var headers = {'authorization' : this.authToken};

     return this.http.get('http://127.0.0.1:3000/follow/' + username , {headers : headers });
  }

  unFollow(username){
    this.loadToken();
    var headers = {'authorization' : this.authToken};

     return this.http.delete('http://127.0.0.1:3000/follow/remove/' + username , {headers : headers });
  }
  cancelRequest(username){
    this.loadToken();
    var headers = {'authorization' : this.authToken};

     return this.http.delete('http://127.0.0.1:3000/follow/request/remove/' + username , {headers : headers });
  }
  accept(id){
    this.loadToken();
    var headers = {'authorization' : this.authToken};

     return this.http.get('http://127.0.0.1:3000/follow/accept/' + id , {headers : headers });
  }
  refuse(id){
    this.loadToken();
    var headers = {'authorization' : this.authToken};

     return this.http.get('http://127.0.0.1:3000/follow/refuse/' + id , {headers : headers });
  }

  checkFollow(username){


    this.loadToken();
    var headers = {'authorization' : this.authToken};
    return this.http.get('http://127.0.0.1:3000/follow/check/' + username , {headers : headers });



  }

  profilePosts(id , amount){
    this.loadToken();
    var headers = {'authorization' : this.authToken};

     return this.http.get(`http://127.0.0.1:3000/posts/user/${id}/?amount=` + amount , {headers : headers  });

  }
  getPost(id){
    this.loadToken();
    var headers = {'authorization' : this.authToken};

     return this.http.get('http://127.0.0.1:3000/posts/' + id , {headers : headers  });
  }
  getComment(postId , commentId){
    this.loadToken();
    var headers = {'authorization' : this.authToken};

     return this.http.get(`http://127.0.0.1:3000/posts/${postId}/${commentId}`  , {headers : headers  });
  }
  getComments(postId){
    this.loadToken();
    var headers = {'authorization' : this.authToken};

     return this.http.get(`http://127.0.0.1:3000/posts/${postId}/comments` , {headers : headers  });
  }
  getReplies(commentId){
    this.loadToken();
    var headers = {'authorization' : this.authToken};

     return this.http.get(`http://127.0.0.1:3000/posts/${commentId}/replies` , {headers : headers  });
  }
  newPost(Post){
    this.loadToken();
    console.log(Post);

    var headers = {'authorization' : this.authToken};

    return this.http.post('http://127.0.0.1:3000/posts' ,  Post  , {headers : headers });
  }


  newComment(comment , postId){
    this.loadToken();
    console.log(comment);

    var headers = {'authorization' : this.authToken};

    return this.http.post(`http://127.0.0.1:3000/posts/${postId}/comment` ,  comment  , {headers : headers });
  }
  like(postId){
    this.loadToken();

    var headers = {'authorization' : this.authToken};

    return this.http.get(`http://127.0.0.1:3000/posts/${postId}/like`   , {headers : headers });
  }
  dislike(postId){
    this.loadToken();

    var headers = {'authorization' : this.authToken};

    return this.http.get(`http://127.0.0.1:3000/posts/${postId}/dislike`   , {headers : headers });
  }



  loadToken(){
   this.authToken = localStorage.getItem('id_token');
   this.user = JSON.parse( localStorage.getItem('user'));


  }
}
