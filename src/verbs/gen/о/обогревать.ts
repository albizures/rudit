import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обогревать: PerfectVerb = {
  name: Word('обогревать', 7),
  singular1stPerson: Word('обогреваю', 7),
  singular2ndPerson: Word('обогреваешь', 7),
  singular3rdPerson: Word('обогревает', 7),
  plural1stPerson: Word('обогреваем', 7),
  plural2ndPerson: Word('обогреваете', 7),
  plural3rdPerson: Word('обогревают', 7),
  masculinePast: Word('обогревал', 7),
  femininePast: Word('обогревала', 7),
  neuterPast: Word('обогревало', 7),
  pluralPast: Word('обогревали', 7),
  imperativeInformal: Word('обогревай', 7),
  imperativeFormal: Word('обогревайте', 7),
  imperfect: [],
};

perfectVerbs.set(обогревать.name.text, обогревать);

export { обогревать };