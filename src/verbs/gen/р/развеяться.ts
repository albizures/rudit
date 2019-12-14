import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const развеяться: PerfectVerb = {
  name: Word('развеяться', 4),
  singular1stPerson: Word('развеюсь', 4),
  singular2ndPerson: Word('развеешься', 4),
  singular3rdPerson: Word('развеется', 4),
  plural1stPerson: Word('развеемся', 4),
  plural2ndPerson: Word('развеетесь', 4),
  plural3rdPerson: Word('развеются', 4),
  masculinePast: Word('развеялся', 4),
  femininePast: Word('развеялась', 4),
  neuterPast: Word('развеялось', 4),
  pluralPast: Word('развеялись', 4),
  imperativeInformal: Word('развейся', 4),
  imperativeFormal: Word('развейтесь', 4),
  imperfect: [],
};

perfectVerbs.set(развеяться.name.text, развеяться);

export { развеяться };