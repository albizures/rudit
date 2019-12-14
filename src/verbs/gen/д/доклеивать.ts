import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доклеивать: PerfectVerb = {
  name: Word('доклеивать', 4),
  singular1stPerson: Word('доклеиваю', 4),
  singular2ndPerson: Word('доклеиваешь', 4),
  singular3rdPerson: Word('доклеивает', 4),
  plural1stPerson: Word('доклеиваем', 4),
  plural2ndPerson: Word('доклеиваете', 4),
  plural3rdPerson: Word('доклеивают', 4),
  masculinePast: Word('доклеивал', 4),
  femininePast: Word('доклеивала', 4),
  neuterPast: Word('доклеивало', 4),
  pluralPast: Word('доклеивали', 4),
  imperativeInformal: Word('доклеивай', 4),
  imperativeFormal: Word('доклеивайте', 4),
  imperfect: [],
};

perfectVerbs.set(доклеивать.name.text, доклеивать);

export { доклеивать };