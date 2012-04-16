Factory.define :scenario do |s|
  s.title "scenario title"
  s.given_block "111"
  s.then_block "222"
  s.when_block "333"  
end

Factory.define :feature do |f|
  f.title 'Some terse yet descriptive text of what is desired'
end
