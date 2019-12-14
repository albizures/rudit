import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прорисоваться: PerfectVerb = {
  name: Word('прорисоваться', 8),
  singular1stPerson: Word('прорисуюсь', 6),
  singular2ndPerson: Word('прорисуешься', 6),
  singular3rdPerson: Word('прорисуется', 6),
  plural1stPerson: Word('прорисуемся', 6),
  plural2ndPerson: Word('прорисуетесь', 6),
  plural3rdPerson: Word('прорисуются', 6),
  masculinePast: Word('прорисовался', 8),
  femininePast: Word('прорисовалась', 8),
  neuterPast: Word('прорисовалось', 8),
  pluralPast: Word('прорисовались', 8),
  imperativeInformal: Word('прорисуйся', 6),
  imperativeFormal: Word('прорисуйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(прорисоваться.name.text, прорисоваться);

export { прорисоваться };