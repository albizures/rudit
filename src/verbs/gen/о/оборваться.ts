import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оборваться: PerfectVerb = {
  name: Word('оборваться', 5),
  singular1stPerson: Word('оборвусь', 5),
  singular2ndPerson: Word('оборвёшься', 5),
  singular3rdPerson: Word('оборвётся', 5),
  plural1stPerson: Word('оборвёмся', 5),
  plural2ndPerson: Word('оборвётесь', 5),
  plural3rdPerson: Word('оборвутся', 5),
  masculinePast: Word('оборвался', 5),
  femininePast: Word('оборвалась', 7),
  neuterPast: Word('оборвалось//оборвало'сь', 5),
  pluralPast: Word('оборвались//оборвали'сь', 5),
  imperativeInformal: Word('оборвись', 5),
  imperativeFormal: Word('оборвитесь', 5),
  imperfect: [],
};

perfectVerbs.set(оборваться.name.text, оборваться);

export { оборваться };