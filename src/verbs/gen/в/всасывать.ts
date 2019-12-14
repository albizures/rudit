import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const всасывать: PerfectVerb = {
  name: Word('всасывать', 2),
  singular1stPerson: Word('всасываю', 2),
  singular2ndPerson: Word('всасываешь', 2),
  singular3rdPerson: Word('всасывает', 2),
  plural1stPerson: Word('всасываем', 2),
  plural2ndPerson: Word('всасываете', 2),
  plural3rdPerson: Word('всасывают', 2),
  masculinePast: Word('всасывал', 2),
  femininePast: Word('всасывала', 2),
  neuterPast: Word('всасывало', 2),
  pluralPast: Word('всасывали', 2),
  imperativeInformal: Word('всасывай', 2),
  imperativeFormal: Word('всасывайте', 2),
  imperfect: [],
};

perfectVerbs.set(всасывать.name.text, всасывать);

export { всасывать };