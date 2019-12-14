import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взвести: PerfectVerb = {
  name: Word('взвести', 6),
  singular1stPerson: Word('взведу', 5),
  singular2ndPerson: Word('взведёшь', 3),
  singular3rdPerson: Word('взведёт', 3),
  plural1stPerson: Word('взведём', 3),
  plural2ndPerson: Word('взведёте', 3),
  plural3rdPerson: Word('взведут', 5),
  masculinePast: Word('взвёл', 3),
  femininePast: Word('взвела', 5),
  neuterPast: Word('взвело', 5),
  pluralPast: Word('взвели', 5),
  imperativeInformal: Word('взведи', 5),
  imperativeFormal: Word('взведите', 5),
  imperfect: [],
};

perfectVerbs.set(взвести.name.text, взвести);

export { взвести };