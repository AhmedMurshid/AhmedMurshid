# Calculating the user's grade based on the provided scores and weights

# Scores and weights for the first part
scores_part1 = [88, 68, 113, 91]
max_scores_part1 = [100, 100, 120, 100]
weight_part1 = 0.70

# Score and weight for the second part
score_part2 = 158
max_score_part2 = 180
weight_part2 = 0.30

# Calculating the weighted average for each part
average_part1 = sum(scores_part1[i] / max_scores_part1[i] for i in range(len(scores_part1))) / len(scores_part1)
average_part2 = score_part2 / max_score_part2

# Calculating the final gra
final_grade = (average_part1 * weight_part1) + (average_part2 * weight_part2)
final_grade_percentage = final_grade * 100
print("crypto",final_grade_percentage)


# Grades for each component
midterm_exam_grade = 88.00
final_exam_grade = 90.00
homework_grades = [41.00, 70.00, 100.00, 100.00, 95.00]

# Weights
midterm_weight = 0.30
final_exam_weight = 0.40
homework_weight = 0.30

# Calculate the average homework grade
average_homework_grade = sum(homework_grades) / len(homework_grades)

# Calculate the weighted score for each component
weighted_midterm = midterm_exam_grade * midterm_weight
weighted_final = final_exam_grade * final_exam_weight
weighted_homework = average_homework_grade * homework_weight

# Calculate the overall grade
overall_grade = weighted_midterm + weighted_final + weighted_homework
print("algo ",overall_grade)
