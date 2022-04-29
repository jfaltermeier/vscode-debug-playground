'use strict';

import * as vscode from 'vscode';
import { DebugAdapterTracker, DebugSession, ProviderResult } from 'vscode';
import { DebugProtocol } from 'vscode-debugprotocol';

const TYPE = '*';

export function activate(context: vscode.ExtensionContext) {
    console.log("ES : activate")
    context.subscriptions.push(vscode.debug.registerDebugAdapterTrackerFactory(TYPE, new TestDebugAdapterTrackerFactory()));
}

export function deactivate() {
}

class TestDebugAdapterTrackerFactory implements vscode.DebugAdapterTrackerFactory {
    createDebugAdapterTracker(session: DebugSession): ProviderResult<DebugAdapterTracker> {
        return new TestDebugAdapterTracker(session);
    }
}

class TestDebugAdapterTracker implements DebugAdapterTracker {
    constructor(protected session: DebugSession) {
        const sessionFolder = session.workspaceFolder ? session.workspaceFolder.uri : "undef";
        console.log("ES : DebugAdapterTracker: DebugSession created with workspaceFolder: " + sessionFolder)
    }
    onWillStartSession(): void {
    }
    onWillReceiveMessage(message: DebugProtocol.ProtocolMessage): void {
    }
    onDidSendMessage(message: DebugProtocol.ProtocolMessage): void {
    }
    onWillStopSession(): void {
    }
    onError(error: Error): void {
    }
    onExit(code: number | undefined, _signal: string | undefined): void {
    }
}
