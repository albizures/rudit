import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выгнивать: PerfectVerb = {
  name: Word('выгнивать', 6),
  singular1stPerson: Word('выгниваю', 6),
  singular2ndPerson: Word('выгниваешь', 6),
  singular3rdPerson: Word('выгнивает', 6),
  plural1stPerson: Word('выгниваем', 6),
  plural2ndPerson: Word('выгниваете', 6),
  plural3rdPerson: Word('выгнивают', 6),
  masculinePast: Word('выгнивал', 6),
  femininePast: Word('выгнивала', 6),
  neuterPast: Word('выгнивало', 6),
  pluralPast: Word('выгнивали', 6),
  imperativeInformal: Word('выгнивай', 6),
  imperativeFormal: Word('выгнивайте', 6),
  imperfect: [],
};

perfectVerbs.set(выгнивать.name.text, выгнивать);

export { выгнивать };