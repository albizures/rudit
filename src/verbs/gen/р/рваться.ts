import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рваться: PerfectVerb = {
  name: Word('рваться', 2),
  singular1stPerson: Word('рвусь', 2),
  singular2ndPerson: Word('рвёшься', 2),
  singular3rdPerson: Word('рвётся', 2),
  plural1stPerson: Word('рвёмся', 2),
  plural2ndPerson: Word('рвётесь', 2),
  plural3rdPerson: Word('рвутся', 2),
  masculinePast: Word('рвался', 2),
  femininePast: Word('рвалась', 4),
  neuterPast: Word('рвалось//рвало'сь', 2),
  pluralPast: Word('рвались//рвали'сь', 2),
  imperativeInformal: Word('рвись', 2),
  imperativeFormal: Word('рвитесь', 2),
  imperfect: [],
};

perfectVerbs.set(рваться.name.text, рваться);

export { рваться };