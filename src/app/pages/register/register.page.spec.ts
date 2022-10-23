import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterPage } from './register.page';

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;
  let router :router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPage 
      ],
      imports: [IonicModule.forRoot()
        appRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterPage);
    router=TestBed.get(router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should should go to home on register', () => {
    spyOn(router,'navigate');
    component.register();
    expect(router,navigate).toHaveBeenCalled(['home']);
  });
});
