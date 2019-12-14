import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нести: PerfectVerb = {
  name: Word('нести', 4),
  singular1stPerson: Word('несу', 3),
  singular2ndPerson: Word('несёшь', 3),
  singular3rdPerson: Word('несёт', 3),
  plural1stPerson: Word('несём', 3),
  plural2ndPerson: Word('несёте', 3),
  plural3rdPerson: Word('несут', 3),
  masculinePast: Word('нёс', 1),
  femininePast: Word('несла', 4),
  neuterPast: Word('несло', 4),
  pluralPast: Word('несли', 4),
  imperativeInformal: Word('неси', 3),
  imperativeFormal: Word('несите', 3),
  imperfect: ['понести'],
};

perfectVerbs.set(нести.name.text, нести);

export { нести };