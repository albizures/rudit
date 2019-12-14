import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оркестровать: PerfectVerb = {
  name: Word('оркестровать', 9),
  singular1stPerson: Word('оркеструю', 7),
  singular2ndPerson: Word('оркеструешь', 7),
  singular3rdPerson: Word('оркеструет', 7),
  plural1stPerson: Word('оркеструем', 7),
  plural2ndPerson: Word('оркеструете', 7),
  plural3rdPerson: Word('оркеструют', 7),
  masculinePast: Word('оркестровал', 9),
  femininePast: Word('оркестровала', 9),
  neuterPast: Word('оркестровало', 9),
  pluralPast: Word('оркестровали', 9),
  imperativeInformal: Word('оркеструй', 7),
  imperativeFormal: Word('оркеструйте', 7),
  imperfect: [],
};

perfectVerbs.set(оркестровать.name.text, оркестровать);

export { оркестровать };