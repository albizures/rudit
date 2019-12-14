import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свергать: PerfectVerb = {
  name: Word('свергать', 5),
  singular1stPerson: Word('свергаю', 5),
  singular2ndPerson: Word('свергаешь', 5),
  singular3rdPerson: Word('свергает', 5),
  plural1stPerson: Word('свергаем', 5),
  plural2ndPerson: Word('свергаете', 5),
  plural3rdPerson: Word('свергают', 5),
  masculinePast: Word('свергал', 5),
  femininePast: Word('свергала', 5),
  neuterPast: Word('свергало', 5),
  pluralPast: Word('свергали', 5),
  imperativeInformal: Word('свергай', 5),
  imperativeFormal: Word('свергайте', 5),
  imperfect: ['свергнуть'],
};

perfectVerbs.set(свергать.name.text, свергать);

export { свергать };