import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перерубать: PerfectVerb = {
  name: Word('перерубать', 7),
  singular1stPerson: Word('перерубаю', 7),
  singular2ndPerson: Word('перерубаешь', 7),
  singular3rdPerson: Word('перерубает', 7),
  plural1stPerson: Word('перерубаем', 7),
  plural2ndPerson: Word('перерубаете', 7),
  plural3rdPerson: Word('перерубают', 7),
  masculinePast: Word('перерубал', 7),
  femininePast: Word('перерубала', 7),
  neuterPast: Word('перерубало', 7),
  pluralPast: Word('перерубали', 7),
  imperativeInformal: Word('перерубай', 7),
  imperativeFormal: Word('перерубайте', 7),
  imperfect: [],
};

perfectVerbs.set(перерубать.name.text, перерубать);

export { перерубать };