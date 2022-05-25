import React from 'react';

const Blog = () => {
    return (
        <div className='mx-10 mt-8'>
           <h2 className='text-3xl font-medium'>1. How will you improve the performance of a React Application ?</h2>
           <p>To optimize React rendering, you need to make sure that additives acquire best essential props. It will assist you to control the CPU consumption and keep away from over-rendering unnecessary functions. The solution is to create a useful issue that will collect all props and redistribute them to different components.Keeping factor country nearby wherein important.Memoizing React components to prevent unnecessary re-renders.Code-splitting in React the usage of dynamic import().Windowing or list virtualization in React.Lazy loading snap shots in React.</p>
           <h2 className='text-3xl font-medium mt-3'>2. What are the different ways to manage a state in a React application ?</h2>
           <p>React makes use of an observable item because the nation that observes what modifications are made to the kingdom and allows the factor behave as a result. For example, if we replace the kingdom of any element just like the following the web site will no longer re-render itself due to the fact React State will not be able to discover the modifications made.Props are used to skip facts from one component to another. The state is a local statistics garage this is nearby to the component handiest and cannot be exceeded to different components</p>
           <h2 className='text-3xl font-medium mt-3'>3. How does prototypical inheritance work ?</h2>
           <p>Every object with its strategies and homes contains an inner and hidden belongings known as [[Prototype]]. The Prototypal Inheritance is a function in javascript used to add methods and homes in gadgets. It is a way by way of which an item can inherit the residences and methods of another object. Traditionally, for you to get and set the [[Prototype]] of an item, we use Object.GetPrototypeOf and Object.SetPrototypeOf. Nowadays, in modern language, it's miles being set using __proto__.</p>
           <h2 className='text-3xl font-medium mt-3'>4. What is a unit test? Why should write unit tests ?</h2>
           <p>Unit testing is a component of check-pushed improvement (TDD), a practical method that takes a meticulous method to constructing a product by means of persistent trying out and revision. This checking out technique is also the primary level of software program testing, that's done before different trying out techniques which include integration testing. Unit assessments are typically isolated to make sure a unit does not rely on any external code or functions. Testing may be performed manually however is regularly automatic.</p>
           <h2 className='text-3xl font-medium mt-3'>5. Why you do not set the state directly in React. For example, if you have `const [products, setProducts] = useState([])`. Why you do not set `products = [...]` instead, you use the `setProducts` ?</h2>
           <p className='mb-5'>When you without delay update the nation, it does now not change this. Nation right now. Instead, it creates a pending country transition, and getting access to it after calling this approach will simplest go back the present price. You will lose manage of the nation across all additives.UseState is without a doubt a nation updating characteristic. Const is used here because the alternate of price is being controlled some other place through React. You're telling React to manage a few cost for you by using calling useState.</p>
        </div>
    );
};

export default Blog;