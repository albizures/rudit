import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const верховодить: PerfectVerb = {
  name: Word('верховодить', 6),
  singular1stPerson: Word('верховожу', 6),
  singular2ndPerson: Word('верховодишь', 6),
  singular3rdPerson: Word('верховодит', 6),
  plural1stPerson: Word('верховодим', 6),
  plural2ndPerson: Word('верховодите', 6),
  plural3rdPerson: Word('верховодят', 6),
  masculinePast: Word('верховодил', 6),
  femininePast: Word('верховодила', 6),
  neuterPast: Word('верховодило', 6),
  pluralPast: Word('верховодили', 6),
  imperativeInformal: Word('верховодь', 6),
  imperativeFormal: Word('верховодьте', 6),
  imperfect: [],
};

perfectVerbs.set(верховодить.name.text, верховодить);

export { верховодить };