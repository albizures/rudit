import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const адресовать: PerfectVerb = {
  name: Word('адресовать', 7),
  singular1stPerson: Word('адресую', 5),
  singular2ndPerson: Word('адресуешь', 5),
  singular3rdPerson: Word('адресует', 5),
  plural1stPerson: Word('адресуем', 5),
  plural2ndPerson: Word('адресуете', 5),
  plural3rdPerson: Word('адресуют', 5),
  masculinePast: Word('адресовал', 7),
  femininePast: Word('адресовала', 7),
  neuterPast: Word('адресовало', 7),
  pluralPast: Word('адресовали', 7),
  imperativeInformal: Word('адресуй', 5),
  imperativeFormal: Word('адресуйте', 5),
  imperfect: [],
};

perfectVerbs.set(адресовать.name.text, адресовать);

export { адресовать };