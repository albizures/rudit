import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заварить: PerfectVerb = {
  name: Word('заварить', 5),
  singular1stPerson: Word('заварю', 5),
  singular2ndPerson: Word('заваришь', 3),
  singular3rdPerson: Word('заварит', 3),
  plural1stPerson: Word('заварим', 3),
  plural2ndPerson: Word('заварите', 3),
  plural3rdPerson: Word('заварят', 3),
  masculinePast: Word('заварил', 5),
  femininePast: Word('заварила', 5),
  neuterPast: Word('заварило', 5),
  pluralPast: Word('заварили', 5),
  imperativeInformal: Word('завари', 5),
  imperativeFormal: Word('заварите', 5),
  imperfect: [],
};

perfectVerbs.set(заварить.name.text, заварить);

export { заварить };