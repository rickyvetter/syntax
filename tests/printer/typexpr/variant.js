type rgb = [#Red | #Green | #Blue]
type color = [rgb | #Orange | #Yellow | #Purple];

type t = [| #variant]
type t = [| #Variant]
type t = [| #\"type"]
type t = [| #\"va r ia nt"]
type t = [| #\"Variant ⛰"]

let id = (x: [> #Red | #Green | #Blue]) => x;
let upper = (x: [< #Red | #Green]) => true
type point = [ #Point(float, float) ];
type \"type" = [ #\"Point🗿"(\"let", float) ];
type shape = [
  | #Rectangle(point, point)
  | #Circle(point, float)
];

type madness = [< | #\"type" & (\"let") & (\"Super exotic") | #\"Bad Idea" ]

let error_of_exn: exn => option<[ | #Ok(error) | #Already_displayed ]> = x

external make: (
  ~_type: @bs.string
  [
  | #basis
  | #basisClosed
  | #basisOpen
  | #linear
  | #linearClosed
  | #natural
  | #monotoneX
  | #monotoneY
  | #monotone
  | #step
  | #stepBefore
  | #stepAfter
  ]=?,
  ~dataKey: Config.dataItem => Js.null<yValue>,
  ~stroke: string=?,
  ~strokeWidth: float=?,
  ~strokeDasharray: string=?,
  ~children: React.element=?,
  ~dot: Dot.t=?,
  ~activeDot: Dot.t=?,
  ~label: string=?,
  ~name: string=?,
  ~connectNulls: bool=?,
) => React.element = "Line"

type empty_conj =
  | X([< | #X&('a) &(int, float)]): empty_conj

type conj =
  | X([< | #X(int) &([< | #B(int) &(float)])]): conj

module type Conjunctive = {
  type u1 = [ | #A | #B]
  type u2 = [ | #A | #B | #C]

  let f: [< | #T([< u2]) & ([< u2]) & ([< u1])] => unit
  let g: [< | #S&([< u2]) & ([< u2]) & ([< u1])] => unit;
}

type x = [
  #Fooooooooooooooooooooooooooooooooooooooo
  | #Baaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaar
  | #Baaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaz
]
