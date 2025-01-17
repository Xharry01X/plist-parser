const fs = require('fs');

const plistContent = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>WFWorkflowActions</key>
    <array>
        <dict>
            <key>WFWorkflowActionIdentifier</key>
            <string>is.workflow.actions.ask</string>
            <key>WFWorkflowActionParameters</key>
            <dict>
                <key>WFAskActionPrompt</key>
                <string>Enter first number</string>
                <key>WFInputType</key>
                <string>Number</string>
            </dict>
        </dict>
        <dict>
            <key>WFWorkflowActionIdentifier</key>
            <string>is.workflow.actions.setvariable</string>
            <key>WFWorkflowActionParameters</key>
            <dict>
                <key>WFVariableName</key>
                <string>First Number</string>
            </dict>
        </dict>
        <dict>
            <key>WFWorkflowActionIdentifier</key>
            <string>is.workflow.actions.ask</string>
            <key>WFWorkflowActionParameters</key>
            <dict>
                <key>WFAskActionPrompt</key>
                <string>Enter second number</string>
                <key>WFInputType</key>
                <string>Number</string>
            </dict>
        </dict>
        <dict>
            <key>WFWorkflowActionIdentifier</key>
            <string>is.workflow.actions.setvariable</string>
            <key>WFWorkflowActionParameters</key>
            <dict>
                <key>WFVariableName</key>
                <string>Second Number</string>
            </dict>
        </dict>
        <dict>
            <key>WFWorkflowActionIdentifier</key>
            <string>is.workflow.actions.math</string>
            <key>WFWorkflowActionParameters</key>
            <dict>
                <key>WFMathOperand</key>
                <dict>
                    <key>Value</key>
                    <dict>
                        <key>Type</key>
                        <string>Variable</string>
                        <key>VariableName</key>
                        <string>Second Number</string>
                    </dict>
                    <key>WFSerializationType</key>
                    <string>WFTextTokenAttachment</string>
                </dict>
                <key>WFMathOperation</key>
                <string>+</string>
            </dict>
        </dict>
        <dict>
            <key>WFWorkflowActionIdentifier</key>
            <string>is.workflow.actions.showresult</string>
            <key>WFWorkflowActionParameters</key>
            <dict>
                <key>Text</key>
                <dict>
                    <key>Value</key>
                    <dict>
                        <key>attachmentsByRange</key>
                        <dict>
                            <key>{18, 1}</key>
                            <dict>
                                <key>Type</key>
                                <string>Variable</string>
                                <key>VariableName</key>
                                <string>First Number</string>
                            </dict>
                            <key>{24, 1}</key>
                            <dict>
                                <key>Type</key>
                                <string>Variable</string>
                                <key>VariableName</key>
                                <string>Second Number</string>
                            </dict>
                            <key>{30, 1}</key>
                            <dict>
                                <key>OutputUUID</key>
                                <string>2983A2ED-EB78-4F9B-9981-9770EB7B8B79</string>
                                <key>Type</key>
                                <string>ActionOutput</string>
                            </dict>
                        </dict>
                        <key>string</key>
                        <string>The sum of number £ and number £ is £.</string>
                    </dict>
                    <key>WFSerializationType</key>
                    <string>WFTextTokenString</string>
                </dict>
            </dict>
        </dict>
    </array>
    <key>WFWorkflowIcon</key>
    <dict>
        <key>WFWorkflowIconStartColor</key>
        <integer>4282601983</integer>
        <key>WFWorkflowIconGlyphNumber</key>
        <integer>59511</integer>
    </dict>
    <key>WFWorkflowInputContentItemClasses</key>
    <array>
        <string>WFAppStoreAppContentItem</string>
        <string>WFArticleContentItem</string>
        <string>WFContactContentItem</string>
        <string>WFDateContentItem</string>
        <string>WFEmailAddressContentItem</string>
        <string>WFGenericFileContentItem</string>
        <string>WFImageContentItem</string>
        <string>WFiTunesProductContentItem</string>
        <string>WFLocationContentItem</string>
        <string>WFDCMapsLinkContentItem</string>
        <string>WFAVAssetContentItem</string>
        <string>WFPDFContentItem</string>
        <string>WFPhoneNumberContentItem</string>
        <string>WFRichTextContentItem</string>
        <string>WFSafariWebPageContentItem</string>
        <string>WFStringContentItem</string>
        <string>WFURLContentItem</string>
    </array>
    <key>WFWorkflowTypes</key>
    <array>
        <string>NCWidget</string>
        <string>WatchKit</string>
        <string>ActionExtension</string>
        <string>QuickAction</string>
    </array>
    <key>WFWorkflowHasShortcutInputVariables</key>
    <true/>
    <key>WFWorkflowMinimumClientVersion</key>
    <integer>900</integer>
    <key>WFWorkflowClientVersion</key>
    <string>1145.11</string>
    <key>WFWorkflowMinimumClientVersionString</key>
    <string>900</string>
    <key>WFWorkflowImportQuestions</key>
    <array/>
    <key>WFWorkflowName</key>
    <string>Add Two Numbers</string>
    <key>WFWorkflowDescription</key>
    <string>This shortcut adds two numbers provided by the user.</string>
</dict>
</plist>`;

fs.writeFile('AdditionWorkflow.shortcut', plistContent, (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('The .shortcut file has been saved successfully.');
    }
});