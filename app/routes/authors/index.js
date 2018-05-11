import Route from '@ember/routing/route';

export default Route.extend({
    model({id}){
        const authors = this.modelFor('author');
        const author = authors.findBy('id', id);

        if(!author){
            this.transitionTo('author');
        }
        else{
            return author;
        }

    }
});
