import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размалывать: PerfectVerb = {
  name: Word('размалывать', 4),
  singular1stPerson: Word('размалываю', 4),
  singular2ndPerson: Word('размалываешь', 4),
  singular3rdPerson: Word('размалывает', 4),
  plural1stPerson: Word('размалываем', 4),
  plural2ndPerson: Word('размалываете', 4),
  plural3rdPerson: Word('размалывают', 4),
  masculinePast: Word('размалывал', 4),
  femininePast: Word('размалывала', 4),
  neuterPast: Word('размалывало', 4),
  pluralPast: Word('размалывали', 4),
  imperativeInformal: Word('размалывай', 4),
  imperativeFormal: Word('размалывайте', 4),
  imperfect: [],
};

perfectVerbs.set(размалывать.name.text, размалывать);

export { размалывать };