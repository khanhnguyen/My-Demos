# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = %q{simplecrawler}
  s.version = "0.1.7"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
<<<<<<< HEAD
  s.authors = [%q{Peter Krantz}]
  s.autorequire = %q{simplecrawler}
  s.date = %q{2009-05-04}
  s.email = %q{peter.krantzNODAMNSPAM@gmail.com}
  s.homepage = %q{http://www.peterkrantz.com/simplecrawler/wiki/}
  s.require_paths = [%q{lib}]
  s.required_ruby_version = Gem::Requirement.new(">= 1.8.2")
  s.rubyforge_project = %q{simplecrawler}
  s.rubygems_version = %q{1.8.5}
  s.summary = %q{A generic library for web crawling.}
=======
  s.authors = ["Peter Krantz"]
  s.autorequire = %q{simplecrawler}
  s.date = %q{2009-05-04}
  s.email = %q{peter.krantzNODAMNSPAM@gmail.com}
  s.files = ["tests/simplecrawler_test.rb"]
  s.homepage = %q{http://www.peterkrantz.com/simplecrawler/wiki/}
  s.require_paths = ["lib"]
  s.required_ruby_version = Gem::Requirement.new(">= 1.8.2")
  s.rubyforge_project = %q{simplecrawler}
  s.rubygems_version = %q{1.6.2}
  s.summary = %q{A generic library for web crawling.}
  s.test_files = ["tests/simplecrawler_test.rb"]
>>>>>>> c74812fcca4e88972cb953ba5673493303de4960

  if s.respond_to? :specification_version then
    s.specification_version = 2

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<hpricot>, [">= 0.5"])
    else
      s.add_dependency(%q<hpricot>, [">= 0.5"])
    end
  else
    s.add_dependency(%q<hpricot>, [">= 0.5"])
  end
end
