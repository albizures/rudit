import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выбежать: PerfectVerb = {
  name: Word('выбежать', 1),
  singular1stPerson: Word('выбегу', 1),
  singular2ndPerson: Word('выбежишь', 1),
  singular3rdPerson: Word('выбежит', 1),
  plural1stPerson: Word('выбежим', 1),
  plural2ndPerson: Word('выбежите', 1),
  plural3rdPerson: Word('выбегут', 1),
  masculinePast: Word('выбежал', 1),
  femininePast: Word('выбежала', 1),
  neuterPast: Word('выбежало', 1),
  pluralPast: Word('выбежали', 1),
  imperativeInformal: Word('выбеги', 1),
  imperativeFormal: Word('выбегите', 1),
  imperfect: ['выбегать'],
};

perfectVerbs.set(выбежать.name.text, выбежать);

export { выбежать };