import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размякать: PerfectVerb = {
  name: Word('размякать', 6),
  singular1stPerson: Word('размякаю', 6),
  singular2ndPerson: Word('размякаешь', 6),
  singular3rdPerson: Word('размякает', 6),
  plural1stPerson: Word('размякаем', 6),
  plural2ndPerson: Word('размякаете', 6),
  plural3rdPerson: Word('размякают', 6),
  masculinePast: Word('размякал', 6),
  femininePast: Word('размякала', 6),
  neuterPast: Word('размякало', 6),
  pluralPast: Word('размякали', 6),
  imperativeInformal: Word('размякай', 6),
  imperativeFormal: Word('размякайте', 6),
  imperfect: [],
};

perfectVerbs.set(размякать.name.text, размякать);

export { размякать };