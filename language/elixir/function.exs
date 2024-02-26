defmodule Tutorial do
  def sum_def(a, b) do
    a + b
  end
end

sum = fn (a, b) -> a + b end
sum_short = &(&1 + &2)

IO.puts(Tutorial.sum_def(11, 66))
IO.puts(sum.(1, 2))
IO.puts sum_short.(9, 12)
