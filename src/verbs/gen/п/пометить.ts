import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пометить: PerfectVerb = {
  name: Word('пометить', 3),
  singular1stPerson: Word('помечу', 3),
  singular2ndPerson: Word('пометишь', 3),
  singular3rdPerson: Word('пометит', 3),
  plural1stPerson: Word('пометим', 3),
  plural2ndPerson: Word('пометите', 3),
  plural3rdPerson: Word('пометят', 3),
  masculinePast: Word('пометил', 3),
  femininePast: Word('пометила', 3),
  neuterPast: Word('пометило', 3),
  pluralPast: Word('пометили', 3),
  imperativeInformal: Word('пометь', 3),
  imperativeFormal: Word('пометьте', 3),
  imperfect: ['помечать'],
};

perfectVerbs.set(пометить.name.text, пометить);

export { пометить };