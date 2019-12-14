import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заикнуться: PerfectVerb = {
  name: Word('заикнуться', 5),
  singular1stPerson: Word('заикнусь', 5),
  singular2ndPerson: Word('заикнёшься', 5),
  singular3rdPerson: Word('заикнётся', 5),
  plural1stPerson: Word('заикнёмся', 5),
  plural2ndPerson: Word('заикнётесь', 5),
  plural3rdPerson: Word('заикнутся', 5),
  masculinePast: Word('заикнулся', 5),
  femininePast: Word('заикнулась', 5),
  neuterPast: Word('заикнулось', 5),
  pluralPast: Word('заикнулись', 5),
  imperativeInformal: Word('заикнись', 5),
  imperativeFormal: Word('заикнитесь', 5),
  imperfect: [],
};

perfectVerbs.set(заикнуться.name.text, заикнуться);

export { заикнуться };