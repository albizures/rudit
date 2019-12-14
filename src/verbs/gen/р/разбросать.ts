import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разбросать: PerfectVerb = {
  name: Word('разбросать', 7),
  singular1stPerson: Word('разбросаю', 7),
  singular2ndPerson: Word('разбросаешь', 7),
  singular3rdPerson: Word('разбросает', 7),
  plural1stPerson: Word('разбросаем', 7),
  plural2ndPerson: Word('разбросаете', 7),
  plural3rdPerson: Word('разбросают', 7),
  masculinePast: Word('разбросал', 7),
  femininePast: Word('разбросала', 7),
  neuterPast: Word('разбросало', 7),
  pluralPast: Word('разбросали', 7),
  imperativeInformal: Word('разбросай', 7),
  imperativeFormal: Word('разбросайте', 7),
  imperfect: ['разбрасывать'],
};

perfectVerbs.set(разбросать.name.text, разбросать);

export { разбросать };