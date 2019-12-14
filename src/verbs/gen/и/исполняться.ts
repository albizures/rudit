import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исполняться: PerfectVerb = {
  name: Word('исполняться', 6),
  singular1stPerson: Word('исполняюсь', 6),
  singular2ndPerson: Word('исполняешься', 6),
  singular3rdPerson: Word('исполняется', 6),
  plural1stPerson: Word('исполняемся', 6),
  plural2ndPerson: Word('исполняетесь', 6),
  plural3rdPerson: Word('исполняются', 6),
  masculinePast: Word('исполнялся', 6),
  femininePast: Word('исполнялась', 6),
  neuterPast: Word('исполнялось', 6),
  pluralPast: Word('исполнялись', 6),
  imperativeInformal: Word('исполняйся', 6),
  imperativeFormal: Word('исполняйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(исполняться.name.text, исполняться);

export { исполняться };