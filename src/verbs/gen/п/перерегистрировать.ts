import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перерегистрировать: PerfectVerb = {
  name: Word('перерегистрировать', 11),
  singular1stPerson: Word('перерегистрирую', 11),
  singular2ndPerson: Word('перерегистрируешь', 11),
  singular3rdPerson: Word('перерегистрирует', 11),
  plural1stPerson: Word('перерегистрируем', 11),
  plural2ndPerson: Word('перерегистрируете', 11),
  plural3rdPerson: Word('перерегистрируют', 11),
  masculinePast: Word('перерегистрировал', 11),
  femininePast: Word('перерегистрировала', 11),
  neuterPast: Word('перерегистрировало', 11),
  pluralPast: Word('перерегистрировали', 11),
  imperativeInformal: Word('перерегистрируй', 11),
  imperativeFormal: Word('перерегистрируйте', 11),
  imperfect: [],
};

perfectVerbs.set(перерегистрировать.name.text, перерегистрировать);

export { перерегистрировать };