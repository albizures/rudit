import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выматывать: PerfectVerb = {
  name: Word('выматывать', 3),
  singular1stPerson: Word('выматываю', 3),
  singular2ndPerson: Word('выматываешь', 3),
  singular3rdPerson: Word('выматывает', 3),
  plural1stPerson: Word('выматываем', 3),
  plural2ndPerson: Word('выматываете', 3),
  plural3rdPerson: Word('выматывают', 3),
  masculinePast: Word('выматывал', 3),
  femininePast: Word('выматывала', 3),
  neuterPast: Word('выматывало', 3),
  pluralPast: Word('выматывали', 3),
  imperativeInformal: Word('выматывай', 3),
  imperativeFormal: Word('выматывайте', 3),
  imperfect: [],
};

perfectVerbs.set(выматывать.name.text, выматывать);

export { выматывать };