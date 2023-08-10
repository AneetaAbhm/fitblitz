function generateDietPlan() {
    const goalSelect = document.getElementById('goal');
    const goal = goalSelect.value;

    let dietPlan = "Your customized diet plan:\n";

    switch (goal) {
        case 'gain':
            dietPlan += "- High-calorie meals:\n";
            dietPlan += "  - Breakfast: Scrambled eggs with avocado, whole wheat toast with peanut butter, and a glass of whole milk.\n";
            dietPlan += "  - Snack: Mixed nuts and dried fruits.\n";
            dietPlan += "  - Lunch: Grilled chicken breast with quinoa, roasted vegetables, and a side of olive oil dressing.\n";
            dietPlan += "  - Snack: Greek yogurt with honey and granola.\n";
            dietPlan += "  - Dinner: Salmon with sweet potato, steamed broccoli, and a serving of brown rice.\n";
            dietPlan += "  - Evening Snack: Banana smoothie with almond butter and a handful of almonds.\n";
            dietPlan += "  - Before Bed Snack: Cottage cheese with fruits and a drizzle of honey.\n";
            break;
        case 'loss':
            dietPlan += "- Weight loss meals:\n";
            dietPlan += "  - Breakfast: Oatmeal with berries and a teaspoon of almond butter.\n";
            dietPlan += "  - Snack: Greek yogurt with sliced cucumbers.\n";
            dietPlan += "  - Lunch: Grilled chicken salad with mixed greens, cherry tomatoes, and balsamic vinaigrette.\n";
            dietPlan += "  - Snack: Carrot sticks with hummus.\n";
            dietPlan += "  - Dinner: Baked salmon with steamed asparagus and quinoa.\n";
            dietPlan += "  - Evening Snack: Apple slices with a tablespoon of almond butter.\n";
            dietPlan += "  - Before Bed Snack: Herbal tea or a glass of low-fat milk.\n";

            break;
        case 'maintain':
            dietPlan += "- Weight maintenance meals:\n\n";
            dietPlan += "  - Breakfast: Whole grain toast with avocado and sliced tomatoes.\n";
            dietPlan += "  - Snack: Greek yogurt with mixed berries.\n";
            dietPlan += "  - Lunch: Grilled chicken or tofu with a side salad and quinoa.\n";
            dietPlan += "  - Snack: Hummus with carrot sticks.\n";
            dietPlan += "  - Dinner: Grilled fish with roasted vegetables and a small portion of brown rice.\n";
            dietPlan += "  - Evening Snack: Mixed nuts and dried fruits.\n";
            dietPlan += "  - Before Bed Snack: A glass of low-fat milk or herbal tea.\n";
            break;
        default:
            dietPlan += "- No goal selected\n";
            break;
    }

    document.getElementById('diet-plan').innerText = dietPlan;
}