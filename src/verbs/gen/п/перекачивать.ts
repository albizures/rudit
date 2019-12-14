import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекачивать: PerfectVerb = {
  name: Word('перекачивать', 5),
  singular1stPerson: Word('перекачиваю', 5),
  singular2ndPerson: Word('перекачиваешь', 5),
  singular3rdPerson: Word('перекачивает', 5),
  plural1stPerson: Word('перекачиваем', 5),
  plural2ndPerson: Word('перекачиваете', 5),
  plural3rdPerson: Word('перекачивают', 5),
  masculinePast: Word('перекачивал', 5),
  femininePast: Word('перекачивала', 5),
  neuterPast: Word('перекачивало', 5),
  pluralPast: Word('перекачивали', 5),
  imperativeInformal: Word('перекачивай', 5),
  imperativeFormal: Word('перекачивайте', 5),
  imperfect: [],
};

perfectVerbs.set(перекачивать.name.text, перекачивать);

export { перекачивать };