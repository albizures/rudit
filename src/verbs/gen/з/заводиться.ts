import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заводиться: PerfectVerb = {
  name: Word('заводиться', 5),
  singular1stPerson: Word('завожусь', 5),
  singular2ndPerson: Word('заводишься', 3),
  singular3rdPerson: Word('заводится', 3),
  plural1stPerson: Word('заводимся', 3),
  plural2ndPerson: Word('заводитесь', 3),
  plural3rdPerson: Word('заводятся', 3),
  masculinePast: Word('заводился', 5),
  femininePast: Word('заводилась', 5),
  neuterPast: Word('заводилось', 5),
  pluralPast: Word('заводились', 5),
  imperativeInformal: Word('заводись', 5),
  imperativeFormal: Word('заводитесь', 5),
  imperfect: [],
};

perfectVerbs.set(заводиться.name.text, заводиться);

export { заводиться };