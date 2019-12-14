import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const париться: PerfectVerb = {
  name: Word('париться', 1),
  singular1stPerson: Word('парюсь', 1),
  singular2ndPerson: Word('паришься', 1),
  singular3rdPerson: Word('парится', 1),
  plural1stPerson: Word('паримся', 1),
  plural2ndPerson: Word('паритесь', 1),
  plural3rdPerson: Word('парятся', 1),
  masculinePast: Word('парился', 1),
  femininePast: Word('парилась', 1),
  neuterPast: Word('парилось', 1),
  pluralPast: Word('парились', 1),
  imperativeInformal: Word('парься', 1),
  imperativeFormal: Word('парьтесь', 1),
  imperfect: [],
};

perfectVerbs.set(париться.name.text, париться);

export { париться };