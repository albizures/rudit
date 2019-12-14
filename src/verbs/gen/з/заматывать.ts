import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заматывать: PerfectVerb = {
  name: Word('заматывать', 3),
  singular1stPerson: Word('заматываю', 3),
  singular2ndPerson: Word('заматываешь', 3),
  singular3rdPerson: Word('заматывает', 3),
  plural1stPerson: Word('заматываем', 3),
  plural2ndPerson: Word('заматываете', 3),
  plural3rdPerson: Word('заматывают', 3),
  masculinePast: Word('заматывал', 3),
  femininePast: Word('заматывала', 3),
  neuterPast: Word('заматывало', 3),
  pluralPast: Word('заматывали', 3),
  imperativeInformal: Word('заматывай', 3),
  imperativeFormal: Word('заматывайте', 3),
  imperfect: [],
};

perfectVerbs.set(заматывать.name.text, заматывать);

export { заматывать };