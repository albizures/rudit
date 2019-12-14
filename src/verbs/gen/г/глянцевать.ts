import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const глянцевать: PerfectVerb = {
  name: Word('глянцевать', 7),
  singular1stPerson: Word('глянцую', 5),
  singular2ndPerson: Word('глянцуешь', 5),
  singular3rdPerson: Word('глянцует', 5),
  plural1stPerson: Word('глянцуем', 5),
  plural2ndPerson: Word('глянцуете', 5),
  plural3rdPerson: Word('глянцуют', 5),
  masculinePast: Word('глянцевал', 7),
  femininePast: Word('глянцевала', 7),
  neuterPast: Word('глянцевало', 7),
  pluralPast: Word('глянцевали', 7),
  imperativeInformal: Word('глянцуй', 5),
  imperativeFormal: Word('глянцуйте', 5),
  imperfect: [],
};

perfectVerbs.set(глянцевать.name.text, глянцевать);

export { глянцевать };