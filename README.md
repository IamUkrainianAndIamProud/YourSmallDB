# YourSmallDB
A small DataBase fully written in JS. It's realized in JS objects. It has a plenty of default functions to work with.

# Files explained:
## 1.DB:
_this_ class lets you create a small DataBase, it has default methods like removeItem(), clearRoot(), createKeyPoint() and so on.
## 2.DBsController:
_this_ class lets you manipulate lots of different DataBases at the same time! It its own default methods like addDBs(), compareDBs(), hasDB() and more.

### Anything else to make it work?
const JavaScriptVanilla = true;
alert("_this_ library(if you can call it so) doesn't require anymore things than just downloading and linking it to your html to work properly");


# DB class's Documentation:
(When "Unknow" type of return comes out, it means that it depends on the value added to the DB earlier)
## 1.Special functions:
### Constructor
Constructor requires only one variable, which is "name". It's needed to work with DBsController.
### init()
Init function is void, it's created with one purpose - to be overriden and used whenever needed.
### last()
Last function is void, it's created to be overriden just like _init_(). But the difference is that _last_() is executed in function selfDestruct(), which must clear the whole DB. _last_() is executed just before the line "delete _this_".

## 2.Name functions:
Name functions are functions, which do operations with _this_.name property.
### setName(_name_)
Unknown: returns _this_.name property; Changes _this_.name property to the given argument.
### getName(_name_)
Unknow: returns _this_.name property; Does nothing else than just returning _this_.name property.
### isName(_name_)
Boolean: returns true or false; Check if _this_.name is the same as argument.

## 3.Adders:
Add properties to DB.
### addItemToRoot(_key_, _value_)
Void; Adds an item to root branch in the DB.
### addKeyPoint(_keyPointName_)
Void; Adds a new branch("keyPoint") to the DB's root branch;
### addItem(_keyPoint_, _key_, _value_)
Void; Adds an item to given branch;

## 4.Getters:
Return values found by keys;
### getItemFromRoot(_key_)
Unknown: return _this_[key]; Returns value found by the given key in the root branch.
### getKeyPoint(_keyPointName_)
Object: return _this_[keyPointName]; It does the same function as the last method, but it has shorter name and is meant to return a key point, not an item.
### getItem(_keyPoint_, _key_)
Unknown: return _this_[keyPoint][key]; Returns value if an item found in the given key point, using the given key.

## 5.Removers:
Delete properrties from DB.
### removeItemFromRoot(_key_)
Void; Removes an item found by the given key form the root branch of the DB.
### removeKeyPoint(_keyPointName_)
Void; Removes whole key point and its content from rootBranch.
### removeItem(_keyPoint_, _key_)
Void; Removes an item found by the given key from the given key point.

## 6.Checkers:
Check for existence of some DB's properties.
### hasItemInRoot(_key_)
Boolean: return _this_[key] != null; Returns true or false. True if there is item in the root branch and false if there isn't an item with such key in the root branch.
### isKeyPointEmpty(_keyPointName_)
Boolean: return _this_[keyPoint] !== {}; Returns true or false whether there are any items in the given key point or not.
## hasItem(_keyPoint_, _key_)
Boolean: return _this_[key] != null; Returns true or false whether there an item with the key given inside the given keypoint or not.

## 7.Special functions:
Just 2 short functions that may be useful.
### isEmpty()
Boolean: return _this_.items === {} && _this_.keyPoints.length < 0; Returns true or false whether the root is empty or not;
### copy(_name=_this_.name_)
Object: return that; Returns a copy of _this_. If "name" argument isn't given then the copy will have the same name as original.

## 8.Dangerous functions:
Dangerous functions are functions, which remove a lot of properties.
### clearRoot(_clearAll=false_)
Object: return _this_; Returns _this_ after clearing all items in it. If clearAll parameter is true then all key points will be removed too. Name of DB is saved.
### clear(_keyPointName_)
Object: return _this_; Returns _this_ after clearing the given key point's content.
### selfDestruct()
Object: return {}; Removes itself after doing the _last()_ function and then returns an empty object.
