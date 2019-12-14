import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мерить: PerfectVerb = {
  name: Word('мерить', 1),
  singular1stPerson: Word('мерю', 1),
  singular2ndPerson: Word('меришь', 1),
  singular3rdPerson: Word('мерит', 1),
  plural1stPerson: Word('мерим', 1),
  plural2ndPerson: Word('мерите', 1),
  plural3rdPerson: Word('мерят', 1),
  masculinePast: Word('мерил', 1),
  femininePast: Word('мерила', 1),
  neuterPast: Word('мерило', 1),
  pluralPast: Word('мерили', 1),
  imperativeInformal: Word('мерь', 1),
  imperativeFormal: Word('мерьте', 1),
  imperfect: ['измерить','померить'],
};

perfectVerbs.set(мерить.name.text, мерить);

export { мерить };