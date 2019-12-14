import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мочь: PerfectVerb = {
  name: Word('мочь', 1),
  singular1stPerson: Word('могу', 3),
  singular2ndPerson: Word('можешь', 1),
  singular3rdPerson: Word('может', 1),
  plural1stPerson: Word('можем', 1),
  plural2ndPerson: Word('можете', 1),
  plural3rdPerson: Word('могут', 1),
  masculinePast: Word('мог', 1),
  femininePast: Word('могла', 4),
  neuterPast: Word('могло', 4),
  pluralPast: Word('могли', 4),
  imperativeInformal: Word('моги', 3),
  imperativeFormal: Word('могите', 3),
  imperfect: [],
};

perfectVerbs.set(мочь.name.text, мочь);

export { мочь };