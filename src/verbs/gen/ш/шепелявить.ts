import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шепелявить: PerfectVerb = {
  name: Word('шепелявить', 5),
  singular1stPerson: Word('шепелявлю', 5),
  singular2ndPerson: Word('шепелявишь', 5),
  singular3rdPerson: Word('шепелявит', 5),
  plural1stPerson: Word('шепелявим', 5),
  plural2ndPerson: Word('шепелявите', 5),
  plural3rdPerson: Word('шепелявят', 5),
  masculinePast: Word('шепелявил', 5),
  femininePast: Word('шепелявила', 5),
  neuterPast: Word('шепелявило', 5),
  pluralPast: Word('шепелявили', 5),
  imperativeInformal: Word('шепелявь', 5),
  imperativeFormal: Word('шепелявьте', 5),
  imperfect: [],
};

perfectVerbs.set(шепелявить.name.text, шепелявить);

export { шепелявить };