import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отгнивать: PerfectVerb = {
  name: Word('отгнивать', 6),
  singular1stPerson: Word('отгниваю', 6),
  singular2ndPerson: Word('отгниваешь', 6),
  singular3rdPerson: Word('отгнивает', 6),
  plural1stPerson: Word('отгниваем', 6),
  plural2ndPerson: Word('отгниваете', 6),
  plural3rdPerson: Word('отгнивают', 6),
  masculinePast: Word('отгнивал', 6),
  femininePast: Word('отгнивала', 6),
  neuterPast: Word('отгнивало', 6),
  pluralPast: Word('отгнивали', 6),
  imperativeInformal: Word('отгнивай', 6),
  imperativeFormal: Word('отгнивайте', 6),
  imperfect: [],
};

perfectVerbs.set(отгнивать.name.text, отгнивать);

export { отгнивать };