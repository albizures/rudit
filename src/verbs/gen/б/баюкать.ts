import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const баюкать: PerfectVerb = {
  name: Word('баюкать', 2),
  singular1stPerson: Word('баюкаю', 2),
  singular2ndPerson: Word('баюкаешь', 2),
  singular3rdPerson: Word('баюкает', 2),
  plural1stPerson: Word('баюкаем', 2),
  plural2ndPerson: Word('баюкаете', 2),
  plural3rdPerson: Word('баюкают', 2),
  masculinePast: Word('баюкал', 2),
  femininePast: Word('баюкала', 2),
  neuterPast: Word('баюкало', 2),
  pluralPast: Word('баюкали', 2),
  imperativeInformal: Word('баюкай', 2),
  imperativeFormal: Word('баюкайте', 2),
  imperfect: ['убаюкать'],
};

perfectVerbs.set(баюкать.name.text, баюкать);

export { баюкать };