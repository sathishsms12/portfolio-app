import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatasService {

  constructor() { }

  projects = [
    { name: 'PITCHcrm - Super-admin', description: `We developed a super-admin dashboard for the client's admin side to manage users,
campaigns, accounts, and events. This dashboard enables the creation and assignment of email
templates and events to specific accounts as needed. Super-admin access is provided to customer

accounts, allowing for comprehensive management capabilities. The dashboard also facilitates real-
time monitoring of daily email and SMS blast statistics, management of subscription plans, and

allocation of unique mobile numbers for SMS blasts for each account. Additionally, super-admins can
oversee the synchronization process of data from POS systems to ensure accurate data delivery to all
accounts. We also integrated a unified dashboard for super-admins to access and manage multiple
projects, allowing them to view and manage all associated accounts from a single interface. This
solution enhances operational efficiency and provides robust tools for managing extensive client
portfolios.`, technologies: 'Angular 17, TypeScript, SCSS' },
    { name: 'The lookout - GTR',
      description:  `A project about Alcohol alcohol-supplying company that is handled by the marketing team of the company. We’ll provide a detailed description of the beverages & their history. There are four
different levels of logins. Each user has various levels of access to the app due to their role. We’ll
provide the quiz of the month for each month. The quiz will be related to the history of beverages.
The user will earn points through the quiz & they can redeem the prizes using the points earned.`, 
technologies: 'Angular 11, TypeScript, SCSS' },
    { name: 'PITCHcrm - Dashboad',
      description: `PITCHcrm, is an Email & SMS marketing platform that’s easy to use, affordable, and can be
integrated with POS systems. PITCH automatically syncs customer & sales data to your marketing
platform and allows you to easily create automated campaigns based on this data, all at a price small
to medium-sized businesses can afford.
In this project, we separated the entire project into several microservices. That is, PITCHcrm is a
large project in which we are syncing clients and bookings/sales from many data sources such as light-
speed and Club Prophet. The authentication process will not be interrupted owing to data
synchronization. That is why we have broken it into numerous microservices. Sign up, login, and
authentication functions are all handled by one microservice, while contacts, campaigns, and email
templates are handled by other microservices. PITCHcrm's objective is to sync customers with their
customer type and booking/sales, filtering customers by reservations, birthday, country, and so on,
and sending them emails at the appropriate times`, 
technologies: 'Angular 14, TypeScript, SCSS' },
    // Add more projects as needed
  ];

  getdata(){
    return this.projects;
  }
}
