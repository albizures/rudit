import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отмерить: PerfectVerb = {
  name: Word('отмерить', 3),
  singular1stPerson: Word('отмерю', 3),
  singular2ndPerson: Word('отмеришь', 3),
  singular3rdPerson: Word('отмерит', 3),
  plural1stPerson: Word('отмерим', 3),
  plural2ndPerson: Word('отмерите', 3),
  plural3rdPerson: Word('отмерят', 3),
  masculinePast: Word('отмерил', 3),
  femininePast: Word('отмерила', 3),
  neuterPast: Word('отмерило', 3),
  pluralPast: Word('отмерили', 3),
  imperativeInformal: Word('отмерь', 3),
  imperativeFormal: Word('отмерьте', 3),
  imperfect: [],
};

perfectVerbs.set(отмерить.name.text, отмерить);

export { отмерить };