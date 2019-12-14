import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возвести: PerfectVerb = {
  name: Word('возвести', 7),
  singular1stPerson: Word('возведу', 6),
  singular2ndPerson: Word('возведёшь', 4),
  singular3rdPerson: Word('возведёт', 4),
  plural1stPerson: Word('возведём', 4),
  plural2ndPerson: Word('возведёте', 4),
  plural3rdPerson: Word('возведут', 6),
  masculinePast: Word('возвёл', 1),
  femininePast: Word('возвела', 6),
  neuterPast: Word('возвело', 6),
  pluralPast: Word('возвели', 6),
  imperativeInformal: Word('возведи', 6),
  imperativeFormal: Word('возведите', 6),
  imperfect: [],
};

perfectVerbs.set(возвести.name.text, возвести);

export { возвести };