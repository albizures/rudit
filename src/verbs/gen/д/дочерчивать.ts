import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дочерчивать: PerfectVerb = {
  name: Word('дочерчивать', 3),
  singular1stPerson: Word('дочерчиваю', 3),
  singular2ndPerson: Word('дочерчиваешь', 3),
  singular3rdPerson: Word('дочерчивает', 3),
  plural1stPerson: Word('дочерчиваем', 3),
  plural2ndPerson: Word('дочерчиваете', 3),
  plural3rdPerson: Word('дочерчивают', 3),
  masculinePast: Word('дочерчивал', 3),
  femininePast: Word('дочерчивала', 3),
  neuterPast: Word('дочерчивало', 3),
  pluralPast: Word('дочерчивали', 3),
  imperativeInformal: Word('дочерчивай', 3),
  imperativeFormal: Word('дочерчивайте', 3),
  imperfect: [],
};

perfectVerbs.set(дочерчивать.name.text, дочерчивать);

export { дочерчивать };