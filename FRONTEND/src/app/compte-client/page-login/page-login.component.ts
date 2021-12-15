import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/user.service';
import { User } from 'src/shared/models/user';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {

  formLogin!: FormGroup;
  users$!: Observable<User>;

  constructor(private formBuilder: FormBuilder, private authentificationService: UserService) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      login: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });
  }


  submit(): void{
    console.log(this.formLogin.get("login")?.value);
    console.log(this.formLogin.get("password")?.value);

    this.authentificationService.postLogin(this.formLogin.get("login")?.value, this.formLogin.get("password")?.value).subscribe(
      ()=>{
        this.users$ = this.authentificationService.getLogin(this.formLogin.get("login")?.value);
      }
    );
  }

}
