import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const морализировать: PerfectVerb = {
  name: Word('морализировать', 7),
  singular1stPerson: Word('морализирую', 7),
  singular2ndPerson: Word('морализируешь', 7),
  singular3rdPerson: Word('морализирует', 7),
  plural1stPerson: Word('морализируем', 7),
  plural2ndPerson: Word('морализируете', 7),
  plural3rdPerson: Word('морализируют', 7),
  masculinePast: Word('морализировал', 7),
  femininePast: Word('морализировала', 7),
  neuterPast: Word('морализировало', 7),
  pluralPast: Word('морализировали', 7),
  imperativeInformal: Word('морализируй', 7),
  imperativeFormal: Word('морализируйте', 7),
  imperfect: [],
};

perfectVerbs.set(морализировать.name.text, морализировать);

export { морализировать };