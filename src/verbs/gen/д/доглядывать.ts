import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доглядывать: PerfectVerb = {
  name: Word('доглядывать', 4),
  singular1stPerson: Word('доглядываю', 4),
  singular2ndPerson: Word('доглядываешь', 4),
  singular3rdPerson: Word('доглядывает', 4),
  plural1stPerson: Word('доглядываем', 4),
  plural2ndPerson: Word('доглядываете', 4),
  plural3rdPerson: Word('доглядывают', 4),
  masculinePast: Word('доглядывал', 4),
  femininePast: Word('доглядывала', 4),
  neuterPast: Word('доглядывало', 4),
  pluralPast: Word('доглядывали', 4),
  imperativeInformal: Word('доглядывай', 4),
  imperativeFormal: Word('доглядывайте', 4),
  imperfect: [],
};

perfectVerbs.set(доглядывать.name.text, доглядывать);

export { доглядывать };