% To run, open swipl and run 'write.'

writeitem(X, Stream) :-
	write(Stream, X),  nl(Stream).

writelist([], Stream).

writelist([H|T], Stream) :-
	writeitem(H, Stream),
	writelist(T, Stream).

write :-
	open('myname.txt', write, Stream), writelist(['k', 'e', 'v', 'i', 'n'], Stream),
	close(Stream),
	halt.
