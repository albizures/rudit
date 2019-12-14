import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подглядывать: PerfectVerb = {
  name: Word('подглядывать', 5),
  singular1stPerson: Word('подглядываю', 5),
  singular2ndPerson: Word('подглядываешь', 5),
  singular3rdPerson: Word('подглядывает', 5),
  plural1stPerson: Word('подглядываем', 5),
  plural2ndPerson: Word('подглядываете', 5),
  plural3rdPerson: Word('подглядывают', 5),
  masculinePast: Word('подглядывал', 5),
  femininePast: Word('подглядывала', 5),
  neuterPast: Word('подглядывало', 5),
  pluralPast: Word('подглядывали', 5),
  imperativeInformal: Word('подглядывай', 5),
  imperativeFormal: Word('подглядывайте', 5),
  imperfect: [],
};

perfectVerbs.set(подглядывать.name.text, подглядывать);

export { подглядывать };