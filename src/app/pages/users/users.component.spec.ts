import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsModule } from '../../components/components.module';

import { UsersComponent } from '../users/users.component';

import { UserService } from '../../services/user/user.service';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
      declarations: [
        UsersComponent
      ],
      imports: [
        ComponentsModule
      ],
      providers: [
        { provide: 'user', useClass: UserService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
