import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const читывать: PerfectVerb = {
  name: Word('читывать', 1),
  singular1stPerson: Word('читываю', 1),
  singular2ndPerson: Word('читываешь', 1),
  singular3rdPerson: Word('читывает', 1),
  plural1stPerson: Word('читываем', 1),
  plural2ndPerson: Word('читываете', 1),
  plural3rdPerson: Word('читывают', 1),
  masculinePast: Word('читывал', 1),
  femininePast: Word('читывала', 1),
  neuterPast: Word('читывало', 1),
  pluralPast: Word('читывали', 1),
  imperativeInformal: Word('читывай', 1),
  imperativeFormal: Word('читывайте', 1),
  imperfect: [],
};

perfectVerbs.set(читывать.name.text, читывать);

export { читывать };