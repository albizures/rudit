import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гоготать: PerfectVerb = {
  name: Word('гоготать', 5),
  singular1stPerson: Word('гогочу', 5),
  singular2ndPerson: Word('гогочешь', 3),
  singular3rdPerson: Word('гогочет', 3),
  plural1stPerson: Word('гогочем', 3),
  plural2ndPerson: Word('гогочете', 3),
  plural3rdPerson: Word('гогочут', 3),
  masculinePast: Word('гоготал', 5),
  femininePast: Word('гоготала', 5),
  neuterPast: Word('гоготало', 5),
  pluralPast: Word('гоготали', 5),
  imperativeInformal: Word('гогочи', 5),
  imperativeFormal: Word('гогочите', 5),
  imperfect: [],
};

perfectVerbs.set(гоготать.name.text, гоготать);

export { гоготать };