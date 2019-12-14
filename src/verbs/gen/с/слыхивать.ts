import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const слыхивать: PerfectVerb = {
  name: Word('слыхивать', 2),
  singular1stPerson: Word('слыхиваю', 2),
  singular2ndPerson: Word('слыхиваешь', 2),
  singular3rdPerson: Word('слыхивает', 2),
  plural1stPerson: Word('слыхиваем', 2),
  plural2ndPerson: Word('слыхиваете', 2),
  plural3rdPerson: Word('слыхивают', 2),
  masculinePast: Word('слыхивал', 2),
  femininePast: Word('слыхивала', 2),
  neuterPast: Word('слыхивало', 2),
  pluralPast: Word('слыхивали', 2),
  imperativeInformal: Word('слыхивай', 2),
  imperativeFormal: Word('слыхивайте', 2),
  imperfect: [],
};

perfectVerbs.set(слыхивать.name.text, слыхивать);

export { слыхивать };