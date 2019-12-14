import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const успокаивать: PerfectVerb = {
  name: Word('успокаивать', 5),
  singular1stPerson: Word('успокаиваю', 5),
  singular2ndPerson: Word('успокаиваешь', 5),
  singular3rdPerson: Word('успокаивает', 5),
  plural1stPerson: Word('успокаиваем', 5),
  plural2ndPerson: Word('успокаиваете', 5),
  plural3rdPerson: Word('успокаивают', 5),
  masculinePast: Word('успокаивал', 5),
  femininePast: Word('успокаивала', 5),
  neuterPast: Word('успокаивало', 5),
  pluralPast: Word('успокаивали', 5),
  imperativeInformal: Word('успокаивай', 5),
  imperativeFormal: Word('успокаивайте', 5),
  imperfect: ['успокоить'],
};

perfectVerbs.set(успокаивать.name.text, успокаивать);

export { успокаивать };