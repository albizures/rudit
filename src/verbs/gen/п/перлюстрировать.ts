import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перлюстрировать: PerfectVerb = {
  name: Word('перлюстрировать', 8),
  singular1stPerson: Word('перлюстрирую', 8),
  singular2ndPerson: Word('перлюстрируешь', 8),
  singular3rdPerson: Word('перлюстрирует', 8),
  plural1stPerson: Word('перлюстрируем', 8),
  plural2ndPerson: Word('перлюстрируете', 8),
  plural3rdPerson: Word('перлюстрируют', 8),
  masculinePast: Word('перлюстрировал', 8),
  femininePast: Word('перлюстрировала', 8),
  neuterPast: Word('перлюстрировало', 8),
  pluralPast: Word('перлюстрировали', 8),
  imperativeInformal: Word('перлюстрируй', 8),
  imperativeFormal: Word('перлюстрируйте', 8),
  imperfect: [],
};

perfectVerbs.set(перлюстрировать.name.text, перлюстрировать);

export { перлюстрировать };