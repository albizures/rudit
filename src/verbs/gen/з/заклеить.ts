import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заклеить: PerfectVerb = {
  name: Word('заклеить', 4),
  singular1stPerson: Word('заклею', 4),
  singular2ndPerson: Word('заклеишь', 4),
  singular3rdPerson: Word('заклеит', 4),
  plural1stPerson: Word('заклеим', 4),
  plural2ndPerson: Word('заклеите', 4),
  plural3rdPerson: Word('заклеят', 4),
  masculinePast: Word('заклеил', 4),
  femininePast: Word('заклеила', 4),
  neuterPast: Word('заклеило', 4),
  pluralPast: Word('заклеили', 4),
  imperativeInformal: Word('заклей', 4),
  imperativeFormal: Word('заклейте', 4),
  imperfect: [],
};

perfectVerbs.set(заклеить.name.text, заклеить);

export { заклеить };