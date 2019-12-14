import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const додумать: PerfectVerb = {
  name: Word('додумать', 3),
  singular1stPerson: Word('додумаю', 3),
  singular2ndPerson: Word('додумаешь', 3),
  singular3rdPerson: Word('додумает', 3),
  plural1stPerson: Word('додумаем', 3),
  plural2ndPerson: Word('додумаете', 3),
  plural3rdPerson: Word('додумают', 3),
  masculinePast: Word('додумал', 3),
  femininePast: Word('додумала', 3),
  neuterPast: Word('додумало', 3),
  pluralPast: Word('додумали', 3),
  imperativeInformal: Word('додумай', 3),
  imperativeFormal: Word('додумайте', 3),
  imperfect: [],
};

perfectVerbs.set(додумать.name.text, додумать);

export { додумать };