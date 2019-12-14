import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выжить: PerfectVerb = {
  name: Word('выжить', 1),
  singular1stPerson: Word('выживу', 1),
  singular2ndPerson: Word('выживешь', 1),
  singular3rdPerson: Word('выживет', 1),
  plural1stPerson: Word('выживем', 1),
  plural2ndPerson: Word('выживете', 1),
  plural3rdPerson: Word('выживут', 1),
  masculinePast: Word('выжил', 1),
  femininePast: Word('выжила', 1),
  neuterPast: Word('выжило', 1),
  pluralPast: Word('выжили', 1),
  imperativeInformal: Word('выживи', 1),
  imperativeFormal: Word('выживите', 1),
  imperfect: [],
};

perfectVerbs.set(выжить.name.text, выжить);

export { выжить };