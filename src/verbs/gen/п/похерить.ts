import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const похерить: PerfectVerb = {
  name: Word('похерить', 3),
  singular1stPerson: Word('похерю', 3),
  singular2ndPerson: Word('похеришь', 3),
  singular3rdPerson: Word('похерит', 3),
  plural1stPerson: Word('похерим', 3),
  plural2ndPerson: Word('похерите', 3),
  plural3rdPerson: Word('похерят', 3),
  masculinePast: Word('похерил', 3),
  femininePast: Word('похерила', 3),
  neuterPast: Word('похерило', 3),
  pluralPast: Word('похерили', 3),
  imperativeInformal: Word('похерь', 3),
  imperativeFormal: Word('похерьте', 3),
  imperfect: [],
};

perfectVerbs.set(похерить.name.text, похерить);

export { похерить };