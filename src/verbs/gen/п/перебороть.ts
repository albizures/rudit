import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перебороть: PerfectVerb = {
  name: Word('перебороть', 7),
  singular1stPerson: Word('переборю', 7),
  singular2ndPerson: Word('переборешь', 5),
  singular3rdPerson: Word('переборет', 5),
  plural1stPerson: Word('переборем', 5),
  plural2ndPerson: Word('переборете', 5),
  plural3rdPerson: Word('переборют', 5),
  masculinePast: Word('переборол', 7),
  femininePast: Word('переборола', 7),
  neuterPast: Word('перебороло', 7),
  pluralPast: Word('перебороли', 7),
  imperativeInformal: Word('перебори', 7),
  imperativeFormal: Word('переборите', 7),
  imperfect: [],
};

perfectVerbs.set(перебороть.name.text, перебороть);

export { перебороть };