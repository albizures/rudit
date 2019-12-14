import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подгадывать: PerfectVerb = {
  name: Word('подгадывать', 4),
  singular1stPerson: Word('подгадываю', 4),
  singular2ndPerson: Word('подгадываешь', 4),
  singular3rdPerson: Word('подгадывает', 4),
  plural1stPerson: Word('подгадываем', 4),
  plural2ndPerson: Word('подгадываете', 4),
  plural3rdPerson: Word('подгадывают', 4),
  masculinePast: Word('подгадывал', 4),
  femininePast: Word('подгадывала', 4),
  neuterPast: Word('подгадывало', 4),
  pluralPast: Word('подгадывали', 4),
  imperativeInformal: Word('подгадывай', 4),
  imperativeFormal: Word('подгадывайте', 4),
  imperfect: [],
};

perfectVerbs.set(подгадывать.name.text, подгадывать);

export { подгадывать };