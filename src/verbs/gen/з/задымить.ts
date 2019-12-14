import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задымить: PerfectVerb = {
  name: Word('задымить', 5),
  singular1stPerson: Word('задымлю', 6),
  singular2ndPerson: Word('задымишь', 5),
  singular3rdPerson: Word('задымит', 5),
  plural1stPerson: Word('задымим', 5),
  plural2ndPerson: Word('задымите', 5),
  plural3rdPerson: Word('задымят', 5),
  masculinePast: Word('задымил', 5),
  femininePast: Word('задымила', 5),
  neuterPast: Word('задымило', 5),
  pluralPast: Word('задымили', 5),
  imperativeInformal: Word('задыми', 5),
  imperativeFormal: Word('задымите', 5),
  imperfect: [],
};

perfectVerbs.set(задымить.name.text, задымить);

export { задымить };