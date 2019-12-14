import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проталкивать: PerfectVerb = {
  name: Word('проталкивать', 4),
  singular1stPerson: Word('проталкиваю', 4),
  singular2ndPerson: Word('проталкиваешь', 4),
  singular3rdPerson: Word('проталкивает', 4),
  plural1stPerson: Word('проталкиваем', 4),
  plural2ndPerson: Word('проталкиваете', 4),
  plural3rdPerson: Word('проталкивают', 4),
  masculinePast: Word('проталкивал', 4),
  femininePast: Word('проталкивала', 4),
  neuterPast: Word('проталкивало', 4),
  pluralPast: Word('проталкивали', 4),
  imperativeInformal: Word('проталкивай', 4),
  imperativeFormal: Word('проталкивайте', 4),
  imperfect: [],
};

perfectVerbs.set(проталкивать.name.text, проталкивать);

export { проталкивать };