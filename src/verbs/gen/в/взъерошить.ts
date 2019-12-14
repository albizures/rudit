import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взъерошить: PerfectVerb = {
  name: Word('взъерошить', 5),
  singular1stPerson: Word('взъерошу', 5),
  singular2ndPerson: Word('взъерошишь', 5),
  singular3rdPerson: Word('взъерошит', 5),
  plural1stPerson: Word('взъерошим', 5),
  plural2ndPerson: Word('взъерошите', 5),
  plural3rdPerson: Word('взъерошат', 5),
  masculinePast: Word('взъерошил', 5),
  femininePast: Word('взъерошила', 5),
  neuterPast: Word('взъерошило', 5),
  pluralPast: Word('взъерошили', 5),
  imperativeInformal: Word('взъерошь', 5),
  imperativeFormal: Word('взъерошьте', 5),
  imperfect: [],
};

perfectVerbs.set(взъерошить.name.text, взъерошить);

export { взъерошить };