import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пробормотать: PerfectVerb = {
  name: Word('пробормотать', 9),
  singular1stPerson: Word('пробормочу', 9),
  singular2ndPerson: Word('пробормочешь', 7),
  singular3rdPerson: Word('пробормочет', 7),
  plural1stPerson: Word('пробормочем', 7),
  plural2ndPerson: Word('пробормочете', 7),
  plural3rdPerson: Word('пробормочут', 7),
  masculinePast: Word('пробормотал', 9),
  femininePast: Word('пробормотала', 9),
  neuterPast: Word('пробормотало', 9),
  pluralPast: Word('пробормотали', 9),
  imperativeInformal: Word('пробормочи', 9),
  imperativeFormal: Word('пробормочите', 9),
  imperfect: [],
};

perfectVerbs.set(пробормотать.name.text, пробормотать);

export { пробормотать };