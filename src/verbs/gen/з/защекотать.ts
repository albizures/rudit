import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const защекотать: PerfectVerb = {
  name: Word('защекотать', 7),
  singular1stPerson: Word('защекочу', 7),
  singular2ndPerson: Word('защекочешь', 5),
  singular3rdPerson: Word('защекочет', 5),
  plural1stPerson: Word('защекочем', 5),
  plural2ndPerson: Word('защекочете', 5),
  plural3rdPerson: Word('защекочут', 5),
  masculinePast: Word('защекотал', 7),
  femininePast: Word('защекотала', 7),
  neuterPast: Word('защекотало', 7),
  pluralPast: Word('защекотали', 7),
  imperativeInformal: Word('защекочи', 7),
  imperativeFormal: Word('защекочите', 7),
  imperfect: [],
};

perfectVerbs.set(защекотать.name.text, защекотать);

export { защекотать };