import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оклеить: PerfectVerb = {
  name: Word('оклеить', 3),
  singular1stPerson: Word('оклею', 3),
  singular2ndPerson: Word('оклеишь', 3),
  singular3rdPerson: Word('оклеит', 3),
  plural1stPerson: Word('оклеим', 3),
  plural2ndPerson: Word('оклеите', 3),
  plural3rdPerson: Word('оклеят', 3),
  masculinePast: Word('оклеил', 3),
  femininePast: Word('оклеила', 3),
  neuterPast: Word('оклеило', 3),
  pluralPast: Word('оклеили', 3),
  imperativeInformal: Word('оклей', 3),
  imperativeFormal: Word('оклейте', 3),
  imperfect: [],
};

perfectVerbs.set(оклеить.name.text, оклеить);

export { оклеить };