import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вынести: PerfectVerb = {
  name: Word('вынести', 1),
  singular1stPerson: Word('вынесу', 1),
  singular2ndPerson: Word('вынесешь', 1),
  singular3rdPerson: Word('вынесет', 1),
  plural1stPerson: Word('вынесем', 1),
  plural2ndPerson: Word('вынесете', 1),
  plural3rdPerson: Word('вынесут', 1),
  masculinePast: Word('вынес', 1),
  femininePast: Word('вынесла', 1),
  neuterPast: Word('вынесло', 1),
  pluralPast: Word('вынесли', 1),
  imperativeInformal: Word('вынеси', 1),
  imperativeFormal: Word('вынесите', 1),
  imperfect: ['выносить'],
};

perfectVerbs.set(вынести.name.text, вынести);

export { вынести };