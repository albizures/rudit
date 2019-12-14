import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вынюхивать: PerfectVerb = {
  name: Word('вынюхивать', 3),
  singular1stPerson: Word('вынюхиваю', 3),
  singular2ndPerson: Word('вынюхиваешь', 3),
  singular3rdPerson: Word('вынюхивает', 3),
  plural1stPerson: Word('вынюхиваем', 3),
  plural2ndPerson: Word('вынюхиваете', 3),
  plural3rdPerson: Word('вынюхивают', 3),
  masculinePast: Word('вынюхивал', 3),
  femininePast: Word('вынюхивала', 3),
  neuterPast: Word('вынюхивало', 3),
  pluralPast: Word('вынюхивали', 3),
  imperativeInformal: Word('вынюхивай', 3),
  imperativeFormal: Word('вынюхивайте', 3),
  imperfect: [],
};

perfectVerbs.set(вынюхивать.name.text, вынюхивать);

export { вынюхивать };