import { TestBed } from '@angular/core/testing';

import { FormService } from './form.service';

describe('FormService', () => {
  let service: FormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Initial state', () => {
    it('should have initial form status as false', (done) => {
      service.formStatus$.subscribe((status) => {
        expect(status).toBe(false);
        done();
      });
    });
    it('should have initial current step as 1', (done) => {
      service.currentStep$.subscribe((step) => {
        expect(step).toBe(1);
        done();
      });
    });
  });
  describe('validateForm Method', () => {
    it('should set form status to true and complete the subject if form is valid', (done) => {
      service.validateForm(true);
      service.formStatus$.subscribe({
        next: (status) => expect(status).toBe(true),
        complete: () => {
          expect(true).toBe(true); 
          done();
        },
      });
    });

    it('should set form status to error if form is invalid', (done) => {
      service.validateForm(false);
      service.formStatus$.subscribe({
        error: (err) => {
          expect(err).toBe('Form is invalid');
          done();
        },
      });
    });
  });
});
