import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уйти: PerfectVerb = {
  name: Word('уйти', 3),
  singular1stPerson: Word('уйду', 3),
  singular2ndPerson: Word('уйдёшь', 3),
  singular3rdPerson: Word('уйдёт', 3),
  plural1stPerson: Word('уйдём', 3),
  plural2ndPerson: Word('уйдёте', 3),
  plural3rdPerson: Word('уйдут', 3),
  masculinePast: Word('ушёл', 2),
  femininePast: Word('ушла', 3),
  neuterPast: Word('ушло', 3),
  pluralPast: Word('ушли', 3),
  imperativeInformal: Word('уйди', 3),
  imperativeFormal: Word('уйдите', 3),
  imperfect: ['уходить'],
};

perfectVerbs.set(уйти.name.text, уйти);

export { уйти };