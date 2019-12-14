import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перезаключать: PerfectVerb = {
  name: Word('перезаключать', 10),
  singular1stPerson: Word('перезаключаю', 10),
  singular2ndPerson: Word('перезаключаешь', 10),
  singular3rdPerson: Word('перезаключает', 10),
  plural1stPerson: Word('перезаключаем', 10),
  plural2ndPerson: Word('перезаключаете', 10),
  plural3rdPerson: Word('перезаключают', 10),
  masculinePast: Word('перезаключал', 10),
  femininePast: Word('перезаключала', 10),
  neuterPast: Word('перезаключало', 10),
  pluralPast: Word('перезаключали', 10),
  imperativeInformal: Word('перезаключай', 10),
  imperativeFormal: Word('перезаключайте', 10),
  imperfect: [],
};

perfectVerbs.set(перезаключать.name.text, перезаключать);

export { перезаключать };