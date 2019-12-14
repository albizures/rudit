import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покрасоваться: PerfectVerb = {
  name: Word('покрасоваться', 8),
  singular1stPerson: Word('покрасуюсь', 6),
  singular2ndPerson: Word('покрасуешься', 6),
  singular3rdPerson: Word('покрасуется', 6),
  plural1stPerson: Word('покрасуемся', 6),
  plural2ndPerson: Word('покрасуетесь', 6),
  plural3rdPerson: Word('покрасуются', 6),
  masculinePast: Word('покрасовался', 8),
  femininePast: Word('покрасовалась', 8),
  neuterPast: Word('покрасовалось', 8),
  pluralPast: Word('покрасовались', 8),
  imperativeInformal: Word('покрасуйся', 6),
  imperativeFormal: Word('покрасуйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(покрасоваться.name.text, покрасоваться);

export { покрасоваться };