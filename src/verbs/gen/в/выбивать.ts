import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выбивать: PerfectVerb = {
  name: Word('выбивать', 5),
  singular1stPerson: Word('выбиваю', 5),
  singular2ndPerson: Word('выбиваешь', 5),
  singular3rdPerson: Word('выбивает', 5),
  plural1stPerson: Word('выбиваем', 5),
  plural2ndPerson: Word('выбиваете', 5),
  plural3rdPerson: Word('выбивают', 5),
  masculinePast: Word('выбивал', 5),
  femininePast: Word('выбивала', 5),
  neuterPast: Word('выбивало', 5),
  pluralPast: Word('выбивали', 5),
  imperativeInformal: Word('выбивай', 5),
  imperativeFormal: Word('выбивайте', 5),
  imperfect: ['выбить'],
};

perfectVerbs.set(выбивать.name.text, выбивать);

export { выбивать };