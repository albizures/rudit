import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нормализоваться: PerfectVerb = {
  name: Word('нормализоваться', 10),
  singular1stPerson: Word('нормализуюсь', 8),
  singular2ndPerson: Word('нормализуешься', 8),
  singular3rdPerson: Word('нормализуется', 8),
  plural1stPerson: Word('нормализуемся', 8),
  plural2ndPerson: Word('нормализуетесь', 8),
  plural3rdPerson: Word('нормализуются', 8),
  masculinePast: Word('нормализовался', 10),
  femininePast: Word('нормализовалась', 10),
  neuterPast: Word('нормализовалось', 10),
  pluralPast: Word('нормализовались', 10),
  imperativeInformal: Word('нормализуйся', 8),
  imperativeFormal: Word('нормализуйтесь', 8),
  imperfect: [],
};

perfectVerbs.set(нормализоваться.name.text, нормализоваться);

export { нормализоваться };