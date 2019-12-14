import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перемахивать: PerfectVerb = {
  name: Word('перемахивать', 5),
  singular1stPerson: Word('перемахиваю', 5),
  singular2ndPerson: Word('перемахиваешь', 5),
  singular3rdPerson: Word('перемахивает', 5),
  plural1stPerson: Word('перемахиваем', 5),
  plural2ndPerson: Word('перемахиваете', 5),
  plural3rdPerson: Word('перемахивают', 5),
  masculinePast: Word('перемахивал', 5),
  femininePast: Word('перемахивала', 5),
  neuterPast: Word('перемахивало', 5),
  pluralPast: Word('перемахивали', 5),
  imperativeInformal: Word('перемахивай', 5),
  imperativeFormal: Word('перемахивайте', 5),
  imperfect: [],
};

perfectVerbs.set(перемахивать.name.text, перемахивать);

export { перемахивать };