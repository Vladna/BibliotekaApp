import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanShowComponent } from './clan-show.component';

describe('ClanShowComponent', () => {
  let component: ClanShowComponent;
  let fixture: ComponentFixture<ClanShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
