import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наточить: PerfectVerb = {
  name: Word('наточить', 5),
  singular1stPerson: Word('наточу', 5),
  singular2ndPerson: Word('наточишь', 3),
  singular3rdPerson: Word('наточит', 3),
  plural1stPerson: Word('наточим', 3),
  plural2ndPerson: Word('наточите', 3),
  plural3rdPerson: Word('наточат', 3),
  masculinePast: Word('наточил', 5),
  femininePast: Word('наточила', 5),
  neuterPast: Word('наточило', 5),
  pluralPast: Word('наточили', 5),
  imperativeInformal: Word('наточи', 5),
  imperativeFormal: Word('наточите', 5),
  imperfect: [],
};

perfectVerbs.set(наточить.name.text, наточить);

export { наточить };