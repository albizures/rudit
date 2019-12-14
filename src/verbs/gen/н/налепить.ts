import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const налепить: PerfectVerb = {
  name: Word('налепить', 5),
  singular1stPerson: Word('налеплю', 6),
  singular2ndPerson: Word('налепишь', 3),
  singular3rdPerson: Word('налепит', 3),
  plural1stPerson: Word('налепим', 3),
  plural2ndPerson: Word('налепите', 3),
  plural3rdPerson: Word('налепят', 3),
  masculinePast: Word('налепил', 5),
  femininePast: Word('налепила', 5),
  neuterPast: Word('налепило', 5),
  pluralPast: Word('налепили', 5),
  imperativeInformal: Word('налепи', 5),
  imperativeFormal: Word('налепите', 5),
  imperfect: [],
};

perfectVerbs.set(налепить.name.text, налепить);

export { налепить };