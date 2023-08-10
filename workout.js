document.getElementById('customizationForm').addEventListener('submit', function(event) {
    event.preventDefault();


    var name = document.getElementById('name').value;
    var age = parseInt(document.getElementById('age').value);
    var gender = document.getElementById('gender').value;
    var fitnessLevel = document.getElementById('fitness-level').value;
    var goal = document.getElementById('goal').value;
    var workoutFrequency = document.getElementById('workout-frequency').value;
    var equipmentCardio = document.getElementById('equipment-cardio').checked;
    var equipmentWeights = document.getElementById('equipment-weights').checked;
    var equipmentMachines = document.getElementById('equipment-machines').checked;

    var routine = generateRoutine(name, age, gender, fitnessLevel, goal, workoutFrequency, equipmentCardio, equipmentWeights, equipmentMachines);


    var resultDiv = document.createElement('div');
    resultDiv.innerHTML = '<h2>Personalized Routine:</h2>' + routine;
    document.body.appendChild(resultDiv);
});


function generateRoutine(name, age, gender, fitnessLevel, goal, workoutFrequency, equipmentCardio, equipmentWeights, equipmentMachines) {

    var routine = 'Hello, ' + name + '! Here is your personalized routine:\n\n';


    var workoutDuration;
    if (fitnessLevel === 'beginner') {
        workoutDuration = 30;
    } else if (fitnessLevel === 'intermediate') {
        workoutDuration = 45;
    } else if (fitnessLevel === 'advanced') {
        workoutDuration = 60;
    } else {
        workoutDuration = 0;
    }


    routine += 'Warm-up:\n';
    routine += '- Jogging or brisk walking for 5 minutes\n';
    routine += '- Dynamic stretches for 5 minutes\n\n';


    routine += 'Main Workout:\n';
    if (goal === 'weight-loss') {
        routine += '- ' + workoutFrequency + ' days of cardio exercises (e.g., running, cycling, swimming) for ' + workoutDuration + ' minutes\n';
        if (equipmentWeights) {
            routine += '- ' + workoutFrequency + ' days of weight training exercises (e.g., dumbbell exercises, bodyweight exercises) for ' + workoutDuration + ' minutes\n';
        }
    } else if (goal === 'muscle-gain') {
        if (equipmentWeights || equipmentMachines) {
            routine += '- ' + workoutFrequency + ' days of strength training exercises targeting different muscle groups for ' + workoutDuration + ' minutes\n';
        }
        routine += '- ' + workoutFrequency + ' days of cardio exercises (e.g., running, cycling, rowing) for ' + (workoutDuration - 15) + ' minutes\n';
    } else if (goal === 'general-fitness') {
        if (equipmentCardio) {
            routine += '- ' + workoutFrequency + ' days of cardio exercises (e.g., running, cycling, elliptical) for ' + workoutDuration + ' minutes\n';
        }
        if (equipmentWeights) {
            routine += '- ' + workoutFrequency + ' days of weight training exercises (e.g., dumbbell exercises, resistance band exercises) for ' + workoutDuration + ' minutes\n';
        }
    }


    routine += '\nCool-down:\n';
    routine += '- Stretching exercises for 5-10 minutes\n';

    return routine;
}