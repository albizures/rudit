import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заигрывать: PerfectVerb = {
  name: Word('заигрывать', 2),
  singular1stPerson: Word('заигрываю', 2),
  singular2ndPerson: Word('заигрываешь', 2),
  singular3rdPerson: Word('заигрывает', 2),
  plural1stPerson: Word('заигрываем', 2),
  plural2ndPerson: Word('заигрываете', 2),
  plural3rdPerson: Word('заигрывают', 2),
  masculinePast: Word('заигрывал', 2),
  femininePast: Word('заигрывала', 2),
  neuterPast: Word('заигрывало', 2),
  pluralPast: Word('заигрывали', 2),
  imperativeInformal: Word('заигрывай', 2),
  imperativeFormal: Word('заигрывайте', 2),
  imperfect: [],
};

perfectVerbs.set(заигрывать.name.text, заигрывать);

export { заигрывать };