import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подвергать: PerfectVerb = {
  name: Word('подвергать', 7),
  singular1stPerson: Word('подвергаю', 7),
  singular2ndPerson: Word('подвергаешь', 7),
  singular3rdPerson: Word('подвергает', 7),
  plural1stPerson: Word('подвергаем', 7),
  plural2ndPerson: Word('подвергаете', 7),
  plural3rdPerson: Word('подвергают', 7),
  masculinePast: Word('подвергал', 7),
  femininePast: Word('подвергала', 7),
  neuterPast: Word('подвергало', 7),
  pluralPast: Word('подвергали', 7),
  imperativeInformal: Word('подвергай', 7),
  imperativeFormal: Word('подвергайте', 7),
  imperfect: ['подвергнуть'],
};

perfectVerbs.set(подвергать.name.text, подвергать);

export { подвергать };