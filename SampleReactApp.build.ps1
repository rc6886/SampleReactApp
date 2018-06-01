

task Hello {
    'Hello world'
}

task CompileSolution {
    & "dotnet" build
}

task CompileJavascript {
    Set-Location -Path "./src/SampleReactApp.WebApi"
    & "webpack "
}

task CompileProject CompileJavascript, CompileSolution

task RunSolution {
    Start-Process "powershell Set-Location -Path './src/SampleReactApp.WebApi'"
    & "dotnet" run
}

task WatchJavascript {
    Set-Location -Path "./src/SampleReactApp.WebApi"
    & "webpack" -w
}

task RunProject RunSolution, WatchJavascript