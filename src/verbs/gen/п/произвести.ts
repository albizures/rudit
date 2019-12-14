import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const произвести: PerfectVerb = {
  name: Word('произвести', 9),
  singular1stPerson: Word('произведу', 8),
  singular2ndPerson: Word('произведёшь', 6),
  singular3rdPerson: Word('произведёт', 6),
  plural1stPerson: Word('произведём', 6),
  plural2ndPerson: Word('произведёте', 6),
  plural3rdPerson: Word('произведут', 8),
  masculinePast: Word('произвёл', 3),
  femininePast: Word('произвела', 8),
  neuterPast: Word('произвело', 8),
  pluralPast: Word('произвели', 8),
  imperativeInformal: Word('произведи', 8),
  imperativeFormal: Word('произведите', 8),
  imperfect: ['производить'],
};

perfectVerbs.set(произвести.name.text, произвести);

export { произвести };