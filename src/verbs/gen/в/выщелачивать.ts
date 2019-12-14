import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выщелачивать: PerfectVerb = {
  name: Word('выщелачивать', 5),
  singular1stPerson: Word('выщелачиваю', 5),
  singular2ndPerson: Word('выщелачиваешь', 5),
  singular3rdPerson: Word('выщелачивает', 5),
  plural1stPerson: Word('выщелачиваем', 5),
  plural2ndPerson: Word('выщелачиваете', 5),
  plural3rdPerson: Word('выщелачивают', 5),
  masculinePast: Word('выщелачивал', 5),
  femininePast: Word('выщелачивала', 5),
  neuterPast: Word('выщелачивало', 5),
  pluralPast: Word('выщелачивали', 5),
  imperativeInformal: Word('выщелачивай', 5),
  imperativeFormal: Word('выщелачивайте', 5),
  imperfect: [],
};

perfectVerbs.set(выщелачивать.name.text, выщелачивать);

export { выщелачивать };