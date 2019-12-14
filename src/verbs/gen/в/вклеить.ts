import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вклеить: PerfectVerb = {
  name: Word('вклеить', 3),
  singular1stPerson: Word('вклею', 3),
  singular2ndPerson: Word('вклеишь', 3),
  singular3rdPerson: Word('вклеит', 3),
  plural1stPerson: Word('вклеим', 3),
  plural2ndPerson: Word('вклеите', 3),
  plural3rdPerson: Word('вклеят', 3),
  masculinePast: Word('вклеил', 3),
  femininePast: Word('вклеила', 3),
  neuterPast: Word('вклеило', 3),
  pluralPast: Word('вклеили', 3),
  imperativeInformal: Word('вклей', 3),
  imperativeFormal: Word('вклейте', 3),
  imperfect: [],
};

perfectVerbs.set(вклеить.name.text, вклеить);

export { вклеить };