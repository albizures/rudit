import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пропесочивать: PerfectVerb = {
  name: Word('пропесочивать', 6),
  singular1stPerson: Word('пропесочиваю', 6),
  singular2ndPerson: Word('пропесочиваешь', 6),
  singular3rdPerson: Word('пропесочивает', 6),
  plural1stPerson: Word('пропесочиваем', 6),
  plural2ndPerson: Word('пропесочиваете', 6),
  plural3rdPerson: Word('пропесочивают', 6),
  masculinePast: Word('пропесочивал', 6),
  femininePast: Word('пропесочивала', 6),
  neuterPast: Word('пропесочивало', 6),
  pluralPast: Word('пропесочивали', 6),
  imperativeInformal: Word('пропесочивай', 6),
  imperativeFormal: Word('пропесочивайте', 6),
  imperfect: [],
};

perfectVerbs.set(пропесочивать.name.text, пропесочивать);

export { пропесочивать };