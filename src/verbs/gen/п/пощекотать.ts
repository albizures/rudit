import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пощекотать: PerfectVerb = {
  name: Word('пощекотать', 7),
  singular1stPerson: Word('пощекочу', 7),
  singular2ndPerson: Word('пощекочешь', 5),
  singular3rdPerson: Word('пощекочет', 5),
  plural1stPerson: Word('пощекочем', 5),
  plural2ndPerson: Word('пощекочете', 5),
  plural3rdPerson: Word('пощекочут', 5),
  masculinePast: Word('пощекотал', 7),
  femininePast: Word('пощекотала', 7),
  neuterPast: Word('пощекотало', 7),
  pluralPast: Word('пощекотали', 7),
  imperativeInformal: Word('пощекочи', 7),
  imperativeFormal: Word('пощекочите', 7),
  imperfect: [],
};

perfectVerbs.set(пощекотать.name.text, пощекотать);

export { пощекотать };