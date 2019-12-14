import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const назализовать: PerfectVerb = {
  name: Word('назализовать', 9),
  singular1stPerson: Word('назализую', 7),
  singular2ndPerson: Word('назализуешь', 7),
  singular3rdPerson: Word('назализует', 7),
  plural1stPerson: Word('назализуем', 7),
  plural2ndPerson: Word('назализуете', 7),
  plural3rdPerson: Word('назализуют', 7),
  masculinePast: Word('назализовал', 9),
  femininePast: Word('назализовала', 9),
  neuterPast: Word('назализовало', 9),
  pluralPast: Word('назализовали', 9),
  imperativeInformal: Word('назализуй', 7),
  imperativeFormal: Word('назализуйте', 7),
  imperfect: [],
};

perfectVerbs.set(назализовать.name.text, назализовать);

export { назализовать };