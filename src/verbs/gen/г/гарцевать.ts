import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гарцевать: PerfectVerb = {
  name: Word('гарцевать', 6),
  singular1stPerson: Word('гарцую', 4),
  singular2ndPerson: Word('гарцуешь', 4),
  singular3rdPerson: Word('гарцует', 4),
  plural1stPerson: Word('гарцуем', 4),
  plural2ndPerson: Word('гарцуете', 4),
  plural3rdPerson: Word('гарцуют', 4),
  masculinePast: Word('гарцевал', 6),
  femininePast: Word('гарцевала', 6),
  neuterPast: Word('гарцевало', 6),
  pluralPast: Word('гарцевали', 6),
  imperativeInformal: Word('гарцуй', 4),
  imperativeFormal: Word('гарцуйте', 4),
  imperfect: [],
};

perfectVerbs.set(гарцевать.name.text, гарцевать);

export { гарцевать };