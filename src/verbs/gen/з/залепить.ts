import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const залепить: PerfectVerb = {
  name: Word('залепить', 5),
  singular1stPerson: Word('залеплю', 6),
  singular2ndPerson: Word('залепишь', 3),
  singular3rdPerson: Word('залепит', 3),
  plural1stPerson: Word('залепим', 3),
  plural2ndPerson: Word('залепите', 3),
  plural3rdPerson: Word('залепят', 3),
  masculinePast: Word('залепил', 5),
  femininePast: Word('залепила', 5),
  neuterPast: Word('залепило', 5),
  pluralPast: Word('залепили', 5),
  imperativeInformal: Word('залепи', 5),
  imperativeFormal: Word('залепите', 5),
  imperfect: [],
};

perfectVerbs.set(залепить.name.text, залепить);

export { залепить };