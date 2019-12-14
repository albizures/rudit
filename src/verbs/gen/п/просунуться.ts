import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просунуться: PerfectVerb = {
  name: Word('просунуться', 4),
  singular1stPerson: Word('просунусь', 4),
  singular2ndPerson: Word('просунешься', 4),
  singular3rdPerson: Word('просунется', 4),
  plural1stPerson: Word('просунемся', 4),
  plural2ndPerson: Word('просунетесь', 4),
  plural3rdPerson: Word('просунутся', 4),
  masculinePast: Word('просунулся', 4),
  femininePast: Word('просунулась', 4),
  neuterPast: Word('просунулось', 4),
  pluralPast: Word('просунулись', 4),
  imperativeInformal: Word('просунься', 4),
  imperativeFormal: Word('просуньтесь', 4),
  imperfect: [],
};

perfectVerbs.set(просунуться.name.text, просунуться);

export { просунуться };