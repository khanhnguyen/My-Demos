require 'open-uri'

module Googlesearch
  #return Array all hash item
  #Item key: imgUrl, thumbUrl,content, thumbWidth, thumbHeight, sql
  #Item value: big img url, thumb img url, string, int, int, string
  def search(q,start={},size='xxlarge',amount=20)#return array all hash Items
    q = q.gsub(/ /,'')
    url = "http://images.google.com.vn/images?imgsz=#{size}&gbv=2&hl=en&q=#{q}&btnG=Search+Images&start=#{start}&ndsp=#{amount}"
    links =[]
    begin
      open(url) {
        |page| page_content = page.read()
        links = page_content.scan(/imgres\?(.*)+[<\/a>]/).flatten[0].split('dyn.Img("/imgres?')
        0.upto(links.size - 1){|i|
          a = links[i].split(',')
          links[i] = {'start'=> a[0].scan(/start=(.*)\"/),'imgUrl' =>a[3].gsub(/\"/,''),'thumbUrl' => "http://tbn0.google.com/images?q=tbn:#{a[2].gsub(/\"/,'')}#{a[3].gsub(/\"/,'')}",'content' => a[6].gsub(/\"/,''),'thumbWidth' => a[4].gsub(/\"/,''),'thumbHeight' => a[5].gsub(/\"/,''),'sql' => a[12].gsub(/\"/,'')}
        } }
    rescue
    end
    return links
  end
  
end