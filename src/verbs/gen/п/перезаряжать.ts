import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перезаряжать: PerfectVerb = {
  name: Word('перезаряжать', 9),
  singular1stPerson: Word('перезаряжаю', 9),
  singular2ndPerson: Word('перезаряжаешь', 9),
  singular3rdPerson: Word('перезаряжает', 9),
  plural1stPerson: Word('перезаряжаем', 9),
  plural2ndPerson: Word('перезаряжаете', 9),
  plural3rdPerson: Word('перезаряжают', 9),
  masculinePast: Word('перезаряжал', 9),
  femininePast: Word('перезаряжала', 9),
  neuterPast: Word('перезаряжало', 9),
  pluralPast: Word('перезаряжали', 9),
  imperativeInformal: Word('перезаряжай', 9),
  imperativeFormal: Word('перезаряжайте', 9),
  imperfect: [],
};

perfectVerbs.set(перезаряжать.name.text, перезаряжать);

export { перезаряжать };