import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проказить: PerfectVerb = {
  name: Word('проказить', 6),
  singular1stPerson: Word('прокажу', 6),
  singular2ndPerson: Word('проказишь', 6),
  singular3rdPerson: Word('проказит', 6),
  plural1stPerson: Word('проказим', 6),
  plural2ndPerson: Word('проказите', 6),
  plural3rdPerson: Word('проказят', 6),
  masculinePast: Word('проказил', 6),
  femininePast: Word('проказила', 6),
  neuterPast: Word('проказило', 6),
  pluralPast: Word('проказили', 6),
  imperativeInformal: Word('прокази', 6),
  imperativeFormal: Word('проказите', 6),
  imperfect: [],
};

perfectVerbs.set(проказить.name.text, проказить);

export { проказить };