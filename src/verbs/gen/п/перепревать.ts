import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перепревать: PerfectVerb = {
  name: Word('перепревать', 8),
  singular1stPerson: Word('перепреваю', 8),
  singular2ndPerson: Word('перепреваешь', 8),
  singular3rdPerson: Word('перепревает', 8),
  plural1stPerson: Word('перепреваем', 8),
  plural2ndPerson: Word('перепреваете', 8),
  plural3rdPerson: Word('перепревают', 8),
  masculinePast: Word('перепревал', 8),
  femininePast: Word('перепревала', 8),
  neuterPast: Word('перепревало', 8),
  pluralPast: Word('перепревали', 8),
  imperativeInformal: Word('перепревай', 8),
  imperativeFormal: Word('перепревайте', 8),
  imperfect: [],
};

perfectVerbs.set(перепревать.name.text, перепревать);

export { перепревать };