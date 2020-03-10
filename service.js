//this is service body
const { exec } = require('child_process');

console.log('=====> this is from service.js', new Date(), process.env.USERNAME);

/* exec(
  'start C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe -noexit -executionpolicy bypass "D:\\Work\\Projects\\github\\win_service\\shell_script.ps1 -BasePath D:\\ -FolderName Docs"',
); */

exec(
  'start C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe -noexit -executionpolicy bypass "D:\\Work\\Projects\\github\\win_service\\test_script.ps1"',
);

/* exec('dir', (err, st1, st2) => {
  console.log(err);
  console.log(st1);
  console.log(st2);
}); */
