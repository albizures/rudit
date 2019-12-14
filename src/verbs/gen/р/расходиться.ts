import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расходиться: PerfectVerb = {
  name: Word('расходиться', 6),
  singular1stPerson: Word('расхожусь', 6),
  singular2ndPerson: Word('расходишься', 4),
  singular3rdPerson: Word('расходится', 4),
  plural1stPerson: Word('расходимся', 4),
  plural2ndPerson: Word('расходитесь', 4),
  plural3rdPerson: Word('расходятся', 4),
  masculinePast: Word('расходился', 6),
  femininePast: Word('расходилась', 6),
  neuterPast: Word('расходилось', 6),
  pluralPast: Word('расходились', 6),
  imperativeInformal: Word('расходись', 6),
  imperativeFormal: Word('расходитесь', 6),
  imperfect: [],
};

perfectVerbs.set(расходиться.name.text, расходиться);

export { расходиться };