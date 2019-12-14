import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const побежать: PerfectVerb = {
  name: Word('побежать', 5),
  singular1stPerson: Word('побегу', 5),
  singular2ndPerson: Word('побежишь', 5),
  singular3rdPerson: Word('побежит', 5),
  plural1stPerson: Word('побежим', 5),
  plural2ndPerson: Word('побежите', 5),
  plural3rdPerson: Word('побегут', 5),
  masculinePast: Word('побежал', 5),
  femininePast: Word('побежала', 5),
  neuterPast: Word('побежало', 5),
  pluralPast: Word('побежали', 5),
  imperativeInformal: Word('побеги', 5),
  imperativeFormal: Word('побегите', 5),
  imperfect: ['бежать'],
};

perfectVerbs.set(побежать.name.text, побежать);

export { побежать };