import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const попыхивать: PerfectVerb = {
  name: Word('попыхивать', 3),
  singular1stPerson: Word('попыхиваю', 3),
  singular2ndPerson: Word('попыхиваешь', 3),
  singular3rdPerson: Word('попыхивает', 3),
  plural1stPerson: Word('попыхиваем', 3),
  plural2ndPerson: Word('попыхиваете', 3),
  plural3rdPerson: Word('попыхивают', 3),
  masculinePast: Word('попыхивал', 3),
  femininePast: Word('попыхивала', 3),
  neuterPast: Word('попыхивало', 3),
  pluralPast: Word('попыхивали', 3),
  imperativeInformal: Word('попыхивай', 3),
  imperativeFormal: Word('попыхивайте', 3),
  imperfect: [],
};

perfectVerbs.set(попыхивать.name.text, попыхивать);

export { попыхивать };