import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сматывать: PerfectVerb = {
  name: Word('сматывать', 2),
  singular1stPerson: Word('сматываю', 2),
  singular2ndPerson: Word('сматываешь', 2),
  singular3rdPerson: Word('сматывает', 2),
  plural1stPerson: Word('сматываем', 2),
  plural2ndPerson: Word('сматываете', 2),
  plural3rdPerson: Word('сматывают', 2),
  masculinePast: Word('сматывал', 2),
  femininePast: Word('сматывала', 2),
  neuterPast: Word('сматывало', 2),
  pluralPast: Word('сматывали', 2),
  imperativeInformal: Word('сматывай', 2),
  imperativeFormal: Word('сматывайте', 2),
  imperfect: [],
};

perfectVerbs.set(сматывать.name.text, сматывать);

export { сматывать };