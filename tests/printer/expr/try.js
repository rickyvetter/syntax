try {
  let x = 1
  let y = 2
  dangerousCall()
} catch {
| Foo => Js.log()
| Exit => Js.log()
}

try myDangerousFn() catch {
| Foo => Js.log()
}

let x = {
  let y = 1
  try {
    apply()
  } catch {
  | _ => 2
  }
}

@attr @attr2
try myDangerousFn() catch {
| Foo => Js.log()
}


let () =
  @attr @attr2
  try myDangerousFn() catch {
  | Foo => Js.log()
  }
