import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подвести: PerfectVerb = {
  name: Word('подвести', 7),
  singular1stPerson: Word('подведу', 6),
  singular2ndPerson: Word('подведёшь', 6),
  singular3rdPerson: Word('подведёт', 6),
  plural1stPerson: Word('подведём', 6),
  plural2ndPerson: Word('подведёте', 6),
  plural3rdPerson: Word('подведут', 6),
  masculinePast: Word('подвёл', 4),
  femininePast: Word('подвела', 6),
  neuterPast: Word('подвело', 6),
  pluralPast: Word('подвели', 6),
  imperativeInformal: Word('подведи', 6),
  imperativeFormal: Word('подведите', 6),
  imperfect: [],
};

perfectVerbs.set(подвести.name.text, подвести);

export { подвести };