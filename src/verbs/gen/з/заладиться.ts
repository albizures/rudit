import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заладиться: PerfectVerb = {
  name: Word('заладиться', 3),
  singular1stPerson: Word('залажусь', 3),
  singular2ndPerson: Word('заладишься', 3),
  singular3rdPerson: Word('заладится', 3),
  plural1stPerson: Word('заладимся', 3),
  plural2ndPerson: Word('заладитесь', 3),
  plural3rdPerson: Word('заладятся', 3),
  masculinePast: Word('заладился', 3),
  femininePast: Word('заладилась', 3),
  neuterPast: Word('заладилось', 3),
  pluralPast: Word('заладились', 3),
  imperativeInformal: Word('заладься', 3),
  imperativeFormal: Word('заладьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(заладиться.name.text, заладиться);

export { заладиться };