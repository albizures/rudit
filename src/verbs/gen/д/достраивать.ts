import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const достраивать: PerfectVerb = {
  name: Word('достраивать', 5),
  singular1stPerson: Word('достраиваю', 5),
  singular2ndPerson: Word('достраиваешь', 5),
  singular3rdPerson: Word('достраивает', 5),
  plural1stPerson: Word('достраиваем', 5),
  plural2ndPerson: Word('достраиваете', 5),
  plural3rdPerson: Word('достраивают', 5),
  masculinePast: Word('достраивал', 5),
  femininePast: Word('достраивала', 5),
  neuterPast: Word('достраивало', 5),
  pluralPast: Word('достраивали', 5),
  imperativeInformal: Word('достраивай', 5),
  imperativeFormal: Word('достраивайте', 5),
  imperfect: [],
};

perfectVerbs.set(достраивать.name.text, достраивать);

export { достраивать };