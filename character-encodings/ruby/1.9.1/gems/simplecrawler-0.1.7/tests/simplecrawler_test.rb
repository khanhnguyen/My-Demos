require File.dirname(__FILE__) + '/../lib/simplecrawler'
require 'test/unit'
require 'uri'

class SimpleCrawlerTest < Test::Unit::TestCase
  
  def setup
	  @simplecrawler = SimpleCrawler::Crawler.new("http://www.example.com/")
  end
  

  def test_initialize_crawler
	  @crawler = SimpleCrawler::Crawler.new("http://www.example.com/")
	  assert @crawler.queue.length == 1
	  assert_equal "/", @crawler.queue[0]
  end

  def test_initialize_crawler_with_path
	  @crawler = SimpleCrawler::Crawler.new("http://www.example.com/deep/down/in/hierarchy/")
	  assert @crawler.queue.length == 1
	  assert_equal "/deep/down/in/hierarchy/", @crawler.queue[0]
  end

  def test_initialize_crawler_without_uri_path
	  @crawler = SimpleCrawler::Crawler.new("http://www.example.com")
	  assert @crawler.queue.length == 1

	  # Default path (/) should be appended
	  assert @crawler.queue[0][-1..-1] == "/"
  end



  def test_maxcount_limit
	  @simplecrawler.maxcount = 2
	  @simplecrawler.add_uri("http://www.example.com/second/")
	  @simplecrawler.add_uri("http://www.example.com/third/")
	  assert_equal 2, @simplecrawler.queue.length
  end

  def test_maxcount_unlimited
	  @simplecrawler.add_uri("http://www.example.com/second/")
	  @simplecrawler.add_uri("http://www.example.com/third/")
	  assert @simplecrawler.queue.length == 3
  end

  def test_skip_uri
	  @simplecrawler.skip_patterns = ["\\.doc$"]
	  assert @simplecrawler.skip_uri?(URI.parse("http://www.example.com/word.doc"))
	  assert_equal false, @simplecrawler.skip_uri?(URI.parse("http://www.example.com/doc.htm"))
  end
  
  def test_include_pattern
	  @simplecrawler.include_patterns = ["\\/test\\/", "docs"]
	  assert @simplecrawler.skip_uri?(URI.parse("http://www.example.com/word.doc"))
	  assert_equal false, @simplecrawler.skip_uri?(URI.parse("http://www.example.com/test/doc.htm"))
	  assert_equal false, @simplecrawler.skip_uri?(URI.parse("http://www.example.com/docs/doc.htm"))
  end
  


  def test_addded_paths_shuld_be_distinct
	  @simplecrawler.add_uri("http://www.example.com/") # This path is already in the queue
	  assert_equal 1, @simplecrawler.queue.length
  end

  def test_add_uri
	  @simplecrawler.add_uri("http://www.example.com/new/")

	  # The queue should now contain the initial base url and the newly added path
	  assert_equal 2, @simplecrawler.queue.length
  end


  def test_add_uri_with_space
	  @simplecrawler.add_uri("http://www.example.com/new/    ")

	  # The queue should now contain the initial base url and the newly added path without spaces
	  assert_equal 2, @simplecrawler.queue.length
	  assert @simplecrawler.queue[1][-1..-1] != " "
  end



  def test_queue_local_link
	  doc = SimpleCrawler::Document.new
	  doc.data = "<html><head></head><body><a href=\"http://www.example.com/new/\">Test</a></body></html>"
	  @simplecrawler.queue_local_links(doc)
	  assert_equal 2, @simplecrawler.queue.length
  end


  def test_queue_local_fragment_identifier_skipped
	  doc = SimpleCrawler::Document.new
	  doc.data = "<html><head></head><body><a href=\"#new\">Test</a></body></html>"
	  @simplecrawler.queue_local_links(doc)
	  assert_equal 1, @simplecrawler.queue.length
  end


  def test_queue_local_links_for_empty_doc
	  doc = SimpleCrawler::Document.new
	  doc.data = ""
	  @simplecrawler.queue_local_links(doc)
	  assert_equal 1, @simplecrawler.queue.length
  end


  def test_queue_local_links_for_nil_doc
	  doc = SimpleCrawler::Document.new
	  doc.data = nil
	  @simplecrawler.queue_local_links(doc)
	  assert_equal 1, @simplecrawler.queue.length
  end

end
