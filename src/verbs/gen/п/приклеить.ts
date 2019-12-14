import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приклеить: PerfectVerb = {
  name: Word('приклеить', 5),
  singular1stPerson: Word('приклею', 5),
  singular2ndPerson: Word('приклеишь', 5),
  singular3rdPerson: Word('приклеит', 5),
  plural1stPerson: Word('приклеим', 5),
  plural2ndPerson: Word('приклеите', 5),
  plural3rdPerson: Word('приклеят', 5),
  masculinePast: Word('приклеил', 5),
  femininePast: Word('приклеила', 5),
  neuterPast: Word('приклеило', 5),
  pluralPast: Word('приклеили', 5),
  imperativeInformal: Word('приклей', 5),
  imperativeFormal: Word('приклейте', 5),
  imperfect: [],
};

perfectVerbs.set(приклеить.name.text, приклеить);

export { приклеить };