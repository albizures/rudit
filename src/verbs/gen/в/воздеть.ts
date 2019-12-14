import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воздеть: PerfectVerb = {
  name: Word('воздеть', 4),
  singular1stPerson: Word('воздену', 4),
  singular2ndPerson: Word('возденешь', 4),
  singular3rdPerson: Word('возденет', 4),
  plural1stPerson: Word('возденем', 4),
  plural2ndPerson: Word('возденете', 4),
  plural3rdPerson: Word('возденут', 4),
  masculinePast: Word('воздел', 4),
  femininePast: Word('воздела', 4),
  neuterPast: Word('воздело', 4),
  pluralPast: Word('воздели', 4),
  imperativeInformal: Word('воздень', 4),
  imperativeFormal: Word('возденьте', 4),
  imperfect: [],
};

perfectVerbs.set(воздеть.name.text, воздеть);

export { воздеть };