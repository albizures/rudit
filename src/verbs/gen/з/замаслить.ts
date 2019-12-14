import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замаслить: PerfectVerb = {
  name: Word('замаслить', 3),
  singular1stPerson: Word('замаслю', 3),
  singular2ndPerson: Word('замаслишь', 3),
  singular3rdPerson: Word('замаслит', 3),
  plural1stPerson: Word('замаслим', 3),
  plural2ndPerson: Word('замаслите', 3),
  plural3rdPerson: Word('замаслят', 3),
  masculinePast: Word('замаслил', 3),
  femininePast: Word('замаслила', 3),
  neuterPast: Word('замаслило', 3),
  pluralPast: Word('замаслили', 3),
  imperativeInformal: Word('замасли', 3),
  imperativeFormal: Word('замаслите', 3),
  imperfect: [],
};

perfectVerbs.set(замаслить.name.text, замаслить);

export { замаслить };