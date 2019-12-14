import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потряхивать: PerfectVerb = {
  name: Word('потряхивать', 4),
  singular1stPerson: Word('потряхиваю', 4),
  singular2ndPerson: Word('потряхиваешь', 4),
  singular3rdPerson: Word('потряхивает', 4),
  plural1stPerson: Word('потряхиваем', 4),
  plural2ndPerson: Word('потряхиваете', 4),
  plural3rdPerson: Word('потряхивают', 4),
  masculinePast: Word('потряхивал', 4),
  femininePast: Word('потряхивала', 4),
  neuterPast: Word('потряхивало', 4),
  pluralPast: Word('потряхивали', 4),
  imperativeInformal: Word('потряхивай', 4),
  imperativeFormal: Word('потряхивайте', 4),
  imperfect: [],
};

perfectVerbs.set(потряхивать.name.text, потряхивать);

export { потряхивать };