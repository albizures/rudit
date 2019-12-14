import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вознаградить: PerfectVerb = {
  name: Word('вознаградить', 9),
  singular1stPerson: Word('вознагражу', 9),
  singular2ndPerson: Word('вознаградишь', 9),
  singular3rdPerson: Word('вознаградит', 9),
  plural1stPerson: Word('вознаградим', 9),
  plural2ndPerson: Word('вознаградите', 9),
  plural3rdPerson: Word('вознаградят', 9),
  masculinePast: Word('вознаградил', 9),
  femininePast: Word('вознаградила', 9),
  neuterPast: Word('вознаградило', 9),
  pluralPast: Word('вознаградили', 9),
  imperativeInformal: Word('вознагради', 9),
  imperativeFormal: Word('вознаградите', 9),
  imperfect: [],
};

perfectVerbs.set(вознаградить.name.text, вознаградить);

export { вознаградить };