import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const привести: PerfectVerb = {
  name: Word('привести', 7),
  singular1stPerson: Word('приведу', 6),
  singular2ndPerson: Word('приведёшь', 4),
  singular3rdPerson: Word('приведёт', 4),
  plural1stPerson: Word('приведём', 4),
  plural2ndPerson: Word('приведёте', 4),
  plural3rdPerson: Word('приведут', 6),
  masculinePast: Word('привёл', 2),
  femininePast: Word('привела', 6),
  neuterPast: Word('привело', 6),
  pluralPast: Word('привели', 6),
  imperativeInformal: Word('приведи', 6),
  imperativeFormal: Word('приведите', 6),
  imperfect: ['приводить'],
};

perfectVerbs.set(привести.name.text, привести);

export { привести };