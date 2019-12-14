import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обматерить: PerfectVerb = {
  name: Word('обматерить', 7),
  singular1stPerson: Word('обматерю', 7),
  singular2ndPerson: Word('обматеришь', 7),
  singular3rdPerson: Word('обматерит', 7),
  plural1stPerson: Word('обматерим', 7),
  plural2ndPerson: Word('обматерите', 7),
  plural3rdPerson: Word('обматерят', 7),
  masculinePast: Word('обматерил', 7),
  femininePast: Word('обматерила', 7),
  neuterPast: Word('обматерило', 7),
  pluralPast: Word('обматерили', 7),
  imperativeInformal: Word('обматери', 7),
  imperativeFormal: Word('обматерите', 7),
  imperfect: ['материть'],
};

perfectVerbs.set(обматерить.name.text, обматерить);

export { обматерить };