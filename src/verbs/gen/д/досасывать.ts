import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const досасывать: PerfectVerb = {
  name: Word('досасывать', 3),
  singular1stPerson: Word('досасываю', 3),
  singular2ndPerson: Word('досасываешь', 3),
  singular3rdPerson: Word('досасывает', 3),
  plural1stPerson: Word('досасываем', 3),
  plural2ndPerson: Word('досасываете', 3),
  plural3rdPerson: Word('досасывают', 3),
  masculinePast: Word('досасывал', 3),
  femininePast: Word('досасывала', 3),
  neuterPast: Word('досасывало', 3),
  pluralPast: Word('досасывали', 3),
  imperativeInformal: Word('досасывай', 3),
  imperativeFormal: Word('досасывайте', 3),
  imperfect: [],
};

perfectVerbs.set(досасывать.name.text, досасывать);

export { досасывать };