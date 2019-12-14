import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const фыркать: PerfectVerb = {
  name: Word('фыркать', 1),
  singular1stPerson: Word('фыркаю', 1),
  singular2ndPerson: Word('фыркаешь', 1),
  singular3rdPerson: Word('фыркает', 1),
  plural1stPerson: Word('фыркаем', 1),
  plural2ndPerson: Word('фыркаете', 1),
  plural3rdPerson: Word('фыркают', 1),
  masculinePast: Word('фыркал', 1),
  femininePast: Word('фыркала', 1),
  neuterPast: Word('фыркало', 1),
  pluralPast: Word('фыркали', 1),
  imperativeInformal: Word('фыркай', 1),
  imperativeFormal: Word('фыркайте', 1),
  imperfect: ['фыркнуть'],
};

perfectVerbs.set(фыркать.name.text, фыркать);

export { фыркать };