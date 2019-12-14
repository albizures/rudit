import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пошарить: PerfectVerb = {
  name: Word('пошарить', 3),
  singular1stPerson: Word('пошарю', 3),
  singular2ndPerson: Word('пошаришь', 3),
  singular3rdPerson: Word('пошарит', 3),
  plural1stPerson: Word('пошарим', 3),
  plural2ndPerson: Word('пошарите', 3),
  plural3rdPerson: Word('пошарят', 3),
  masculinePast: Word('пошарил', 3),
  femininePast: Word('пошарила', 3),
  neuterPast: Word('пошарило', 3),
  pluralPast: Word('пошарили', 3),
  imperativeInformal: Word('пошарь', 3),
  imperativeFormal: Word('пошарьте', 3),
  imperfect: [],
};

perfectVerbs.set(пошарить.name.text, пошарить);

export { пошарить };