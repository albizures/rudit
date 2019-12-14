import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const щекотать: PerfectVerb = {
  name: Word('щекотать', 5),
  singular1stPerson: Word('щекочу', 5),
  singular2ndPerson: Word('щекочешь', 3),
  singular3rdPerson: Word('щекочет', 3),
  plural1stPerson: Word('щекочем', 3),
  plural2ndPerson: Word('щекочете', 3),
  plural3rdPerson: Word('щекочут', 3),
  masculinePast: Word('щекотал', 5),
  femininePast: Word('щекотала', 5),
  neuterPast: Word('щекотало', 5),
  pluralPast: Word('щекотали', 5),
  imperativeInformal: Word('щекочи', 5),
  imperativeFormal: Word('щекочите', 5),
  imperfect: ['пощекотать','защекотать'],
};

perfectVerbs.set(щекотать.name.text, щекотать);

export { щекотать };