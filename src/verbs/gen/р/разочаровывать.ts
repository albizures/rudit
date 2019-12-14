import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разочаровывать: PerfectVerb = {
  name: Word('разочаровывать', 7),
  singular1stPerson: Word('разочаровываю', 7),
  singular2ndPerson: Word('разочаровываешь', 7),
  singular3rdPerson: Word('разочаровывает', 7),
  plural1stPerson: Word('разочаровываем', 7),
  plural2ndPerson: Word('разочаровываете', 7),
  plural3rdPerson: Word('разочаровывают', 7),
  masculinePast: Word('разочаровывал', 7),
  femininePast: Word('разочаровывала', 7),
  neuterPast: Word('разочаровывало', 7),
  pluralPast: Word('разочаровывали', 7),
  imperativeInformal: Word('разочаровывай', 7),
  imperativeFormal: Word('разочаровывайте', 7),
  imperfect: [],
};

perfectVerbs.set(разочаровывать.name.text, разочаровывать);

export { разочаровывать };