import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разлепить: PerfectVerb = {
  name: Word('разлепить', 6),
  singular1stPerson: Word('разлеплю', 7),
  singular2ndPerson: Word('разлепишь', 4),
  singular3rdPerson: Word('разлепит', 4),
  plural1stPerson: Word('разлепим', 4),
  plural2ndPerson: Word('разлепите', 4),
  plural3rdPerson: Word('разлепят', 4),
  masculinePast: Word('разлепил', 6),
  femininePast: Word('разлепила', 6),
  neuterPast: Word('разлепило', 6),
  pluralPast: Word('разлепили', 6),
  imperativeInformal: Word('разлепи', 6),
  imperativeFormal: Word('разлепите', 6),
  imperfect: [],
};

perfectVerbs.set(разлепить.name.text, разлепить);

export { разлепить };