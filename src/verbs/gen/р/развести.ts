import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const развести: PerfectVerb = {
  name: Word('развести', 7),
  singular1stPerson: Word('разведу', 6),
  singular2ndPerson: Word('разведёшь', 1),
  singular3rdPerson: Word('разведёт', 1),
  plural1stPerson: Word('разведём', 1),
  plural2ndPerson: Word('разведёте', 1),
  plural3rdPerson: Word('разведут', 6),
  masculinePast: Word('развёл', 1),
  femininePast: Word('развела', 6),
  neuterPast: Word('развело', 6),
  pluralPast: Word('развели', 6),
  imperativeInformal: Word('разведи', 6),
  imperativeFormal: Word('разведите', 6),
  imperfect: ['разводить'],
};

perfectVerbs.set(развести.name.text, развести);

export { развести };