import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оглядывать: PerfectVerb = {
  name: Word('оглядывать', 3),
  singular1stPerson: Word('оглядываю', 3),
  singular2ndPerson: Word('оглядываешь', 3),
  singular3rdPerson: Word('оглядывает', 3),
  plural1stPerson: Word('оглядываем', 3),
  plural2ndPerson: Word('оглядываете', 3),
  plural3rdPerson: Word('оглядывают', 3),
  masculinePast: Word('оглядывал', 3),
  femininePast: Word('оглядывала', 3),
  neuterPast: Word('оглядывало', 3),
  pluralPast: Word('оглядывали', 3),
  imperativeInformal: Word('оглядывай', 3),
  imperativeFormal: Word('оглядывайте', 3),
  imperfect: [],
};

perfectVerbs.set(оглядывать.name.text, оглядывать);

export { оглядывать };