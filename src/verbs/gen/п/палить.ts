import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const палить: PerfectVerb = {
  name: Word('палить', 3),
  singular1stPerson: Word('палю', 3),
  singular2ndPerson: Word('палишь', 3),
  singular3rdPerson: Word('палит', 3),
  plural1stPerson: Word('палим', 3),
  plural2ndPerson: Word('палите', 3),
  plural3rdPerson: Word('палят', 3),
  masculinePast: Word('палил', 3),
  femininePast: Word('палила', 3),
  neuterPast: Word('палило', 3),
  pluralPast: Word('палили', 3),
  imperativeInformal: Word('пали', 3),
  imperativeFormal: Word('палите', 3),
  imperfect: [],
};

perfectVerbs.set(палить.name.text, палить);

export { палить };