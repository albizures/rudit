import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осунуться: PerfectVerb = {
  name: Word('осунуться', 2),
  singular1stPerson: Word('осунусь', 2),
  singular2ndPerson: Word('осунешься', 2),
  singular3rdPerson: Word('осунется', 2),
  plural1stPerson: Word('осунемся', 2),
  plural2ndPerson: Word('осунетесь', 2),
  plural3rdPerson: Word('осунутся', 2),
  masculinePast: Word('осунулся', 2),
  femininePast: Word('осунулась', 2),
  neuterPast: Word('осунулось', 2),
  pluralPast: Word('осунулись', 2),
  imperativeInformal: Word('осунься', 2),
  imperativeFormal: Word('осуньтесь', 2),
  imperfect: [],
};

perfectVerbs.set(осунуться.name.text, осунуться);

export { осунуться };