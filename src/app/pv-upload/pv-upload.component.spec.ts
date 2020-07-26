import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PvUploadComponent } from './pv-upload.component';

describe('PvUploadComponent', () => {
  let component: PvUploadComponent;
  let fixture: ComponentFixture<PvUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PvUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PvUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
