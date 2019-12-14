import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const укокошить: PerfectVerb = {
  name: Word('укокошить', 4),
  singular1stPerson: Word('укокошу', 4),
  singular2ndPerson: Word('укокошишь', 4),
  singular3rdPerson: Word('укокошит', 4),
  plural1stPerson: Word('укокошим', 4),
  plural2ndPerson: Word('укокошите', 4),
  plural3rdPerson: Word('укокошат', 4),
  masculinePast: Word('укокошил', 4),
  femininePast: Word('укокошила', 4),
  neuterPast: Word('укокошило', 4),
  pluralPast: Word('укокошили', 4),
  imperativeInformal: Word('укокошь', 4),
  imperativeFormal: Word('укокошьте', 4),
  imperfect: [],
};

perfectVerbs.set(укокошить.name.text, укокошить);

export { укокошить };