import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заломить: PerfectVerb = {
  name: Word('заломить', 5),
  singular1stPerson: Word('заломлю', 6),
  singular2ndPerson: Word('заломишь', 3),
  singular3rdPerson: Word('заломит', 3),
  plural1stPerson: Word('заломим', 3),
  plural2ndPerson: Word('заломите', 3),
  plural3rdPerson: Word('заломят', 3),
  masculinePast: Word('заломил', 5),
  femininePast: Word('заломила', 5),
  neuterPast: Word('заломило', 5),
  pluralPast: Word('заломили', 5),
  imperativeInformal: Word('заломи', 5),
  imperativeFormal: Word('заломите', 5),
  imperfect: ['заламывать'],
};

perfectVerbs.set(заломить.name.text, заломить);

export { заломить };