import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отвергать: PerfectVerb = {
  name: Word('отвергать', 6),
  singular1stPerson: Word('отвергаю', 6),
  singular2ndPerson: Word('отвергаешь', 6),
  singular3rdPerson: Word('отвергает', 6),
  plural1stPerson: Word('отвергаем', 6),
  plural2ndPerson: Word('отвергаете', 6),
  plural3rdPerson: Word('отвергают', 6),
  masculinePast: Word('отвергал', 6),
  femininePast: Word('отвергала', 6),
  neuterPast: Word('отвергало', 6),
  pluralPast: Word('отвергали', 6),
  imperativeInformal: Word('отвергай', 6),
  imperativeFormal: Word('отвергайте', 6),
  imperfect: [],
};

perfectVerbs.set(отвергать.name.text, отвергать);

export { отвергать };