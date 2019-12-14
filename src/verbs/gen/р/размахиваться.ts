import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размахиваться: PerfectVerb = {
  name: Word('размахиваться', 4),
  singular1stPerson: Word('размахиваюсь', 4),
  singular2ndPerson: Word('размахиваешься', 4),
  singular3rdPerson: Word('размахивается', 4),
  plural1stPerson: Word('размахиваемся', 4),
  plural2ndPerson: Word('размахиваетесь', 4),
  plural3rdPerson: Word('размахиваются', 4),
  masculinePast: Word('размахивался', 4),
  femininePast: Word('размахивалась', 4),
  neuterPast: Word('размахивалось', 4),
  pluralPast: Word('размахивались', 4),
  imperativeInformal: Word('размахивайся', 4),
  imperativeFormal: Word('размахивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(размахиваться.name.text, размахиваться);

export { размахиваться };