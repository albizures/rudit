import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просунуть: PerfectVerb = {
  name: Word('просунуть', 4),
  singular1stPerson: Word('просуну', 4),
  singular2ndPerson: Word('просунешь', 4),
  singular3rdPerson: Word('просунет', 4),
  plural1stPerson: Word('просунем', 4),
  plural2ndPerson: Word('просунете', 4),
  plural3rdPerson: Word('просунут', 4),
  masculinePast: Word('просунул', 4),
  femininePast: Word('просунула', 4),
  neuterPast: Word('просунуло', 4),
  pluralPast: Word('просунули', 4),
  imperativeInformal: Word('просунь', 4),
  imperativeFormal: Word('просуньте', 4),
  imperfect: [],
};

perfectVerbs.set(просунуть.name.text, просунуть);

export { просунуть };