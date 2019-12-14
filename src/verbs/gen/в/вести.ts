import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вести: PerfectVerb = {
  name: Word('вести', 4),
  singular1stPerson: Word('веду', 3),
  singular2ndPerson: Word('ведёшь', 1),
  singular3rdPerson: Word('ведёт', 1),
  plural1stPerson: Word('ведём', 1),
  plural2ndPerson: Word('ведёте', 1),
  plural3rdPerson: Word('ведут', 3),
  masculinePast: Word('вёл', 1),
  femininePast: Word('вела', 3),
  neuterPast: Word('вело', 3),
  pluralPast: Word('вели', 3),
  imperativeInformal: Word('веди', 3),
  imperativeFormal: Word('ведите', 3),
  imperfect: [],
};

perfectVerbs.set(вести.name.text, вести);

export { вести };