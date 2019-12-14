import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отступить: PerfectVerb = {
  name: Word('отступить', 6),
  singular1stPerson: Word('отступлю', 7),
  singular2ndPerson: Word('отступишь', 6),
  singular3rdPerson: Word('отступит', 6),
  plural1stPerson: Word('отступим', 6),
  plural2ndPerson: Word('отступите', 8),
  plural3rdPerson: Word('отступят', 0),
  masculinePast: Word('отступил', 6),
  femininePast: Word('отступила', 6),
  neuterPast: Word('отступило', 6),
  pluralPast: Word('отступили', 6),
  imperativeInformal: Word('отступи', 6),
  imperativeFormal: Word('отступите', 6),
  imperfect: ['отступать'],
};

perfectVerbs.set(отступить.name.text, отступить);

export { отступить };