import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разобидеть: PerfectVerb = {
  name: Word('разобидеть', 5),
  singular1stPerson: Word('разобижу', 5),
  singular2ndPerson: Word('разобидишь', 5),
  singular3rdPerson: Word('разобидит', 5),
  plural1stPerson: Word('разобидим', 5),
  plural2ndPerson: Word('разобидите', 5),
  plural3rdPerson: Word('разобидят', 5),
  masculinePast: Word('разобидел', 5),
  femininePast: Word('разобидела', 5),
  neuterPast: Word('разобидело', 5),
  pluralPast: Word('разобидели', 5),
  imperativeInformal: Word('разобидь', 5),
  imperativeFormal: Word('разобидьте', 5),
  imperfect: [],
};

perfectVerbs.set(разобидеть.name.text, разобидеть);

export { разобидеть };