import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const преградить: PerfectVerb = {
  name: Word('преградить', 7),
  singular1stPerson: Word('прегражу', 7),
  singular2ndPerson: Word('преградишь', 7),
  singular3rdPerson: Word('преградит', 7),
  plural1stPerson: Word('преградим', 7),
  plural2ndPerson: Word('преградите', 7),
  plural3rdPerson: Word('преградят', 7),
  masculinePast: Word('преградил', 7),
  femininePast: Word('преградила', 7),
  neuterPast: Word('преградило', 7),
  pluralPast: Word('преградили', 7),
  imperativeInformal: Word('прегради', 7),
  imperativeFormal: Word('преградите', 7),
  imperfect: [],
};

perfectVerbs.set(преградить.name.text, преградить);

export { преградить };