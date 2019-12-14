import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закутывать: PerfectVerb = {
  name: Word('закутывать', 3),
  singular1stPerson: Word('закутываю', 3),
  singular2ndPerson: Word('закутываешь', 3),
  singular3rdPerson: Word('закутывает', 3),
  plural1stPerson: Word('закутываем', 3),
  plural2ndPerson: Word('закутываете', 3),
  plural3rdPerson: Word('закутывают', 3),
  masculinePast: Word('закутывал', 3),
  femininePast: Word('закутывала', 3),
  neuterPast: Word('закутывало', 3),
  pluralPast: Word('закутывали', 3),
  imperativeInformal: Word('закутывай', 3),
  imperativeFormal: Word('закутывайте', 3),
  imperfect: [],
};

perfectVerbs.set(закутывать.name.text, закутывать);

export { закутывать };