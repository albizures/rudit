import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отняться: PerfectVerb = {
  name: Word('отняться', 3),
  singular1stPerson: Word('отнимусь', 5),
  singular2ndPerson: Word('отнимешься', 3),
  singular3rdPerson: Word('отнимется', 3),
  plural1stPerson: Word('отнимемся', 3),
  plural2ndPerson: Word('отниметесь', 3),
  plural3rdPerson: Word('отнимутся', 3),
  masculinePast: Word('отнялся', 3),
  femininePast: Word('отнялась', 5),
  neuterPast: Word('отнялось//отняло'сь', 3),
  pluralPast: Word('отнялись//отняли'сь', 3),
  imperativeInformal: Word('отнимись', 5),
  imperativeFormal: Word('отнимитесь', 5),
  imperfect: [],
};

perfectVerbs.set(отняться.name.text, отняться);

export { отняться };