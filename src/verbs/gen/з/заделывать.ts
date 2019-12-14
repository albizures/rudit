import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заделывать: PerfectVerb = {
  name: Word('заделывать', 3),
  singular1stPerson: Word('заделываю', 3),
  singular2ndPerson: Word('заделываешь', 3),
  singular3rdPerson: Word('заделывает', 3),
  plural1stPerson: Word('заделываем', 3),
  plural2ndPerson: Word('заделываете', 3),
  plural3rdPerson: Word('заделывают', 3),
  masculinePast: Word('заделывал', 3),
  femininePast: Word('заделывала', 3),
  neuterPast: Word('заделывало', 3),
  pluralPast: Word('заделывали', 3),
  imperativeInformal: Word('заделывай', 3),
  imperativeFormal: Word('заделывайте', 3),
  imperfect: [],
};

perfectVerbs.set(заделывать.name.text, заделывать);

export { заделывать };