
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments('id');
  
        tbl.string('vin', 17)
        .notNullable()
        .unique()
        .index();
  
        tbl.string('model', 128)
        .notNullable()
        .index();

        tbl.string('make', 128)
        .notNullable()
        .index();
  
        tbl.integer('mileage')
        .notNullable()
        .index();
  
        tbl.string('transType', 128)
        .index();
  
        tbl.string('titleStatus', 128)
        .index();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars')
  };