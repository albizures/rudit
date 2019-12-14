import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приобщать: PerfectVerb = {
  name: Word('приобщать', 6),
  singular1stPerson: Word('приобщаю', 6),
  singular2ndPerson: Word('приобщаешь', 6),
  singular3rdPerson: Word('приобщает', 6),
  plural1stPerson: Word('приобщаем', 6),
  plural2ndPerson: Word('приобщаете', 6),
  plural3rdPerson: Word('приобщают', 6),
  masculinePast: Word('приобщал', 6),
  femininePast: Word('приобщала', 6),
  neuterPast: Word('приобщало', 6),
  pluralPast: Word('приобщали', 6),
  imperativeInformal: Word('приобщай', 6),
  imperativeFormal: Word('приобщайте', 6),
  imperfect: [],
};

perfectVerbs.set(приобщать.name.text, приобщать);

export { приобщать };