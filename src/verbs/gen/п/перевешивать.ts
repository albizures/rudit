import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перевешивать: PerfectVerb = {
  name: Word('перевешивать', 5),
  singular1stPerson: Word('перевешиваю', 5),
  singular2ndPerson: Word('перевешиваешь', 5),
  singular3rdPerson: Word('перевешивает', 5),
  plural1stPerson: Word('перевешиваем', 5),
  plural2ndPerson: Word('перевешиваете', 5),
  plural3rdPerson: Word('перевешивают', 5),
  masculinePast: Word('перевешивал', 5),
  femininePast: Word('перевешивала', 5),
  neuterPast: Word('перевешивало', 5),
  pluralPast: Word('перевешивали', 5),
  imperativeInformal: Word('перевешивай', 5),
  imperativeFormal: Word('перевешивайте', 5),
  imperfect: [],
};

perfectVerbs.set(перевешивать.name.text, перевешивать);

export { перевешивать };