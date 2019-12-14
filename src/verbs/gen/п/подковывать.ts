import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подковывать: PerfectVerb = {
  name: Word('подковывать', 4),
  singular1stPerson: Word('подковываю', 4),
  singular2ndPerson: Word('подковываешь', 4),
  singular3rdPerson: Word('подковывает', 4),
  plural1stPerson: Word('подковываем', 4),
  plural2ndPerson: Word('подковываете', 4),
  plural3rdPerson: Word('подковывают', 4),
  masculinePast: Word('подковывал', 4),
  femininePast: Word('подковывала', 4),
  neuterPast: Word('подковывало', 4),
  pluralPast: Word('подковывали', 4),
  imperativeInformal: Word('подковывай', 4),
  imperativeFormal: Word('подковывайте', 4),
  imperfect: ['подковать'],
};

perfectVerbs.set(подковывать.name.text, подковывать);

export { подковывать };