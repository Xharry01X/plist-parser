const fs = require('fs');

const plistContent = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>WorkflowLibraries</key>
    <array>
        <dict>
            <key>LibraryName</key>
            <string>MathOperations</string>
            <key>Functions</key>
            <array>
                <dict>
                    <key>FunctionName</key>
                    <string>AddNumbers</string>
                    <key>InputParameters</key>
                    <array>
                        <string>Number1</string>
                        <string>Number2</string>
                    </array>
                    <key>OutputParameter</key>
                    <string>Result</string>
                </dict>
            </array>
        </dict>
    </array>
    <key>Workflow</key>
    <dict>
        <key>Steps</key>
        <array>
            <dict>
                <key>StepName</key>
                <string>GetUserInput</string>
                <key>Action</key>
                <string>PromptForInput</string>
                <key>Inputs</key>
                <array>
                    <string>Enter first number:</string>
                    <string>Enter second number:</string>
                </array>
                <key>Outputs</key>
                <array>
                    <string>Number1</string>
                    <string>Number2</string>
                </array>
            </dict>
            <dict>
                <key>StepName</key>
                <string>PerformAddition</string>
                <key>Action</key>
                <string>MathOperations.AddNumbers</string>
                <key>Inputs</key>
                <array>
                    <string>Number1</string>
                    <string>Number2</string>
                </array>
                <key>Outputs</key>
                <array>
                    <string>Result</string>
                </array>
            </dict>
            <dict>
                <key>StepName</key>
                <string>DisplayResult</string>
                <key>Action</key>
                <string>ShowOutput</string>
                <key>Inputs</key>
                <array>
                    <string>The sum is: {Result}</string>
                </array>
            </dict>
        </array>
    </dict>
</dict>
</plist>`;

fs.writeFile('AdditionWorkflow.shortcut', plistContent, (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('The .shortcut file has been saved successfully.');
    }
});