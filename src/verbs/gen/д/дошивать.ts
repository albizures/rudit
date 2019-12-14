import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дошивать: PerfectVerb = {
  name: Word('дошивать', 5),
  singular1stPerson: Word('дошиваю', 5),
  singular2ndPerson: Word('дошиваешь', 5),
  singular3rdPerson: Word('дошивает', 5),
  plural1stPerson: Word('дошиваем', 5),
  plural2ndPerson: Word('дошиваете', 5),
  plural3rdPerson: Word('дошивают', 5),
  masculinePast: Word('дошивал', 5),
  femininePast: Word('дошивала', 5),
  neuterPast: Word('дошивало', 5),
  pluralPast: Word('дошивали', 5),
  imperativeInformal: Word('дошивай', 5),
  imperativeFormal: Word('дошивайте', 5),
  imperfect: [],
};

perfectVerbs.set(дошивать.name.text, дошивать);

export { дошивать };