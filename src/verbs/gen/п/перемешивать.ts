import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перемешивать: PerfectVerb = {
  name: Word('перемешивать', 5),
  singular1stPerson: Word('перемешиваю', 5),
  singular2ndPerson: Word('перемешиваешь', 5),
  singular3rdPerson: Word('перемешивает', 5),
  plural1stPerson: Word('перемешиваем', 5),
  plural2ndPerson: Word('перемешиваете', 5),
  plural3rdPerson: Word('перемешивают', 5),
  masculinePast: Word('перемешивал', 5),
  femininePast: Word('перемешивала', 5),
  neuterPast: Word('перемешивало', 5),
  pluralPast: Word('перемешивали', 5),
  imperativeInformal: Word('перемешивай', 5),
  imperativeFormal: Word('перемешивайте', 5),
  imperfect: [],
};

perfectVerbs.set(перемешивать.name.text, перемешивать);

export { перемешивать };