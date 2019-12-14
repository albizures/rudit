import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размешиваться: PerfectVerb = {
  name: Word('размешиваться', 4),
  singular1stPerson: Word('размешиваюсь', 4),
  singular2ndPerson: Word('размешиваешься', 4),
  singular3rdPerson: Word('размешивается', 4),
  plural1stPerson: Word('размешиваемся', 4),
  plural2ndPerson: Word('размешиваетесь', 4),
  plural3rdPerson: Word('размешиваются', 4),
  masculinePast: Word('размешивался', 4),
  femininePast: Word('размешивалась', 4),
  neuterPast: Word('размешивалось', 4),
  pluralPast: Word('размешивались', 4),
  imperativeInformal: Word('размешивайся', 4),
  imperativeFormal: Word('размешивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(размешиваться.name.text, размешиваться);

export { размешиваться };