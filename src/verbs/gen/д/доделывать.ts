import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доделывать: PerfectVerb = {
  name: Word('доделывать', 3),
  singular1stPerson: Word('доделываю', 3),
  singular2ndPerson: Word('доделываешь', 3),
  singular3rdPerson: Word('доделывает', 3),
  plural1stPerson: Word('доделываем', 3),
  plural2ndPerson: Word('доделываете', 3),
  plural3rdPerson: Word('доделывают', 3),
  masculinePast: Word('доделывал', 3),
  femininePast: Word('доделывала', 3),
  neuterPast: Word('доделывало', 3),
  pluralPast: Word('доделывали', 3),
  imperativeInformal: Word('доделывай', 3),
  imperativeFormal: Word('доделывайте', 3),
  imperfect: [],
};

perfectVerbs.set(доделывать.name.text, доделывать);

export { доделывать };