
const activityButton = document.getElementById("activityButton");
const loadingMessage = document.getElementById("loadingMessage");
const activityResult = document.getElementById("activityResult");

activityButton.addEventListener("click", async function () {
    loadingMessage.textContent = "Loading a random activity...";
    activityButton.disabled = true;

    try {
        const response = await axios.get(
            "https://dummyjson.com/todos/random"
        );

        const activity = response.data;

        activityResult.innerHTML = `
            <h2>Your Random Activity</h2>
            <p>${activity.todo}</p>
            <p>Activity ID: ${activity.id}</p>
        `;

        loadingMessage.textContent = "Activity loaded successfully!";
    } catch (error) {
        loadingMessage.textContent =
            "Sorry, something went wrong. Please try again.";

        console.error("API request failed:", error);
    } finally {
        activityButton.disabled = false;
    }
});
