import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const долежать: PerfectVerb = {
  name: Word('долежать', 5),
  singular1stPerson: Word('долежу', 5),
  singular2ndPerson: Word('долежишь', 5),
  singular3rdPerson: Word('долежит', 5),
  plural1stPerson: Word('долежим', 5),
  plural2ndPerson: Word('долежите', 5),
  plural3rdPerson: Word('долежат', 5),
  masculinePast: Word('долежал', 5),
  femininePast: Word('долежала', 5),
  neuterPast: Word('долежало', 5),
  pluralPast: Word('долежали', 5),
  imperativeInformal: Word('долежи', 5),
  imperativeFormal: Word('долежите', 5),
  imperfect: [],
};

perfectVerbs.set(долежать.name.text, долежать);

export { долежать };