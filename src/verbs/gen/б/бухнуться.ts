import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бухнуться: PerfectVerb = {
  name: Word('бухнуться', 1),
  singular1stPerson: Word('бухнусь', 1),
  singular2ndPerson: Word('бухнешься', 1),
  singular3rdPerson: Word('бухнется', 1),
  plural1stPerson: Word('бухнемся', 1),
  plural2ndPerson: Word('бухнетесь', 1),
  plural3rdPerson: Word('бухнутся', 1),
  masculinePast: Word('бухнулся', 1),
  femininePast: Word('бухнулась', 1),
  neuterPast: Word('бухнулось', 1),
  pluralPast: Word('бухнулись', 1),
  imperativeInformal: Word('бухнись', 1),
  imperativeFormal: Word('бухнитесь', 1),
  imperfect: [],
};

perfectVerbs.set(бухнуться.name.text, бухнуться);

export { бухнуться };