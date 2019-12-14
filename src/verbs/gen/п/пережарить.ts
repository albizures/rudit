import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пережарить: PerfectVerb = {
  name: Word('пережарить', 5),
  singular1stPerson: Word('пережарю', 5),
  singular2ndPerson: Word('пережаришь', 5),
  singular3rdPerson: Word('пережарит', 5),
  plural1stPerson: Word('пережарим', 5),
  plural2ndPerson: Word('пережарите', 5),
  plural3rdPerson: Word('пережарят', 5),
  masculinePast: Word('пережарил', 5),
  femininePast: Word('пережарила', 5),
  neuterPast: Word('пережарило', 5),
  pluralPast: Word('пережарили', 5),
  imperativeInformal: Word('пережарь', 5),
  imperativeFormal: Word('пережарьте', 5),
  imperfect: [],
};

perfectVerbs.set(пережарить.name.text, пережарить);

export { пережарить };