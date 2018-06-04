$BuildRoot = Resolve-Path .

task Hello {
    'Hello world'
}

task CompileSolution {
    & "dotnet" build
    Set-Location $BuildRoot
}

task CompileJavascript {
    Set-Location -Path "./src/SampleReactApp.WebApi"
    & "webpack"
    Set-Location $BuildRoot
}

task CompileProject CompileJavascript, CompileSolution

task RunSolution {
    Set-Location -Path "./src/SampleReactApp.WebApi"
    & "dotnet" run
    Set-Location $BuildRoot
}

task WatchJavascript {
    Set-Location -Path "./src/SampleReactApp.WebApi"
    & "webpack" -w
}

task RunProject RunSolution, WatchJavascript