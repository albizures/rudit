import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const набраться: PerfectVerb = {
  name: Word('набраться', 4),
  singular1stPerson: Word('наберусь', 5),
  singular2ndPerson: Word('наберёшься', 5),
  singular3rdPerson: Word('наберётся', 5),
  plural1stPerson: Word('наберёмся', 5),
  plural2ndPerson: Word('наберётесь', 5),
  plural3rdPerson: Word('наберутся', 5),
  masculinePast: Word('набрался', 4),
  femininePast: Word('набралась', 6),
  neuterPast: Word('набралось//набрало'сь', 4),
  pluralPast: Word('набрались//набрали'сь', 4),
  imperativeInformal: Word('наберись', 5),
  imperativeFormal: Word('наберитесь', 5),
  imperfect: [],
};

perfectVerbs.set(набраться.name.text, набраться);

export { набраться };