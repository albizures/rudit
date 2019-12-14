import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const высасывать: PerfectVerb = {
  name: Word('высасывать', 3),
  singular1stPerson: Word('высасываю', 3),
  singular2ndPerson: Word('высасываешь', 3),
  singular3rdPerson: Word('высасывает', 3),
  plural1stPerson: Word('высасываем', 3),
  plural2ndPerson: Word('высасываете', 3),
  plural3rdPerson: Word('высасывают', 3),
  masculinePast: Word('высасывал', 3),
  femininePast: Word('высасывала', 3),
  neuterPast: Word('высасывало', 3),
  pluralPast: Word('высасывали', 3),
  imperativeInformal: Word('высасывай', 3),
  imperativeFormal: Word('высасывайте', 3),
  imperfect: [],
};

perfectVerbs.set(высасывать.name.text, высасывать);

export { высасывать };