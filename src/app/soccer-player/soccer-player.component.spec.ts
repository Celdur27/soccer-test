import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoccerPlayerComponent } from './soccer-player.component';

describe('SoccerPlayerComponent', () => {
  let component: SoccerPlayerComponent;
  let fixture: ComponentFixture<SoccerPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoccerPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoccerPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
