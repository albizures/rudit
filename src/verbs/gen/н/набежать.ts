import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const набежать: PerfectVerb = {
  name: Word('набежать', 5),
  singular1stPerson: Word('набегу', 5),
  singular2ndPerson: Word('набежишь', 5),
  singular3rdPerson: Word('набежит', 5),
  plural1stPerson: Word('набежим', 5),
  plural2ndPerson: Word('набежите', 5),
  plural3rdPerson: Word('набегут', 5),
  masculinePast: Word('набежал', 5),
  femininePast: Word('набежала', 5),
  neuterPast: Word('набежало', 5),
  pluralPast: Word('набежали', 5),
  imperativeInformal: Word('набеги', 5),
  imperativeFormal: Word('набегите', 5),
  imperfect: [],
};

perfectVerbs.set(набежать.name.text, набежать);

export { набежать };