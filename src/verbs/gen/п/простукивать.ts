import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const простукивать: PerfectVerb = {
  name: Word('простукивать', 5),
  singular1stPerson: Word('простукиваю', 5),
  singular2ndPerson: Word('простукиваешь', 5),
  singular3rdPerson: Word('простукивает', 5),
  plural1stPerson: Word('простукиваем', 5),
  plural2ndPerson: Word('простукиваете', 5),
  plural3rdPerson: Word('простукивают', 5),
  masculinePast: Word('простукивал', 5),
  femininePast: Word('простукивала', 5),
  neuterPast: Word('простукивало', 5),
  pluralPast: Word('простукивали', 5),
  imperativeInformal: Word('простукивай', 5),
  imperativeFormal: Word('простукивайте', 5),
  imperfect: [],
};

perfectVerbs.set(простукивать.name.text, простукивать);

export { простукивать };