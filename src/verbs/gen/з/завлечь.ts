import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завлечь: PerfectVerb = {
  name: Word('завлечь', 4),
  singular1stPerson: Word('завлеку', 6),
  singular2ndPerson: Word('завлечёшь', 6),
  singular3rdPerson: Word('завлечёт', 6),
  plural1stPerson: Word('завлечём', 6),
  plural2ndPerson: Word('завлечёте', 6),
  plural3rdPerson: Word('завлекут', 6),
  masculinePast: Word('завлёк', 4),
  femininePast: Word('завлекла', 7),
  neuterPast: Word('завлекло', 7),
  pluralPast: Word('завлекли', 7),
  imperativeInformal: Word('завлеки', 6),
  imperativeFormal: Word('завлеките', 6),
  imperfect: [],
};

perfectVerbs.set(завлечь.name.text, завлечь);

export { завлечь };