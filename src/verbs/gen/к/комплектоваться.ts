import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const комплектоваться: PerfectVerb = {
  name: Word('комплектоваться', 10),
  singular1stPerson: Word('комплектуюсь', 8),
  singular2ndPerson: Word('комплектуешься', 8),
  singular3rdPerson: Word('комплектуется', 8),
  plural1stPerson: Word('комплектуемся', 8),
  plural2ndPerson: Word('комплектуетесь', 8),
  plural3rdPerson: Word('комплектуются', 8),
  masculinePast: Word('комплектовался', 10),
  femininePast: Word('комплектовалась', 10),
  neuterPast: Word('комплектовалось', 10),
  pluralPast: Word('комплектовались', 10),
  imperativeInformal: Word('комплектуйся', 8),
  imperativeFormal: Word('комплектуйтесь', 8),
  imperfect: [],
};

perfectVerbs.set(комплектоваться.name.text, комплектоваться);

export { комплектоваться };