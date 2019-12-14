import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размежеваться: PerfectVerb = {
  name: Word('размежеваться', 8),
  singular1stPerson: Word('размежуюсь', 6),
  singular2ndPerson: Word('размежуешься', 6),
  singular3rdPerson: Word('размежуется', 6),
  plural1stPerson: Word('размежуемся', 6),
  plural2ndPerson: Word('размежуетесь', 6),
  plural3rdPerson: Word('размежуются', 6),
  masculinePast: Word('размежевался', 8),
  femininePast: Word('размежевалась', 8),
  neuterPast: Word('размежевалось', 8),
  pluralPast: Word('размежевались', 8),
  imperativeInformal: Word('размежуйся', 6),
  imperativeFormal: Word('размежуйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(размежеваться.name.text, размежеваться);

export { размежеваться };