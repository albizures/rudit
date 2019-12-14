import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завраться: PerfectVerb = {
  name: Word('завраться', 4),
  singular1stPerson: Word('заврусь', 4),
  singular2ndPerson: Word('заврёшься', 1),
  singular3rdPerson: Word('заврётся', 1),
  plural1stPerson: Word('заврёмся', 1),
  plural2ndPerson: Word('заврётесь', 1),
  plural3rdPerson: Word('заврутся', 4),
  masculinePast: Word('заврался', 4),
  femininePast: Word('завралась', 6),
  neuterPast: Word('завралось//заврало'сь', 4),
  pluralPast: Word('заврались//заврали'сь', 4),
  imperativeInformal: Word('заврись', 4),
  imperativeFormal: Word('завритесь', 4),
  imperfect: [],
};

perfectVerbs.set(завраться.name.text, завраться);

export { завраться };