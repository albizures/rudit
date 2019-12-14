import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const позлить: PerfectVerb = {
  name: Word('позлить', 4),
  singular1stPerson: Word('позлю', 4),
  singular2ndPerson: Word('позлишь', 4),
  singular3rdPerson: Word('позлит', 4),
  plural1stPerson: Word('позлим', 4),
  plural2ndPerson: Word('позлите', 4),
  plural3rdPerson: Word('позлят', 4),
  masculinePast: Word('позлил', 4),
  femininePast: Word('позлила', 4),
  neuterPast: Word('позлило', 4),
  pluralPast: Word('позлили', 4),
  imperativeInformal: Word('позли', 4),
  imperativeFormal: Word('позлите', 4),
  imperfect: ['злить'],
};

perfectVerbs.set(позлить.name.text, позлить);

export { позлить };