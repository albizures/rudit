import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дотаскивать: PerfectVerb = {
  name: Word('дотаскивать', 3),
  singular1stPerson: Word('дотаскиваю', 3),
  singular2ndPerson: Word('дотаскиваешь', 3),
  singular3rdPerson: Word('дотаскивает', 3),
  plural1stPerson: Word('дотаскиваем', 3),
  plural2ndPerson: Word('дотаскиваете', 3),
  plural3rdPerson: Word('дотаскивают', 3),
  masculinePast: Word('дотаскивал', 3),
  femininePast: Word('дотаскивала', 3),
  neuterPast: Word('дотаскивало', 3),
  pluralPast: Word('дотаскивали', 3),
  imperativeInformal: Word('дотаскивай', 3),
  imperativeFormal: Word('дотаскивайте', 3),
  imperfect: [],
};

perfectVerbs.set(дотаскивать.name.text, дотаскивать);

export { дотаскивать };