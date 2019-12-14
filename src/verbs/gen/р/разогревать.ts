import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разогревать: PerfectVerb = {
  name: Word('разогревать', 8),
  singular1stPerson: Word('разогреваю', 8),
  singular2ndPerson: Word('разогреваешь', 8),
  singular3rdPerson: Word('разогревает', 8),
  plural1stPerson: Word('разогреваем', 8),
  plural2ndPerson: Word('разогреваете', 8),
  plural3rdPerson: Word('разогревают', 8),
  masculinePast: Word('разогревал', 8),
  femininePast: Word('разогревала', 8),
  neuterPast: Word('разогревало', 8),
  pluralPast: Word('разогревали', 8),
  imperativeInformal: Word('разогревай', 8),
  imperativeFormal: Word('разогревайте', 8),
  imperfect: [],
};

perfectVerbs.set(разогревать.name.text, разогревать);

export { разогревать };