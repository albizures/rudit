import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выводиться: PerfectVerb = {
  name: Word('выводиться', 5),
  singular1stPerson: Word('вывожусь', 5),
  singular2ndPerson: Word('выводишься', 3),
  singular3rdPerson: Word('выводится', 3),
  plural1stPerson: Word('выводимся', 3),
  plural2ndPerson: Word('выводитесь', 3),
  plural3rdPerson: Word('выводятся', 3),
  masculinePast: Word('выводился', 5),
  femininePast: Word('выводилась', 5),
  neuterPast: Word('выводилось', 5),
  pluralPast: Word('выводились', 5),
  imperativeInformal: Word('выводись', 5),
  imperativeFormal: Word('выводитесь', 5),
  imperfect: [],
};

perfectVerbs.set(выводиться.name.text, выводиться);

export { выводиться };