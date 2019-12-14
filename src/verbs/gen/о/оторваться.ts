import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оторваться: PerfectVerb = {
  name: Word('оторваться', 5),
  singular1stPerson: Word('оторвусь', 5),
  singular2ndPerson: Word('оторвёшься', 5),
  singular3rdPerson: Word('оторвётся', 5),
  plural1stPerson: Word('оторвёмся', 5),
  plural2ndPerson: Word('оторвётесь', 5),
  plural3rdPerson: Word('оторвутся', 5),
  masculinePast: Word('оторвался', 5),
  femininePast: Word('оторвалась', 7),
  neuterPast: Word('оторвалось//оторвало'сь', 5),
  pluralPast: Word('оторвались//оторвали'сь', 5),
  imperativeInformal: Word('оторвись', 5),
  imperativeFormal: Word('оторвитесь', 5),
  imperfect: [],
};

perfectVerbs.set(оторваться.name.text, оторваться);

export { оторваться };