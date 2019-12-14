import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const присвистывать: PerfectVerb = {
  name: Word('присвистывать', 5),
  singular1stPerson: Word('присвистываю', 5),
  singular2ndPerson: Word('присвистываешь', 5),
  singular3rdPerson: Word('присвистывает', 5),
  plural1stPerson: Word('присвистываем', 5),
  plural2ndPerson: Word('присвистываете', 5),
  plural3rdPerson: Word('присвистывают', 5),
  masculinePast: Word('присвистывал', 5),
  femininePast: Word('присвистывала', 5),
  neuterPast: Word('присвистывало', 5),
  pluralPast: Word('присвистывали', 5),
  imperativeInformal: Word('присвистывай', 5),
  imperativeFormal: Word('присвистывайте', 5),
  imperfect: [],
};

perfectVerbs.set(присвистывать.name.text, присвистывать);

export { присвистывать };