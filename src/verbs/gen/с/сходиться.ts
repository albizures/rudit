import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сходиться: PerfectVerb = {
  name: Word('сходиться', 4),
  singular1stPerson: Word('схожусь', 4),
  singular2ndPerson: Word('сходишься', 2),
  singular3rdPerson: Word('сходится', 2),
  plural1stPerson: Word('сходимся', 2),
  plural2ndPerson: Word('сходитесь', 2),
  plural3rdPerson: Word('сходятся', 2),
  masculinePast: Word('сходился', 4),
  femininePast: Word('сходилась', 4),
  neuterPast: Word('сходилось', 4),
  pluralPast: Word('сходились', 4),
  imperativeInformal: Word('сходись', 4),
  imperativeFormal: Word('сходитесь', 4),
  imperfect: [],
};

perfectVerbs.set(сходиться.name.text, сходиться);

export { сходиться };