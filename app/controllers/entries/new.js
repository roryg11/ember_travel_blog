import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    newEntry: function(){
      var title = this.get('newTitle');
      var image = this.get('newImage');
      var description = this.get('newDescription');
      var entry = this.store.createRecord('entry', {title: title, image: image, description: description});
      entry.save();
      this.set('newTitle', '');
      this.set('newImage', '');
      this.set('newDescription', '');
    }
  }
});
