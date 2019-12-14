import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const передаться: PerfectVerb = {
  name: Word('передаться', 5),
  singular1stPerson: Word('передамся', 5),
  singular2ndPerson: Word('передашься', 5),
  singular3rdPerson: Word('передастся', 5),
  plural1stPerson: Word('передадимся', 7),
  plural2ndPerson: Word('передадитесь', 7),
  plural3rdPerson: Word('передадутся', 7),
  masculinePast: Word('передался', 5),
  femininePast: Word('передалась', 7),
  neuterPast: Word('передалось//передало'сь', 5),
  pluralPast: Word('передались//передали'сь', 5),
  imperativeInformal: Word('передайся', 5),
  imperativeFormal: Word('передайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(передаться.name.text, передаться);

export { передаться };