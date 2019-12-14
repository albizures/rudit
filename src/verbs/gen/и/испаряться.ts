import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const испаряться: PerfectVerb = {
  name: Word('испаряться', 5),
  singular1stPerson: Word('испаряюсь', 5),
  singular2ndPerson: Word('испаряешься', 5),
  singular3rdPerson: Word('испаряется', 5),
  plural1stPerson: Word('испаряемся', 5),
  plural2ndPerson: Word('испаряетесь', 5),
  plural3rdPerson: Word('испаряются', 5),
  masculinePast: Word('испарялся', 5),
  femininePast: Word('испарялась', 5),
  neuterPast: Word('испарялось', 5),
  pluralPast: Word('испарялись', 5),
  imperativeInformal: Word('испаряйся', 5),
  imperativeFormal: Word('испаряйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(испаряться.name.text, испаряться);

export { испаряться };