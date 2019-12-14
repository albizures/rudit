import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задаться: PerfectVerb = {
  name: Word('задаться', 3),
  singular1stPerson: Word('задамся', 3),
  singular2ndPerson: Word('задашься', 3),
  singular3rdPerson: Word('задастся', 3),
  plural1stPerson: Word('зададимся', 5),
  plural2ndPerson: Word('зададитесь', 5),
  plural3rdPerson: Word('зададутся', 5),
  masculinePast: Word('задался', 3),
  femininePast: Word('задалась', 5),
  neuterPast: Word('задалось//задало'сь', 3),
  pluralPast: Word('задались//задали'сь', 3),
  imperativeInformal: Word('задайся', 3),
  imperativeFormal: Word('задайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(задаться.name.text, задаться);

export { задаться };