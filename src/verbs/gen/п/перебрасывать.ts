import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перебрасывать: PerfectVerb = {
  name: Word('перебрасывать', 6),
  singular1stPerson: Word('перебрасываю', 6),
  singular2ndPerson: Word('перебрасываешь', 6),
  singular3rdPerson: Word('перебрасывает', 6),
  plural1stPerson: Word('перебрасываем', 6),
  plural2ndPerson: Word('перебрасываете', 6),
  plural3rdPerson: Word('перебрасывают', 6),
  masculinePast: Word('перебрасывал', 6),
  femininePast: Word('перебрасывала', 6),
  neuterPast: Word('перебрасывало', 6),
  pluralPast: Word('перебрасывали', 6),
  imperativeInformal: Word('перебрасывай', 6),
  imperativeFormal: Word('перебрасывайте', 6),
  imperfect: [],
};

perfectVerbs.set(перебрасывать.name.text, перебрасывать);

export { перебрасывать };