import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дуть: PerfectVerb = {
  name: Word('дуть', 1),
  singular1stPerson: Word('дую', 1),
  singular2ndPerson: Word('дуешь', 1),
  singular3rdPerson: Word('дует', 1),
  plural1stPerson: Word('дуем', 1),
  plural2ndPerson: Word('дуете', 1),
  plural3rdPerson: Word('дуют', 1),
  masculinePast: Word('дул', 1),
  femininePast: Word('дула', 1),
  neuterPast: Word('дуло', 1),
  pluralPast: Word('дули', 1),
  imperativeInformal: Word('дуй', 1),
  imperativeFormal: Word('дуйте', 1),
  imperfect: ['подуть','дунуть'],
};

perfectVerbs.set(дуть.name.text, дуть);

export { дуть };