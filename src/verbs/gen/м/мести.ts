import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мести: PerfectVerb = {
  name: Word('мести', 4),
  singular1stPerson: Word('мету', 3),
  singular2ndPerson: Word('метёшь', 1),
  singular3rdPerson: Word('метёт', 1),
  plural1stPerson: Word('метём', 1),
  plural2ndPerson: Word('метёте', 1),
  plural3rdPerson: Word('метут', 3),
  masculinePast: Word('мёл', 1),
  femininePast: Word('мела', 3),
  neuterPast: Word('мело', 3),
  pluralPast: Word('мели', 3),
  imperativeInformal: Word('мети', 3),
  imperativeFormal: Word('метите', 3),
  imperfect: ['подмести','замести'],
};

perfectVerbs.set(мести.name.text, мести);

export { мести };