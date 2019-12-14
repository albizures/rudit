import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засунуть: PerfectVerb = {
  name: Word('засунуть', 3),
  singular1stPerson: Word('засуну', 3),
  singular2ndPerson: Word('засунешь', 3),
  singular3rdPerson: Word('засунет', 3),
  plural1stPerson: Word('засунем', 3),
  plural2ndPerson: Word('засунете', 3),
  plural3rdPerson: Word('засунут', 3),
  masculinePast: Word('засунул', 3),
  femininePast: Word('засунула', 3),
  neuterPast: Word('засунуло', 3),
  pluralPast: Word('засунули', 3),
  imperativeInformal: Word('засунь', 3),
  imperativeFormal: Word('засуньте', 3),
  imperfect: [],
};

perfectVerbs.set(засунуть.name.text, засунуть);

export { засунуть };