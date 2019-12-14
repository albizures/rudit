import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дунуть: PerfectVerb = {
  name: Word('дунуть', 1),
  singular1stPerson: Word('дуну', 1),
  singular2ndPerson: Word('дунешь', 1),
  singular3rdPerson: Word('дунет', 1),
  plural1stPerson: Word('дунем', 1),
  plural2ndPerson: Word('дунете', 1),
  plural3rdPerson: Word('дунут', 1),
  masculinePast: Word('дунул', 1),
  femininePast: Word('дунула', 1),
  neuterPast: Word('дунуло', 1),
  pluralPast: Word('дунули', 1),
  imperativeInformal: Word('дунь', 1),
  imperativeFormal: Word('дуньте', 1),
  imperfect: [],
};

perfectVerbs.set(дунуть.name.text, дунуть);

export { дунуть };