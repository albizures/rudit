import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const высчитывать: PerfectVerb = {
  name: Word('высчитывать', 4),
  singular1stPerson: Word('высчитываю', 4),
  singular2ndPerson: Word('высчитываешь', 4),
  singular3rdPerson: Word('высчитывает', 4),
  plural1stPerson: Word('высчитываем', 4),
  plural2ndPerson: Word('высчитываете', 4),
  plural3rdPerson: Word('высчитывают', 4),
  masculinePast: Word('высчитывал', 4),
  femininePast: Word('высчитывала', 4),
  neuterPast: Word('высчитывало', 4),
  pluralPast: Word('высчитывали', 4),
  imperativeInformal: Word('высчитывай', 4),
  imperativeFormal: Word('высчитывайте', 4),
  imperfect: [],
};

perfectVerbs.set(высчитывать.name.text, высчитывать);

export { высчитывать };