import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нацепить: PerfectVerb = {
  name: Word('нацепить', 5),
  singular1stPerson: Word('нацеплю', 6),
  singular2ndPerson: Word('нацепишь', 3),
  singular3rdPerson: Word('нацепит', 3),
  plural1stPerson: Word('нацепим', 3),
  plural2ndPerson: Word('нацепите', 3),
  plural3rdPerson: Word('нацепят', 3),
  masculinePast: Word('нацепил', 5),
  femininePast: Word('нацепила', 5),
  neuterPast: Word('нацепило', 5),
  pluralPast: Word('нацепили', 5),
  imperativeInformal: Word('нацепи', 5),
  imperativeFormal: Word('нацепите', 5),
  imperfect: [],
};

perfectVerbs.set(нацепить.name.text, нацепить);

export { нацепить };