import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изводиться: PerfectVerb = {
  name: Word('изводиться', 5),
  singular1stPerson: Word('извожусь', 5),
  singular2ndPerson: Word('изводишься', 3),
  singular3rdPerson: Word('изводится', 3),
  plural1stPerson: Word('изводимся', 3),
  plural2ndPerson: Word('изводитесь', 3),
  plural3rdPerson: Word('изводятся', 3),
  masculinePast: Word('изводился', 5),
  femininePast: Word('изводилась', 5),
  neuterPast: Word('изводилось', 5),
  pluralPast: Word('изводились', 5),
  imperativeInformal: Word('изводись', 5),
  imperativeFormal: Word('изводитесь', 5),
  imperfect: [],
};

perfectVerbs.set(изводиться.name.text, изводиться);

export { изводиться };