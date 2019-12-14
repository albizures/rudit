import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помещать: PerfectVerb = {
  name: Word('помещать', 5),
  singular1stPerson: Word('помещаю', 5),
  singular2ndPerson: Word('помещаешь', 5),
  singular3rdPerson: Word('помещает', 5),
  plural1stPerson: Word('помещаем', 5),
  plural2ndPerson: Word('помещаете', 5),
  plural3rdPerson: Word('помещают', 5),
  masculinePast: Word('помещал', 5),
  femininePast: Word('помещала', 5),
  neuterPast: Word('помещало', 5),
  pluralPast: Word('помещали', 5),
  imperativeInformal: Word('помещай', 5),
  imperativeFormal: Word('помещайте', 5),
  imperfect: ['поместить'],
};

perfectVerbs.set(помещать.name.text, помещать);

export { помещать };