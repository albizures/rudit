import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const регистрировать: PerfectVerb = {
  name: Word('регистрировать', 7),
  singular1stPerson: Word('регистрирую', 7),
  singular2ndPerson: Word('регистрируешь', 7),
  singular3rdPerson: Word('регистрирует', 7),
  plural1stPerson: Word('регистрируем', 7),
  plural2ndPerson: Word('регистрируете', 7),
  plural3rdPerson: Word('регистрируют', 7),
  masculinePast: Word('регистрировал', 7),
  femininePast: Word('регистрировала', 7),
  neuterPast: Word('регистрировало', 7),
  pluralPast: Word('регистрировали', 7),
  imperativeInformal: Word('регистрируй', 7),
  imperativeFormal: Word('регистрируйте', 7),
  imperfect: [],
};

perfectVerbs.set(регистрировать.name.text, регистрировать);

export { регистрировать };