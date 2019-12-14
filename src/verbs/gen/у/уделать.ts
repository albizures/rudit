import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уделать: PerfectVerb = {
  name: Word('уделать', 2),
  singular1stPerson: Word('уделаю', 2),
  singular2ndPerson: Word('уделаешь', 2),
  singular3rdPerson: Word('уделает', 2),
  plural1stPerson: Word('уделаем', 2),
  plural2ndPerson: Word('уделаете', 2),
  plural3rdPerson: Word('уделают', 2),
  masculinePast: Word('уделал', 2),
  femininePast: Word('уделала', 2),
  neuterPast: Word('уделало', 2),
  pluralPast: Word('уделали', 2),
  imperativeInformal: Word('уделай', 2),
  imperativeFormal: Word('уделайте', 2),
  imperfect: [],
};

perfectVerbs.set(уделать.name.text, уделать);

export { уделать };