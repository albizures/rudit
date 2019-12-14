import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кукситься: PerfectVerb = {
  name: Word('кукситься', 1),
  singular1stPerson: Word('кукшусь', 1),
  singular2ndPerson: Word('куксишься', 1),
  singular3rdPerson: Word('куксится', 1),
  plural1stPerson: Word('куксимся', 1),
  plural2ndPerson: Word('кукситесь', 1),
  plural3rdPerson: Word('куксятся', 1),
  masculinePast: Word('куксился', 1),
  femininePast: Word('куксилась', 1),
  neuterPast: Word('куксилось', 1),
  pluralPast: Word('куксились', 1),
  imperativeInformal: Word('куксись', 1),
  imperativeFormal: Word('кукситесь', 1),
  imperfect: [],
};

perfectVerbs.set(кукситься.name.text, кукситься);

export { кукситься };