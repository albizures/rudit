import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const слизывать: PerfectVerb = {
  name: Word('слизывать', 2),
  singular1stPerson: Word('слизываю', 2),
  singular2ndPerson: Word('слизываешь', 2),
  singular3rdPerson: Word('слизывает', 2),
  plural1stPerson: Word('слизываем', 2),
  plural2ndPerson: Word('слизываете', 2),
  plural3rdPerson: Word('слизывают', 2),
  masculinePast: Word('слизывал', 2),
  femininePast: Word('слизывала', 2),
  neuterPast: Word('слизывало', 2),
  pluralPast: Word('слизывали', 2),
  imperativeInformal: Word('слизывай', 2),
  imperativeFormal: Word('слизывайте', 2),
  imperfect: [],
};

perfectVerbs.set(слизывать.name.text, слизывать);

export { слизывать };