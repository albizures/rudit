import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размерять: PerfectVerb = {
  name: Word('размерять', 6),
  singular1stPerson: Word('размеряю', 6),
  singular2ndPerson: Word('размеряешь', 6),
  singular3rdPerson: Word('размеряет', 6),
  plural1stPerson: Word('размеряем', 6),
  plural2ndPerson: Word('размеряете', 6),
  plural3rdPerson: Word('размеряют', 6),
  masculinePast: Word('размерял', 6),
  femininePast: Word('размеряла', 6),
  neuterPast: Word('размеряло', 6),
  pluralPast: Word('размеряли', 6),
  imperativeInformal: Word('размеряй', 6),
  imperativeFormal: Word('размеряйте', 6),
  imperfect: [],
};

perfectVerbs.set(размерять.name.text, размерять);

export { размерять };