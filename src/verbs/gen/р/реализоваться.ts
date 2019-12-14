import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const реализоваться: PerfectVerb = {
  name: Word('реализоваться', 8),
  singular1stPerson: Word('реализуюсь', 6),
  singular2ndPerson: Word('реализуешься', 6),
  singular3rdPerson: Word('реализуется', 6),
  plural1stPerson: Word('реализуемся', 6),
  plural2ndPerson: Word('реализуетесь', 6),
  plural3rdPerson: Word('реализуются', 6),
  masculinePast: Word('реализовался', 8),
  femininePast: Word('реализовалась', 8),
  neuterPast: Word('реализовалось', 8),
  pluralPast: Word('реализовались', 8),
  imperativeInformal: Word('реализуйся', 6),
  imperativeFormal: Word('реализуйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(реализоваться.name.text, реализоваться);

export { реализоваться };