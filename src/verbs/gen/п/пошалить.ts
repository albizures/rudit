import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пошалить: PerfectVerb = {
  name: Word('пошалить', 5),
  singular1stPerson: Word('пошалю', 5),
  singular2ndPerson: Word('пошалишь', 5),
  singular3rdPerson: Word('пошалит', 5),
  plural1stPerson: Word('пошалим', 5),
  plural2ndPerson: Word('пошалите', 5),
  plural3rdPerson: Word('пошалят', 5),
  masculinePast: Word('пошалил', 5),
  femininePast: Word('пошалила', 5),
  neuterPast: Word('пошалило', 5),
  pluralPast: Word('пошалили', 5),
  imperativeInformal: Word('пошали', 5),
  imperativeFormal: Word('пошалите', 5),
  imperfect: [],
};

perfectVerbs.set(пошалить.name.text, пошалить);

export { пошалить };