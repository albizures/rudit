import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const брякнуться: PerfectVerb = {
  name: Word('брякнуться', 2),
  singular1stPerson: Word('брякнусь', 2),
  singular2ndPerson: Word('брякнешься', 2),
  singular3rdPerson: Word('брякнется', 2),
  plural1stPerson: Word('брякнемся', 2),
  plural2ndPerson: Word('брякнетесь', 2),
  plural3rdPerson: Word('брякнутся', 2),
  masculinePast: Word('брякнулся', 2),
  femininePast: Word('брякнулась', 2),
  neuterPast: Word('брякнулось', 2),
  pluralPast: Word('брякнулись', 2),
  imperativeInformal: Word('брякнись', 2),
  imperativeFormal: Word('брякнитесь', 2),
  imperfect: [],
};

perfectVerbs.set(брякнуться.name.text, брякнуться);

export { брякнуться };