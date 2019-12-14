import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const простыть: PerfectVerb = {
  name: Word('простыть', 5),
  singular1stPerson: Word('простыну', 5),
  singular2ndPerson: Word('простынешь', 5),
  singular3rdPerson: Word('простынет', 5),
  plural1stPerson: Word('простынем', 5),
  plural2ndPerson: Word('простынете', 5),
  plural3rdPerson: Word('простынут', 5),
  masculinePast: Word('простыл', 5),
  femininePast: Word('простыла', 5),
  neuterPast: Word('простыло', 5),
  pluralPast: Word('простыли', 5),
  imperativeInformal: Word('простынь', 5),
  imperativeFormal: Word('простыньте', 5),
  imperfect: [],
};

perfectVerbs.set(простыть.name.text, простыть);

export { простыть };