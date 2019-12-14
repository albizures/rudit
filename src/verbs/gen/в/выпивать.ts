import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпивать: PerfectVerb = {
  name: Word('выпивать', 5),
  singular1stPerson: Word('выпиваю', 5),
  singular2ndPerson: Word('выпиваешь', 5),
  singular3rdPerson: Word('выпивает', 5),
  plural1stPerson: Word('выпиваем', 5),
  plural2ndPerson: Word('выпиваете', 5),
  plural3rdPerson: Word('выпивают', 5),
  masculinePast: Word('выпивал', 5),
  femininePast: Word('выпивала', 5),
  neuterPast: Word('выпивало', 5),
  pluralPast: Word('выпивали', 5),
  imperativeInformal: Word('выпивай', 5),
  imperativeFormal: Word('выпивайте', 5),
  imperfect: ['выпить'],
};

perfectVerbs.set(выпивать.name.text, выпивать);

export { выпивать };