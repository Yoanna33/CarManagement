//Функция за извличане на справка за заявки
"async"
async function getWorkshopReports(workshopId, startDate, endDate) {
    const baseUrl = 'C:\\Users\\user\\OneDrive\\Работен плот\\car-management-frontend';
    const queryParams = new URLSearchParams({
        workshop_id: workshopId,
        start_date: startDate,
        end_date: endDate,
    });

    const url = `${baseUrl}?${queryParams.toString()}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Report Data:', data);

// Пример: Достъп до статистиките
        data.statistics.forEach((stat) => {
            console.log(`Date: ${stat.date}, Requests: ${stat.requests}, Free Capacity: ${stat.free_capacity}`);
        });

        return data;
    } catch (error) {
        console.error('Error fetching workshop reports:', error);
    }
}

// Пример за използване на функцията
getWorkshopReports(1, '2024-01-01', '2024-01-31');
// Функция за извличане на броя заявки по месеци
async function getMaintenanceRequestsReport(workshopId, monthRange) {
    const baseUrl = 'https://api.example.com/maintenance_requests/reports'; // Заменете с вашия API URL
    const queryParams = new URLSearchParams({
        workshop_id: workshopId,
        month_range: monthRange,
    });

    const url = `${baseUrl}?${queryParams.toString()}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Maintenance Requests Report:', data);

// Пример: Обработка на статистиката
        data.statistics.forEach((stat) => {
            console.log(`Month: ${stat.month}, Requests: ${stat.requests}`);
        });

        return data;
    } catch (error) {
        console.error('Error fetching maintenance requests report:', error);
    }
}

// Пример за извикване на функцията
getMaintenanceRequestsReport(2, '2024-01_to_2024-02');
