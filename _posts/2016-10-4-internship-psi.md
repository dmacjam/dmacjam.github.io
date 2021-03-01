---
title:      	"[Internship] Software Engineer @ Paul Scherrer Institute"
categories:
  - Work
tags:
  - internship
  - work
---
My internship at Paul Scherrer Institute.
<!--more-->

# PSI profile
[PSI](https://en.wikipedia.org/wiki/Paul_Scherrer_Institute) is the largest research institute for natural and engineering sciences in Switzerland. It is part of ETH domain and has three main fields of research:

- *Matter and materials* – studying the structure of materials, developing new materials.
- *Energy and environment* – creation of sustain energy sources.
- *Human health* – proton radiotherapy.

It employs around 2000 people and it is publicly funded.

# Software Engineer Internship 
During my internship I developed a software for managing on-call responsibilities (in Switzerland called pikett) for employees. Now it is used in more than 30 departments at PSI and the tool digitalized the assignment and viewing of the on-call responsible employees, which reduced the time of assignement, prevents mistakes and situations when there is no employee on-call. 

I built software for managing employees, department groups and assigning on-call responsibilities in **Java**. Swing with *MigLayout* as a GUI tools was used. The Java software provides user authentication with four types of users (Admin, Department admin, On-call changer, User) for which *Apache Shiro* security framework was used. The application has one centralized *PostgreSQL* database node. As a JDBC connector *EclipseLink* was used. For viewing current on-call employee within departments a webpage in *PHP* is implemented. In case of central database node failure, automatic *Python* script task creates daily a backup of websites of on-call employee for all departments. Finally, another script in Python checks each morning if an on-call employee is defined and if not, it sends an email to responsible person.

**Supervisor**: Daniel Kramer (daniel.kramer@psi.ch)