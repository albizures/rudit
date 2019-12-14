import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обособиться: PerfectVerb = {
  name: Word('обособиться', 4),
  singular1stPerson: Word('обособлюсь', 4),
  singular2ndPerson: Word('обособишься', 4),
  singular3rdPerson: Word('обособится', 4),
  plural1stPerson: Word('обособимся', 4),
  plural2ndPerson: Word('обособитесь', 4),
  plural3rdPerson: Word('обособятся', 4),
  masculinePast: Word('обособился', 4),
  femininePast: Word('обособилась', 4),
  neuterPast: Word('обособилось', 4),
  pluralPast: Word('обособились', 4),
  imperativeInformal: Word('обособься', 4),
  imperativeFormal: Word('обособьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(обособиться.name.text, обособиться);

export { обособиться };