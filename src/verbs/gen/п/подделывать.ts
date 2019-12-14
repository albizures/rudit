import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подделывать: PerfectVerb = {
  name: Word('подделывать', 4),
  singular1stPerson: Word('подделываю', 4),
  singular2ndPerson: Word('подделываешь', 4),
  singular3rdPerson: Word('подделывает', 4),
  plural1stPerson: Word('подделываем', 4),
  plural2ndPerson: Word('подделываете', 4),
  plural3rdPerson: Word('подделывают', 4),
  masculinePast: Word('подделывал', 4),
  femininePast: Word('подделывала', 4),
  neuterPast: Word('подделывало', 4),
  pluralPast: Word('подделывали', 4),
  imperativeInformal: Word('подделывай', 4),
  imperativeFormal: Word('подделывайте', 4),
  imperfect: [],
};

perfectVerbs.set(подделывать.name.text, подделывать);

export { подделывать };