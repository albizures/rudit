import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окунуться: PerfectVerb = {
  name: Word('окунуться', 4),
  singular1stPerson: Word('окунусь', 4),
  singular2ndPerson: Word('окунёшься', 0),
  singular3rdPerson: Word('окунётся', 0),
  plural1stPerson: Word('окунёмся', 0),
  plural2ndPerson: Word('окунётесь', 6),
  plural3rdPerson: Word('окунутся', 4),
  masculinePast: Word('окунулся', 4),
  femininePast: Word('окунулась', 4),
  neuterPast: Word('окунулось', 4),
  pluralPast: Word('окунулись', 4),
  imperativeInformal: Word('окунись', 4),
  imperativeFormal: Word('окунитесь', 4),
  imperfect: [],
};

perfectVerbs.set(окунуться.name.text, окунуться);

export { окунуться };