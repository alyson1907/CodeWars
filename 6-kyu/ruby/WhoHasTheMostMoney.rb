class Student
  attr_reader :name
  attr_reader :fives
  attr_reader :tens
  attr_reader :twenties

  def initialize(name, fives, tens, twenties)
    @name = name
    @fives = fives
    @tens = tens
    @twenties = twenties
  end
end

def getTotalMoney(student)
  return student.fives + (2 * student.tens) + (4 * student.twenties)
end

def most_money(students)
  maxMoney = students.map{ |s| getTotalMoney(s)}.max
  mostMoneyStudents = students.select{|s| getTotalMoney(s) == maxMoney}
  return mostMoneyStudents.length > 1 ? 'all' : mostMoneyStudents.first.name
end

phil = Student.new("Phil", 2, 2, 1)
cam = Student.new("Cameron", 2, 2, 0)
geoff = Student.new("Geoff", 0, 3, 0)
puts most_money([cam, geoff, phil])
puts most_money([cam, geoff])
puts most_money([geoff])
