import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проступить: PerfectVerb = {
  name: Word('проступить', 7),
  singular1stPerson: Word('проступлю', 8),
  singular2ndPerson: Word('проступишь', 5),
  singular3rdPerson: Word('проступит', 5),
  plural1stPerson: Word('проступим', 5),
  plural2ndPerson: Word('проступите', 5),
  plural3rdPerson: Word('проступят', 5),
  masculinePast: Word('проступил', 7),
  femininePast: Word('проступила', 7),
  neuterPast: Word('проступило', 7),
  pluralPast: Word('проступили', 7),
  imperativeInformal: Word('проступи', 7),
  imperativeFormal: Word('проступите', 7),
  imperfect: [],
};

perfectVerbs.set(проступить.name.text, проступить);

export { проступить };