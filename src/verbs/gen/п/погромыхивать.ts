import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const погромыхивать: PerfectVerb = {
  name: Word('погромыхивать', 6),
  singular1stPerson: Word('погромыхиваю', 6),
  singular2ndPerson: Word('погромыхиваешь', 6),
  singular3rdPerson: Word('погромыхивает', 6),
  plural1stPerson: Word('погромыхиваем', 6),
  plural2ndPerson: Word('погромыхиваете', 6),
  plural3rdPerson: Word('погромыхивают', 6),
  masculinePast: Word('погромыхивал', 6),
  femininePast: Word('погромыхивала', 6),
  neuterPast: Word('погромыхивало', 6),
  pluralPast: Word('погромыхивали', 6),
  imperativeInformal: Word('погромыхивай', 6),
  imperativeFormal: Word('погромыхивайте', 6),
  imperfect: [],
};

perfectVerbs.set(погромыхивать.name.text, погромыхивать);

export { погромыхивать };