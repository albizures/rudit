import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отряхивать: PerfectVerb = {
  name: Word('отряхивать', 3),
  singular1stPerson: Word('отряхиваю', 3),
  singular2ndPerson: Word('отряхиваешь', 3),
  singular3rdPerson: Word('отряхивает', 3),
  plural1stPerson: Word('отряхиваем', 3),
  plural2ndPerson: Word('отряхиваете', 3),
  plural3rdPerson: Word('отряхивают', 3),
  masculinePast: Word('отряхивал', 3),
  femininePast: Word('отряхивала', 3),
  neuterPast: Word('отряхивало', 3),
  pluralPast: Word('отряхивали', 3),
  imperativeInformal: Word('отряхивай', 3),
  imperativeFormal: Word('отряхивайте', 3),
  imperfect: [],
};

perfectVerbs.set(отряхивать.name.text, отряхивать);

export { отряхивать };