import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoveryChatComponent } from './discovery-chat.component';

describe('DiscoveryChatComponent', () => {
  let component: DiscoveryChatComponent;
  let fixture: ComponentFixture<DiscoveryChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoveryChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoveryChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
