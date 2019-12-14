import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наклеить: PerfectVerb = {
  name: Word('наклеить', 4),
  singular1stPerson: Word('наклею', 4),
  singular2ndPerson: Word('наклеишь', 4),
  singular3rdPerson: Word('наклеит', 4),
  plural1stPerson: Word('наклеим', 4),
  plural2ndPerson: Word('наклеите', 4),
  plural3rdPerson: Word('наклеят', 4),
  masculinePast: Word('наклеил', 4),
  femininePast: Word('наклеила', 4),
  neuterPast: Word('наклеило', 4),
  pluralPast: Word('наклеили', 4),
  imperativeInformal: Word('наклей', 4),
  imperativeFormal: Word('наклейте', 4),
  imperfect: [],
};

perfectVerbs.set(наклеить.name.text, наклеить);

export { наклеить };