import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размножать: PerfectVerb = {
  name: Word('размножать', 7),
  singular1stPerson: Word('размножаю', 7),
  singular2ndPerson: Word('размножаешь', 7),
  singular3rdPerson: Word('размножает', 7),
  plural1stPerson: Word('размножаем', 7),
  plural2ndPerson: Word('размножаете', 7),
  plural3rdPerson: Word('размножают', 7),
  masculinePast: Word('размножал', 7),
  femininePast: Word('размножала', 7),
  neuterPast: Word('размножало', 7),
  pluralPast: Word('размножали', 7),
  imperativeInformal: Word('размножай', 7),
  imperativeFormal: Word('размножайте', 7),
  imperfect: [],
};

perfectVerbs.set(размножать.name.text, размножать);

export { размножать };