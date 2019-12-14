import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возвращать: PerfectVerb = {
  name: Word('возвращать', 7),
  singular1stPerson: Word('возвращаю', 7),
  singular2ndPerson: Word('возвращаешь', 7),
  singular3rdPerson: Word('возвращает', 7),
  plural1stPerson: Word('возвращаем', 7),
  plural2ndPerson: Word('возвращаете', 7),
  plural3rdPerson: Word('возвращают', 7),
  masculinePast: Word('возвращал', 7),
  femininePast: Word('возвращала', 7),
  neuterPast: Word('возвращало', 7),
  pluralPast: Word('возвращали', 7),
  imperativeInformal: Word('возвращай', 7),
  imperativeFormal: Word('возвращайте', 7),
  imperfect: ['возвратить','вернуть'],
};

perfectVerbs.set(возвращать.name.text, возвращать);

export { возвращать };