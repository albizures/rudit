import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разрядиться: PerfectVerb = {
  name: Word('разрядиться', 6),
  singular1stPerson: Word('разряжусь', 6),
  singular2ndPerson: Word('разрядишься', 4),
  singular3rdPerson: Word('разрядится', 4),
  plural1stPerson: Word('разрядимся', 4),
  plural2ndPerson: Word('разрядитесь', 4),
  plural3rdPerson: Word('разрядятся', 4),
  masculinePast: Word('разрядился', 6),
  femininePast: Word('разрядилась', 6),
  neuterPast: Word('разрядилось', 6),
  pluralPast: Word('разрядились', 6),
  imperativeInformal: Word('разрядись', 6),
  imperativeFormal: Word('разрядитесь', 6),
  imperfect: [],
};

perfectVerbs.set(разрядиться.name.text, разрядиться);

export { разрядиться };