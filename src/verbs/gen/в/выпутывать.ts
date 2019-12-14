import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпутывать: PerfectVerb = {
  name: Word('выпутывать', 3),
  singular1stPerson: Word('выпутываю', 3),
  singular2ndPerson: Word('выпутываешь', 3),
  singular3rdPerson: Word('выпутывает', 3),
  plural1stPerson: Word('выпутываем', 3),
  plural2ndPerson: Word('выпутываете', 3),
  plural3rdPerson: Word('выпутывают', 3),
  masculinePast: Word('выпутывал', 3),
  femininePast: Word('выпутывала', 3),
  neuterPast: Word('выпутывало', 3),
  pluralPast: Word('выпутывали', 3),
  imperativeInformal: Word('выпутывай', 3),
  imperativeFormal: Word('выпутывайте', 3),
  imperfect: [],
};

perfectVerbs.set(выпутывать.name.text, выпутывать);

export { выпутывать };