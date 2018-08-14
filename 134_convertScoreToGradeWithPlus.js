function convertScoreToGradeWithPlusAndMinus(score) {
  if (score <= 100 && score >= 98) return 'A+';
  if (score <= 97 && score >= 93) return 'A';
  if (score <= 92 && score >= 90) return 'A-';
  if (score <= 89 && score >= 88) return 'B+';
  if (score <= 87 && score >= 83) return 'B';
  if (score <= 82 && score >= 80) return 'B-';
  if (score <= 79 && score >= 78) return 'C+';
  if (score <= 77 && score >= 73) return 'C';
  if (score <= 72 && score >= 70) return 'C-';
  if (score <= 69 && score >= 68) return 'D+';
  if (score <= 67 && score >= 63) return 'D';
  if (score <= 62 && score >= 60) return 'D-';
  if (score <= 59 && score >= 0) return 'F';
  return 'INVALID SCORE';
}
