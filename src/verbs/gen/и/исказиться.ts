import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исказиться: PerfectVerb = {
  name: Word('исказиться', 5),
  singular1stPerson: Word('искажусь', 5),
  singular2ndPerson: Word('исказишься', 5),
  singular3rdPerson: Word('исказится', 5),
  plural1stPerson: Word('исказимся', 5),
  plural2ndPerson: Word('исказитесь', 5),
  plural3rdPerson: Word('исказятся', 5),
  masculinePast: Word('исказился', 5),
  femininePast: Word('исказилась', 5),
  neuterPast: Word('исказилось', 5),
  pluralPast: Word('исказились', 5),
  imperativeInformal: Word('исказись', 5),
  imperativeFormal: Word('исказитесь', 5),
  imperfect: [],
};

perfectVerbs.set(исказиться.name.text, исказиться);

export { исказиться };