import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вышибить: PerfectVerb = {
  name: Word('вышибить', 1),
  singular1stPerson: Word('вышибу', 1),
  singular2ndPerson: Word('вышибешь', 1),
  singular3rdPerson: Word('вышибет', 1),
  plural1stPerson: Word('вышибем', 1),
  plural2ndPerson: Word('вышибете', 1),
  plural3rdPerson: Word('вышибут', 1),
  masculinePast: Word('вышиб', 1),
  femininePast: Word('вышибла', 1),
  neuterPast: Word('вышибло', 1),
  pluralPast: Word('вышибли', 1),
  imperativeInformal: Word('вышиби', 1),
  imperativeFormal: Word('вышибите', 1),
  imperfect: [],
};

perfectVerbs.set(вышибить.name.text, вышибить);

export { вышибить };