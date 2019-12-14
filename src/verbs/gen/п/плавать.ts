import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const плавать: PerfectVerb = {
  name: Word('плавать', 2),
  singular1stPerson: Word('плаваю', 2),
  singular2ndPerson: Word('плаваешь', 2),
  singular3rdPerson: Word('плавает', 2),
  plural1stPerson: Word('плаваем', 2),
  plural2ndPerson: Word('плаваете', 2),
  plural3rdPerson: Word('плавают', 2),
  masculinePast: Word('плавал', 2),
  femininePast: Word('плавала', 2),
  neuterPast: Word('плавало', 2),
  pluralPast: Word('плавали', 2),
  imperativeInformal: Word('плавай', 2),
  imperativeFormal: Word('плавайте', 2),
  imperfect: ['поплавать'],
};

perfectVerbs.set(плавать.name.text, плавать);

export { плавать };