import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    deleteEntry: function(){
      var model = this.get('model');
      model.destroyRecord();
    }
  }
});
