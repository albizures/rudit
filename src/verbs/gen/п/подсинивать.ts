import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подсинивать: PerfectVerb = {
  name: Word('подсинивать', 4),
  singular1stPerson: Word('подсиниваю', 4),
  singular2ndPerson: Word('подсиниваешь', 4),
  singular3rdPerson: Word('подсинивает', 4),
  plural1stPerson: Word('подсиниваем', 4),
  plural2ndPerson: Word('подсиниваете', 4),
  plural3rdPerson: Word('подсинивают', 4),
  masculinePast: Word('подсинивал', 4),
  femininePast: Word('подсинивала', 4),
  neuterPast: Word('подсинивало', 4),
  pluralPast: Word('подсинивали', 4),
  imperativeInformal: Word('подсинивай', 4),
  imperativeFormal: Word('подсинивайте', 4),
  imperfect: [],
};

perfectVerbs.set(подсинивать.name.text, подсинивать);

export { подсинивать };