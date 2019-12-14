import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const локализоваться: PerfectVerb = {
  name: Word('локализоваться', 9),
  singular1stPerson: Word('локализуюсь', 7),
  singular2ndPerson: Word('локализуешься', 7),
  singular3rdPerson: Word('локализуется', 7),
  plural1stPerson: Word('локализуемся', 7),
  plural2ndPerson: Word('локализуетесь', 7),
  plural3rdPerson: Word('локализуются', 7),
  masculinePast: Word('локализовался', 9),
  femininePast: Word('локализовалась', 9),
  neuterPast: Word('локализовалось', 9),
  pluralPast: Word('локализовались', 9),
  imperativeInformal: Word('локализуйся', 7),
  imperativeFormal: Word('локализуйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(локализоваться.name.text, локализоваться);

export { локализоваться };