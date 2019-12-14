import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проматывать: PerfectVerb = {
  name: Word('проматывать', 4),
  singular1stPerson: Word('проматываю', 4),
  singular2ndPerson: Word('проматываешь', 4),
  singular3rdPerson: Word('проматывает', 4),
  plural1stPerson: Word('проматываем', 4),
  plural2ndPerson: Word('проматываете', 4),
  plural3rdPerson: Word('проматывают', 4),
  masculinePast: Word('проматывал', 4),
  femininePast: Word('проматывала', 4),
  neuterPast: Word('проматывало', 4),
  pluralPast: Word('проматывали', 4),
  imperativeInformal: Word('проматывай', 4),
  imperativeFormal: Word('проматывайте', 4),
  imperfect: [],
};

perfectVerbs.set(проматывать.name.text, проматывать);

export { проматывать };