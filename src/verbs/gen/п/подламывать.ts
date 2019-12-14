import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подламывать: PerfectVerb = {
  name: Word('подламывать', 4),
  singular1stPerson: Word('подламываю', 4),
  singular2ndPerson: Word('подламываешь', 4),
  singular3rdPerson: Word('подламывает', 4),
  plural1stPerson: Word('подламываем', 4),
  plural2ndPerson: Word('подламываете', 4),
  plural3rdPerson: Word('подламывают', 4),
  masculinePast: Word('подламывал', 4),
  femininePast: Word('подламывала', 4),
  neuterPast: Word('подламывало', 4),
  pluralPast: Word('подламывали', 4),
  imperativeInformal: Word('подламывай', 4),
  imperativeFormal: Word('подламывайте', 4),
  imperfect: [],
};

perfectVerbs.set(подламывать.name.text, подламывать);

export { подламывать };