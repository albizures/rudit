import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размещать: PerfectVerb = {
  name: Word('размещать', 6),
  singular1stPerson: Word('размещаю', 6),
  singular2ndPerson: Word('размещаешь', 6),
  singular3rdPerson: Word('размещает', 6),
  plural1stPerson: Word('размещаем', 6),
  plural2ndPerson: Word('размещаете', 6),
  plural3rdPerson: Word('размещают', 6),
  masculinePast: Word('размещал', 6),
  femininePast: Word('размещала', 6),
  neuterPast: Word('размещало', 6),
  pluralPast: Word('размещали', 6),
  imperativeInformal: Word('размещай', 6),
  imperativeFormal: Word('размещайте', 6),
  imperfect: [],
};

perfectVerbs.set(размещать.name.text, размещать);

export { размещать };