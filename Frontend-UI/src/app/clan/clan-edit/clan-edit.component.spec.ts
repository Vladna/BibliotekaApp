import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanEditComponent } from './clan-edit.component';

describe('ClanEditComponent', () => {
  let component: ClanEditComponent;
  let fixture: ComponentFixture<ClanEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
