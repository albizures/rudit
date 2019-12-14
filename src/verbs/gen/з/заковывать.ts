import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заковывать: PerfectVerb = {
  name: Word('заковывать', 3),
  singular1stPerson: Word('заковываю', 3),
  singular2ndPerson: Word('заковываешь', 3),
  singular3rdPerson: Word('заковывает', 3),
  plural1stPerson: Word('заковываем', 3),
  plural2ndPerson: Word('заковываете', 3),
  plural3rdPerson: Word('заковывают', 3),
  masculinePast: Word('заковывал', 3),
  femininePast: Word('заковывала', 3),
  neuterPast: Word('заковывало', 3),
  pluralPast: Word('заковывали', 3),
  imperativeInformal: Word('заковывай', 3),
  imperativeFormal: Word('заковывайте', 3),
  imperfect: [],
};

perfectVerbs.set(заковывать.name.text, заковывать);

export { заковывать };