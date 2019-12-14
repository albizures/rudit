import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сунуться: PerfectVerb = {
  name: Word('сунуться', 1),
  singular1stPerson: Word('сунусь', 1),
  singular2ndPerson: Word('сунешься', 1),
  singular3rdPerson: Word('сунется', 1),
  plural1stPerson: Word('сунемся', 1),
  plural2ndPerson: Word('сунетесь', 1),
  plural3rdPerson: Word('сунутся', 1),
  masculinePast: Word('сунулся', 1),
  femininePast: Word('сунулась', 1),
  neuterPast: Word('сунулось', 1),
  pluralPast: Word('сунулись', 1),
  imperativeInformal: Word('сунься', 1),
  imperativeFormal: Word('суньтесь', 1),
  imperfect: [],
};

perfectVerbs.set(сунуться.name.text, сунуться);

export { сунуться };