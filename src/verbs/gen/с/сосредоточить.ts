import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сосредоточить: PerfectVerb = {
  name: Word('сосредоточить', 8),
  singular1stPerson: Word('сосредоточу', 8),
  singular2ndPerson: Word('сосредоточишь', 8),
  singular3rdPerson: Word('сосредоточит', 8),
  plural1stPerson: Word('сосредоточим', 8),
  plural2ndPerson: Word('сосредоточите', 8),
  plural3rdPerson: Word('сосредоточат', 8),
  masculinePast: Word('сосредоточил', 8),
  femininePast: Word('сосредоточила', 8),
  neuterPast: Word('сосредоточило', 8),
  pluralPast: Word('сосредоточили', 8),
  imperativeInformal: Word('сосредоточь', 8),
  imperativeFormal: Word('сосредоточьте', 8),
  imperfect: [],
};

perfectVerbs.set(сосредоточить.name.text, сосредоточить);

export { сосредоточить };