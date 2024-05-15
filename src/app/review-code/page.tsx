import Diff from '@/components/review-code/diff';
import ReviewResult from '@/components/review-code/review-result';
import Result from '@/components/review-code/review-result';
import Run from '@/components/review-code/run';
import * as Diff2HtmlLib from 'diff2html'
import 'diff2html/bundles/css/diff2html.min.css';

export default function ReviewCode() {
    
//     let strInput: string =  '--- a/server/vendor/golang.org/x/sys/unix/zsyscall_linux_mipsle.go\n+++ b/server/vendor/golang.org/x/sys/unix/zsyscall_linux_mipsle.go\n@@ -1035,6 +1035,17 @@ func Prctl(option int, arg2 uintptr, arg3 uintptr, arg4 uintptr, arg5 uintptr) (\n \n // THIS FILE IS GENERATED BY THE COMMAND AT THE TOP; DO NOT EDIT\n \n+func Pselect(nfd int, r *FdSet, w *FdSet, e *FdSet, timeout *Timespec, sigmask *Sigset_t) (n int, err error) {\n+\tr0, _, e1 := Syscall6(SYS_PSELECT6, uintptr(nfd), uintptr(unsafe.Pointer(r)), uintptr(unsafe.Pointer(w)), uintptr(unsafe.Pointer(e)), uintptr(unsafe.Pointer(timeout)), uintptr(unsafe.Pointer(sigmask)))\n+\tn = int(r0)\n+\tif e1 != 0 {\n+\t\terr = errnoErr(e1)\n+\t}\n+\treturn\n+}\n+\n+// THIS FILE IS GENERATED BY THE COMMAND AT THE TOP; DO NOT EDIT\n+\n func read(fd int, p []byte) (n int, err error) {\n \tvar _p0 unsafe.Pointer\n \tif len(p) > 0 {\n';
//     let outputHtml: string = Diff2HtmlLib.html(strInput, { drawFileList: true, matching: 'lines' });
//     return <div className="container mx-auto px-4 overscroll-contain ..." >
//         <div className='diff overscroll-contain ...'  dangerouslySetInnerHTML={{__html: outputHtml}}>

//         </div>
//     </div>

return <div className="container mx-auto py-4 px-4 overscroll-contain ..." >
    <Run></Run>
    <Diff></Diff>
    <ReviewResult></ReviewResult>
</div>
}