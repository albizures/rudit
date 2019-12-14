import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подогревать: PerfectVerb = {
  name: Word('подогревать', 8),
  singular1stPerson: Word('подогреваю', 8),
  singular2ndPerson: Word('подогреваешь', 8),
  singular3rdPerson: Word('подогревает', 8),
  plural1stPerson: Word('подогреваем', 8),
  plural2ndPerson: Word('подогреваете', 8),
  plural3rdPerson: Word('подогревают', 8),
  masculinePast: Word('подогревал', 8),
  femininePast: Word('подогревала', 8),
  neuterPast: Word('подогревало', 8),
  pluralPast: Word('подогревали', 8),
  imperativeInformal: Word('подогревай', 8),
  imperativeFormal: Word('подогревайте', 8),
  imperfect: [],
};

perfectVerbs.set(подогревать.name.text, подогревать);

export { подогревать };