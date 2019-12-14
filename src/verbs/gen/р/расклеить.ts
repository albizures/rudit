import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расклеить: PerfectVerb = {
  name: Word('расклеить', 5),
  singular1stPerson: Word('расклею', 5),
  singular2ndPerson: Word('расклеишь', 5),
  singular3rdPerson: Word('расклеит', 5),
  plural1stPerson: Word('расклеим', 5),
  plural2ndPerson: Word('расклеите', 5),
  plural3rdPerson: Word('расклеят', 5),
  masculinePast: Word('расклеил', 5),
  femininePast: Word('расклеила', 5),
  neuterPast: Word('расклеило', 5),
  pluralPast: Word('расклеили', 5),
  imperativeInformal: Word('расклей', 5),
  imperativeFormal: Word('расклейте', 5),
  imperfect: [],
};

perfectVerbs.set(расклеить.name.text, расклеить);

export { расклеить };