import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заплывать: PerfectVerb = {
  name: Word('заплывать', 6),
  singular1stPerson: Word('заплываю', 6),
  singular2ndPerson: Word('заплываешь', 6),
  singular3rdPerson: Word('заплывает', 6),
  plural1stPerson: Word('заплываем', 6),
  plural2ndPerson: Word('заплываете', 6),
  plural3rdPerson: Word('заплывают', 6),
  masculinePast: Word('заплывал', 6),
  femininePast: Word('заплывала', 6),
  neuterPast: Word('заплывало', 6),
  pluralPast: Word('заплывали', 6),
  imperativeInformal: Word('заплывай', 6),
  imperativeFormal: Word('заплывайте', 6),
  imperfect: [],
};

perfectVerbs.set(заплывать.name.text, заплывать);

export { заплывать };