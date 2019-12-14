import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const очнуться: PerfectVerb = {
  name: Word('очнуться', 3),
  singular1stPerson: Word('очнусь', 3),
  singular2ndPerson: Word('очнёшься', 0),
  singular3rdPerson: Word('очнётся', 0),
  plural1stPerson: Word('очнёмся', 0),
  plural2ndPerson: Word('очнётесь', 5),
  plural3rdPerson: Word('очнутся', 3),
  masculinePast: Word('очнулся', 3),
  femininePast: Word('очнулась', 3),
  neuterPast: Word('очнулось', 3),
  pluralPast: Word('очнулись', 3),
  imperativeInformal: Word('очнись', 3),
  imperativeFormal: Word('очнитесь', 3),
  imperfect: [],
};

perfectVerbs.set(очнуться.name.text, очнуться);

export { очнуться };