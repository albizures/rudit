import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упорядочивать: PerfectVerb = {
  name: Word('упорядочивать', 4),
  singular1stPerson: Word('упорядочиваю', 4),
  singular2ndPerson: Word('упорядочиваешь', 4),
  singular3rdPerson: Word('упорядочивает', 4),
  plural1stPerson: Word('упорядочиваем', 4),
  plural2ndPerson: Word('упорядочиваете', 4),
  plural3rdPerson: Word('упорядочивают', 4),
  masculinePast: Word('упорядочивал', 4),
  femininePast: Word('упорядочивала', 4),
  neuterPast: Word('упорядочивало', 4),
  pluralPast: Word('упорядочивали', 4),
  imperativeInformal: Word('упорядочивай', 4),
  imperativeFormal: Word('упорядочивайте', 4),
  imperfect: ['упорядочить'],
};

perfectVerbs.set(упорядочивать.name.text, упорядочивать);

export { упорядочивать };