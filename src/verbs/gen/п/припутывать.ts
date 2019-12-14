import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const припутывать: PerfectVerb = {
  name: Word('припутывать', 4),
  singular1stPerson: Word('припутываю', 4),
  singular2ndPerson: Word('припутываешь', 4),
  singular3rdPerson: Word('припутывает', 4),
  plural1stPerson: Word('припутываем', 4),
  plural2ndPerson: Word('припутываете', 4),
  plural3rdPerson: Word('припутывают', 4),
  masculinePast: Word('припутывал', 4),
  femininePast: Word('припутывала', 4),
  neuterPast: Word('припутывало', 4),
  pluralPast: Word('припутывали', 4),
  imperativeInformal: Word('припутывай', 4),
  imperativeFormal: Word('припутывайте', 4),
  imperfect: [],
};

perfectVerbs.set(припутывать.name.text, припутывать);

export { припутывать };