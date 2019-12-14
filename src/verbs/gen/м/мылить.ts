import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мылить: PerfectVerb = {
  name: Word('мылить', 1),
  singular1stPerson: Word('мылю', 1),
  singular2ndPerson: Word('мылишь', 1),
  singular3rdPerson: Word('мылит', 1),
  plural1stPerson: Word('мылим', 1),
  plural2ndPerson: Word('мылите', 1),
  plural3rdPerson: Word('мылят', 1),
  masculinePast: Word('мылил', 1),
  femininePast: Word('мылила', 1),
  neuterPast: Word('мылило', 1),
  pluralPast: Word('мылили', 1),
  imperativeInformal: Word('мыль', 1),
  imperativeFormal: Word('мыльте', 1),
  imperfect: [],
};

perfectVerbs.set(мылить.name.text, мылить);

export { мылить };