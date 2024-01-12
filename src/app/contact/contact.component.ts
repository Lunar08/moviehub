import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Title,Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  submitted= false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private title:Title) { this.title.setTitle('ContactUs - showtime'); }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNo: [''],
      message: ['']
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      setTimeout(() => {
        this.submitted = true;
        alert('Form submitted successfully!');
        this.contactForm.reset(); // Reset the form
        this.submitted = false; // Reset the submission flag
      }, 1000); // Simulating a delay - replace this with actual submission logic
    } else {
      
      Object.values(this.contactForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

}
