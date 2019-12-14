import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const короновать: PerfectVerb = {
  name: Word('короновать', 7),
  singular1stPerson: Word('короную', 5),
  singular2ndPerson: Word('коронуешь', 5),
  singular3rdPerson: Word('коронует', 5),
  plural1stPerson: Word('коронуем', 5),
  plural2ndPerson: Word('коронуете', 5),
  plural3rdPerson: Word('коронуют', 5),
  masculinePast: Word('короновал', 7),
  femininePast: Word('короновала', 7),
  neuterPast: Word('короновало', 7),
  pluralPast: Word('короновали', 7),
  imperativeInformal: Word('коронуй', 5),
  imperativeFormal: Word('коронуйте', 5),
  imperfect: [],
};

perfectVerbs.set(короновать.name.text, короновать);

export { короновать };