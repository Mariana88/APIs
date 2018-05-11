var data_model_array = {
	db: [],
	nextID: 0,
	create(new_object) {
		// assigns a unique ID to each object
		//   once an ID has been used for one object, it can never be used for another
		//   once an object has been given an ID, it can never be given a new one
		// adds the object to db
			if (new_object.hasOwnProperty('id')){
				return 'Item already created'
			}
			new_object.id = this.nextID;
			this.db.push(new_object);
			this.nextID++;
	},
	read_one(entry_id) {
		let item;
		for (item of this.db){
			if (entry_id.id === item.id){
				return item; // object associated with that id
			}
		}
	},
/*	read_all() {
		return // all objects
	}
	update(entry_id, key_to_change, new_value) {
		// replace said entry with said value
	},
	remove(entry_id) {
		// remove object with said id
		// this operation must not change other objects' id's
	}*/
};

module.exports = data_model_array;
