import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обклеить: PerfectVerb = {
  name: Word('обклеить', 4),
  singular1stPerson: Word('обклею', 4),
  singular2ndPerson: Word('обклеишь', 4),
  singular3rdPerson: Word('обклеит', 4),
  plural1stPerson: Word('обклеим', 4),
  plural2ndPerson: Word('обклеите', 4),
  plural3rdPerson: Word('обклеят', 4),
  masculinePast: Word('обклеил', 4),
  femininePast: Word('обклеила', 4),
  neuterPast: Word('обклеило', 4),
  pluralPast: Word('обклеили', 4),
  imperativeInformal: Word('обклей', 4),
  imperativeFormal: Word('обклейте', 4),
  imperfect: [],
};

perfectVerbs.set(обклеить.name.text, обклеить);

export { обклеить };