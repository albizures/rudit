import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отсыревать: PerfectVerb = {
  name: Word('отсыревать', 7),
  singular1stPerson: Word('отсыреваю', 7),
  singular2ndPerson: Word('отсыреваешь', 7),
  singular3rdPerson: Word('отсыревает', 7),
  plural1stPerson: Word('отсыреваем', 7),
  plural2ndPerson: Word('отсыреваете', 7),
  plural3rdPerson: Word('отсыревают', 7),
  masculinePast: Word('отсыревал', 7),
  femininePast: Word('отсыревала', 7),
  neuterPast: Word('отсыревало', 7),
  pluralPast: Word('отсыревали', 7),
  imperativeInformal: Word('отсыревай', 7),
  imperativeFormal: Word('отсыревайте', 7),
  imperfect: [],
};

perfectVerbs.set(отсыревать.name.text, отсыревать);

export { отсыревать };