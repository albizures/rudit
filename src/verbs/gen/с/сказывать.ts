import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сказывать: PerfectVerb = {
  name: Word('сказывать', 2),
  singular1stPerson: Word('сказываю', 2),
  singular2ndPerson: Word('сказываешь', 2),
  singular3rdPerson: Word('сказывает', 2),
  plural1stPerson: Word('сказываем', 2),
  plural2ndPerson: Word('сказываете', 2),
  plural3rdPerson: Word('сказывают', 2),
  masculinePast: Word('сказывал', 2),
  femininePast: Word('сказывала', 2),
  neuterPast: Word('сказывало', 2),
  pluralPast: Word('сказывали', 2),
  imperativeInformal: Word('сказывай', 2),
  imperativeFormal: Word('сказывайте', 2),
  imperfect: ['сказать'],
};

perfectVerbs.set(сказывать.name.text, сказывать);

export { сказывать };