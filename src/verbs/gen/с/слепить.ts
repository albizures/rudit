import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const слепить: PerfectVerb = {
  name: Word('слепить', 4),
  singular1stPerson: Word('слеплю', 5),
  singular2ndPerson: Word('слепишь', 2),
  singular3rdPerson: Word('слепит', 2),
  plural1stPerson: Word('слепим', 2),
  plural2ndPerson: Word('слепите', 2),
  plural3rdPerson: Word('слепят', 2),
  masculinePast: Word('слепил', 4),
  femininePast: Word('слепила', 4),
  neuterPast: Word('слепило', 4),
  pluralPast: Word('слепили', 4),
  imperativeInformal: Word('слепи', 4),
  imperativeFormal: Word('слепите', 4),
  imperfect: [],
};

perfectVerbs.set(слепить.name.text, слепить);

export { слепить };