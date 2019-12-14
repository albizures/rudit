import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размалевать: PerfectVerb = {
  name: Word('размалевать', 8),
  singular1stPerson: Word('размалюю', 6),
  singular2ndPerson: Word('размалюешь', 6),
  singular3rdPerson: Word('размалюет', 6),
  plural1stPerson: Word('размалюем', 6),
  plural2ndPerson: Word('размалюете', 6),
  plural3rdPerson: Word('размалюют', 6),
  masculinePast: Word('размалевал', 8),
  femininePast: Word('размалевала', 8),
  neuterPast: Word('размалевало', 8),
  pluralPast: Word('размалевали', 8),
  imperativeInformal: Word('размалюй', 6),
  imperativeFormal: Word('размалюйте', 6),
  imperfect: [],
};

perfectVerbs.set(размалевать.name.text, размалевать);

export { размалевать };