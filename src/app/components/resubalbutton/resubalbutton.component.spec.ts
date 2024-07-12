import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResubalbuttonComponent } from './resubalbutton.component';

describe('ResubalbuttonComponent', () => {
  let component: ResubalbuttonComponent;
  let fixture: ComponentFixture<ResubalbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResubalbuttonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResubalbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
