import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const укорачивать: PerfectVerb = {
  name: Word('укорачивать', 4),
  singular1stPerson: Word('укорачиваю', 4),
  singular2ndPerson: Word('укорачиваешь', 4),
  singular3rdPerson: Word('укорачивает', 4),
  plural1stPerson: Word('укорачиваем', 4),
  plural2ndPerson: Word('укорачиваете', 4),
  plural3rdPerson: Word('укорачивают', 4),
  masculinePast: Word('укорачивал', 4),
  femininePast: Word('укорачивала', 4),
  neuterPast: Word('укорачивало', 4),
  pluralPast: Word('укорачивали', 4),
  imperativeInformal: Word('укорачивай', 4),
  imperativeFormal: Word('укорачивайте', 4),
  imperfect: ['укоротить'],
};

perfectVerbs.set(укорачивать.name.text, укорачивать);

export { укорачивать };