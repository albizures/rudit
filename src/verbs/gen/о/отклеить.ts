import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отклеить: PerfectVerb = {
  name: Word('отклеить', 4),
  singular1stPerson: Word('отклею', 4),
  singular2ndPerson: Word('отклеишь', 4),
  singular3rdPerson: Word('отклеит', 4),
  plural1stPerson: Word('отклеим', 4),
  plural2ndPerson: Word('отклеите', 4),
  plural3rdPerson: Word('отклеят', 4),
  masculinePast: Word('отклеил', 4),
  femininePast: Word('отклеила', 4),
  neuterPast: Word('отклеило', 4),
  pluralPast: Word('отклеили', 4),
  imperativeInformal: Word('отклей', 4),
  imperativeFormal: Word('отклейте', 4),
  imperfect: [],
};

perfectVerbs.set(отклеить.name.text, отклеить);

export { отклеить };