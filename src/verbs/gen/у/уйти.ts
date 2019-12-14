import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уйти: PerfectVerb = {
  name: Word('уйти', 3),
  singular1stPerson: Word('уйду', 3),
  singular2ndPerson: Word('уйдёшь', 1),
  singular3rdPerson: Word('уйдёт', 1),
  plural1stPerson: Word('уйдём', 1),
  plural2ndPerson: Word('уйдёте', 5),
  plural3rdPerson: Word('уйдут', 3),
  masculinePast: Word('ушёл', 0),
  femininePast: Word('ушла', 3),
  neuterPast: Word('ушло', 3),
  pluralPast: Word('ушли', 3),
  imperativeInformal: Word('уйди', 3),
  imperativeFormal: Word('уйдите', 3),
  imperfect: ['уходить'],
};

perfectVerbs.set(уйти.name.text, уйти);

export { уйти };