import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задраться: PerfectVerb = {
  name: Word('задраться', 4),
  singular1stPerson: Word('задерусь', 5),
  singular2ndPerson: Word('задерёшься', 5),
  singular3rdPerson: Word('задерётся', 5),
  plural1stPerson: Word('задерёмся', 5),
  plural2ndPerson: Word('задерётесь', 5),
  plural3rdPerson: Word('задерутся', 5),
  masculinePast: Word('задрался', 4),
  femininePast: Word('задралась', 6),
  neuterPast: Word('задралось//задрало'сь', 4),
  pluralPast: Word('задрались//задрали'сь', 4),
  imperativeInformal: Word('задерись', 5),
  imperativeFormal: Word('задеритесь', 5),
  imperfect: [],
};

perfectVerbs.set(задраться.name.text, задраться);

export { задраться };