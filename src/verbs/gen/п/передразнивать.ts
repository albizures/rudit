import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const передразнивать: PerfectVerb = {
  name: Word('передразнивать', 6),
  singular1stPerson: Word('передразниваю', 6),
  singular2ndPerson: Word('передразниваешь', 6),
  singular3rdPerson: Word('передразнивает', 6),
  plural1stPerson: Word('передразниваем', 6),
  plural2ndPerson: Word('передразниваете', 6),
  plural3rdPerson: Word('передразнивают', 6),
  masculinePast: Word('передразнивал', 6),
  femininePast: Word('передразнивала', 6),
  neuterPast: Word('передразнивало', 6),
  pluralPast: Word('передразнивали', 6),
  imperativeInformal: Word('передразнивай', 6),
  imperativeFormal: Word('передразнивайте', 6),
  imperfect: [],
};

perfectVerbs.set(передразнивать.name.text, передразнивать);

export { передразнивать };