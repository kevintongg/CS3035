% FizzBuzzCracklePop in Prolog

% To run, open swipl and run 'printFizzbuzzCracklePops(TopNum).' where 'TopNum' is the number you want to go up to

isFizz(Num) :- 0 is Num mod 3.
isBuzz(Num) :- 0 is Num mod 5.
isCrackle(Num) :- 0 is Num mod 7.
isPop(Num) :- 0 is Num mod 10.
isFizzbuzzCracklePop(Num) :- isFizz(Num), isBuzz(Num), isCrackle(Num), isPop(Num).

fizzbuzzcracklepop(Num, Res) :-
  isFizzbuzzCracklePop(Num) -> Res = 'fizzbuzzcracklepop';
    isFizz(Num) -> Res = 'fizz';
    isBuzz(Num) -> Res = 'buzz';
    isCrackle(Num) -> Res = 'crackle';
    isPop(Num) -> Res = 'pop';
    Res = Num.

fizzbuzzcracklepops(TopNum, TopNum, List) :-
  List = [],!.
fizzbuzzcracklepops(TopNum, CurrentNum, [Head | Tail]) :-
  CurrentNum > TopNum -> throw('the CurrentNum is greater than TopNum');
  TopNum < 1 -> throw('the TopNum is less than 1');
  (NextNum is CurrentNum + 1,
  fizzbuzzcracklepop(CurrentNum, Head),
  fizzbuzzcracklepops(TopNum, NextNum, Tail)).

fizzbuzzcracklepops(TopNum, List) :-
  OneHigher is TopNum + 1,
  fizzbuzzcracklepops(OneHigher, 1, List).

printFizzbuzzCracklePops(TopNum) :-
  fizzbuzzcracklepops(TopNum, FizzbuzzcracklepopList),
  forall(member(X, FizzbuzzcracklepopList), (print(X), nl)).

main() :-
  read(X),
  printFizzbuzzes(X),
  halt.
