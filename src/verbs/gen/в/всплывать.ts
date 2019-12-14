import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const всплывать: PerfectVerb = {
  name: Word('всплывать', 6),
  singular1stPerson: Word('всплываю', 6),
  singular2ndPerson: Word('всплываешь', 6),
  singular3rdPerson: Word('всплывает', 6),
  plural1stPerson: Word('всплываем', 6),
  plural2ndPerson: Word('всплываете', 6),
  plural3rdPerson: Word('всплывают', 6),
  masculinePast: Word('всплывал', 6),
  femininePast: Word('всплывала', 6),
  neuterPast: Word('всплывало', 6),
  pluralPast: Word('всплывали', 6),
  imperativeInformal: Word('всплывай', 6),
  imperativeFormal: Word('всплывайте', 6),
  imperfect: [],
};

perfectVerbs.set(всплывать.name.text, всплывать);

export { всплывать };