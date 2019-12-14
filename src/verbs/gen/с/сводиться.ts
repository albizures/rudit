import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сводиться: PerfectVerb = {
  name: Word('сводиться', 4),
  singular1stPerson: Word('свожусь', 4),
  singular2ndPerson: Word('сводишься', 2),
  singular3rdPerson: Word('сводится', 2),
  plural1stPerson: Word('сводимся', 2),
  plural2ndPerson: Word('сводитесь', 2),
  plural3rdPerson: Word('сводятся', 2),
  masculinePast: Word('сводился', 4),
  femininePast: Word('сводилась', 4),
  neuterPast: Word('сводилось', 4),
  pluralPast: Word('сводились', 4),
  imperativeInformal: Word('сводись', 4),
  imperativeFormal: Word('сводитесь', 4),
  imperfect: [],
};

perfectVerbs.set(сводиться.name.text, сводиться);

export { сводиться };