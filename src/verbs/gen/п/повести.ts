import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повести: PerfectVerb = {
  name: Word('повести', 6),
  singular1stPerson: Word('поведу', 5),
  singular2ndPerson: Word('поведёшь', 5),
  singular3rdPerson: Word('поведёт', 5),
  plural1stPerson: Word('поведём', 5),
  plural2ndPerson: Word('поведёте', 5),
  plural3rdPerson: Word('поведут', 5),
  masculinePast: Word('повёл', 3),
  femininePast: Word('повела', 5),
  neuterPast: Word('повело', 5),
  pluralPast: Word('повели', 5),
  imperativeInformal: Word('поведи', 5),
  imperativeFormal: Word('поведите', 5),
  imperfect: [],
};

perfectVerbs.set(повести.name.text, повести);

export { повести };