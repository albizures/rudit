import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обнюхивать: PerfectVerb = {
  name: Word('обнюхивать', 3),
  singular1stPerson: Word('обнюхиваю', 3),
  singular2ndPerson: Word('обнюхиваешь', 3),
  singular3rdPerson: Word('обнюхивает', 3),
  plural1stPerson: Word('обнюхиваем', 3),
  plural2ndPerson: Word('обнюхиваете', 3),
  plural3rdPerson: Word('обнюхивают', 3),
  masculinePast: Word('обнюхивал', 3),
  femininePast: Word('обнюхивала', 3),
  neuterPast: Word('обнюхивало', 3),
  pluralPast: Word('обнюхивали', 3),
  imperativeInformal: Word('обнюхивай', 3),
  imperativeFormal: Word('обнюхивайте', 3),
  imperfect: [],
};

perfectVerbs.set(обнюхивать.name.text, обнюхивать);

export { обнюхивать };