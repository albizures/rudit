import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отцепить: PerfectVerb = {
  name: Word('отцепить', 5),
  singular1stPerson: Word('отцеплю', 6),
  singular2ndPerson: Word('отцепишь', 3),
  singular3rdPerson: Word('отцепит', 3),
  plural1stPerson: Word('отцепим', 3),
  plural2ndPerson: Word('отцепите', 3),
  plural3rdPerson: Word('отцепят', 3),
  masculinePast: Word('отцепил', 5),
  femininePast: Word('отцепила', 5),
  neuterPast: Word('отцепило', 5),
  pluralPast: Word('отцепили', 5),
  imperativeInformal: Word('отцепи', 5),
  imperativeFormal: Word('отцепите', 5),
  imperfect: [],
};

perfectVerbs.set(отцепить.name.text, отцепить);

export { отцепить };