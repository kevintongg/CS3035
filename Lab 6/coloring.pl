color(red).
color(blue).
color(green).
color(yellow).

neighbor(CountryAColor, CountryBColor) :- color(CountryAColor),
  color(CountryBColor),
  CountryAColor \= CountryBColor. /* \= does not stand for not equal */

southAmerica(Chile, Argentina) :- neighbor(Chile, Argentina).

southAmerica(Chile, Argentina, Uruguay, Paraguay, Brazil, Bolivia, Peru, Ecuador, Columbia, Venezuela, Guyana, Suriname, Guyane) :-

neighbor(Chile, Argentina), neighbor(Chile, Bolivia), neighbor(Chile, Peru),

neighbor(Argentina, Uruguay), neighbor(Argentina, Paraguay), neighbor(Argentina, Bolivia),

neighbor(Argentina, Brazil),

neighbor(Uruguay, Brazil),

neighbor(Paraguay, Bolivia), neighbor(Paraguay, Brazil),

neighbor(Brazil, Bolivia), neighbor(Brazil, Peru), neighbor(Brazil, Columbia), neighbor(Brazil, Venezuela), neighbor(Brazil, Guyana), neighbor(Brazil, Suriname), neighbor(Brazil, Guyane),

neighbor(Bolivia, Peru),

neighbor(Peru, Ecuador), neighbor(Peru, Columbia),

neighbor(Columbia, Ecuador), neighbor(Columbia, Venezuela),

neighbor(Venezuela, Guyana),

neighbor(Guyana, Suriname),

neighbor(Suriname, Guyane).
