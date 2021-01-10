import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnjigaShowComponent } from './knjiga-show.component';

describe('KnjigaShowComponent', () => {
  let component: KnjigaShowComponent;
  let fixture: ComponentFixture<KnjigaShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnjigaShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnjigaShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
