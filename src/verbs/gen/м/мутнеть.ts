import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мутнеть: PerfectVerb = {
  name: Word('мутнеть', 4),
  singular1stPerson: Word('мутнею', 4),
  singular2ndPerson: Word('мутнеешь', 4),
  singular3rdPerson: Word('мутнеет', 4),
  plural1stPerson: Word('мутнеем', 4),
  plural2ndPerson: Word('мутнеете', 4),
  plural3rdPerson: Word('мутнеют', 4),
  masculinePast: Word('мутнел', 4),
  femininePast: Word('мутнела', 4),
  neuterPast: Word('мутнело', 4),
  pluralPast: Word('мутнели', 4),
  imperativeInformal: Word('мутней', 4),
  imperativeFormal: Word('мутнейте', 4),
  imperfect: [],
};

perfectVerbs.set(мутнеть.name.text, мутнеть);

export { мутнеть };