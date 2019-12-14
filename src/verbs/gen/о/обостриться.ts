import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обостриться: PerfectVerb = {
  name: Word('обостриться', 6),
  singular1stPerson: Word('обострюсь', 6),
  singular2ndPerson: Word('обостришься', 6),
  singular3rdPerson: Word('обострится', 6),
  plural1stPerson: Word('обостримся', 6),
  plural2ndPerson: Word('обостритесь', 6),
  plural3rdPerson: Word('обострятся', 6),
  masculinePast: Word('обострился', 6),
  femininePast: Word('обострилась', 6),
  neuterPast: Word('обострилось', 6),
  pluralPast: Word('обострились', 6),
  imperativeInformal: Word('обострись', 6),
  imperativeFormal: Word('обостритесь', 6),
  imperfect: [],
};

perfectVerbs.set(обостриться.name.text, обостриться);

export { обостриться };