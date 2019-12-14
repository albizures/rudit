import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заверещать: PerfectVerb = {
  name: Word('заверещать', 7),
  singular1stPerson: Word('заверещу', 7),
  singular2ndPerson: Word('заверещишь', 7),
  singular3rdPerson: Word('заверещит', 7),
  plural1stPerson: Word('заверещим', 7),
  plural2ndPerson: Word('заверещите', 7),
  plural3rdPerson: Word('заверещат', 7),
  masculinePast: Word('заверещал', 7),
  femininePast: Word('заверещала', 7),
  neuterPast: Word('заверещало', 7),
  pluralPast: Word('заверещали', 7),
  imperativeInformal: Word('заверещи', 7),
  imperativeFormal: Word('заверещите', 7),
  imperfect: [],
};

perfectVerbs.set(заверещать.name.text, заверещать);

export { заверещать };