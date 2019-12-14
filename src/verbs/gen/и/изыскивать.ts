import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изыскивать: PerfectVerb = {
  name: Word('изыскивать', 2),
  singular1stPerson: Word('изыскиваю', 2),
  singular2ndPerson: Word('изыскиваешь', 2),
  singular3rdPerson: Word('изыскивает', 2),
  plural1stPerson: Word('изыскиваем', 2),
  plural2ndPerson: Word('изыскиваете', 2),
  plural3rdPerson: Word('изыскивают', 2),
  masculinePast: Word('изыскивал', 2),
  femininePast: Word('изыскивала', 2),
  neuterPast: Word('изыскивало', 2),
  pluralPast: Word('изыскивали', 2),
  imperativeInformal: Word('изыскивай', 2),
  imperativeFormal: Word('изыскивайте', 2),
  imperfect: [],
};

perfectVerbs.set(изыскивать.name.text, изыскивать);

export { изыскивать };