import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спрыскивать: PerfectVerb = {
  name: Word('спрыскивать', 3),
  singular1stPerson: Word('спрыскиваю', 3),
  singular2ndPerson: Word('спрыскиваешь', 3),
  singular3rdPerson: Word('спрыскивает', 3),
  plural1stPerson: Word('спрыскиваем', 3),
  plural2ndPerson: Word('спрыскиваете', 3),
  plural3rdPerson: Word('спрыскивают', 3),
  masculinePast: Word('спрыскивал', 3),
  femininePast: Word('спрыскивала', 3),
  neuterPast: Word('спрыскивало', 3),
  pluralPast: Word('спрыскивали', 3),
  imperativeInformal: Word('спрыскивай', 3),
  imperativeFormal: Word('спрыскивайте', 3),
  imperfect: [],
};

perfectVerbs.set(спрыскивать.name.text, спрыскивать);

export { спрыскивать };