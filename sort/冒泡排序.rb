def bubble(arr)
  (arr.length-1).downto(1) do |j|
    a1 = arr.dup
    j.times do |i|
      if arr > arr[i+1]
        arr,arr[i+1] = arr[i+1],arr
      end
    end
    break if a1 == arr
  end
  arr
end
