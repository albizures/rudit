import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зацепить: PerfectVerb = {
  name: Word('зацепить', 5),
  singular1stPerson: Word('зацеплю', 6),
  singular2ndPerson: Word('зацепишь', 3),
  singular3rdPerson: Word('зацепит', 3),
  plural1stPerson: Word('зацепим', 3),
  plural2ndPerson: Word('зацепите', 3),
  plural3rdPerson: Word('зацепят', 3),
  masculinePast: Word('зацепил', 5),
  femininePast: Word('зацепила', 5),
  neuterPast: Word('зацепило', 5),
  pluralPast: Word('зацепили', 5),
  imperativeInformal: Word('зацепи', 5),
  imperativeFormal: Word('зацепите', 5),
  imperfect: [],
};

perfectVerbs.set(зацепить.name.text, зацепить);

export { зацепить };