import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const впрыскивать: PerfectVerb = {
  name: Word('впрыскивать', 3),
  singular1stPerson: Word('впрыскиваю', 3),
  singular2ndPerson: Word('впрыскиваешь', 3),
  singular3rdPerson: Word('впрыскивает', 3),
  plural1stPerson: Word('впрыскиваем', 3),
  plural2ndPerson: Word('впрыскиваете', 3),
  plural3rdPerson: Word('впрыскивают', 3),
  masculinePast: Word('впрыскивал', 3),
  femininePast: Word('впрыскивала', 3),
  neuterPast: Word('впрыскивало', 3),
  pluralPast: Word('впрыскивали', 3),
  imperativeInformal: Word('впрыскивай', 3),
  imperativeFormal: Word('впрыскивайте', 3),
  imperfect: [],
};

perfectVerbs.set(впрыскивать.name.text, впрыскивать);

export { впрыскивать };