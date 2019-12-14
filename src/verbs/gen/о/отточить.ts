import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отточить: PerfectVerb = {
  name: Word('отточить', 5),
  singular1stPerson: Word('отточу', 5),
  singular2ndPerson: Word('отточишь', 3),
  singular3rdPerson: Word('отточит', 3),
  plural1stPerson: Word('отточим', 3),
  plural2ndPerson: Word('отточите', 3),
  plural3rdPerson: Word('отточат', 3),
  masculinePast: Word('отточил', 5),
  femininePast: Word('отточила', 5),
  neuterPast: Word('отточило', 5),
  pluralPast: Word('отточили', 5),
  imperativeInformal: Word('отточи', 5),
  imperativeFormal: Word('отточите', 5),
  imperfect: [],
};

perfectVerbs.set(отточить.name.text, отточить);

export { отточить };