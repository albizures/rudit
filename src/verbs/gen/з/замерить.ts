import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замерить: PerfectVerb = {
  name: Word('замерить', 3),
  singular1stPerson: Word('замерю', 3),
  singular2ndPerson: Word('замеришь', 3),
  singular3rdPerson: Word('замерит', 3),
  plural1stPerson: Word('замерим', 3),
  plural2ndPerson: Word('замерите', 3),
  plural3rdPerson: Word('замерят', 3),
  masculinePast: Word('замерил', 3),
  femininePast: Word('замерила', 3),
  neuterPast: Word('замерило', 3),
  pluralPast: Word('замерили', 3),
  imperativeInformal: Word('замерь', 3),
  imperativeFormal: Word('замерьте', 3),
  imperfect: [],
};

perfectVerbs.set(замерить.name.text, замерить);

export { замерить };