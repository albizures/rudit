import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застегнуться: PerfectVerb = {
  name: Word('застегнуться', 7),
  singular1stPerson: Word('застегнусь', 7),
  singular2ndPerson: Word('застегнёшься', 7),
  singular3rdPerson: Word('застегнётся', 7),
  plural1stPerson: Word('застегнёмся', 7),
  plural2ndPerson: Word('застегнётесь', 7),
  plural3rdPerson: Word('застегнутся', 7),
  masculinePast: Word('застегнулся', 7),
  femininePast: Word('застегнулась', 7),
  neuterPast: Word('застегнулось', 7),
  pluralPast: Word('застегнулись', 7),
  imperativeInformal: Word('застегнись', 7),
  imperativeFormal: Word('застегнитесь', 7),
  imperfect: [],
};

perfectVerbs.set(застегнуться.name.text, застегнуться);

export { застегнуться };