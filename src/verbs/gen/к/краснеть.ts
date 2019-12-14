import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const краснеть: PerfectVerb = {
  name: Word('краснеть', 5),
  singular1stPerson: Word('краснею', 5),
  singular2ndPerson: Word('краснеешь', 5),
  singular3rdPerson: Word('краснеет', 5),
  plural1stPerson: Word('краснеем', 5),
  plural2ndPerson: Word('краснеете', 5),
  plural3rdPerson: Word('краснеют', 5),
  masculinePast: Word('краснел', 5),
  femininePast: Word('краснела', 5),
  neuterPast: Word('краснело', 5),
  pluralPast: Word('краснели', 5),
  imperativeInformal: Word('красней', 5),
  imperativeFormal: Word('краснейте', 5),
  imperfect: ['покраснеть'],
};

perfectVerbs.set(краснеть.name.text, краснеть);

export { краснеть };