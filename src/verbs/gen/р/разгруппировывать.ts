import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разгруппировывать: PerfectVerb = {
  name: Word('разгруппировывать', 10),
  singular1stPerson: Word('разгруппировываю', 10),
  singular2ndPerson: Word('разгруппировываешь', 10),
  singular3rdPerson: Word('разгруппировывает', 10),
  plural1stPerson: Word('разгруппировываем', 10),
  plural2ndPerson: Word('разгруппировываете', 10),
  plural3rdPerson: Word('разгруппировывают', 10),
  masculinePast: Word('разгруппировывал', 10),
  femininePast: Word('разгруппировывала', 10),
  neuterPast: Word('разгруппировывало', 10),
  pluralPast: Word('разгруппировывали', 10),
  imperativeInformal: Word('разгруппировывай', 10),
  imperativeFormal: Word('разгруппировывайте', 10),
  imperfect: [],
};

perfectVerbs.set(разгруппировывать.name.text, разгруппировывать);

export { разгруппировывать };