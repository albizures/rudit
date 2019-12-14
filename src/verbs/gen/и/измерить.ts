import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const измерить: PerfectVerb = {
  name: Word('измерить', 3),
  singular1stPerson: Word('измерю', 3),
  singular2ndPerson: Word('измеришь', 3),
  singular3rdPerson: Word('измерит', 3),
  plural1stPerson: Word('измерим', 3),
  plural2ndPerson: Word('измерите', 3),
  plural3rdPerson: Word('измерят', 3),
  masculinePast: Word('измерил', 3),
  femininePast: Word('измерила', 3),
  neuterPast: Word('измерило', 3),
  pluralPast: Word('измерили', 3),
  imperativeInformal: Word('измерь', 3),
  imperativeFormal: Word('измерьте', 3),
  imperfect: ['измерять'],
};

perfectVerbs.set(измерить.name.text, измерить);

export { измерить };