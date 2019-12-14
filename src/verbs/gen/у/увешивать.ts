import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const увешивать: PerfectVerb = {
  name: Word('увешивать', 2),
  singular1stPerson: Word('увешиваю', 2),
  singular2ndPerson: Word('увешиваешь', 2),
  singular3rdPerson: Word('увешивает', 2),
  plural1stPerson: Word('увешиваем', 2),
  plural2ndPerson: Word('увешиваете', 2),
  plural3rdPerson: Word('увешивают', 2),
  masculinePast: Word('увешивал', 2),
  femininePast: Word('увешивала', 2),
  neuterPast: Word('увешивало', 2),
  pluralPast: Word('увешивали', 2),
  imperativeInformal: Word('увешивай', 2),
  imperativeFormal: Word('увешивайте', 2),
  imperfect: [],
};

perfectVerbs.set(увешивать.name.text, увешивать);

export { увешивать };