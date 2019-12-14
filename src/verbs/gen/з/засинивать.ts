import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засинивать: PerfectVerb = {
  name: Word('засинивать', 3),
  singular1stPerson: Word('засиниваю', 3),
  singular2ndPerson: Word('засиниваешь', 3),
  singular3rdPerson: Word('засинивает', 3),
  plural1stPerson: Word('засиниваем', 3),
  plural2ndPerson: Word('засиниваете', 3),
  plural3rdPerson: Word('засинивают', 3),
  masculinePast: Word('засинивал', 3),
  femininePast: Word('засинивала', 3),
  neuterPast: Word('засинивало', 3),
  pluralPast: Word('засинивали', 3),
  imperativeInformal: Word('засинивай', 3),
  imperativeFormal: Word('засинивайте', 3),
  imperfect: [],
};

perfectVerbs.set(засинивать.name.text, засинивать);

export { засинивать };