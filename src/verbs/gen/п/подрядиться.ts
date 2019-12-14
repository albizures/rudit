import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подрядиться: PerfectVerb = {
  name: Word('подрядиться', 6),
  singular1stPerson: Word('подряжусь', 6),
  singular2ndPerson: Word('подрядишься', 6),
  singular3rdPerson: Word('подрядится', 6),
  plural1stPerson: Word('подрядимся', 6),
  plural2ndPerson: Word('подрядитесь', 6),
  plural3rdPerson: Word('подрядятся', 6),
  masculinePast: Word('подрядился', 6),
  femininePast: Word('подрядилась', 6),
  neuterPast: Word('подрядилось', 6),
  pluralPast: Word('подрядились', 6),
  imperativeInformal: Word('подрядись', 6),
  imperativeFormal: Word('подрядитесь', 6),
  imperfect: [],
};

perfectVerbs.set(подрядиться.name.text, подрядиться);

export { подрядиться };