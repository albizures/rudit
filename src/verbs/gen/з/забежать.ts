import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const забежать: PerfectVerb = {
  name: Word('забежать', 5),
  singular1stPerson: Word('забегу', 5),
  singular2ndPerson: Word('забежишь', 5),
  singular3rdPerson: Word('забежит', 5),
  plural1stPerson: Word('забежим', 5),
  plural2ndPerson: Word('забежите', 5),
  plural3rdPerson: Word('забегут', 5),
  masculinePast: Word('забежал', 5),
  femininePast: Word('забежала', 5),
  neuterPast: Word('забежало', 5),
  pluralPast: Word('забежали', 5),
  imperativeInformal: Word('забеги', 5),
  imperativeFormal: Word('забегите', 5),
  imperfect: [],
};

perfectVerbs.set(забежать.name.text, забежать);

export { забежать };