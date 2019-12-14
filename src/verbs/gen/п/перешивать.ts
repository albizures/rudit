import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перешивать: PerfectVerb = {
  name: Word('перешивать', 7),
  singular1stPerson: Word('перешиваю', 7),
  singular2ndPerson: Word('перешиваешь', 7),
  singular3rdPerson: Word('перешивает', 7),
  plural1stPerson: Word('перешиваем', 7),
  plural2ndPerson: Word('перешиваете', 7),
  plural3rdPerson: Word('перешивают', 7),
  masculinePast: Word('перешивал', 7),
  femininePast: Word('перешивала', 7),
  neuterPast: Word('перешивало', 7),
  pluralPast: Word('перешивали', 7),
  imperativeInformal: Word('перешивай', 7),
  imperativeFormal: Word('перешивайте', 7),
  imperfect: [],
};

perfectVerbs.set(перешивать.name.text, перешивать);

export { перешивать };