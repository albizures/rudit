import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const недовешивать: PerfectVerb = {
  name: Word('недовешивать', 5),
  singular1stPerson: Word('недовешиваю', 5),
  singular2ndPerson: Word('недовешиваешь', 5),
  singular3rdPerson: Word('недовешивает', 5),
  plural1stPerson: Word('недовешиваем', 5),
  plural2ndPerson: Word('недовешиваете', 5),
  plural3rdPerson: Word('недовешивают', 5),
  masculinePast: Word('недовешивал', 5),
  femininePast: Word('недовешивала', 5),
  neuterPast: Word('недовешивало', 5),
  pluralPast: Word('недовешивали', 5),
  imperativeInformal: Word('недовешивай', 5),
  imperativeFormal: Word('недовешивайте', 5),
  imperfect: [],
};

perfectVerbs.set(недовешивать.name.text, недовешивать);

export { недовешивать };