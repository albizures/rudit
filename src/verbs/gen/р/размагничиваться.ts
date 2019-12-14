import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размагничиваться: PerfectVerb = {
  name: Word('размагничиваться', 7),
  singular1stPerson: Word('размагничиваюсь', 7),
  singular2ndPerson: Word('размагничиваешься', 7),
  singular3rdPerson: Word('размагничивается', 7),
  plural1stPerson: Word('размагничиваемся', 7),
  plural2ndPerson: Word('размагничиваетесь', 7),
  plural3rdPerson: Word('размагничиваются', 7),
  masculinePast: Word('размагничивался', 7),
  femininePast: Word('размагничивалась', 7),
  neuterPast: Word('размагничивалось', 7),
  pluralPast: Word('размагничивались', 7),
  imperativeInformal: Word('размагничивайся', 7),
  imperativeFormal: Word('размагничивайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(размагничиваться.name.text, размагничиваться);

export { размагничиваться };