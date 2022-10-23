import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { ProposPage } from './propos.page';

describe('ProposPage', () => {
  let component: ProposPage;
  let fixture: ComponentFixture<ProposPage>;


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposPage ],


      imports: [IonicModule.forRoot(),
      AppRoutingModule
    ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProposPage);
 
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

 
});
