import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изорваться: PerfectVerb = {
  name: Word('изорваться', 5),
  singular1stPerson: Word('изорвусь', 5),
  singular2ndPerson: Word('изорвёшься', 5),
  singular3rdPerson: Word('изорвётся', 5),
  plural1stPerson: Word('изорвёмся', 5),
  plural2ndPerson: Word('изорвётесь', 5),
  plural3rdPerson: Word('изорвутся', 5),
  masculinePast: Word('изорвался', 5),
  femininePast: Word('изорвалась', 7),
  neuterPast: Word('изорвалось//изорвало'сь', 5),
  pluralPast: Word('изорвались//изорвали'сь', 5),
  imperativeInformal: Word('изорвись', 5),
  imperativeFormal: Word('изорвитесь', 5),
  imperfect: [],
};

perfectVerbs.set(изорваться.name.text, изорваться);

export { изорваться };