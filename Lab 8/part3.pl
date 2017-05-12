% To run, open swipl and run 'readfacts.'

main:-
	open('myname.txt', read, Str),
	read(Str, House1),
	read(Str, House2),
	read(Str, House3),
	read(Str, House4),
	close(Str),
	write([House1, House2, House3, House4]), nl,
	halt.

readfacts:-
	open('myname.txt',read, In),
	repeat,
	read_line_to_codes(In,X), writef(" "),
	writef(X), nl,
	X = end_of_file, !,
	nl,
	close(In).
