import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { PickupCallPage } from './pickup-call.page';

describe('PickupCallPage', () => {
  let component: PickupCallPage;
  let fixture: ComponentFixture<PickupCallPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PickupCallPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
    ]
    }).compileComponents();

    fixture = TestBed.createComponent(PickupCallPage);
    router=TestBed.get(router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to home on create pickup call', () => {
    spyOn(router,'navigate');
    component.createp();
    expect(router,navigate).toHaveCalledWith(['home']);
  });
});
