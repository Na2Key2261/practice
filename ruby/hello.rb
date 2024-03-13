numbers = (1..100000).to_a.map do |n|
  if n.to_s.include?('8')
    "#{n.to_s.split('8')[0]}SNOWMAN#{n.to_s.split('8')[1]}"
  else
    n.to_s
  end
end.join('-')

range_88001_to_88030 = numbers[88001..88030]

puts range_88001_to_88030