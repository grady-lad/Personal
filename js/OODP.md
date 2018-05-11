### prototype inheritance

* In js objects have a hidden prop called `[[Prototype]]` its either null or references another object.
* When we want to read a val from an object and its missing js reads it from the prototype chain
* can be set using `obj.__proto__`
* can only be one prototype
* In javascript a function can be used as a constructor.That means we can create objects out of them using new keyword.Every constructor function comes with a built in object chained with them.This built in object is called prototype .Instances of a constructor function use `__ proto __` to access the prototype of it's constructor function.

### classical inheritance problems

* Defines a blueprint and there is tight coupling between classes inheriting from other classes

### inheritance in js benefits

* we can use `Concatenative inheritance` or `mixins` to specify which properties we want when creating objects. Use `Object.assign()`
* we can use `Object.create()` to add the proptype to the object
* We can use functional inheritance to create objects, Basically a function which returns an object. But! can maintain some internal state due to closures;)
