import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вступить: PerfectVerb = {
  name: Word('вступить', 5),
  singular1stPerson: Word('вступлю', 6),
  singular2ndPerson: Word('вступишь', 3),
  singular3rdPerson: Word('вступит', 3),
  plural1stPerson: Word('вступим', 3),
  plural2ndPerson: Word('вступите', 3),
  plural3rdPerson: Word('вступят', 3),
  masculinePast: Word('вступил', 5),
  femininePast: Word('вступила', 5),
  neuterPast: Word('вступило', 5),
  pluralPast: Word('вступили', 5),
  imperativeInformal: Word('вступи', 5),
  imperativeFormal: Word('вступите', 5),
  imperfect: ['вступать'],
};

perfectVerbs.set(вступить.name.text, вступить);

export { вступить };