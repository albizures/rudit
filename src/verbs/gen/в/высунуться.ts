import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const высунуться: PerfectVerb = {
  name: Word('высунуться', 1),
  singular1stPerson: Word('высунусь', 1),
  singular2ndPerson: Word('высунешься', 1),
  singular3rdPerson: Word('высунется', 1),
  plural1stPerson: Word('высунемся', 1),
  plural2ndPerson: Word('высунетесь', 1),
  plural3rdPerson: Word('высунутся', 1),
  masculinePast: Word('высунулся', 1),
  femininePast: Word('высунулась', 1),
  neuterPast: Word('высунулось', 1),
  pluralPast: Word('высунулись', 1),
  imperativeInformal: Word('высунись//вы'сунься', 1),
  imperativeFormal: Word('высуньтесь', 1),
  imperfect: [],
};

perfectVerbs.set(высунуться.name.text, высунуться);

export { высунуться };