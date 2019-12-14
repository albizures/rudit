import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зарокотать: PerfectVerb = {
  name: Word('зарокотать', 7),
  singular1stPerson: Word('зарокочу', 7),
  singular2ndPerson: Word('зарокочешь', 5),
  singular3rdPerson: Word('зарокочет', 5),
  plural1stPerson: Word('зарокочем', 5),
  plural2ndPerson: Word('зарокочете', 5),
  plural3rdPerson: Word('зарокочут', 5),
  masculinePast: Word('зарокотал', 7),
  femininePast: Word('зарокотала', 7),
  neuterPast: Word('зарокотало', 7),
  pluralPast: Word('зарокотали', 7),
  imperativeInformal: Word('зарокочи', 7),
  imperativeFormal: Word('зарокочите', 7),
  imperfect: [],
};

perfectVerbs.set(зарокотать.name.text, зарокотать);

export { зарокотать };