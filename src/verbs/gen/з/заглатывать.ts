import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заглатывать: PerfectVerb = {
  name: Word('заглатывать', 4),
  singular1stPerson: Word('заглатываю', 4),
  singular2ndPerson: Word('заглатываешь', 4),
  singular3rdPerson: Word('заглатывает', 4),
  plural1stPerson: Word('заглатываем', 4),
  plural2ndPerson: Word('заглатываете', 4),
  plural3rdPerson: Word('заглатывают', 4),
  masculinePast: Word('заглатывал', 4),
  femininePast: Word('заглатывала', 4),
  neuterPast: Word('заглатывало', 4),
  pluralPast: Word('заглатывали', 4),
  imperativeInformal: Word('заглатывай', 4),
  imperativeFormal: Word('заглатывайте', 4),
  imperfect: [],
};

perfectVerbs.set(заглатывать.name.text, заглатывать);

export { заглатывать };