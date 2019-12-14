import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const угадывать: PerfectVerb = {
  name: Word('угадывать', 2),
  singular1stPerson: Word('угадываю', 2),
  singular2ndPerson: Word('угадываешь', 2),
  singular3rdPerson: Word('угадывает', 2),
  plural1stPerson: Word('угадываем', 2),
  plural2ndPerson: Word('угадываете', 2),
  plural3rdPerson: Word('угадывают', 2),
  masculinePast: Word('угадывал', 2),
  femininePast: Word('угадывала', 2),
  neuterPast: Word('угадывало', 2),
  pluralPast: Word('угадывали', 2),
  imperativeInformal: Word('угадывай', 2),
  imperativeFormal: Word('угадывайте', 2),
  imperfect: [],
};

perfectVerbs.set(угадывать.name.text, угадывать);

export { угадывать };