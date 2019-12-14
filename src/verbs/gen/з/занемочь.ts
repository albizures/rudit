import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const занемочь: PerfectVerb = {
  name: Word('занемочь', 5),
  singular1stPerson: Word('занемогу', 7),
  singular2ndPerson: Word('занеможешь', 5),
  singular3rdPerson: Word('занеможет', 5),
  plural1stPerson: Word('занеможем', 5),
  plural2ndPerson: Word('занеможете', 5),
  plural3rdPerson: Word('занемогут', 5),
  masculinePast: Word('занемог', 5),
  femininePast: Word('занемогла', 8),
  neuterPast: Word('занемогло', 8),
  pluralPast: Word('занемогли', 8),
  imperativeInformal: Word('занемоги', 7),
  imperativeFormal: Word('занемогите', 7),
  imperfect: [],
};

perfectVerbs.set(занемочь.name.text, занемочь);

export { занемочь };