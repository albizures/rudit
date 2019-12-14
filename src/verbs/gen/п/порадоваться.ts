import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const порадоваться: PerfectVerb = {
  name: Word('порадоваться', 3),
  singular1stPerson: Word('порадуюсь', 3),
  singular2ndPerson: Word('порадуешься', 3),
  singular3rdPerson: Word('порадуется', 3),
  plural1stPerson: Word('порадуемся', 3),
  plural2ndPerson: Word('порадуетесь', 3),
  plural3rdPerson: Word('порадуются', 3),
  masculinePast: Word('порадовался', 3),
  femininePast: Word('порадовалась', 3),
  neuterPast: Word('порадовалось', 3),
  pluralPast: Word('порадовались', 3),
  imperativeInformal: Word('порадуйся', 3),
  imperativeFormal: Word('порадуйтесь', 3),
  imperfect: [],
};

perfectVerbs.set(порадоваться.name.text, порадоваться);

export { порадоваться };