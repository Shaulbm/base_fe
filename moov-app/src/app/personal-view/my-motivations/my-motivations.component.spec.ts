import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMotivationsComponent } from './my-motivations.component';

describe('MyMotivationsComponent', () => {
  let component: MyMotivationsComponent;
  let fixture: ComponentFixture<MyMotivationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyMotivationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMotivationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
