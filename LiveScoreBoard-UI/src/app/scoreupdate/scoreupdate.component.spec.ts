import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreupdateComponent } from './scoreupdate.component';

describe('ScoreupdateComponent', () => {
  let component: ScoreupdateComponent;
  let fixture: ComponentFixture<ScoreupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
