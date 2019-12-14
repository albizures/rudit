import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взвизгивать: PerfectVerb = {
  name: Word('взвизгивать', 3),
  singular1stPerson: Word('взвизгиваю', 3),
  singular2ndPerson: Word('взвизгиваешь', 3),
  singular3rdPerson: Word('взвизгивает', 3),
  plural1stPerson: Word('взвизгиваем', 3),
  plural2ndPerson: Word('взвизгиваете', 3),
  plural3rdPerson: Word('взвизгивают', 3),
  masculinePast: Word('взвизгивал', 3),
  femininePast: Word('взвизгивала', 3),
  neuterPast: Word('взвизгивало', 3),
  pluralPast: Word('взвизгивали', 3),
  imperativeInformal: Word('взвизгивай', 3),
  imperativeFormal: Word('взвизгивайте', 3),
  imperfect: [],
};

perfectVerbs.set(взвизгивать.name.text, взвизгивать);

export { взвизгивать };