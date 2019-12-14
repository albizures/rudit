import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перегревать: PerfectVerb = {
  name: Word('перегревать', 8),
  singular1stPerson: Word('перегреваю', 8),
  singular2ndPerson: Word('перегреваешь', 8),
  singular3rdPerson: Word('перегревает', 8),
  plural1stPerson: Word('перегреваем', 8),
  plural2ndPerson: Word('перегреваете', 8),
  plural3rdPerson: Word('перегревают', 8),
  masculinePast: Word('перегревал', 8),
  femininePast: Word('перегревала', 8),
  neuterPast: Word('перегревало', 8),
  pluralPast: Word('перегревали', 8),
  imperativeInformal: Word('перегревай', 8),
  imperativeFormal: Word('перегревайте', 8),
  imperfect: [],
};

perfectVerbs.set(перегревать.name.text, перегревать);

export { перегревать };