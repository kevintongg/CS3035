%unification, backchaining
% trace. (in swipl) shows prolog backchaining
/* Terms unify when:
	1: they are the same atom
	2: one of the terms is a simple variable
	3: complex terms:
		a. Terms have same arity
		b. Corresponding terms unify
		c. Terms are applied consistently*/

singer(bob).
singer(miranda).
engineer(jess).
philanthropist(eric).
scientist(rachel).
famous(miranda).
over_million_youtube_hits(pewdiepie).
from_sweden(pewdiepie).




famous(X) :- over_million_youtube_hits(X).
singer(X) :- from_sweden(X).

rich(X) :- philanthropist(X).
rich(X) :- famous(X), singer(X).





fred.
ted.
/*
at swipl prompt:
rich(eric).
rich(miranda).
*/



%recursion
parent(ted, mike).
parent(mike, sam).
parent(sam, fred).
parent(fred, william).
parent(william, josiah).
parent(josiah, zedekiah).

related(X, Y) :-
	parent(X, Y).

related(X, Y) :-
	parent(X, Z),
	related(Z, Y).

on_route(rome).

on_route(Place):-
	move(Place,Method,NewPlace),
	on_route(NewPlace).

move(home,taxi,halifax).
move(halifax,train,gatwick).
move(gatwick,plane,rome).

%recursion for loops
 count_to_ten(10) :-
 	write(10), nl.

count_to_ten(X) :-
	write(X), nl,
	Y is X + 1,
	count_to_ten(Y).

guess_num :- loop(start).

loop(15) :-
	write(" You guessed it.").

loop(X) :-
	read(Guess),
	write(Guess),
	loop(Guess).


%Using found values and ;
count_down(High) :-
	between(0, High, Y),
	Z is High - Y,
	write(Z), nl.


%lists
%syntax - square brackets with elements separated
%by commas. Can nest lists in lists

%btw, cannot assign values to variables in knowledge base

/* head, Tail [H|T]*/
p([H|T]).


%recursion searching for item in lists
in(Item, [Item|Rest]). %base case

in(Item, [HeadThatIsntItem|Tail]) :-
	in(Item, Tail).

%recursion printing a list
pr([]) :-
	write("done"),nl.


pr([H|T]) :-
	write(H), nl, pr(T).
