import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пересинивать: PerfectVerb = {
  name: Word('пересинивать', 5),
  singular1stPerson: Word('пересиниваю', 5),
  singular2ndPerson: Word('пересиниваешь', 5),
  singular3rdPerson: Word('пересинивает', 5),
  plural1stPerson: Word('пересиниваем', 5),
  plural2ndPerson: Word('пересиниваете', 5),
  plural3rdPerson: Word('пересинивают', 5),
  masculinePast: Word('пересинивал', 5),
  femininePast: Word('пересинивала', 5),
  neuterPast: Word('пересинивало', 5),
  pluralPast: Word('пересинивали', 5),
  imperativeInformal: Word('пересинивай', 5),
  imperativeFormal: Word('пересинивайте', 5),
  imperfect: [],
};

perfectVerbs.set(пересинивать.name.text, пересинивать);

export { пересинивать };