import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router:Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: 
      [IonicModule.forRoot(),
        AppRoutingModule,
        ReactiveFormsModule
      
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    router=TestBed.get(router);
    component = fixture.componentInstance;
    fixture.detectChanges();

  }));
  it('should create form on init',()=>{
    component.ngOnInit();
    
    expect(component.form).toBeUndefined();


  })

  it('should go to home page on login', () => {
    spyOn(router,'navigate');

    component.login();

    expect(router.navigate).toHaveBeenCalledWith(['home']);

  });


  it('should go to register page on register', () => {
    spyOn(router,'navigate');
    component.register();
    expect(router.navigate).toHaveBeenCalledWith(['register']);
  });


  it('should go to propos on apropos', () => {
    spyOn(router,'navigate');
    component.propos();
    expect(router.navigate).toHaveBeenCalledWith(['propos']);
  });




});
