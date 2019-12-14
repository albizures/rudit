import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проклеить: PerfectVerb = {
  name: Word('проклеить', 5),
  singular1stPerson: Word('проклею', 5),
  singular2ndPerson: Word('проклеишь', 5),
  singular3rdPerson: Word('проклеит', 5),
  plural1stPerson: Word('проклеим', 5),
  plural2ndPerson: Word('проклеите', 5),
  plural3rdPerson: Word('проклеят', 5),
  masculinePast: Word('проклеил', 5),
  femininePast: Word('проклеила', 5),
  neuterPast: Word('проклеило', 5),
  pluralPast: Word('проклеили', 5),
  imperativeInformal: Word('проклей', 5),
  imperativeFormal: Word('проклейте', 5),
  imperfect: [],
};

perfectVerbs.set(проклеить.name.text, проклеить);

export { проклеить };