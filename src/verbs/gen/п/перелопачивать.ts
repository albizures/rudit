import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перелопачивать: PerfectVerb = {
  name: Word('перелопачивать', 7),
  singular1stPerson: Word('перелопачиваю', 7),
  singular2ndPerson: Word('перелопачиваешь', 7),
  singular3rdPerson: Word('перелопачивает', 7),
  plural1stPerson: Word('перелопачиваем', 7),
  plural2ndPerson: Word('перелопачиваете', 7),
  plural3rdPerson: Word('перелопачивают', 7),
  masculinePast: Word('перелопачивал', 7),
  femininePast: Word('перелопачивала', 7),
  neuterPast: Word('перелопачивало', 7),
  pluralPast: Word('перелопачивали', 7),
  imperativeInformal: Word('перелопачивай', 7),
  imperativeFormal: Word('перелопачивайте', 7),
  imperfect: [],
};

perfectVerbs.set(перелопачивать.name.text, перелопачивать);

export { перелопачивать };