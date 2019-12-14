import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const увеличивать: PerfectVerb = {
  name: Word('увеличивать', 4),
  singular1stPerson: Word('увеличиваю', 4),
  singular2ndPerson: Word('увеличиваешь', 4),
  singular3rdPerson: Word('увеличивает', 4),
  plural1stPerson: Word('увеличиваем', 4),
  plural2ndPerson: Word('увеличиваете', 4),
  plural3rdPerson: Word('увеличивают', 4),
  masculinePast: Word('увеличивал', 4),
  femininePast: Word('увеличивала', 4),
  neuterPast: Word('увеличивало', 4),
  pluralPast: Word('увеличивали', 4),
  imperativeInformal: Word('увеличивай', 4),
  imperativeFormal: Word('увеличивайте', 4),
  imperfect: ['увеличить'],
};

perfectVerbs.set(увеличивать.name.text, увеличивать);

export { увеличивать };