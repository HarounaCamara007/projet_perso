document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('createFolderForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const response = await fetch('/api/create_folder.php', {
            method: 'POST',
            body: formData
        });
        const result = await response.text();
        document.getElementById('folderMessage').innerText = result;
    });

    document.getElementById('createFileForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const response = await fetch('/api/create_file.php', {
            method: 'POST',
            body: formData
        });
        const result = await response.text();
        document.getElementById('fileMessage').innerText = result;
    });
});
