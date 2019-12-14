import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ввинчивать: PerfectVerb = {
  name: Word('ввинчивать', 2),
  singular1stPerson: Word('ввинчиваю', 2),
  singular2ndPerson: Word('ввинчиваешь', 2),
  singular3rdPerson: Word('ввинчивает', 2),
  plural1stPerson: Word('ввинчиваем', 2),
  plural2ndPerson: Word('ввинчиваете', 2),
  plural3rdPerson: Word('ввинчивают', 2),
  masculinePast: Word('ввинчивал', 2),
  femininePast: Word('ввинчивала', 2),
  neuterPast: Word('ввинчивало', 2),
  pluralPast: Word('ввинчивали', 2),
  imperativeInformal: Word('ввинчивай', 2),
  imperativeFormal: Word('ввинчивайте', 2),
  imperfect: [],
};

perfectVerbs.set(ввинчивать.name.text, ввинчивать);

export { ввинчивать };