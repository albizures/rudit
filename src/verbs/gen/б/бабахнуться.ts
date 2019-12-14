import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бабахнуться: PerfectVerb = {
  name: Word('бабахнуться', 3),
  singular1stPerson: Word('бабахнусь', 3),
  singular2ndPerson: Word('бабахнешься', 3),
  singular3rdPerson: Word('бабахнется', 3),
  plural1stPerson: Word('бабахнемся', 3),
  plural2ndPerson: Word('бабахнетесь', 3),
  plural3rdPerson: Word('бабахнутся', 3),
  masculinePast: Word('бабахнулся', 3),
  femininePast: Word('бабахнулась', 3),
  neuterPast: Word('бабахнулось', 3),
  pluralPast: Word('бабахнулись', 3),
  imperativeInformal: Word('бабахнись', 3),
  imperativeFormal: Word('бабахнитесь', 3),
  imperfect: [],
};

perfectVerbs.set(бабахнуться.name.text, бабахнуться);

export { бабахнуться };