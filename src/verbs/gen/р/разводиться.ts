import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разводиться: PerfectVerb = {
  name: Word('разводиться', 6),
  singular1stPerson: Word('развожусь', 6),
  singular2ndPerson: Word('разводишься', 4),
  singular3rdPerson: Word('разводится', 4),
  plural1stPerson: Word('разводимся', 4),
  plural2ndPerson: Word('разводитесь', 4),
  plural3rdPerson: Word('разводятся', 4),
  masculinePast: Word('разводился', 6),
  femininePast: Word('разводилась', 6),
  neuterPast: Word('разводилось', 6),
  pluralPast: Word('разводились', 6),
  imperativeInformal: Word('разводись', 6),
  imperativeFormal: Word('разводитесь', 6),
  imperfect: ['развестись'],
};

perfectVerbs.set(разводиться.name.text, разводиться);

export { разводиться };