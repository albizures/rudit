import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const продраться: PerfectVerb = {
  name: Word('продраться', 5),
  singular1stPerson: Word('продерусь', 6),
  singular2ndPerson: Word('продерёшься', 6),
  singular3rdPerson: Word('продерётся', 6),
  plural1stPerson: Word('продерёмся', 6),
  plural2ndPerson: Word('продерётесь', 6),
  plural3rdPerson: Word('продерутся', 6),
  masculinePast: Word('продрался', 5),
  femininePast: Word('продралась', 7),
  neuterPast: Word('продралось//продрало'сь', 5),
  pluralPast: Word('продрались//продрали'сь', 5),
  imperativeInformal: Word('продерись', 6),
  imperativeFormal: Word('продеритесь', 6),
  imperfect: [],
};

perfectVerbs.set(продраться.name.text, продраться);

export { продраться };