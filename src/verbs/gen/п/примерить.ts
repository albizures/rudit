import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const примерить: PerfectVerb = {
  name: Word('примерить', 4),
  singular1stPerson: Word('примерю', 4),
  singular2ndPerson: Word('примеришь', 4),
  singular3rdPerson: Word('примерит', 4),
  plural1stPerson: Word('примерим', 4),
  plural2ndPerson: Word('примерите', 4),
  plural3rdPerson: Word('примерят', 4),
  masculinePast: Word('примерил', 4),
  femininePast: Word('примерила', 4),
  neuterPast: Word('примерило', 4),
  pluralPast: Word('примерили', 4),
  imperativeInformal: Word('примерь', 4),
  imperativeFormal: Word('примерьте', 4),
  imperfect: ['примерять'],
};

perfectVerbs.set(примерить.name.text, примерить);

export { примерить };