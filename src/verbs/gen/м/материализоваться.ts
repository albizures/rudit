import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const материализоваться: PerfectVerb = {
  name: Word('материализоваться', 12),
  singular1stPerson: Word('материализуюсь', 10),
  singular2ndPerson: Word('материализуешься', 10),
  singular3rdPerson: Word('материализуется', 10),
  plural1stPerson: Word('материализуемся', 10),
  plural2ndPerson: Word('материализуетесь', 10),
  plural3rdPerson: Word('материализуются', 10),
  masculinePast: Word('материализовался', 12),
  femininePast: Word('материализовалась', 12),
  neuterPast: Word('материализовалось', 12),
  pluralPast: Word('материализовались', 12),
  imperativeInformal: Word('материализуйся', 10),
  imperativeFormal: Word('материализуйтесь', 10),
  imperfect: [],
};

perfectVerbs.set(материализоваться.name.text, материализоваться);

export { материализоваться };