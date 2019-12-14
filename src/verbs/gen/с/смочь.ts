import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смочь: PerfectVerb = {
  name: Word('смочь', 2),
  singular1stPerson: Word('смогу', 4),
  singular2ndPerson: Word('сможешь', 2),
  singular3rdPerson: Word('сможет', 2),
  plural1stPerson: Word('сможем', 2),
  plural2ndPerson: Word('сможете', 2),
  plural3rdPerson: Word('смогут', 2),
  masculinePast: Word('смог', 2),
  femininePast: Word('смогла', 5),
  neuterPast: Word('смогло', 5),
  pluralPast: Word('смогли', 5),
  imperativeInformal: Word('смоги', 4),
  imperativeFormal: Word('смогите', 4),
  imperfect: ['мочь'],
};

perfectVerbs.set(смочь.name.text, смочь);

export { смочь };