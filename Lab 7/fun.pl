% Part 1: (3pts) Do the exercise on http://www.doc.gold.ac.uk/~mas02gw/prolog_tutorial/prologpages/vars.html, to answer the following questions:
%
% Do these terms unify? After each that unifies, write which three of the rules covered in class were applied, and in which order.
%
% Write your answers in comments at the top of the pl file you will submit.
%
% eats(fred,tomatoes) unifies with eats(Whom,What)?      Yes/Corresponding terms/Same arity
% eats(fred,Food) unifies with eats(Person,jim)?         Yes/Corresponding terms/Same arity
% cd(29,beatles,sgt_pepper) unifies with cd(A,B,help)?   No

% Part 2: (3pts) Write a recursive predicate to count upwards, with a step of 2, from X to Y. (Assume X is less than Y).

count_up(23).
count_up(24).

count_up(X) :-
	write(X), nl,
	Y is X + 2,
	count_up(Y).

% Using the on_route example here http://www.doc.gold.ac.uk/~mas02gw/prolog_tutorial/prologpages/recursion.html, write move predicates (move(Start, End)) to represent the above map so that 1) all the relations between cities are only one-way and there are no cycles in the graph, 2) all the cities are represented, and 3) the following tests yield true. navigating from Prestopans to Leith, Wallyford to Tranent, and Portobello to Musselburgh. (make sure you don't capitalize your cities like the graph does).

% on_route(rome).
% on_route(Place):-
%   move(Place,Method,NewPlace),
%   on_route(NewPlace).
% move(home,taxi,halifax).
% move(halifax,train,gatwick).
% move(gatwick,plane,rome).

move(Start, End).

move(prestopans, leith).
move(wallyford, tranent).
move(portobello, musselburgh).
move(craigmillar, edinburgh).

% Part 4: (3pts.) Write a set of predicates to print every even-indexed (without accessing indices) element in a list.

%% evenmembers(+List, -ListOfEvenPlacedMembers).
%    true when ListOfEvenPlacedMembers is a list of the elements of List at even places.
%
even([],[]).
even([_Odd], []).
even([_Odd,Even|List], [Even|Evens]) :-
 even(List, Evens).
