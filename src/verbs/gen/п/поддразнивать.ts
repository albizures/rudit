import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поддразнивать: PerfectVerb = {
  name: Word('поддразнивать', 5),
  singular1stPerson: Word('поддразниваю', 5),
  singular2ndPerson: Word('поддразниваешь', 5),
  singular3rdPerson: Word('поддразнивает', 5),
  plural1stPerson: Word('поддразниваем', 5),
  plural2ndPerson: Word('поддразниваете', 5),
  plural3rdPerson: Word('поддразнивают', 5),
  masculinePast: Word('поддразнивал', 5),
  femininePast: Word('поддразнивала', 5),
  neuterPast: Word('поддразнивало', 5),
  pluralPast: Word('поддразнивали', 5),
  imperativeInformal: Word('поддразнивай', 5),
  imperativeFormal: Word('поддразнивайте', 5),
  imperfect: [],
};

perfectVerbs.set(поддразнивать.name.text, поддразнивать);

export { поддразнивать };