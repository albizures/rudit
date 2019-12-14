import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const чертить: PerfectVerb = {
  name: Word('чертить', 4),
  singular1stPerson: Word('черчу', 4),
  singular2ndPerson: Word('чертишь', 1),
  singular3rdPerson: Word('чертит', 1),
  plural1stPerson: Word('чертим', 1),
  plural2ndPerson: Word('чертите', 1),
  plural3rdPerson: Word('чертят', 1),
  masculinePast: Word('чертил', 4),
  femininePast: Word('чертила', 4),
  neuterPast: Word('чертило', 4),
  pluralPast: Word('чертили', 4),
  imperativeInformal: Word('черти', 4),
  imperativeFormal: Word('чертите', 4),
  imperfect: [],
};

perfectVerbs.set(чертить.name.text, чертить);

export { чертить };