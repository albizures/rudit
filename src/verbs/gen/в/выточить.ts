import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выточить: PerfectVerb = {
  name: Word('выточить', 1),
  singular1stPerson: Word('выточу', 1),
  singular2ndPerson: Word('выточишь', 1),
  singular3rdPerson: Word('выточит', 1),
  plural1stPerson: Word('выточим', 1),
  plural2ndPerson: Word('выточите', 1),
  plural3rdPerson: Word('выточат', 1),
  masculinePast: Word('выточил', 1),
  femininePast: Word('выточила', 1),
  neuterPast: Word('выточило', 1),
  pluralPast: Word('выточили', 1),
  imperativeInformal: Word('выточи', 1),
  imperativeFormal: Word('выточите', 1),
  imperfect: [],
};

perfectVerbs.set(выточить.name.text, выточить);

export { выточить };