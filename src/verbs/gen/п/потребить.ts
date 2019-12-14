import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потребить: PerfectVerb = {
  name: Word('потребить', 6),
  singular1stPerson: Word('потреблю', 7),
  singular2ndPerson: Word('потребишь', 6),
  singular3rdPerson: Word('потребит', 6),
  plural1stPerson: Word('потребим', 6),
  plural2ndPerson: Word('потребите', 6),
  plural3rdPerson: Word('потребят', 6),
  masculinePast: Word('потребил', 6),
  femininePast: Word('потребила', 6),
  neuterPast: Word('потребило', 6),
  pluralPast: Word('потребили', 6),
  imperativeInformal: Word('потреби', 6),
  imperativeFormal: Word('потребите', 6),
  imperfect: [],
};

perfectVerbs.set(потребить.name.text, потребить);

export { потребить };