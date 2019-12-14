import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выжечь: PerfectVerb = {
  name: Word('выжечь', 1),
  singular1stPerson: Word('выжгу', 1),
  singular2ndPerson: Word('выжжешь', 1),
  singular3rdPerson: Word('выжжет', 1),
  plural1stPerson: Word('выжжем', 1),
  plural2ndPerson: Word('выжжете', 1),
  plural3rdPerson: Word('выжгут', 1),
  masculinePast: Word('выжег', 1),
  femininePast: Word('выжгла', 1),
  neuterPast: Word('выжгло', 1),
  pluralPast: Word('выжгли', 1),
  imperativeInformal: Word('выжги', 1),
  imperativeFormal: Word('выжгите', 1),
  imperfect: ['выжигать'],
};

perfectVerbs.set(выжечь.name.text, выжечь);

export { выжечь };