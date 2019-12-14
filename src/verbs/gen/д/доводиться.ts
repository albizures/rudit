import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доводиться: PerfectVerb = {
  name: Word('доводиться', 5),
  singular1stPerson: Word('довожусь', 5),
  singular2ndPerson: Word('доводишься', 3),
  singular3rdPerson: Word('доводится', 3),
  plural1stPerson: Word('доводимся', 3),
  plural2ndPerson: Word('доводитесь', 3),
  plural3rdPerson: Word('доводятся', 3),
  masculinePast: Word('доводился', 5),
  femininePast: Word('доводилась', 5),
  neuterPast: Word('доводилось', 5),
  pluralPast: Word('доводились', 5),
  imperativeInformal: Word('доводись', 5),
  imperativeFormal: Word('доводитесь', 5),
  imperfect: [],
};

perfectVerbs.set(доводиться.name.text, доводиться);

export { доводиться };