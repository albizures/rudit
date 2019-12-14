import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пронюхивать: PerfectVerb = {
  name: Word('пронюхивать', 4),
  singular1stPerson: Word('пронюхиваю', 4),
  singular2ndPerson: Word('пронюхиваешь', 4),
  singular3rdPerson: Word('пронюхивает', 4),
  plural1stPerson: Word('пронюхиваем', 4),
  plural2ndPerson: Word('пронюхиваете', 4),
  plural3rdPerson: Word('пронюхивают', 4),
  masculinePast: Word('пронюхивал', 4),
  femininePast: Word('пронюхивала', 4),
  neuterPast: Word('пронюхивало', 4),
  pluralPast: Word('пронюхивали', 4),
  imperativeInformal: Word('пронюхивай', 4),
  imperativeFormal: Word('пронюхивайте', 4),
  imperfect: [],
};

perfectVerbs.set(пронюхивать.name.text, пронюхивать);

export { пронюхивать };