import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обезопаситься: PerfectVerb = {
  name: Word('обезопаситься', 6),
  singular1stPerson: Word('обезопашусь', 6),
  singular2ndPerson: Word('обезопасишься', 6),
  singular3rdPerson: Word('обезопасится', 6),
  plural1stPerson: Word('обезопасимся', 6),
  plural2ndPerson: Word('обезопаситесь', 6),
  plural3rdPerson: Word('обезопасятся', 6),
  masculinePast: Word('обезопасился', 6),
  femininePast: Word('обезопасилась', 6),
  neuterPast: Word('обезопасилось', 6),
  pluralPast: Word('обезопасились', 6),
  imperativeInformal: Word('обезопасься', 6),
  imperativeFormal: Word('обезопасьтесь', 6),
  imperfect: [],
};

perfectVerbs.set(обезопаситься.name.text, обезопаситься);

export { обезопаситься };