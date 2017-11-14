function IcebreakerResponse(email){
  this.email = email
}

IcerbreakerResponse.BatchCreate = function(array) {
  return array.map(function(users){
    return new IcebreakerResponse(users[0], users[1])
  })
}
