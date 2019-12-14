import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утучняться: PerfectVerb = {
  name: Word('утучняться', 5),
  singular1stPerson: Word('утучняюсь', 5),
  singular2ndPerson: Word('утучняешься', 5),
  singular3rdPerson: Word('утучняется', 5),
  plural1stPerson: Word('утучняемся', 5),
  plural2ndPerson: Word('утучняетесь', 5),
  plural3rdPerson: Word('утучняются', 5),
  masculinePast: Word('утучнялся', 5),
  femininePast: Word('утучнялась', 5),
  neuterPast: Word('утучнялось', 5),
  pluralPast: Word('утучнялись', 5),
  imperativeInformal: Word('утучняйся', 5),
  imperativeFormal: Word('утучняйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(утучняться.name.text, утучняться);

export { утучняться };