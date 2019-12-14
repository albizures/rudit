import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const реконструироваться: PerfectVerb = {
  name: Word('реконструироваться', 9),
  singular1stPerson: Word('реконструируюсь', 9),
  singular2ndPerson: Word('реконструируешься', 9),
  singular3rdPerson: Word('реконструируется', 9),
  plural1stPerson: Word('реконструируемся', 9),
  plural2ndPerson: Word('реконструируетесь', 9),
  plural3rdPerson: Word('реконструируются', 9),
  masculinePast: Word('реконструировался', 9),
  femininePast: Word('реконструировалась', 9),
  neuterPast: Word('реконструировалось', 9),
  pluralPast: Word('реконструировались', 9),
  imperativeInformal: Word('реконструируйся', 9),
  imperativeFormal: Word('реконструируйтесь', 9),
  imperfect: [],
};

perfectVerbs.set(реконструироваться.name.text, реконструироваться);

export { реконструироваться };