  class Person {
      constructor() {
          this.name;
          this.age;
          this.contact;
          this.email;
      }

      setPerson(name, age, contact, email) {
          this.name = name;
          this.age = age;
          this.contact = contact;
          this.email = email;
      }
  }

  class College extends Person {
      constructor() {
          super();
          this.collegeName;
          this.address;
      }

      setCollege(collegeName, address) {
          this.collegeName = collegeName;
          this.address = address;
      }
  }

  class Student extends College {
      constructor() {
          super();
          this.sid;
          this.course;
          this.cgpa;
      }

      setStudent(sid, course, cgpa) {
          this.sid = sid;
          this.course = course;
          this.cgpa = cgpa;
      }

      getStudent() {
          console.log(`Student Id: ${this.sid}`);
          console.log(`Student Name: ${this.name}`);
          console.log(`Student Age: ${this.age}`);
          console.log(`Student Contact Number: ${this.contact}`);
          console.log(`Student Email Id: ${this.email}`);
          console.log(`College Name: ${this.collegeName}`);
          console.log(`College Address: ${this.address}`);
          console.log(`Course Name: ${this.course}`);
          console.log(`Student CGPA: ${this.cgpa}`);
      }
  }

  let student = new Student();
  student.setPerson('Nurul Shaikh', 17, 9274490242, 'shaikhnurul8200@gmail.com');
  student.setCollege('Red & White Skill Education', 'Navsari');
  student.setStudent(8133, 'Front-End Development', 9.4);
  student.getStudent();