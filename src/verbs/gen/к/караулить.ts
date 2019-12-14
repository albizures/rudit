import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const караулить: PerfectVerb = {
  name: Word('караулить', 4),
  singular1stPerson: Word('караулю', 4),
  singular2ndPerson: Word('караулишь', 4),
  singular3rdPerson: Word('караулит', 4),
  plural1stPerson: Word('караулим', 4),
  plural2ndPerson: Word('караулите', 4),
  plural3rdPerson: Word('караулят', 4),
  masculinePast: Word('караулил', 4),
  femininePast: Word('караулила', 4),
  neuterPast: Word('караулило', 4),
  pluralPast: Word('караулили', 4),
  imperativeInformal: Word('карауль', 4),
  imperativeFormal: Word('караульте', 4),
  imperfect: [],
};

perfectVerbs.set(караулить.name.text, караулить);

export { караулить };