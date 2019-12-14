import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const простывать: PerfectVerb = {
  name: Word('простывать', 7),
  singular1stPerson: Word('простываю', 7),
  singular2ndPerson: Word('простываешь', 7),
  singular3rdPerson: Word('простывает', 7),
  plural1stPerson: Word('простываем', 7),
  plural2ndPerson: Word('простываете', 7),
  plural3rdPerson: Word('простывают', 7),
  masculinePast: Word('простывал', 7),
  femininePast: Word('простывала', 7),
  neuterPast: Word('простывало', 7),
  pluralPast: Word('простывали', 7),
  imperativeInformal: Word('простывай', 7),
  imperativeFormal: Word('простывайте', 7),
  imperfect: [],
};

perfectVerbs.set(простывать.name.text, простывать);

export { простывать };