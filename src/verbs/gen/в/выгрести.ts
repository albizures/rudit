import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выгрести: PerfectVerb = {
  name: Word('выгрести', 1),
  singular1stPerson: Word('выгребу', 1),
  singular2ndPerson: Word('выгребешь', 1),
  singular3rdPerson: Word('выгребет', 1),
  plural1stPerson: Word('выгребем', 1),
  plural2ndPerson: Word('выгребете', 1),
  plural3rdPerson: Word('выгребут', 1),
  masculinePast: Word('выгреб', 1),
  femininePast: Word('выгребла', 1),
  neuterPast: Word('выгребло', 1),
  pluralPast: Word('выгребли', 1),
  imperativeInformal: Word('выгреби', 1),
  imperativeFormal: Word('выгребите', 1),
  imperfect: [],
};

perfectVerbs.set(выгрести.name.text, выгрести);

export { выгрести };