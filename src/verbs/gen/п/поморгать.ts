import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поморгать: PerfectVerb = {
  name: Word('поморгать', 6),
  singular1stPerson: Word('поморгаю', 6),
  singular2ndPerson: Word('поморгаешь', 6),
  singular3rdPerson: Word('поморгает', 6),
  plural1stPerson: Word('поморгаем', 6),
  plural2ndPerson: Word('поморгаете', 6),
  plural3rdPerson: Word('поморгают', 6),
  masculinePast: Word('поморгал', 6),
  femininePast: Word('поморгала', 6),
  neuterPast: Word('поморгало', 6),
  pluralPast: Word('поморгали', 6),
  imperativeInformal: Word('поморгай', 6),
  imperativeFormal: Word('поморгайте', 6),
  imperfect: [],
};

perfectVerbs.set(поморгать.name.text, поморгать);

export { поморгать };