import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выступить: PerfectVerb = {
  name: Word('выступить', 1),
  singular1stPerson: Word('выступлю', 1),
  singular2ndPerson: Word('выступишь', 1),
  singular3rdPerson: Word('выступит', 1),
  plural1stPerson: Word('выступим', 1),
  plural2ndPerson: Word('выступите', 1),
  plural3rdPerson: Word('выступят', 1),
  masculinePast: Word('выступил', 1),
  femininePast: Word('выступила', 1),
  neuterPast: Word('выступило', 1),
  pluralPast: Word('выступили', 1),
  imperativeInformal: Word('выступи', 1),
  imperativeFormal: Word('выступите', 1),
  imperfect: ['выступать'],
};

perfectVerbs.set(выступить.name.text, выступить);

export { выступить };