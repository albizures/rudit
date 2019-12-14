import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прорваться: PerfectVerb = {
  name: Word('прорваться', 5),
  singular1stPerson: Word('прорвусь', 5),
  singular2ndPerson: Word('прорвёшься', 2),
  singular3rdPerson: Word('прорвётся', 2),
  plural1stPerson: Word('прорвёмся', 2),
  plural2ndPerson: Word('прорвётесь', 7),
  plural3rdPerson: Word('прорвутся', 5),
  masculinePast: Word('прорвался', 5),
  femininePast: Word('прорвалась', 7),
  neuterPast: Word('прорвалось//прорвало'сь', 5),
  pluralPast: Word('прорвались//прорвали'сь', 5),
  imperativeInformal: Word('прорвись', 5),
  imperativeFormal: Word('прорвитесь', 5),
  imperfect: [],
};

perfectVerbs.set(прорваться.name.text, прорваться);

export { прорваться };