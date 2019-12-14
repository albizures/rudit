import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const позабавить: PerfectVerb = {
  name: Word('позабавить', 5),
  singular1stPerson: Word('позабавлю', 5),
  singular2ndPerson: Word('позабавишь', 5),
  singular3rdPerson: Word('позабавит', 5),
  plural1stPerson: Word('позабавим', 5),
  plural2ndPerson: Word('позабавите', 5),
  plural3rdPerson: Word('позабавят', 5),
  masculinePast: Word('позабавил', 5),
  femininePast: Word('позабавила', 5),
  neuterPast: Word('позабавило', 5),
  pluralPast: Word('позабавили', 5),
  imperativeInformal: Word('позабавь', 5),
  imperativeFormal: Word('позабавьте', 5),
  imperfect: ['забавлять','забавить'],
};

perfectVerbs.set(позабавить.name.text, позабавить);

export { позабавить };