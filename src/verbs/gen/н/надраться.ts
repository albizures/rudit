import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надраться: PerfectVerb = {
  name: Word('надраться', 4),
  singular1stPerson: Word('надерусь', 5),
  singular2ndPerson: Word('надерёшься', 5),
  singular3rdPerson: Word('надерётся', 5),
  plural1stPerson: Word('надерёмся', 5),
  plural2ndPerson: Word('надерётесь', 5),
  plural3rdPerson: Word('надерутся', 5),
  masculinePast: Word('надрался', 4),
  femininePast: Word('надралась', 6),
  neuterPast: Word('надралось//надрало'сь', 4),
  pluralPast: Word('надрались//надрали'сь', 4),
  imperativeInformal: Word('надерись', 5),
  imperativeFormal: Word('надеритесь', 5),
  imperfect: [],
};

perfectVerbs.set(надраться.name.text, надраться);

export { надраться };