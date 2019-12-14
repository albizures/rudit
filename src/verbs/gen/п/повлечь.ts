import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повлечь: PerfectVerb = {
  name: Word('повлечь', 4),
  singular1stPerson: Word('повлеку', 6),
  singular2ndPerson: Word('повлечёшь', 4),
  singular3rdPerson: Word('повлечёт', 4),
  plural1stPerson: Word('повлечём', 4),
  plural2ndPerson: Word('повлечёте', 4),
  plural3rdPerson: Word('повлекут', 6),
  masculinePast: Word('повлёк', 1),
  femininePast: Word('повлекла', 7),
  neuterPast: Word('повлекло', 7),
  pluralPast: Word('повлекли', 7),
  imperativeInformal: Word('повлеки', 6),
  imperativeFormal: Word('повлеките', 6),
  imperfect: [],
};

perfectVerbs.set(повлечь.name.text, повлечь);

export { повлечь };