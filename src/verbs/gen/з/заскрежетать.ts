import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заскрежетать: PerfectVerb = {
  name: Word('заскрежетать', 9),
  singular1stPerson: Word('заскрежещу', 9),
  singular2ndPerson: Word('заскрежещешь', 7),
  singular3rdPerson: Word('заскрежещет', 7),
  plural1stPerson: Word('заскрежещем', 7),
  plural2ndPerson: Word('заскрежещете', 7),
  plural3rdPerson: Word('заскрежещут', 7),
  masculinePast: Word('заскрежетал', 9),
  femininePast: Word('заскрежетала', 9),
  neuterPast: Word('заскрежетало', 9),
  pluralPast: Word('заскрежетали', 9),
  imperativeInformal: Word('заскрежещи', 9),
  imperativeFormal: Word('заскрежещите', 9),
  imperfect: [],
};

perfectVerbs.set(заскрежетать.name.text, заскрежетать);

export { заскрежетать };