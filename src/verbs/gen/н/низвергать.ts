import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const низвергать: PerfectVerb = {
  name: Word('низвергать', 7),
  singular1stPerson: Word('низвергаю', 7),
  singular2ndPerson: Word('низвергаешь', 7),
  singular3rdPerson: Word('низвергает', 7),
  plural1stPerson: Word('низвергаем', 7),
  plural2ndPerson: Word('низвергаете', 7),
  plural3rdPerson: Word('низвергают', 7),
  masculinePast: Word('низвергал', 7),
  femininePast: Word('низвергала', 7),
  neuterPast: Word('низвергало', 7),
  pluralPast: Word('низвергали', 7),
  imperativeInformal: Word('низвергай', 7),
  imperativeFormal: Word('низвергайте', 7),
  imperfect: [],
};

perfectVerbs.set(низвергать.name.text, низвергать);

export { низвергать };