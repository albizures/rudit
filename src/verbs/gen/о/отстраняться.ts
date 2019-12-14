import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отстраняться: PerfectVerb = {
  name: Word('отстраняться', 7),
  singular1stPerson: Word('отстраняюсь', 7),
  singular2ndPerson: Word('отстраняешься', 7),
  singular3rdPerson: Word('отстраняется', 7),
  plural1stPerson: Word('отстраняемся', 7),
  plural2ndPerson: Word('отстраняетесь', 7),
  plural3rdPerson: Word('отстраняются', 7),
  masculinePast: Word('отстранялся', 7),
  femininePast: Word('отстранялась', 7),
  neuterPast: Word('отстранялось', 7),
  pluralPast: Word('отстранялись', 7),
  imperativeInformal: Word('отстраняйся', 7),
  imperativeFormal: Word('отстраняйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(отстраняться.name.text, отстраняться);

export { отстраняться };