import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отвести: PerfectVerb = {
  name: Word('отвести', 6),
  singular1stPerson: Word('отведу', 5),
  singular2ndPerson: Word('отведёшь', 5),
  singular3rdPerson: Word('отведёт', 5),
  plural1stPerson: Word('отведём', 5),
  plural2ndPerson: Word('отведёте', 5),
  plural3rdPerson: Word('отведут', 5),
  masculinePast: Word('отвёл', 3),
  femininePast: Word('отвела', 5),
  neuterPast: Word('отвело', 5),
  pluralPast: Word('отвели', 5),
  imperativeInformal: Word('отведи', 5),
  imperativeFormal: Word('отведите', 5),
  imperfect: ['отводить'],
};

perfectVerbs.set(отвести.name.text, отвести);

export { отвести };