import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застраивать: PerfectVerb = {
  name: Word('застраивать', 5),
  singular1stPerson: Word('застраиваю', 5),
  singular2ndPerson: Word('застраиваешь', 5),
  singular3rdPerson: Word('застраивает', 5),
  plural1stPerson: Word('застраиваем', 5),
  plural2ndPerson: Word('застраиваете', 5),
  plural3rdPerson: Word('застраивают', 5),
  masculinePast: Word('застраивал', 5),
  femininePast: Word('застраивала', 5),
  neuterPast: Word('застраивало', 5),
  pluralPast: Word('застраивали', 5),
  imperativeInformal: Word('застраивай', 5),
  imperativeFormal: Word('застраивайте', 5),
  imperfect: [],
};

perfectVerbs.set(застраивать.name.text, застраивать);

export { застраивать };