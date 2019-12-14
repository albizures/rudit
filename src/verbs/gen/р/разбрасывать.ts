import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разбрасывать: PerfectVerb = {
  name: Word('разбрасывать', 5),
  singular1stPerson: Word('разбрасываю', 5),
  singular2ndPerson: Word('разбрасываешь', 5),
  singular3rdPerson: Word('разбрасывает', 5),
  plural1stPerson: Word('разбрасываем', 5),
  plural2ndPerson: Word('разбрасываете', 5),
  plural3rdPerson: Word('разбрасывают', 5),
  masculinePast: Word('разбрасывал', 5),
  femininePast: Word('разбрасывала', 5),
  neuterPast: Word('разбрасывало', 5),
  pluralPast: Word('разбрасывали', 5),
  imperativeInformal: Word('разбрасывай', 5),
  imperativeFormal: Word('разбрасывайте', 5),
  imperfect: ['разбросать'],
};

perfectVerbs.set(разбрасывать.name.text, разбрасывать);

export { разбрасывать };