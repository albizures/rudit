import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помочь: PerfectVerb = {
  name: Word('помочь', 3),
  singular1stPerson: Word('помогу', 5),
  singular2ndPerson: Word('поможешь', 3),
  singular3rdPerson: Word('поможет', 3),
  plural1stPerson: Word('поможем', 3),
  plural2ndPerson: Word('поможете', 3),
  plural3rdPerson: Word('помогут', 3),
  masculinePast: Word('помог', 3),
  femininePast: Word('помогла', 6),
  neuterPast: Word('помогло', 6),
  pluralPast: Word('помогли', 6),
  imperativeInformal: Word('помоги', 5),
  imperativeFormal: Word('помогите', 5),
  imperfect: ['помогать'],
};

perfectVerbs.set(помочь.name.text, помочь);

export { помочь };