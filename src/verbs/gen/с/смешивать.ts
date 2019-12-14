import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смешивать: PerfectVerb = {
  name: Word('смешивать', 2),
  singular1stPerson: Word('смешиваю', 2),
  singular2ndPerson: Word('смешиваешь', 2),
  singular3rdPerson: Word('смешивает', 2),
  plural1stPerson: Word('смешиваем', 2),
  plural2ndPerson: Word('смешиваете', 2),
  plural3rdPerson: Word('смешивают', 2),
  masculinePast: Word('смешивал', 2),
  femininePast: Word('смешивала', 2),
  neuterPast: Word('смешивало', 2),
  pluralPast: Word('смешивали', 2),
  imperativeInformal: Word('смешивай', 2),
  imperativeFormal: Word('смешивайте', 2),
  imperfect: [],
};

perfectVerbs.set(смешивать.name.text, смешивать);

export { смешивать };