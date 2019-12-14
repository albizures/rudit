import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подорваться: PerfectVerb = {
  name: Word('подорваться', 6),
  singular1stPerson: Word('подорвусь', 6),
  singular2ndPerson: Word('подорвёшься', 6),
  singular3rdPerson: Word('подорвётся', 6),
  plural1stPerson: Word('подорвёмся', 6),
  plural2ndPerson: Word('подорвётесь', 6),
  plural3rdPerson: Word('подорвутся', 6),
  masculinePast: Word('подорвался', 6),
  femininePast: Word('подорвалась', 8),
  neuterPast: Word('подорвалось//подорвало'сь', 6),
  pluralPast: Word('подорвались//подорвали'сь', 6),
  imperativeInformal: Word('подорвись', 6),
  imperativeFormal: Word('подорвитесь', 6),
  imperfect: [],
};

perfectVerbs.set(подорваться.name.text, подорваться);

export { подорваться };