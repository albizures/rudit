import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оказывать: PerfectVerb = {
  name: Word('оказывать', 2),
  singular1stPerson: Word('оказываю', 2),
  singular2ndPerson: Word('оказываешь', 2),
  singular3rdPerson: Word('оказывает', 2),
  plural1stPerson: Word('оказываем', 2),
  plural2ndPerson: Word('оказываете', 2),
  plural3rdPerson: Word('оказывают', 2),
  masculinePast: Word('оказывал', 2),
  femininePast: Word('оказывала', 2),
  neuterPast: Word('оказывало', 2),
  pluralPast: Word('оказывали', 2),
  imperativeInformal: Word('оказывай', 2),
  imperativeFormal: Word('оказывайте', 2),
  imperfect: ['оказать'],
};

perfectVerbs.set(оказывать.name.text, оказывать);

export { оказывать };