import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отстирывать: PerfectVerb = {
  name: Word('отстирывать', 4),
  singular1stPerson: Word('отстирываю', 4),
  singular2ndPerson: Word('отстирываешь', 4),
  singular3rdPerson: Word('отстирывает', 4),
  plural1stPerson: Word('отстирываем', 4),
  plural2ndPerson: Word('отстирываете', 4),
  plural3rdPerson: Word('отстирывают', 4),
  masculinePast: Word('отстирывал', 4),
  femininePast: Word('отстирывала', 4),
  neuterPast: Word('отстирывало', 4),
  pluralPast: Word('отстирывали', 4),
  imperativeInformal: Word('отстирывай', 4),
  imperativeFormal: Word('отстирывайте', 4),
  imperfect: [],
};

perfectVerbs.set(отстирывать.name.text, отстирывать);

export { отстирывать };