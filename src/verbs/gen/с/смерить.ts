import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смерить: PerfectVerb = {
  name: Word('смерить', 2),
  singular1stPerson: Word('смерю', 2),
  singular2ndPerson: Word('смеришь', 2),
  singular3rdPerson: Word('смерит', 2),
  plural1stPerson: Word('смерим', 2),
  plural2ndPerson: Word('смерите', 2),
  plural3rdPerson: Word('смерят', 2),
  masculinePast: Word('смерил', 2),
  femininePast: Word('смерила', 2),
  neuterPast: Word('смерило', 2),
  pluralPast: Word('смерили', 2),
  imperativeInformal: Word('смерь', 2),
  imperativeFormal: Word('смерьте', 2),
  imperfect: [],
};

perfectVerbs.set(смерить.name.text, смерить);

export { смерить };