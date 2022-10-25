import * as React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditorInspector from '@ckeditor/ckeditor5-inspector';
import './style.css';

export default function App() {
  return (
    <div className="App">
      <CKEditor
        editor={ClassicEditor}
        data="<p>Hello from CKEditor 5!</p><h2>Try the inspector below</h2><ul><li>Check the Model</li><li>See the View</li><li>Check available commands</li></ul>"
        onReady={(editor) => {
          console.log('CKEditor React Component is ready to use!', editor);
          CKEditorInspector.attach(editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
      />
    </div>
  );
}
