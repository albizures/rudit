import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вспыхивать: PerfectVerb = {
  name: Word('вспыхивать', 3),
  singular1stPerson: Word('вспыхиваю', 3),
  singular2ndPerson: Word('вспыхиваешь', 3),
  singular3rdPerson: Word('вспыхивает', 3),
  plural1stPerson: Word('вспыхиваем', 3),
  plural2ndPerson: Word('вспыхиваете', 3),
  plural3rdPerson: Word('вспыхивают', 3),
  masculinePast: Word('вспыхивал', 3),
  femininePast: Word('вспыхивала', 3),
  neuterPast: Word('вспыхивало', 3),
  pluralPast: Word('вспыхивали', 3),
  imperativeInformal: Word('вспыхивай', 3),
  imperativeFormal: Word('вспыхивайте', 3),
  imperfect: ['вспыхнуть'],
};

perfectVerbs.set(вспыхивать.name.text, вспыхивать);

export { вспыхивать };