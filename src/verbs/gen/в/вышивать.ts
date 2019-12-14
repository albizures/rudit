import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вышивать: PerfectVerb = {
  name: Word('вышивать', 5),
  singular1stPerson: Word('вышиваю', 5),
  singular2ndPerson: Word('вышиваешь', 5),
  singular3rdPerson: Word('вышивает', 5),
  plural1stPerson: Word('вышиваем', 5),
  plural2ndPerson: Word('вышиваете', 5),
  plural3rdPerson: Word('вышивают', 5),
  masculinePast: Word('вышивал', 5),
  femininePast: Word('вышивала', 5),
  neuterPast: Word('вышивало', 5),
  pluralPast: Word('вышивали', 5),
  imperativeInformal: Word('вышивай', 5),
  imperativeFormal: Word('вышивайте', 5),
  imperfect: ['вышить'],
};

perfectVerbs.set(вышивать.name.text, вышивать);

export { вышивать };