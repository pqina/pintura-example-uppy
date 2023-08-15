import Uppy, { debugLogger } from '@uppy/core';
import DragDrop from '@uppy/drag-drop';
import StatusBar from '@uppy/status-bar';
import XHRUpload from '@uppy/xhr-upload';

import '@uppy/core/dist/style.css';
import '@uppy/drag-drop/dist/style.css';
import '@uppy/status-bar/dist/style.css';

// import the Uppy Pintura plugin and the modal factory
import '@pqina/pintura/pintura.css';
import PinturaPlugin from '@pqina/uppy-pintura';
import { openDefaultEditor } from '@pqina/pintura';

// set up Uppy
const uppy = new Uppy({ logger: debugLogger })
    .use(DragDrop, {
        target: '#drag-drop',
    })
    .use(StatusBar, { target: '#status-bar' })
    .use(XHRUpload, {
        endpoint: '',
        limit: 6,
        bundle: true,
    })
    // Add Pintura Plugin
    .use(PinturaPlugin, {
        factory: openDefaultEditor,
        options: {
            /* editor options */
        },
    });

uppy.on('complete', (result) => {
    if (result.failed.length === 0) {
        console.log('Upload successful');
    } else {
        console.warn('Upload failed');
    }
    console.log('successful files:', result.successful);
    console.log('failed files:', result.failed);
});
