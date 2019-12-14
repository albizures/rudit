import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const включить: PerfectVerb = {
  name: Word('включить', 5),
  singular1stPerson: Word('включу', 5),
  singular2ndPerson: Word('включишь', 5),
  singular3rdPerson: Word('включит', 5),
  plural1stPerson: Word('включим', 5),
  plural2ndPerson: Word('включите', 5),
  plural3rdPerson: Word('включат', 5),
  masculinePast: Word('включил', 5),
  femininePast: Word('включила', 5),
  neuterPast: Word('включило', 5),
  pluralPast: Word('включили', 5),
  imperativeInformal: Word('включи', 5),
  imperativeFormal: Word('включите', 5),
  imperfect: ['включать'],
};

perfectVerbs.set(включить.name.text, включить);

export { включить };