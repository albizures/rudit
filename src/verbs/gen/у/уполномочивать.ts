import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уполномочивать: PerfectVerb = {
  name: Word('уполномочивать', 7),
  singular1stPerson: Word('уполномочиваю', 7),
  singular2ndPerson: Word('уполномочиваешь', 7),
  singular3rdPerson: Word('уполномочивает', 7),
  plural1stPerson: Word('уполномочиваем', 7),
  plural2ndPerson: Word('уполномочиваете', 7),
  plural3rdPerson: Word('уполномочивают', 7),
  masculinePast: Word('уполномочивал', 7),
  femininePast: Word('уполномочивала', 7),
  neuterPast: Word('уполномочивало', 7),
  pluralPast: Word('уполномочивали', 7),
  imperativeInformal: Word('уполномочивай', 7),
  imperativeFormal: Word('уполномочивайте', 7),
  imperfect: ['уполномочить'],
};

perfectVerbs.set(уполномочивать.name.text, уполномочивать);

export { уполномочивать };