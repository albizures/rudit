import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кинуться: PerfectVerb = {
  name: Word('кинуться', 1),
  singular1stPerson: Word('кинусь', 1),
  singular2ndPerson: Word('кинешься', 1),
  singular3rdPerson: Word('кинется', 1),
  plural1stPerson: Word('кинемся', 1),
  plural2ndPerson: Word('кинетесь', 1),
  plural3rdPerson: Word('кинутся', 1),
  masculinePast: Word('кинулся', 1),
  femininePast: Word('кинулась', 1),
  neuterPast: Word('кинулось', 1),
  pluralPast: Word('кинулись', 1),
  imperativeInformal: Word('кинься', 1),
  imperativeFormal: Word('киньтесь', 1),
  imperfect: [],
};

perfectVerbs.set(кинуться.name.text, кинуться);

export { кинуться };