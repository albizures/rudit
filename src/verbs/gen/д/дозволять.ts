import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дозволять: PerfectVerb = {
  name: Word('дозволять', 6),
  singular1stPerson: Word('дозволяю', 6),
  singular2ndPerson: Word('дозволяешь', 6),
  singular3rdPerson: Word('дозволяет', 6),
  plural1stPerson: Word('дозволяем', 6),
  plural2ndPerson: Word('дозволяете', 6),
  plural3rdPerson: Word('дозволяют', 6),
  masculinePast: Word('дозволял', 6),
  femininePast: Word('дозволяла', 6),
  neuterPast: Word('дозволяло', 6),
  pluralPast: Word('дозволяли', 6),
  imperativeInformal: Word('дозволяй', 6),
  imperativeFormal: Word('дозволяйте', 6),
  imperfect: [],
};

perfectVerbs.set(дозволять.name.text, дозволять);

export { дозволять };