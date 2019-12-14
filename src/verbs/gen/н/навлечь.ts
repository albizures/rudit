import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const навлечь: PerfectVerb = {
  name: Word('навлечь', 4),
  singular1stPerson: Word('навлеку', 6),
  singular2ndPerson: Word('навлечёшь', 6),
  singular3rdPerson: Word('навлечёт', 6),
  plural1stPerson: Word('навлечём', 6),
  plural2ndPerson: Word('навлечёте', 6),
  plural3rdPerson: Word('навлекут', 6),
  masculinePast: Word('навлёк', 4),
  femininePast: Word('навлекла', 7),
  neuterPast: Word('навлекло', 7),
  pluralPast: Word('навлекли', 7),
  imperativeInformal: Word('навлеки', 6),
  imperativeFormal: Word('навлеките', 6),
  imperfect: [],
};

perfectVerbs.set(навлечь.name.text, навлечь);

export { навлечь };