import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пригревать: PerfectVerb = {
  name: Word('пригревать', 7),
  singular1stPerson: Word('пригреваю', 7),
  singular2ndPerson: Word('пригреваешь', 7),
  singular3rdPerson: Word('пригревает', 7),
  plural1stPerson: Word('пригреваем', 7),
  plural2ndPerson: Word('пригреваете', 7),
  plural3rdPerson: Word('пригревают', 7),
  masculinePast: Word('пригревал', 7),
  femininePast: Word('пригревала', 7),
  neuterPast: Word('пригревало', 7),
  pluralPast: Word('пригревали', 7),
  imperativeInformal: Word('пригревай', 7),
  imperativeFormal: Word('пригревайте', 7),
  imperfect: [],
};

perfectVerbs.set(пригревать.name.text, пригревать);

export { пригревать };