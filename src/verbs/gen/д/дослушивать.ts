import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дослушивать: PerfectVerb = {
  name: Word('дослушивать', 4),
  singular1stPerson: Word('дослушиваю', 4),
  singular2ndPerson: Word('дослушиваешь', 4),
  singular3rdPerson: Word('дослушивает', 4),
  plural1stPerson: Word('дослушиваем', 4),
  plural2ndPerson: Word('дослушиваете', 4),
  plural3rdPerson: Word('дослушивают', 4),
  masculinePast: Word('дослушивал', 4),
  femininePast: Word('дослушивала', 4),
  neuterPast: Word('дослушивало', 4),
  pluralPast: Word('дослушивали', 4),
  imperativeInformal: Word('дослушивай', 4),
  imperativeFormal: Word('дослушивайте', 4),
  imperfect: [],
};

perfectVerbs.set(дослушивать.name.text, дослушивать);

export { дослушивать };