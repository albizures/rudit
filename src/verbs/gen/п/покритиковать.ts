import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покритиковать: PerfectVerb = {
  name: Word('покритиковать', 10),
  singular1stPerson: Word('покритикую', 8),
  singular2ndPerson: Word('покритикуешь', 8),
  singular3rdPerson: Word('покритикует', 8),
  plural1stPerson: Word('покритикуем', 8),
  plural2ndPerson: Word('покритикуете', 8),
  plural3rdPerson: Word('покритикуют', 8),
  masculinePast: Word('покритиковал', 10),
  femininePast: Word('покритиковала', 10),
  neuterPast: Word('покритиковало', 10),
  pluralPast: Word('покритиковали', 10),
  imperativeInformal: Word('покритикуй', 8),
  imperativeFormal: Word('покритикуйте', 8),
  imperfect: [],
};

perfectVerbs.set(покритиковать.name.text, покритиковать);

export { покритиковать };