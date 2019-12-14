import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пожарить: PerfectVerb = {
  name: Word('пожарить', 3),
  singular1stPerson: Word('пожарю', 3),
  singular2ndPerson: Word('пожаришь', 3),
  singular3rdPerson: Word('пожарит', 3),
  plural1stPerson: Word('пожарим', 3),
  plural2ndPerson: Word('пожарите', 3),
  plural3rdPerson: Word('пожарят', 3),
  masculinePast: Word('пожарил', 3),
  femininePast: Word('пожарила', 3),
  neuterPast: Word('пожарило', 3),
  pluralPast: Word('пожарили', 3),
  imperativeInformal: Word('пожарь', 3),
  imperativeFormal: Word('пожарьте', 3),
  imperfect: [],
};

perfectVerbs.set(пожарить.name.text, пожарить);

export { пожарить };