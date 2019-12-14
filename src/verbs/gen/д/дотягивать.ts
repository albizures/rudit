import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дотягивать: PerfectVerb = {
  name: Word('дотягивать', 3),
  singular1stPerson: Word('дотягиваю', 3),
  singular2ndPerson: Word('дотягиваешь', 3),
  singular3rdPerson: Word('дотягивает', 3),
  plural1stPerson: Word('дотягиваем', 3),
  plural2ndPerson: Word('дотягиваете', 3),
  plural3rdPerson: Word('дотягивают', 3),
  masculinePast: Word('дотягивал', 3),
  femininePast: Word('дотягивала', 3),
  neuterPast: Word('дотягивало', 3),
  pluralPast: Word('дотягивали', 3),
  imperativeInformal: Word('дотягивай', 3),
  imperativeFormal: Word('дотягивайте', 3),
  imperfect: [],
};

perfectVerbs.set(дотягивать.name.text, дотягивать);

export { дотягивать };