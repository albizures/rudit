import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повизгивать: PerfectVerb = {
  name: Word('повизгивать', 3),
  singular1stPerson: Word('повизгиваю', 3),
  singular2ndPerson: Word('повизгиваешь', 3),
  singular3rdPerson: Word('повизгивает', 3),
  plural1stPerson: Word('повизгиваем', 3),
  plural2ndPerson: Word('повизгиваете', 3),
  plural3rdPerson: Word('повизгивают', 3),
  masculinePast: Word('повизгивал', 3),
  femininePast: Word('повизгивала', 3),
  neuterPast: Word('повизгивало', 3),
  pluralPast: Word('повизгивали', 3),
  imperativeInformal: Word('повизгивай', 3),
  imperativeFormal: Word('повизгивайте', 3),
  imperfect: [],
};

perfectVerbs.set(повизгивать.name.text, повизгивать);

export { повизгивать };