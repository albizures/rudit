import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вовлечь: PerfectVerb = {
  name: Word('вовлечь', 4),
  singular1stPerson: Word('вовлеку', 6),
  singular2ndPerson: Word('вовлечёшь', 4),
  singular3rdPerson: Word('вовлечёт', 4),
  plural1stPerson: Word('вовлечём', 4),
  plural2ndPerson: Word('вовлечёте', 4),
  plural3rdPerson: Word('вовлекут', 6),
  masculinePast: Word('вовлёк', 1),
  femininePast: Word('вовлекла', 7),
  neuterPast: Word('вовлекло', 7),
  pluralPast: Word('вовлекли', 7),
  imperativeInformal: Word('вовлеки', 6),
  imperativeFormal: Word('вовлеките', 6),
  imperfect: [],
};

perfectVerbs.set(вовлечь.name.text, вовлечь);

export { вовлечь };