import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поступить: PerfectVerb = {
  name: Word('поступить', 6),
  singular1stPerson: Word('поступлю', 7),
  singular2ndPerson: Word('поступишь', 4),
  singular3rdPerson: Word('поступит', 4),
  plural1stPerson: Word('поступим', 4),
  plural2ndPerson: Word('поступите', 4),
  plural3rdPerson: Word('поступят', 4),
  masculinePast: Word('поступил', 6),
  femininePast: Word('поступила', 6),
  neuterPast: Word('поступило', 6),
  pluralPast: Word('поступили', 6),
  imperativeInformal: Word('поступи', 6),
  imperativeFormal: Word('поступите', 6),
  imperfect: ['поступать'],
};

perfectVerbs.set(поступить.name.text, поступить);

export { поступить };