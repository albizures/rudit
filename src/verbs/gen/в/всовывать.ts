import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const всовывать: PerfectVerb = {
  name: Word('всовывать', 2),
  singular1stPerson: Word('всовываю', 2),
  singular2ndPerson: Word('всовываешь', 2),
  singular3rdPerson: Word('всовывает', 2),
  plural1stPerson: Word('всовываем', 2),
  plural2ndPerson: Word('всовываете', 2),
  plural3rdPerson: Word('всовывают', 2),
  masculinePast: Word('всовывал', 2),
  femininePast: Word('всовывала', 2),
  neuterPast: Word('всовывало', 2),
  pluralPast: Word('всовывали', 2),
  imperativeInformal: Word('всовывай', 2),
  imperativeFormal: Word('всовывайте', 2),
  imperfect: [],
};

perfectVerbs.set(всовывать.name.text, всовывать);

export { всовывать };