import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переадресовывать: PerfectVerb = {
  name: Word('переадресовывать', 9),
  singular1stPerson: Word('переадресовываю', 9),
  singular2ndPerson: Word('переадресовываешь', 9),
  singular3rdPerson: Word('переадресовывает', 9),
  plural1stPerson: Word('переадресовываем', 9),
  plural2ndPerson: Word('переадресовываете', 9),
  plural3rdPerson: Word('переадресовывают', 9),
  masculinePast: Word('переадресовывал', 9),
  femininePast: Word('переадресовывала', 9),
  neuterPast: Word('переадресовывало', 9),
  pluralPast: Word('переадресовывали', 9),
  imperativeInformal: Word('переадресовывай', 9),
  imperativeFormal: Word('переадресовывайте', 9),
  imperfect: [],
};

perfectVerbs.set(переадресовывать.name.text, переадресовывать);

export { переадресовывать };