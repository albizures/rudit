import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обвести: PerfectVerb = {
  name: Word('обвести', 6),
  singular1stPerson: Word('обведу', 5),
  singular2ndPerson: Word('обведёшь', 3),
  singular3rdPerson: Word('обведёт', 3),
  plural1stPerson: Word('обведём', 3),
  plural2ndPerson: Word('обведёте', 3),
  plural3rdPerson: Word('обведут', 5),
  masculinePast: Word('обвёл', 0),
  femininePast: Word('обвела', 5),
  neuterPast: Word('обвело', 5),
  pluralPast: Word('обвели', 5),
  imperativeInformal: Word('обведи', 5),
  imperativeFormal: Word('обведите', 5),
  imperfect: [],
};

perfectVerbs.set(обвести.name.text, обвести);

export { обвести };