import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расковывать: PerfectVerb = {
  name: Word('расковывать', 4),
  singular1stPerson: Word('расковываю', 4),
  singular2ndPerson: Word('расковываешь', 4),
  singular3rdPerson: Word('расковывает', 4),
  plural1stPerson: Word('расковываем', 4),
  plural2ndPerson: Word('расковываете', 4),
  plural3rdPerson: Word('расковывают', 4),
  masculinePast: Word('расковывал', 4),
  femininePast: Word('расковывала', 4),
  neuterPast: Word('расковывало', 4),
  pluralPast: Word('расковывали', 4),
  imperativeInformal: Word('расковывай', 4),
  imperativeFormal: Word('расковывайте', 4),
  imperfect: [],
};

perfectVerbs.set(расковывать.name.text, расковывать);

export { расковывать };