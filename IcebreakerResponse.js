function IcebreakerResponse(email){
  this.email = email
}

user.BatchCreate = function(array) {
  return array.map(function(users){
    return new IcebreakerResponse(users[0], users[1])
  })
}
