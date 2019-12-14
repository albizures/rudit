import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повлечь: PerfectVerb = {
  name: Word('повлечь', 4),
  singular1stPerson: Word('повлеку', 6),
  singular2ndPerson: Word('повлечёшь', 6),
  singular3rdPerson: Word('повлечёт', 6),
  plural1stPerson: Word('повлечём', 6),
  plural2ndPerson: Word('повлечёте', 6),
  plural3rdPerson: Word('повлекут', 6),
  masculinePast: Word('повлёк', 4),
  femininePast: Word('повлекла', 7),
  neuterPast: Word('повлекло', 7),
  pluralPast: Word('повлекли', 7),
  imperativeInformal: Word('повлеки', 6),
  imperativeFormal: Word('повлеките', 6),
  imperfect: [],
};

perfectVerbs.set(повлечь.name.text, повлечь);

export { повлечь };