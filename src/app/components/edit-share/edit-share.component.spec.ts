import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShareComponent } from './edit-share.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

describe('EditShareComponent', () => {
  let component: EditShareComponent;
  let fixture: ComponentFixture<EditShareComponent>;

  const fake = {
    snapshot: { get:()=>'' , paramMap:{ get:()=>''} },
    getTransaction:()=>'',
  } as unknown as ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditShareComponent ],
      imports: [ HttpClientModule],
      providers: [
        {provide: DataService, useValue: fake},
        {provide: ActivatedRoute, useValue: fake}
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
