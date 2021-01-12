import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanAddComponent } from './clan-add.component';

describe('ClanAddComponent', () => {
  let component: ClanAddComponent;
  let fixture: ComponentFixture<ClanAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
