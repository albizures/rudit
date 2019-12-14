import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оцепить: PerfectVerb = {
  name: Word('оцепить', 4),
  singular1stPerson: Word('оцеплю', 5),
  singular2ndPerson: Word('оцепишь', 2),
  singular3rdPerson: Word('оцепит', 2),
  plural1stPerson: Word('оцепим', 2),
  plural2ndPerson: Word('оцепите', 2),
  plural3rdPerson: Word('оцепят', 2),
  masculinePast: Word('оцепил', 4),
  femininePast: Word('оцепила', 4),
  neuterPast: Word('оцепило', 4),
  pluralPast: Word('оцепили', 4),
  imperativeInformal: Word('оцепи', 4),
  imperativeFormal: Word('оцепите', 4),
  imperfect: [],
};

perfectVerbs.set(оцепить.name.text, оцепить);

export { оцепить };