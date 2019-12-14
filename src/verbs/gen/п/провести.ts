import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const провести: PerfectVerb = {
  name: Word('провести', 7),
  singular1stPerson: Word('проведу', 6),
  singular2ndPerson: Word('проведёшь', 4),
  singular3rdPerson: Word('проведёт', 4),
  plural1stPerson: Word('проведём', 4),
  plural2ndPerson: Word('проведёте', 4),
  plural3rdPerson: Word('проведут', 6),
  masculinePast: Word('провёл', 2),
  femininePast: Word('провела', 6),
  neuterPast: Word('провело', 6),
  pluralPast: Word('провели', 6),
  imperativeInformal: Word('проведи', 6),
  imperativeFormal: Word('проведите', 6),
  imperfect: ['проводить'],
};

perfectVerbs.set(провести.name.text, провести);

export { провести };