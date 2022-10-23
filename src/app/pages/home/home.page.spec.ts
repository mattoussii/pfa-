import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { allowedNodeEnvironmentFlags } from 'process';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router:Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
    
    ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    router = TestBed.get(router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to pickup-calls on see all', () => {
    spyOn(router,'navigate');
    component.goToPickupCall();
    expect(router,navigate).toHaveBeenCalledWith(['pickup-calls']);
  });
  
  it('should go to new pickup-call on create pickup call', () => {
    spyOn(router,'navigate');
    component.create();
    expect(router,navigate).toHaveBeenCalledWith(['pickup-call']);
  });



});
