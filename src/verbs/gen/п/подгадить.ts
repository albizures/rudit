import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подгадить: PerfectVerb = {
  name: Word('подгадить', 4),
  singular1stPerson: Word('подгажу', 4),
  singular2ndPerson: Word('подгадишь', 4),
  singular3rdPerson: Word('подгадит', 4),
  plural1stPerson: Word('подгадим', 4),
  plural2ndPerson: Word('подгадите', 4),
  plural3rdPerson: Word('подгадят', 4),
  masculinePast: Word('подгадил', 4),
  femininePast: Word('подгадила', 4),
  neuterPast: Word('подгадило', 4),
  pluralPast: Word('подгадили', 4),
  imperativeInformal: Word('подгадь', 4),
  imperativeFormal: Word('подгадьте', 4),
  imperfect: [],
};

perfectVerbs.set(подгадить.name.text, подгадить);

export { подгадить };