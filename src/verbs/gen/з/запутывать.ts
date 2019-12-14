import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запутывать: PerfectVerb = {
  name: Word('запутывать', 3),
  singular1stPerson: Word('запутываю', 3),
  singular2ndPerson: Word('запутываешь', 3),
  singular3rdPerson: Word('запутывает', 3),
  plural1stPerson: Word('запутываем', 3),
  plural2ndPerson: Word('запутываете', 3),
  plural3rdPerson: Word('запутывают', 3),
  masculinePast: Word('запутывал', 3),
  femininePast: Word('запутывала', 3),
  neuterPast: Word('запутывало', 3),
  pluralPast: Word('запутывали', 3),
  imperativeInformal: Word('запутывай', 3),
  imperativeFormal: Word('запутывайте', 3),
  imperfect: [],
};

perfectVerbs.set(запутывать.name.text, запутывать);

export { запутывать };