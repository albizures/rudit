import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const забавить: PerfectVerb = {
  name: Word('забавить', 3),
  singular1stPerson: Word('забавлю', 3),
  singular2ndPerson: Word('забавишь', 3),
  singular3rdPerson: Word('забавит', 3),
  plural1stPerson: Word('забавим', 3),
  plural2ndPerson: Word('забавите', 3),
  plural3rdPerson: Word('забавят', 3),
  masculinePast: Word('забавил', 3),
  femininePast: Word('забавила', 3),
  neuterPast: Word('забавило', 3),
  pluralPast: Word('забавили', 3),
  imperativeInformal: Word('забавь', 3),
  imperativeFormal: Word('забавьте', 3),
  imperfect: ['позабавить'],
};

perfectVerbs.set(забавить.name.text, забавить);

export { забавить };