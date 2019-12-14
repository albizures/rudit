import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const урезонивать: PerfectVerb = {
  name: Word('урезонивать', 4),
  singular1stPerson: Word('урезониваю', 4),
  singular2ndPerson: Word('урезониваешь', 4),
  singular3rdPerson: Word('урезонивает', 4),
  plural1stPerson: Word('урезониваем', 4),
  plural2ndPerson: Word('урезониваете', 4),
  plural3rdPerson: Word('урезонивают', 4),
  masculinePast: Word('урезонивал', 4),
  femininePast: Word('урезонивала', 4),
  neuterPast: Word('урезонивало', 4),
  pluralPast: Word('урезонивали', 4),
  imperativeInformal: Word('урезонивай', 4),
  imperativeFormal: Word('урезонивайте', 4),
  imperfect: [],
};

perfectVerbs.set(урезонивать.name.text, урезонивать);

export { урезонивать };