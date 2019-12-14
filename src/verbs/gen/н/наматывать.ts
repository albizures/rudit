import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наматывать: PerfectVerb = {
  name: Word('наматывать', 3),
  singular1stPerson: Word('наматываю', 3),
  singular2ndPerson: Word('наматываешь', 3),
  singular3rdPerson: Word('наматывает', 3),
  plural1stPerson: Word('наматываем', 3),
  plural2ndPerson: Word('наматываете', 3),
  plural3rdPerson: Word('наматывают', 3),
  masculinePast: Word('наматывал', 3),
  femininePast: Word('наматывала', 3),
  neuterPast: Word('наматывало', 3),
  pluralPast: Word('наматывали', 3),
  imperativeInformal: Word('наматывай', 3),
  imperativeFormal: Word('наматывайте', 3),
  imperfect: [],
};

perfectVerbs.set(наматывать.name.text, наматывать);

export { наматывать };