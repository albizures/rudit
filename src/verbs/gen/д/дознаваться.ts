import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дознаваться: PerfectVerb = {
  name: Word('дознаваться', 6),
  singular1stPerson: Word('дознаюсь', 5),
  singular2ndPerson: Word('дознаёшься', 4),
  singular3rdPerson: Word('дознаётся', 4),
  plural1stPerson: Word('дознаёмся', 4),
  plural2ndPerson: Word('дознаётесь', 4),
  plural3rdPerson: Word('дознаются', 5),
  masculinePast: Word('дознавался', 6),
  femininePast: Word('дознавалась', 6),
  neuterPast: Word('дознавалось', 6),
  pluralPast: Word('дознавались', 6),
  imperativeInformal: Word('дознавайся', 6),
  imperativeFormal: Word('дознавайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(дознаваться.name.text, дознаваться);

export { дознаваться };