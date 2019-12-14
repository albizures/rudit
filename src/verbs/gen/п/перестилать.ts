import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перестилать: PerfectVerb = {
  name: Word('перестилать', 8),
  singular1stPerson: Word('перестилаю', 8),
  singular2ndPerson: Word('перестилаешь', 8),
  singular3rdPerson: Word('перестилает', 8),
  plural1stPerson: Word('перестилаем', 8),
  plural2ndPerson: Word('перестилаете', 8),
  plural3rdPerson: Word('перестилают', 8),
  masculinePast: Word('перестилал', 8),
  femininePast: Word('перестилала', 8),
  neuterPast: Word('перестилало', 8),
  pluralPast: Word('перестилали', 8),
  imperativeInformal: Word('перестилай', 8),
  imperativeFormal: Word('перестилайте', 8),
  imperfect: [],
};

perfectVerbs.set(перестилать.name.text, перестилать);

export { перестилать };