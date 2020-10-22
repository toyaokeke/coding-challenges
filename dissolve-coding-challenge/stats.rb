# Invoke this script at a Terminal prompt as:
#   ruby stats.rb word_set_1.rb
#   ruby stats.rb word_set_2.rb
# This script will print the number of elements in the array in each 
# file. The first file will print 12, the second file will print 18.

word_set = eval(File.read ARGV[0])
puts word_set.size


# The Story Card
# --------------
# As a Product Reviewer, I would like the admin screen for a
# batch of Contributor uploads to show me the keyword statistics
# for that batch, so that I can quickly evaluate if the Contributor 
# has tried to spam or "stuff" the keywords.


# The Backstory
# -------------
# At Dissolve, our Contributors submit a batch of content (either 
# photos or video files). After uploading the files, the
# Contributor has to keyword each file with a list of comma
# separated words and phrases that describe each file they uploaded.
# Our search engine uses these keywords to find content that matches
# a Customer's search.

# Sometimes a Contributor will keyword their files with words that
# don't match what is actually depicted in the file. For example,
# keywording a picture of a forest with the word "business" so that
# their forest picture comes up in the results of a search for
# "business meetings". We call this spamming.

# The files word_set_1.rb and word_set_2.rb represent real-world set
# of data for two batches of uploads from the same Contributor.

# The team that reviews the Contributor's batches want a simple
# screen that shows the overall histogram of keywords in a batch.

# For example, for the following set of data:
#   ["a, b, c", "a", "x, y,z", "d,e,a,z"]
# the output the the Reviewer wants to see, in alphabetical order, is:
#   "a" - 3
#   "b" - 1
#   "c" - 1
#   "d" - 1
#   "e" - 1
#   "x" - 1
#   "y" - 1
#   "z" - 2


# Your Task
# ---------
# Write Ruby code that will take the variable word_set, above, that 
# was read from one of the two sample files, and will produce the
# requested result at the Terminal.
#
# We'd expect to be able to take the code you write below, and move it 
# without modification to our codebase. A developer should be able to
# use your code and some of their own code to produce and HTML-based 
# graph, for example. Implementing your code as a Class with at least 
# one public method will help meet our expectations. Other than that, 
# how you architect the class or classes, the algorithm, the naming, 
# commenting, calling convention, is entirely up to you.
#
# This is a short test; it should take less than an hour to
# implement. You are welcome to spend longer on it, but that is
# not a requirement. Also, this is not about whether you can write a 
# fancy one-line program. As a team, we have to be able to come back 
# to this code in six months, be able to read it, understand it 
# and maintain it. That said, if you wish to optimize for speed or
# memory use, you are free to do so.


# Your Code Here
# --------------
# Add your code here. When you are done, return the file to us. You
# can send it as a plain-text attachment to careers@dissolve.com with the 
# subject line
#
#   Coding Test: Your First and Last Name 
#
# You can also place the file in your cloud storage environment,
# such as DropBox, Google Drive, or others, and then email us a shared
# link to the file, with the same subject line as above.
#
# Thank you.

word_set
.flat_map{|words| words.split(',')}
.map{|word| word.strip}
.flat_map{|words| words.split}
.sort
.reduce(Hash.new(0)) { |h,w| h[w] += 1; h }
.each{|word| puts "#{word[0]} - #{word[1]}"}