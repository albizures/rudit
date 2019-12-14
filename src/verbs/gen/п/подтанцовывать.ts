import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подтанцовывать: PerfectVerb = {
  name: Word('подтанцовывать', 7),
  singular1stPerson: Word('подтанцовываю', 7),
  singular2ndPerson: Word('подтанцовываешь', 7),
  singular3rdPerson: Word('подтанцовывает', 7),
  plural1stPerson: Word('подтанцовываем', 7),
  plural2ndPerson: Word('подтанцовываете', 7),
  plural3rdPerson: Word('подтанцовывают', 7),
  masculinePast: Word('подтанцовывал', 7),
  femininePast: Word('подтанцовывала', 7),
  neuterPast: Word('подтанцовывало', 7),
  pluralPast: Word('подтанцовывали', 7),
  imperativeInformal: Word('подтанцовывай', 7),
  imperativeFormal: Word('подтанцовывайте', 7),
  imperfect: [],
};

perfectVerbs.set(подтанцовывать.name.text, подтанцовывать);

export { подтанцовывать };