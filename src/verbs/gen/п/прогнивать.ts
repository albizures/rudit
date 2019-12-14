import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прогнивать: PerfectVerb = {
  name: Word('прогнивать', 7),
  singular1stPerson: Word('прогниваю', 7),
  singular2ndPerson: Word('прогниваешь', 7),
  singular3rdPerson: Word('прогнивает', 7),
  plural1stPerson: Word('прогниваем', 7),
  plural2ndPerson: Word('прогниваете', 7),
  plural3rdPerson: Word('прогнивают', 7),
  masculinePast: Word('прогнивал', 7),
  femininePast: Word('прогнивала', 7),
  neuterPast: Word('прогнивало', 7),
  pluralPast: Word('прогнивали', 7),
  imperativeInformal: Word('прогнивай', 7),
  imperativeFormal: Word('прогнивайте', 7),
  imperfect: [],
};

perfectVerbs.set(прогнивать.name.text, прогнивать);

export { прогнивать };