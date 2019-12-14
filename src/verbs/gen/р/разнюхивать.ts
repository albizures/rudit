import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разнюхивать: PerfectVerb = {
  name: Word('разнюхивать', 4),
  singular1stPerson: Word('разнюхиваю', 4),
  singular2ndPerson: Word('разнюхиваешь', 4),
  singular3rdPerson: Word('разнюхивает', 4),
  plural1stPerson: Word('разнюхиваем', 4),
  plural2ndPerson: Word('разнюхиваете', 4),
  plural3rdPerson: Word('разнюхивают', 4),
  masculinePast: Word('разнюхивал', 4),
  femininePast: Word('разнюхивала', 4),
  neuterPast: Word('разнюхивало', 4),
  pluralPast: Word('разнюхивали', 4),
  imperativeInformal: Word('разнюхивай', 4),
  imperativeFormal: Word('разнюхивайте', 4),
  imperfect: [],
};

perfectVerbs.set(разнюхивать.name.text, разнюхивать);

export { разнюхивать };