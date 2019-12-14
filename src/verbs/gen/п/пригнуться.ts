import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пригнуться: PerfectVerb = {
  name: Word('пригнуться', 5),
  singular1stPerson: Word('пригнусь', 5),
  singular2ndPerson: Word('пригнёшься', 2),
  singular3rdPerson: Word('пригнётся', 2),
  plural1stPerson: Word('пригнёмся', 2),
  plural2ndPerson: Word('пригнётесь', 7),
  plural3rdPerson: Word('пригнутся', 5),
  masculinePast: Word('пригнулся', 5),
  femininePast: Word('пригнулась', 5),
  neuterPast: Word('пригнулось', 5),
  pluralPast: Word('пригнулись', 5),
  imperativeInformal: Word('пригнись', 5),
  imperativeFormal: Word('пригнитесь', 5),
  imperfect: [],
};

perfectVerbs.set(пригнуться.name.text, пригнуться);

export { пригнуться };