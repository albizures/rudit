import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ерошить: PerfectVerb = {
  name: Word('ерошить', 2),
  singular1stPerson: Word('ерошу', 2),
  singular2ndPerson: Word('ерошишь', 2),
  singular3rdPerson: Word('ерошит', 2),
  plural1stPerson: Word('ерошим', 2),
  plural2ndPerson: Word('ерошите', 2),
  plural3rdPerson: Word('ерошат', 2),
  masculinePast: Word('ерошил', 2),
  femininePast: Word('ерошила', 2),
  neuterPast: Word('ерошило', 2),
  pluralPast: Word('ерошили', 2),
  imperativeInformal: Word('ерошь', 2),
  imperativeFormal: Word('ерошьте', 2),
  imperfect: [],
};

perfectVerbs.set(ерошить.name.text, ерошить);

export { ерошить };